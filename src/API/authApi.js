import axiosClient from "./axiosClient";

const authApi = {
  login: (params) => {
    const url = "/auth/login";
    return axiosClient.get(url);
  },
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
