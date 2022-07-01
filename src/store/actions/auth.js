import authService from "../../API/authApi";

export const authenActionType = {
  register: "auth/register",
  login: "auth/login",
  logout: "auth/logout",
};

const userLoginFetch = (user) => async (dispatch) => {
  const data = await authService.login(user);
  console.log(data);
  localStorage.setItem("token", data.jwt);
  dispatch(login(data));
};

const register = (payload) => ({
  type: authenActionType.login,
  payload,
});

const login = (payload) => ({
  type: authenActionType.login,
  payload,
});

const logout = (payload) => ({
  type: authenActionType.login,
  payload,
});

const actionType = {
  register,
  login,
  logout,
  userLoginFetch,
};

export default actionType;
