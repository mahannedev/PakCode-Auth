import type { AxiosError, AxiosResponse } from "axios";
import type { TBaseResponse } from "@/types/response";
import { axiosInstance } from ".";

type AxiosGetProps = {
  url: string;
  params?: Record<string, unknown>;
};

export default async function AxiosGet<TOutput = unknown>({
  url,
  params,
}: AxiosGetProps): Promise<TBaseResponse<TOutput>> {
  try {
    const response: AxiosResponse<TBaseResponse<TOutput>> =
      await axiosInstance.get(url, {
        params,
      });
    return response.data;
  } catch (error) {
    const err = error as AxiosError<TBaseResponse<TOutput>>;
    if (process.env.NODE_ENV === "development") {
      console.error("AxiosGet Error:", err.response || err.message);
    }
    throw err;
  }
}
