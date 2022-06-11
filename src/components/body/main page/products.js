import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import productSelector from "../../../store/selectors/productSelector";
import ProductCard from "../../product-card";
import SecondaryText from "../../secondary-text";
import Title from "../../section-title";

const ListProducts = () => {
  const products = useSelector(productSelector.selectProducts);
  return (
    <section className="grid re">
      <SecondaryText text="Our Products" center={true} />
      <Title title="Explore our Products" center={true} />
      <div className="grid products-list">
        {products.slice(0, 8).map((item) => (
          <ProductCard product={item} key={item.id} />
        ))}
      </div>
      <div className="flex center button-align">
        <button className="btn left-right-nav image-cover-clrs font-clrs">
          &#60;
        </button>
        <button className="btn left-right-nav image-cover-clrs font-clrs">
          &#62;
        </button>
      </div>
      <button className="btn primary-bg fs-300 priamry-btn center">
        <Link className="font-clrs" to="/product">
          <strong>View All</strong>
        </Link>
      </button>
    </section>
  );
};

export default ListProducts;
