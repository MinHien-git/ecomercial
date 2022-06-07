export const cartActionType = {
  login: "auth/login",
};

const login = (payload) => ({
  type: cartActionType.login,
  payload,
});

const actionType = {
  login,
};

export default actionType;
