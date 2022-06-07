import { actionType } from "../actions/product";

const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionType.FetchProduct:
      const newState = { ...state };
      newState.products = action.payload;
      return newState;
    default:
      return state;
  }
};

export default productReducer;
