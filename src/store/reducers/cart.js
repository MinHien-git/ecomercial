import { cartActionType } from "../actions/cart";

const cartReducer = (state = { cart: [] }, action) => {
  switch (action.type) {
    case cartActionType.addProduct: {
      const { id, amount } = action.payload;
      let item = state.cart.find((item) => item.id === id);
      if (item) {
        item.amount += amount;
        return {
          ...state,
          cart: [...state.cart.filter((item) => item !== id), ...item],
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }
    }
    case cartActionType.editProduct: {
      const { id, amount } = action.payload;
      const newState = {
        ...state,
      };
      newState.cart.find((item) => item.id === id).amount = amount;

      return { ...newState };
    }
    case cartActionType.removeProduct: {
      const { id } = action.payload;
      const newState = {
        ...state,
        cart: [...state.cart.filter((item) => item.id !== id)],
      };

      return { ...newState };
    }

    case cartActionType.clearProduct: {
      return {
        ...state,
        cart: [],
      };
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
