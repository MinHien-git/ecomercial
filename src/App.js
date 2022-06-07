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

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productAction.fetchProductAsync());
  }, [dispatch]);

  return (
    <div className="App background-clrs">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="home" element={<MainPage />} />
          <Route path="product" element={<ProductBody />} />
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
