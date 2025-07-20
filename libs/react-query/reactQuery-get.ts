import { useQuery } from "@tanstack/react-query";
import AxiosGet from "../axios/axios-get";

type ReactQueryGetProps = {
  url: string;
  queryKey: unknown[];
  params?: Record<string, unknown>;
};

export function ReactQueryGet({ url, params, queryKey }: ReactQueryGetProps) {
  const query = useQuery({
    queryKey,
    queryFn: async () => await AxiosGet({ url, params }),
  });

  return {
    data: query.data,
    isPending: query.isPending,
    error: query.error,
  };
}
