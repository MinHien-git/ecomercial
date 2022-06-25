import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useScrollToTop from "../../../hooks/useScrollToTop";
import cartAction from "../../../store/actions/cart";
import cartSelector from "../../../store/selectors/cartSelector";
import numberWithCommas from "../../display";
import SecondaryText from "../../secondary-text";
import Title from "../../section-title";
import SignUpForm from "../../sign-up-form";
import "./body.css";
import CartCard from "./cart-card";
const ShoppingCart = () => {
  useScrollToTop();
  const cartList = useSelector(cartSelector.cartProducts);
  let [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const countPrice = () => {
    setAmount(
      cartList
        .map((item) => item.amount * item.price.actual)
        .reduce((prev, curr) => prev + curr, 0)
    );
  };

  const HandleClear = () => {
    dispatch(cartAction.clearProduct());
  };

  useEffect(() => {
    countPrice();
  }, [cartList]);
  console.log("run");
  return (
    <>
      <main className="primary-body center grid">
        <section className="grid">
          <SecondaryText text="Your Cart" />
          <Title title="Shopping cart" />
          <button
            className="btn priamry-btn fs-300 background-clrs border-btn"
            style={{ "--width": "8rem" }}
            onClick={() => HandleClear()}
          >
            <strong>Clear All</strong>
          </button>
        </section>
        <section className="grid">
          {cartList.map((item) => (
            <CartCard key={item.id} product={item} count={countPrice} />
          ))}
        </section>
        <section className="flex-col-not-center cart-total borderdiv">
          <h3 className="fs-400 font-clrs">Cart Total</h3>
          <div>
            <p className="fs-300 font-clrs">Subtotal:</p>
            <p className="font-clrs">{numberWithCommas(amount)}₫</p>
          </div>
          <div>
            <p className="fs-300 font-clrs">Tax:</p>
            <p className="font-clrs">
              {numberWithCommas((amount * 10) / 100)}₫
            </p>
          </div>
          <div>
            <p className="fs-300 font-clrs">Shipping:</p>
            <p className=" font-clrs">{numberWithCommas(25000)}₫</p>
          </div>
          <div>
            <h4 className="fs-300 font-clrs">Total:</h4>
            <p className="font-clrs">
              {numberWithCommas((amount * 10) / 100 + amount + 25000)}₫
            </p>
          </div>
          <Link
            className="btn primary-bg fs-300 priamry-btn center"
            to="/checkout"
          >
            <strong className="center font-clrs">Check Out</strong>
          </Link>
        </section>
        <SignUpForm />
      </main>
    </>
  );
};

export default ShoppingCart;
