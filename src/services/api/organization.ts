import { IBaseResult } from "@services/interfaces/base";
import { IOgranization } from "@services/interfaces/organization";
import { Fetch } from "@tools/fetch";

export const GET_ORGRANIZATION = async () => {
  const res = await Fetch<IBaseResult<IOgranization[]>>({
    method: "GET",
    path: "/organization",
  });

  return res;
};
