import { createSelector } from "reselect";

const setAuth = (state) => state.cart;

const auth = createSelector(setAuth, (cart) => auth.auth);

const authSelector = {
  auth,
};

export default authSelector;
