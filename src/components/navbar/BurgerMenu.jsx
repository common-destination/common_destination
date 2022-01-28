import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../ThemeContext";
import icons from "../../functions/icons.js";

function BurgerMenu(props) {
  const { mediaQueries, currentUser } = useTheme();
  return (
    <ul
      className="burgerMenu"
      style={{
        width: mediaQueries.burgerMenu ? "100vw" : "30vw",
        height: mediaQueries.burgerMenu ? "100vh" : "70vh",
      }}
    >
      <li onClick={props.handleBurgerMenuToggles}>
        <NavLink to="/">
          <icons.FaHome className="reactIcons" /> HOME
        </NavLink>
      </li>

      <li
        onClick={() => {
          props.handleBurgerMenuToggles();
          currentUser.username !== "anonymousUser"
            ? props.handleLogout()
            : props.setValidationMenuToggle();
        }}
        style={{ cursor: "pointer" }}
      >
        <icons.SiGnuprivacyguard className="reactIcons" />
        {currentUser.username === "anonymousUser" ? "LOGIN" : "LOGOUT"}
      </li>

      <li onClick={props.handleBurgerMenuToggles}>
        <NavLink to="/account">
          <icons.MdManageAccounts className="reactIcons" />
          ACCOUNT
        </NavLink>
      </li>
      <li onClick={props.handleBurgerMenuToggles}>
        <NavLink to="/about">
          <icons.BsInfoSquareFill className="reactIcons" />
          ABOUT
        </NavLink>
      </li>

      <li onClick={props.handleBurgerMenuToggles}>
        <NavLink to="/contact">
          <icons.GrContact className="reactIcons" />
          CONTACT
        </NavLink>
      </li>
    </ul>
  );
}

export default BurgerMenu;
