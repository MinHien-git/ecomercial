import productApi from "../../API/productApi";

export const actionType = {
  FetchProduct: "product/fetchProducts",
  FetchProductAsync: "product/fetchProductsAsync",
};

const fetchProduct = (payload) => ({
  type: actionType.FetchProduct,
  payload,
});

const fetchProductAsync = (id) => async (dispatch) => {
  if (!id) {
    const { products } = await productApi.getAll();
    dispatch(fetchProduct(products));
  } else {
    console.log(id);
    const { product } = await productApi.get(id);
    dispatch(fetchProduct(product));
  }
};

const productAction = {
  fetchProduct,
  fetchProductAsync,
};

export default productAction;
