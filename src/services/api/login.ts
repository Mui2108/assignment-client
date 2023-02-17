import { ILogin, IResultLogin } from "@services/interfaces/login";
import { Fetch } from "@tools/fetch";

export const LOGIN = async (value: ILogin) => {
  const res = await Fetch<IResultLogin>({
    method: "POST",
    path: "/login",
    data: value,
  });

  return res;
};
