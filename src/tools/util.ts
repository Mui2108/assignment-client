export const _isEmpty = (data: any = {}) => {
  const queryDefault =
    data === null || data === "undefined" || data === undefined || data === "";
  if (queryDefault) return true;
  if (typeof data === "number") return false;
  if (typeof data === "string") return false;
  const obj = queryDefault ? [] : data;
  return Object.entries(obj).length === 0;
};
