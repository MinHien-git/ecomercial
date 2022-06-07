import axiosClient from "./axiosClient";

const authApi = {
  register: (params) => {
    const url = "/auth/register";
    return axiosClient.get(url, { params });
  },
  logout: (id) => {
    const url = `/auth/logout`;
    return axiosClient.get(url);
  },
  refreshToken: (id) => {
    const url = `/auth/refreshToken`;
    return axiosClient.get(url);
  },
};

export default authApi;
