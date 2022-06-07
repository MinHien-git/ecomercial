import ProductCard from "../../product-card";
import SecondaryText from "../../secondary-text";
import Title from "../../section-title";

const RelatedProduct = (props) => {
  const { product, id } = props.product;

  const category = product.filter((item) => item.id === id.id)[0].category;
  const filtered = [
    ...product.filter(
      (item) => item.id !== id.id && item.category === category
    ),
  ];

  return (
    <section className="grid">
      <SecondaryText text="Explore more" center={true} />
      <Title title="Related Products" center={true} />
      {filtered.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}

      <div className="flex center button-align">
        <button className="btn left-right-nav image-cover-clrs font-clrs">
          &#60;
        </button>
        <button className="btn left-right-nav image-cover-clrs font-clrs">
          &#62;
        </button>
      </div>
    </section>
  );
};

export default RelatedProduct;
