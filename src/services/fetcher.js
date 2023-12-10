import axios from "axios";

const apiUrl = "/utils/data";

export const getProducts = () => {
  const res = axios(apiUrl);
  return res;
};
