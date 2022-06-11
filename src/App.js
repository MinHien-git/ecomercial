import MainPage from "./components/body/main page/body";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/layout/main-layout";
import ProductBody from "./components/body/product page/body";
import CategoryBody from "./components/body/category page/body";
import ShoppingCart from "./components/body/shopping cart page/body";
import CheckOut from "./components/body/checkout page/body";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import productAction from "./store/actions/product";
import ProductPage from "./components/body/product page/products";
import AuthBody from "./components/body/auth page/body-login";
import AuthBodySignin from "./components/body/auth page/body-sign-in";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productAction.fetchProductAsync());
  }, [dispatch]);

  return (
    <div className="App background-clrs">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<MainPage />} />
          <Route path="product/:id" element={<ProductBody />} />
          <Route path="cart" element={<ShoppingCart />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="auth/login" element={<AuthBody />} />
          <Route path="auth/register" element={<AuthBodySignin />} />
        </Route>
      </Routes>
      {/* <Router>
        <Routes>
          <Route path="" element={<MainLayout />}>
            {/* <Route path="home">
              <MainPage />
            </Route>
            <Route path="product">
              <ProductBody />
            </Route> 
          </Route>
           <Route path="/product">
            <Route path="/product/"></Route>
            <Route
              path="/product/:id"
              element={
                <MainLayout>
                  <ProductBody />
                </MainLayout>
              }
            ></Route>
          </Route>
          <Route
            path="/category"
            element={
              <MainLayout>
                <CategoryBody />
              </MainLayout>
            }
          ></Route>
          <Route
            path="/cart"
            element={
              <MainLayout>
                <ShoppingCart />
              </MainLayout>
            }
          ></Route>
          <Route
            path="/checkout"
            element={
              <MainLayout>
                <CheckOut />
              </MainLayout>
            }
          ></Route> 
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
