import { postRequest } from "./apiService";

export const submitOptions = async (payload) => {
  const url = "https://dummyjson.com/products/add";
  return await postRequest(url, payload);
};
