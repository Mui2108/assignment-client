import { IBaseResult, IFetchConfig } from "@services/interfaces/base";
export const apiURL = process.env.REACT_APP_API_URL;

export const Fetch = async <T = unknown>({
  baseurl = apiURL,
  ...config
}: IFetchConfig) => {
  const url = `${baseurl}${config.path}`;
  const token = localStorage.getItem("token");
  const res = await fetch(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    method: config.method,
    body:
      config.method === "PATCH" || config.method === "POST"
        ? JSON.stringify(config.data)
        : null,
  });

  const dataResponse = await res.json();
  return dataResponse as T;
};
