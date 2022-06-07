const ProductImage = (props) => {
  return (
    <div className="product-image image-cover-clrs">
      <img src={props.link} alt={props.title} />
    </div>
  );
};

export default ProductImage;
