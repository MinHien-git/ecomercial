import clsx from "clsx";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useScrollToTop from "../../../hooks/useScrollToTop";
import cartSelector from "../../../store/selectors/cartSelector";
import numberWithCommas from "../../display";
import CartCard from "./cart-card";
import StateOne from "./state-1";
import StateTwo from "./state-2";
import StateThree from "./state-3";
import StateFour from "./state-4";

const CheckoutState = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState(0);
  const products = useSelector(cartSelector.cartProducts);
  const CheckOutState = (params) => {
    window.scrollTo(0, 0);
    if (params === "+" && state < 4 && products.length > 0) {
      setState(state + 1);
    } else if (params === "-" && state > 1) {
      setState(state - 1);
    }
  };

  const SelectState = (s) => {
    if (state > s) {
      setState(s);
    }
  };

  let [amount, setAmount] = useState(0);
  const countPrice = () => {
    window.scrollTo(0, 0);
    setAmount(
      products
        .map((item) => item.amount * item.price.actual)
        .reduce((prev, curr) => prev + curr, 0)
    );
  };

  useEffect(() => {
    countPrice();
  }, [products, dispatch]);

  return (
    <>
      <section>
        <div>
          <ul className="flex" id="check-out-bar">
            <li
              className={clsx(
                "fs-300",
                0 <= state && "primary-bg",
                0 <= state && "active-bar"
              )}
              onClick={() => SelectState(0)}
            >
              1
            </li>
            <li
              className={clsx(
                "fs-300",
                1 <= state && "primary-bg",
                1 <= state && "active-bar"
              )}
              onClick={() => SelectState(1)}
            >
              2
            </li>
            <li
              className={clsx(
                "fs-300",
                2 <= state && "primary-bg",
                2 <= state && "active-bar"
              )}
              onClick={() => SelectState(2)}
            >
              3
            </li>
            <li
              className={clsx(
                "fs-300",
                3 <= state && "primary-bg",
                3 <= state && "active-bar"
              )}
              onClick={() => SelectState(3)}
            >
              4
            </li>
          </ul>
        </div>
      </section>
      {state === 0 ? (
        <StateOne CheckOutState={CheckOutState} />
      ) : state === 1 ? (
        <StateTwo CheckOutState={CheckOutState} />
      ) : state === 2 ? (
        <StateThree CheckOutState={CheckOutState} />
      ) : (
        <StateFour />
      )}
      <section className="grid border-btn" id="cart-page">
        <h3 className="fs-400 font-clrs">Cart</h3>
        <div className="grid">
          {products.map((item) => (
            <CartCard product={item} />
          ))}
        </div>
        <div className="flex checkout-cart-total">
          <p>Total:</p>
          <p>{numberWithCommas(amount)}₫</p>
        </div>
        <div className="grid">
          <button
            className="font-clrs fs-300 btn border-btn width-btn"
            style={{ backgroundColor: "transparent" }}
          >
            <strong>Edit Cart</strong>
          </button>
        </div>
      </section>
    </>
  );
};

export default CheckoutState;
