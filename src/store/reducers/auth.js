import { authenActionType } from "../actions/auth";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const authReducer = (state = { auth: {} }, action) => {
  switch (action.type) {
    case authenActionType.login:
      const newState = {
        ...state,
        auth: {
          account: action.payload.user,
          isLogined: true,
          isLoading: false,
        },
      };

      return {
        ...newState,
      };
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
