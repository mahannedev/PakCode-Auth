# API Communication Structure Explanation

In this project, we utilize two main layers for API communication:

1. **Axios Instance and Basic Functions (AxiosGet and AxiosPost)**
2. **React Query (ReactQueryGet and ReactQueryPost) for UI Data Management**

---

## 1. Axios Instance and Basic Functions

- A customized **axiosInstance** is created that holds all base configurations such as `baseURL`, common headers (e.g., `x-api-key`), and cookie management.
- This instance includes **interceptors** for automatic error handling, especially **token refresh** when receiving a 401 (Unauthorized) response.
- The `AxiosGet` and `AxiosPost` functions act as a simple, standardized layer on top of axios for making GET and POST requests.
- These functions receive API responses in the standardized `TBaseResponse` format, handle errors, and log them in development mode.
- Using these functions reduces **code duplication** and ensures that all requests follow a consistent structure and policy.

---

## 2. React Query for UI Data Management

- To display data and manage loading states, errors, and result caching, we use the **React Query** library.
- The `ReactQueryGet` and `ReactQueryPost` functions utilize `useQuery` and `useMutation` hooks respectively, acting as a higher-level abstraction over `AxiosGet` and `AxiosPost`.
- These functions:
  - Cache data to avoid unnecessary requests.
  - Automatically refetch data when needed.
  - Manage loading, error, and success states easily.
- The `getQueryClient` function provides a **singleton** instance to manage React Query's cache and settings properly on both server and client sides.

---

## Summary and Why We Use Axios and React Query Together

| Usage Level           | Tools Used              | Reason                                            |
|-----------------------|-------------------------|---------------------------------------------------|
| Direct API Communication | axiosInstance + AxiosGet/Post | Fine-grained request control, token management, interceptors |
| UI Data Management       | ReactQueryGet/Post     | Automatic caching, loading/error state management, automatic data refetch |

---

### Additional Notes

- Simple or special requests (like token refresh in interceptors) are made directly with axios.
- Requests required in React components for displaying data use React Query for better user experience and cleaner code.

---

If you have any questions or want further explanation, feel free to ask!
