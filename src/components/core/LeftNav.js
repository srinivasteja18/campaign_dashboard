import React from "react";
import ZocketLogo from "../../assets/leftNav/zocket.svg";
import HomeLogo from "../../assets/leftNav/home.svg";
import CampaignLogo from "../../assets/leftNav/campaign.svg";
import ProductsLogo from "../../assets/leftNav/products.svg";
import CustomersLogo from "../../assets/leftNav/customers.svg";
import { NavLink } from "react-router-dom";
import LeftNavIcon from "./LeftNavIcon";

export default function LeftNav() {
  return (
    <div className="box">
      <div className="rectangle">
        <div className="leftbar-logo-div">
          <img src={ZocketLogo} alt="Zocket Logo" />
        </div>
        <div className="leftbar-icons-div">
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "leftbar-img-wrapper-active" : "leftbar-navlink"
                }
                to="/Home"
              >
                <LeftNavIcon logo={HomeLogo} text="Home" altText="Home" />
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "leftbar-img-wrapper-active" : "leftbar-navlink"
                }
                to="/Campaign"
              >
                <LeftNavIcon
                  logo={CampaignLogo}
                  text="Campaign"
                  altText="Campaign"
                />
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "leftbar-img-wrapper-active" : "leftbar-navlink"
                }
                to="/Products"
              >
                <LeftNavIcon
                  logo={ProductsLogo}
                  text="Products"
                  altText="Products"
                />
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "leftbar-img-wrapper-active" : "leftbar-navlink"
                }
                to="/Customers"
              >
                <LeftNavIcon
                  logo={CustomersLogo}
                  text="Customers"
                  altText="Customers"
                />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
