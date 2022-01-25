import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../ThemeContext.js";
import icons from "../../functions/icons.js";

function AccountMenu(props) {
  const { currentUser } = useTheme();

  return (
    <ul
      onClick={() => {
        props.setMenuAccountToggle(false);
      }}
      className="accountMenu"
    >
      {currentUser.username !== "anonymousUser" && (
        <li>
          <NavLink to="/account">
            <h3>{currentUser.username}</h3>
          </NavLink>
        </li>
      )}
      <li
        onClick={() => {
          props.handleValidationToggle();
          currentUser.username !== "anonymousUser"
            ? props.handleLogout()
            : props.handleValidationToggle();
        }}
        style={{ cursor: "pointer" }}
      >
        <icons.SiGnuprivacyguard className="reactIcons" id="loginIcon" />
        {currentUser.username === "anonymousUser" ? "LOG IN" : "LOG OUT"}
      </li>
      <li>
        <NavLink to="/account">sign up</NavLink>
      </li>
    </ul>
  );
}

export default AccountMenu;
