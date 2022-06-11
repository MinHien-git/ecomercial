import SecondaryText from "../../secondary-text";
import Title from "../../section-title";
import Heart from "../../../asset/icons8-heart-50.png";
import FillHeart from "../../../asset/icons8-heart-filled-50 .png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import cartAction from "../../../store/actions/cart";
import numberWithCommas from "../../display";

const ProductInfo = (props) => {
  const [isFav, setFav] = useState(false);
  const [amount, setAmount] = useState(1);

  const { price, name, img, category, id } = props.product;
  const dispatch = useDispatch();

  const amountController = (param) => {
    if (param === "-" && amount > 1) {
      setAmount(amount - 1);
    }
    if (param === "+") {
      setAmount(amount + 1);
    }
  };

  const addItemToCart = () => {
    dispatch(
      cartAction.addProduct({
        id: id,
        img: img,
        name: name,
        amount: amount,
        price: price,
      })
    );
  };
  return (
    <section className="grid">
      <div id="img-section" className="flex">
        <div className="img-sm">
          <div className="image image-cover-clrs"></div>
          <div className="image image-cover-clrs"></div>
          <div className="image image-cover-clrs"></div>
        </div>
        <img
          id="main-image"
          src={img}
          className="center displayed-image image-cover-clrs"
          alt="current show product"
        />
      </div>
      <div className="flex center button-align">
        <button className="btn left-right-nav image-cover-clrs font-clrs">
          &#60;
        </button>
        <button className="btn left-right-nav image-cover-clrs font-clrs">
          &#62;
        </button>
      </div>
      <SecondaryText text="Selling Fast" center={true} />
      <h2 className="font-clrs fs-700 text-center">{name}</h2>
      <div className="flex product-card-info center">
        <a className="tag yellow-tag" href="#product/id">
          <h4 className="fs-300 bold">{category}</h4>
        </a>
        <div className="flex product-card-info-pricetag fs-300">
          {price.old ? (
            <p className="old-price fs-300 font-clrs">
              {numberWithCommas(price.old)}
            </p>
          ) : null}
          <p className="fs-400">{numberWithCommas(price.actual)}₫</p>
        </div>
      </div>
      <p className="center fs-300">
        <span className="low-opacity">SKU : </span>123456789
      </p>
      <div className="flex center" id="product-navigation">
        <div className="amount-btn flex background-clrs center">
          <button
            className="btn font-clrs image-cover-clrs"
            onClick={() => amountController("-")}
          >
            -
          </button>
          <p>{amount}</p>
          <button
            className="btn font-clrs image-cover-clrs"
            onClick={() => amountController("+")}
          >
            +
          </button>
        </div>
        <div className="flex center">
          <button
            className="btn primary-bg fs-300 priamry-btn"
            onClick={addItemToCart}
          >
            <strong>Add to Cart</strong>
          </button>
          <button
            className="btn left-right-nav image-cover-clrs img-btn"
            onClick={() => setFav(!isFav)}
          >
            <img src={isFav ? FillHeart : Heart} alt="fav" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
