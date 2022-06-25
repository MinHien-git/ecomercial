import { useState } from "react";
import { useDispatch } from "react-redux";
import cartAction from "../../../store/actions/cart";

import numberWithCommas from "../../display";

const CartCard = (props) => {
  const { id, img, name, amount, price } = props.product;
  const dispatch = useDispatch();

  const clearProduct = () => {
    dispatch(cartAction.removeProduct({ id: id }));
  };

  return (
    <div className="cart-checkout flex-col-not-center">
      <img className="image-cover-clrs" src={img} alt="" />
      <div className="flex-column">
        <div className="flex-column">
          <h3 className="fs-400 font-clrs name-tag">{name}</h3>
          <p className="fs-300 font-clrs">
            {numberWithCommas(price.actual * amount)}₫
          </p>
        </div>
        <div className="flex btn-align">
          <button
            className="btn clear-btn border-btn "
            onClick={() => clearProduct()}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
