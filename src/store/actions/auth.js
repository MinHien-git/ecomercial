export const authenActionType = {
  register: "auth/register",
  login: "auth/login",
  logout: "auth/logout",
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
};

export default actionType;
