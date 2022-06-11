import Cart from "../../asset/icons8-cart-48.png";
import Profile from "../../asset/icons8-user-30.png";
import Search from "../../asset/icons8-search-30.png";
import { RiArrowDropRightFill } from "react-icons/ri";
import { NavLink, Link } from "react-router-dom";
import "./header.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import cartSelector from "../../store/selectors/cartSelector";

const Header = () => {
  const [isActive, setActive] = useState(false);
  const [toggle, setToggle] = useState(false);
  const cartList = useSelector(cartSelector.cartProducts);
  const handleToggle = (get, set) => {
    set(!get);
  };

  return (
    <>
      <header className="re primary-header">
        <nav className="flex re primary-navigation center background-clrs">
          <div
            id="burger"
            className={clsx(
              "btn nav-btn image-cover-clrs",
              isActive && "activebtn"
            )}
            onClick={() => handleToggle(isActive, setActive)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <Link id="logo" className="fs-700" to="/">
            LOGO
          </Link>
          <Link
            id="nav-cart"
            className={clsx(
              "btn font-clrs-bg img-btn",
              cartList.length > 0 && "notempty"
            )}
            to="/cart"
          >
            <img src={Cart} alt="cart" />
          </Link>

          <ul
            className={clsx(
              "flex primary-navigation-items abs background-clrs",
              isActive && "activebtn"
            )}
          >
            <li>
              <input
                id="primary-navigation-items-search"
                className="fs-400 re"
                type="text"
                placeholder="Search"
              />
            </li>
            <ul className="flex primary-navigation-items-navitems">
              <li>
                <NavLink to="/" className="font-clrs fs-400">
                  Home
                </NavLink>
              </li>
              <li id="categories">
                <div
                  className={clsx("font-clrs fs-400 flex center-inline")}
                  onClick={() => handleToggle(toggle, setToggle)}
                >
                  Categories
                  <RiArrowDropRightFill />
                  <div
                    id="primary-navigation-items-navitems-categories"
                    className={clsx("background-clrs", toggle && "menu-active")}
                  >
                    <div className="flex secondary-button-navigation" id="bar">
                      <div onClick={() => handleToggle(toggle, setToggle)}>
                        back
                      </div>
                      <div onClick={() => handleToggle(isActive, setActive)}>
                        X
                      </div>
                    </div>
                    <ul className="flex-column">
                      <li>
                        <NavLink to="/OnSale" className="fs-300 font-clrs">
                          On Sale
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/Featured" className="fs-300 font-clrs">
                          Featured
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/Masks" className="fs-300 font-clrs">
                          Masks
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/EyeCare" className="fs-300 font-clrs">
                          Eye Care
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/Moisturizers"
                          className="fs-300 font-clrs"
                        >
                          Moisturizers
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/Treatments" className="fs-300 font-clrs">
                          Treatments
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/NightCare" className="fs-300 font-clrs">
                          Night Care
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/SunCare" className="fs-300 font-clrs">
                          Sun Care
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <NavLink to="/blog" className="font-clrs fs-400">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="font-clrs fs-400">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="font-clrs fs-400">
                  Contact
                </NavLink>
              </li>
            </ul>
            <li>
              <Link
                id="primary-navigation-items-login"
                className="btn primary-bg fs-300 text-space"
                to="/auth/login"
              >
                Login
              </Link>
            </li>

            <li>
              <img src={require("../../style/instagram.png")} alt="instagram" />
              <img src={require("../../style/twitter.png")} alt="twitter" />
              <img src={require("../../style/facebook.png")} alt="facebook" />
            </li>
          </ul>

          <ul id="nav-profile" className="primary-navigation-profile">
            <li>
              <Link
                id="nav-search"
                className={clsx(
                  "btn font-clrs-bg img-btn",
                  cartList.length > 0 && "notempty"
                )}
                to="/cart"
              >
                <img src={Search} alt="cart" />
              </Link>
            </li>
            <li>
              <Link
                id="nav-cart"
                className={clsx(
                  "btn font-clrs-bg img-btn",
                  cartList.length > 0 && "notempty"
                )}
                to="/cart"
              >
                <img src={Cart} alt="cart" />
              </Link>
            </li>
            <li>
              <Link
                id="nav-auth"
                className={clsx(
                  "btn font-clrs-bg img-btn",
                  cartList.length > 0 && "notempty"
                )}
                to="/auth/login"
              >
                <img src={Profile} alt="cart" />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
