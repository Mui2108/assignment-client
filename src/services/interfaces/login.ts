export interface ILogin {
  username: string;
  password: string;
}

export interface IResultLogin {
  code: number;
  accessToken?: string;
  userInfo?: IResultLogin;
  message?: string;
}

export interface IUserInfo {
  id: number;
  name: string;
  prefix: string;
  position: string;
  part: string;
  profile: string;
  username: string;
}
