export const sanatizeSearchParams = (param: string | undefined | string[]) => {
  if (Array.isArray(param)) {
    return param[0];
  }
  return param;
};
