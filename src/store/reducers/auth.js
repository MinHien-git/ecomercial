import { actionType } from "../actions/auth";

const productAuth = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionType.login:
      return {};
    default:
      return state;
  }
};

export default productAuth;
