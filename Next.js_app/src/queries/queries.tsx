import { FetchUsers, LoginUser } from "@/services/common";
import { QueryOptions, queryOptions } from "@tanstack/react-query";

type LoginUserReturnType = Awaited<ReturnType<typeof LoginUser>>; // if return type is unknown

export function SampleQueryFetch(): QueryOptions<LoginUserReturnType> {
  return queryOptions({
    queryKey: ["sample_query_key"],
    queryFn: LoginUser,
  });
}

export function SampleExportedTypesUsed() {
  return queryOptions({
    queryKey: ["exported_type"],
    queryFn: FetchUsers,
  });
}
