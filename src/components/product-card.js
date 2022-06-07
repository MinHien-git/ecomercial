import { Link } from "react-router-dom";
import numberWithCommas from "./display";
import ProductImage from "./product-image";

const ProductCard = (props) => {
  const { price, name, img, category, newest, id } = props.product;
  return (
    <Link className="re product-card grid" to={`/product/${id}`}>
      {newest ? (
        <span className="secondary-tag primary-bg font-clrs">Newest</span>
      ) : (
        <span className="secondary-tag red-clrs font-clrs">
          {Math.floor(100 - (price.actual / price.old) * 100)}% OFF
        </span>
      )}
      <ProductImage link={img} />
      <h3 className="fs-400 font-clrs">{name}</h3>
      <div className="flex product-card-info ">
        <a className="tag yellow-tag" href="#product/id">
          <h4 className="fs-300 bold">{category}</h4>
        </a>
        <div className="flex product-card-info-pricetag fs-300 font-clrs">
          {price.old && `${numberWithCommas(price.actual)}`.length < 10 ? (
            <p className="old-price fs-200 font-clrs">
              {numberWithCommas(price.old)}
            </p>
          ) : null}
          <p className="fs-300 font-clrs">{numberWithCommas(price.actual)}₫</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
