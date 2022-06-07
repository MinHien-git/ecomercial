import { createSelector } from "reselect";

const cartProduct = (state) => state.cart;

const auth = createSelector(cartProduct, (cart) => cart.cart);

const authSelector = {
  auth,
};

export default authSelector;
