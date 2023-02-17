import { IBaseResult } from "@services/interfaces/base";
import { ITemperature, ITimeline } from "@services/interfaces/timeline";

import { Fetch } from "@tools/fetch";

export const GET_TIMELINE = async () => {
  const res = await Fetch<IBaseResult<ITimeline[]>>({
    method: "GET",
    path: "/timeline",
  });
  return res;
};

export const GET_TEMPERATURE = async () => {
  const res = await Fetch<IBaseResult<ITemperature>>({
    method: "GET",
    path: "/temperature-tody",
  });
  return res;
};
