import CommonApi from "@/interceptors/axios";
import { FetchUsersRequest, FetchUsersResponse } from "@/types/types";

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  message: string;
  token: string;
}

export const LoginUser = async (data: LoginRequest): Promise<LoginResponse> => {
  const res = await CommonApi.post("/login", data);
  return res.data;
};

export const FetchUsers = async (
  data: FetchUsersRequest
): Promise<FetchUsersResponse> => {
  const res = await CommonApi.post("getUsers", data);
  return res.data;
};
