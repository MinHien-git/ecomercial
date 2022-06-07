import axiosClient from "./axiosClient";

const productApi = {
  getAll: (params) => {
    const url = "/product";
    return axiosClient.get(url, { params });
  },
  get: (id) => {
    const url = `/product/${id}`;
    console.log(url);
    return axiosClient.get(url);
  },
};

export default productApi;
