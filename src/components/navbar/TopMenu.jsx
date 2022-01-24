import React from "react";
import { NavLink } from "react-router-dom";
import icons from "../../functions/icons.js";

function TopMenu(props) {
  return (
    <>
      <ul className="topMenu">
        <li
          onClick={() => {
            props.handleValidationToggle();
          }}
          style={{ cursor: "pointer" }}
        >
          <icons.SiGnuprivacyguard className="reactIcons" id="loginIcon" />
          LOG IN
        </li>
        <li
          onClick={() => {
            props.setValidationMenuToggle(false);
          }}
        >
          <NavLink to="/">
            <icons.FcHome className="reactIcons" />
          </NavLink>
        </li>
        <li
          onClick={() => {
            props.setValidationMenuToggle(false);
            props.handleMenuAccountToggle();
          }}
        >
          <icons.MdManageAccounts
            className="reactIcons"
            style={{ margin: "0" }}
          />
          <icons.TiArrowSortedDown style={{ margin: "-20% -10%" }} />
        </li>
      </ul>
      <icons.GiHamburgerMenu
        className="menuIcon"
        onClick={props.handleToggles}
      />
    </>
  );
}

export default TopMenu;
