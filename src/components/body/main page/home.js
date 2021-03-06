import { Link } from "react-router-dom";
import ProductImage from "../../product-image";
import SecondaryText from "../../secondary-text";
import Title from "../../section-title";

const Home = () => {
  return (
    <section className="grid" id="home-section">
      <SecondaryText text="Skincare Products" />
      <Title title="We Offer the Best Products for your Skin" />
      <button className="btn primary-bg fs-300 priamry-btn">
        <Link to="/product" className="font-clrs">
          <strong>Shop Now</strong>
        </Link>
      </button>
      <ProductImage />
    </section>
  );
};

export default Home;
