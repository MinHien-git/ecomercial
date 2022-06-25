import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import toggleAction from "../../store/actions/theme";
import "./footer.css";

const Footer = () => {
  const [theme, SetTheme] = useState("light");
  const dispatch = useDispatch();

  const changeTheme = () => {
    SetTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    dispatch(toggleAction.toggleTheme(theme));
  }, [theme]);

  return (
    <footer className="primary-footer grid center">
      <div className="flex-col-not-center">
        <h3 className="font-clrs">Logo</h3>
        <p className="fs-300 low-opacity font-clrs">
          @ 2020 - All rights reserved
        </p>
        <label
          className="switch"
          onFocus={() => changeTheme()}
          onClick={() => changeTheme()}
        >
          <input type="checkbox" onClick={() => changeTheme()} />
          <span class="slider round" onClick={() => changeTheme()}></span>
        </label>
      </div>
      <div className="flex-col-not-center">
        <h3 className="font-clrs">Categories</h3>
        <ul className="grid">
          <li className="fs-300 low-opacity font-clrs">
            <NavLink to="/OnSale" className="fs-300 font-clrs">
              On Sale
            </NavLink>
          </li>
          <li className="fs-300 low-opacity">
            <NavLink to="/Featured" className="fs-300 font-clrs">
              Featured
            </NavLink>
          </li>
          <li className="fs-300 low-opacity">
            <NavLink to="/Masks" className="fs-300 font-clrs">
              Masks
            </NavLink>
          </li>
          <li className="fs-300 low-opacity">
            <NavLink to="/EyeCare" className="fs-300 font-clrs">
              Eye Care
            </NavLink>
          </li>
          <li className="fs-300 low-opacity">
            <NavLink to="/Moisturizers" className="fs-300 font-clrs">
              Moisturizers
            </NavLink>
          </li>
          <li className="fs-300 low-opacity">
            <NavLink to="/Treatments" className="fs-300 font-clrs">
              Treatments
            </NavLink>
          </li>
          <li className="fs-300 low-opacity">
            <NavLink to="/NightCare" className="fs-300 font-clrs">
              Night Care
            </NavLink>
          </li>
          <li className="fs-300 low-opacity">
            <NavLink to="/SunCare" className="fs-300 font-clrs">
              Sun Care
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-col-not-center">
        <h3 className="font-clrs">Legal</h3>
        <ul className="grid">
          <li className="fs-300 low-opacity font-clrs">Terms of Service</li>
          <li className="fs-300 low-opacity font-clrs">Privacy Policy</li>
          <li className="fs-300 low-opacity font-clrs">Return Policy</li>
          <li className="fs-300 low-opacity font-clrs">Shipping</li>
          <li className="fs-300 low-opacity font-clrs">Data Protection</li>
        </ul>
      </div>
      <div className="flex-col-not-center">
        <h3 className="font-clrs">Company</h3>
        <ul className="grid">
          <li className="fs-300 low-opacity font-clrs">About</li>
          <li className="fs-300 low-opacity font-clrs">Team</li>
          <li className="fs-300 low-opacity font-clrs">Contact</li>
          <li className="fs-300 low-opacity font-clrs">Careers</li>
          <li className="fs-300 low-opacity font-clrs">Vision</li>
          <li className="fs-300 low-opacity font-clrs">Culture</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
