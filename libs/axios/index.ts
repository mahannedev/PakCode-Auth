import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";

interface TBaseResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
}

/**
 * Centralized Axios instance for HTTP requests.
 * Configures baseURL, headers, and credentials for all API calls.
 * Includes interceptors for request/response handling and token refresh.
 */
const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.mysite.com",
  headers: {
    "Content-Type": "application/json", // Default to JSON for most API requests
    "x-api-key": process.env.API_KEY || "", // Secure API key from environment
  },
  withCredentials: true, // Include cookies (e.g., JWT) in requests
});

/**
 * Request interceptor: Dynamically adjust headers based on request needs.
 * For example, switch to multipart/form-data for file uploads.
 */
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Dynamically set Content-Type for file uploads if needed
    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

/**
 * Response interceptor: Handle responses and errors.
 * - Validates response structure and handles success/failure.
 * - Automatically refreshes token on 401 Unauthorized errors.
 */
axiosInstance.interceptors.response.use(
  (response: AxiosResponse<TBaseResponse<unknown>>) => {
    // Validate standard response structure
    if (response.data?.success) return response;
    return Promise.reject({
      message: response.data?.message || "Request failed",
      ...response.data,
    });
  },
  async (error: AxiosError<TBaseResponse<unknown>>) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    // Handle 401 Unauthorized: Attempt token refresh
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const res = await axios.post<TBaseResponse<{ access_token: string }>>(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/user-refresh-token`,
          {},
          {
            headers: {
              "x-api-key": process.env.API_KEY || "",
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );

        const newAccessToken = res.data?.data?.access_token;
        if (!newAccessToken) throw new Error("No access token returned");

        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    // Handle other errors with structured response
    return Promise.reject({
      message: error.response?.data?.message || error.message,
      status: error.response?.status,
      ...error.response?.data,
    });
  }
);

export { axiosInstance };
export type { TBaseResponse };
