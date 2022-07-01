import MainPage from "./components/body/main page/body";

import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/layout/main-layout";
import ProductBody from "./components/body/product page/body";
import ShoppingCart from "./components/body/shopping cart page/body";
import CheckOut from "./components/body/checkout page/body";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import productAction from "./store/actions/product";
import themesSelector from "./store/selectors/themeSelector";
import ProductPage from "./components/body/product page/products";
import AuthBody from "./components/body/auth page/body-login";
import AuthBodySignin from "./components/body/auth page/body-sign-in";
import SearchPage from "./components/body/search page/body";
import clsx from "clsx";
import ProfilePage from "./components/body/auth page/profile";

function App() {
  const theme = useSelector(themesSelector.selectThemes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productAction.fetchProductAsync());
  }, [dispatch]);
  return (
    <div
      className={clsx(
        "App background-clrs",
        theme === "dark" ? "darkmode" : null
      )}
    >
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<MainPage />} />
          <Route path="product/:id" element={<ProductBody />} />
          <Route path="cart" element={<ShoppingCart />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="auth/login" element={<AuthBody />} />
          <Route path="auth/register" element={<AuthBodySignin />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="auth/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
