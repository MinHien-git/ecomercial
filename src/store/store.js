import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import cartReducer from "./reducers/cart";
import productReducer from "./reducers/product";
import { persistStore } from "redux-persist";
import authReducer from "./reducers/auth";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  auth: authReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
export default store;
