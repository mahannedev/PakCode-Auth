import type { AxiosError, AxiosResponse } from "axios";
import type { TBaseResponse } from "@/types/response";
import { axiosInstance } from ".";

type AxiosPostProps<T> = {
  url: string;
  data?: T;
};

export default async function AxiosPost<TInput = unknown, TOutput = unknown>({
  url,
  data,
}: AxiosPostProps<TInput>): Promise<TBaseResponse<TOutput>> {
  try {
    const response: AxiosResponse<TBaseResponse<TOutput>> =
      await axiosInstance.post(url, data);
    return response.data;
  } catch (error) {
    const err = error as AxiosError<TBaseResponse<TOutput>>;
    if (process.env.NODE_ENV === "development") {
      console.error("AxiosPost Error:", err.response || err.message);
    }
    throw err;
  }
}
