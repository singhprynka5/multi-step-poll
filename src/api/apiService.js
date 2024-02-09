import axios from "axios";

export const postRequest = async (url, requestData) => {
  try {
    const response = await axios.post(url, requestData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
