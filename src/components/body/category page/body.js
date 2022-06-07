import "./body.css";
import Category from "./categories";
import ProductContainer from "./products";

const CategoryBody = () => {
  return (
    <>
      <main className="primary-body center grid">
        <Category />
        <ProductContainer />
      </main>
    </>
  );
};

export default CategoryBody;
