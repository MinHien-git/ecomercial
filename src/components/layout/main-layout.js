import { Outlet } from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop";
import Footer from "../footer/footer";
import Header from "../header/header";

const MainLayout = () => {
  useScrollToTop();
  console.log("run");
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
