import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useScrollToTop from "../../../hooks/useScrollToTop";
import productAction from "../../../store/actions/product";
import productSelector from "../../../store/selectors/productSelector";
import SignUpForm from "../../sign-up-form";
import "./body.css";
import Feature from "./feature";
import ProductInfo from "./product-info";
import RelatedProduct from "./related-product";
import Review from "./reviews";
const ProductBody = () => {
  useScrollToTop();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("run");
    dispatch(productAction.fetchProductAsync());
  }, [dispatch]);
  const products = useSelector(productSelector.selectProducts);
  const id = useParams();
  const product = { ...products.find((element) => element.id === id.id) };

  return (
    <>
      <main className="primary-body center grid">
        <ProductInfo product={product} />
        <Feature desc={product.desc} />
        <Review />
        <RelatedProduct product={{ product: [...products], id: id }} />
        <SignUpForm />
      </main>
    </>
  );
};
export default ProductBody;
