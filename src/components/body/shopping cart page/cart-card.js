import { useState } from "react";
import { useDispatch } from "react-redux";
import cartAction from "../../../store/actions/cart";

import numberWithCommas from "../../display";

const CartCard = (props) => {
  const { id, img, name, amount, price } = props.product;
  const dispatch = useDispatch();
  const [cartAmount, setAmount] = useState(amount);
  const calculatePrice = props.count;

  const HandleAmount = (e) => {
    if (e === "-") {
      setAmount(cartAmount - 1);

      if (amount === 1) {
        dispatch(cartAction.removeProduct({ id: id }));
      } else {
        dispatch(cartAction.editProduct({ id: id, amount: cartAmount - 1 }));
      }
    } else if (e === "+") {
      setAmount(cartAmount + 1);
      dispatch(cartAction.editProduct({ id: id, amount: cartAmount + 1 }));
    }
    calculatePrice();
  };

  const clearProduct = () => {
    dispatch(cartAction.removeProduct({ id: id }));
  };

  return (
    <div className="cart-card flex-col-not-center borderdiv">
      <img className="image-cover-clrs" src={img} alt="" />
      <div className="flex-column">
        <h3 className="fs-400 font-clrs name-tag">{name}</h3>
        <div className="flex-column">
          <p className="fs-300 font-clrs">{numberWithCommas(price.actual)}₫</p>
          <div className="flex btn-align">
            <div className="amount-btn flex background-clrs center">
              <button
                className="btn font-clrs background-clrs"
                onClick={() => HandleAmount("-")}
              >
                -
              </button>
              <p className="font-clrs">{cartAmount}</p>
              <button
                className="btn small-circle font-clrs background-clrs"
                onClick={() => {
                  HandleAmount("+");
                }}
              >
                +
              </button>
            </div>
            <button
              className="btn clear-btn border-btn font-clrs background-clrs"
              onClick={() => clearProduct()}
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
