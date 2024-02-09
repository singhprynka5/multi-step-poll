import { ADD_OPTIONS_DATA } from "../constants";

export const submitOptionsData = (payload) => {
  return { type: ADD_OPTIONS_DATA, payload: payload };
};
