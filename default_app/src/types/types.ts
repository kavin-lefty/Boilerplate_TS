export interface FetchUsersRequest {
  page: string;
}

export interface FetchUsersResponse {
  _id: string;
  name: string;
  email: string;
  password: string;
}
