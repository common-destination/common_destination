import React from "react";
import { NavLink } from "react-router-dom";

function AccountMenu(props) {
  return (
    <ul
      onClick={() => {
        props.setMenuAccountToggle(false);
      }}
      className="accountMenu"
    >
      <li>
        <NavLink to="/account">
          <h3>VIEW PROFILE</h3>
        </NavLink>
      </li>
      <li>
        <NavLink to="/account">login</NavLink>
      </li>
      <li>
        <NavLink to="/account">sign up</NavLink>
      </li>
    </ul>
  );
}

export default AccountMenu;
