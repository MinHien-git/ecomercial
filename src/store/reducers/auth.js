import { authenActionType } from "../actions/auth";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  account: {},
  isLogined: false,
  isLoading: false,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authenActionType.login:
      return state;
    default:
      return state;
  }
};

const persistConfig = {
  keyPrefix: "c2Shop",
  key: "Auth",
  storage,
};

export default persistReducer(persistConfig, authReducer);
