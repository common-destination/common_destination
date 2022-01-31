import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../ThemeContext.js";

function AccountMenu(props) {
  const { currentUser } = useTheme();

  return (
    <div className="AccountMenu">
      {currentUser.username !== "anonymousUser" && (
        <h3 style={{ marginBottom: "3vh" }}>
          <NavLink to="/account">{currentUser.username}</NavLink>
        </h3>
      )}
      <ul
        onClick={() => {
          props.setMenuAccountToggle(false);
        }}
      >
        <li
          onClick={() => {
            currentUser.username !== "anonymousUser"
              ? props.handleLogout()
              : props.setValidationMenuToggle(true);
          }}
          style={{ cursor: "pointer" }}
        >
          {currentUser.username === "anonymousUser" ? "LOG IN" : "LOG OUT"}
        </li>
      </ul>
    </div>
  );
}

export default AccountMenu;
