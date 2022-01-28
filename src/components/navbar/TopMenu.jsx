import React from "react";
import { NavLink } from "react-router-dom";
import icons from "../../functions/icons.js";
import { useTheme } from "../../ThemeContext.js";

function TopMenu(props) {
  const { currentUser } = useTheme();

  return (
    <>
      <ul className="topMenu">
        <li>
          {currentUser.username !== "anonymousUser" && (
            <NavLink to="/account">
              <h5 style={{ marginRight: "40vw" }}>{currentUser.username} </h5>
            </NavLink>
          )}
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
            props.setMenuAccountToggle();
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
        onClick={props.handleBurgerMenuToggles}
      />
    </>
  );
}

export default TopMenu;
