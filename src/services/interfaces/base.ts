import { IUserInfo } from "./login";

export interface IBaseResult<T = unknown> {
  code: number;
  result: T;
}

export interface IFetchConfig {
  method: "POST" | "GET" | "PATCH";
  path: string;
  data?: object | null;
  token?: string;
  baseurl?: string;
  formData?: FormData;
}
