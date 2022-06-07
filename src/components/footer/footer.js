import { NavLink } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="primary-footer grid center">
      <div className="flex-col-not-center">
        <h3>Logo</h3>
        <p className="fs-300 low-opacity">@ 2020 - All rights reserved</p>
      </div>
      <div className="flex-col-not-center">
        <h3>Categories</h3>
        <ul className="grid">
          <li className="fs-300 low-opacity">
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
        <h3>Legal</h3>
        <ul className="grid">
          <li className="fs-300 low-opacity">Terms of Service</li>
          <li className="fs-300 low-opacity">Privacy Policy</li>
          <li className="fs-300 low-opacity">Return Policy</li>
          <li className="fs-300 low-opacity">Shipping</li>
          <li className="fs-300 low-opacity">Data Protection</li>
        </ul>
      </div>
      <div className="flex-col-not-center">
        <h3>Company</h3>
        <ul className="grid">
          <li className="fs-300 low-opacity">About</li>
          <li className="fs-300 low-opacity">Team</li>
          <li className="fs-300 low-opacity">Contact</li>
          <li className="fs-300 low-opacity">Careers</li>
          <li className="fs-300 low-opacity">Vision</li>
          <li className="fs-300 low-opacity">Culture</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
