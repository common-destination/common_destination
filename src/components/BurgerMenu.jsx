import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import { FaHome } from "react-icons/fa";
import { SiGnuprivacyguard } from "react-icons/si";
import { MdManageAccounts} from "react-icons/md";
import { BsInfoSquareFill } from "react-icons/bs";
import { GrContact } from "react-icons/gr";

function BurgerMenu(props) {
const { mediaQueries } = useTheme();
  return (
    <ul
      className="burgerMenu"
      style={{
        width: mediaQueries.burgerMenu ? "100vw" : "30vw",
        height: mediaQueries.burgerMenu ? "100vh" : "70vh",
      }}
    >
      <li onClick={props.handleToggles}>
        <NavLink to="/">
          <FaHome className="reactIcons" /> HOME
        </NavLink>
      </li>
      <li
        onClick={() => {
          props.handleToggles();
          props.handleValidationToggle();
        }}
        style={{ cursor: "pointer" }}
      >
        <SiGnuprivacyguard className="reactIcons" />
        LOGIN
      </li>

      <li onClick={props.handleToggles}>
        <NavLink to="/account">
          <MdManageAccounts className="reactIcons" />
          ACCOUNT
        </NavLink>
      </li>
      <li onClick={props.handleToggles}>
        <NavLink to="/about">
          <BsInfoSquareFill className="reactIcons" />
          ABOUT
        </NavLink>
      </li>

      <li onClick={props.handleToggles}>
        <NavLink to="/contact">
          <GrContact className="reactIcons" />
          CONTACT
        </NavLink>
      </li>
    </ul>
  );
}

export default BurgerMenu;
