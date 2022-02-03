import React from "react";
import { NavLink } from "react-router-dom";
import icons from "../../functions/icons.js";
import { useTheme } from "../../ThemeContext.js";
// import logo from "../.././assets/images/logoTest2.png";

function TopMenu({setValidationMenuToggle,setMenuAccountToggle,handleBurgerMenuToggles}) {
  const { mediaQueries, currentUser } = useTheme();

  return (
    <div className="topMenu">
      <div className="logo">
        <icons.SiYourtraveldottv className="reactIcons" />
        {/* <h1
          style={{
            display: mediaQueries.smallView ? "none" : "block",
          }}
        >
          Common Destination
        </h1> */}
        { !mediaQueries.smallView && (<h1>Common Destination</h1>)}
      </div>
      <ul className="topNavbar">
        <li>
          {currentUser.username !== "anonymousUser" && (
            <NavLink to="/account">
              <h5>{currentUser.username}</h5>
            </NavLink>
          )}
        </li>
        <li
          onClick={() => {
            setValidationMenuToggle(false);
          }}
        >
          <NavLink to="/">
            <icons.FcHome className="reactIcons" />
          </NavLink>
        </li>
        <li
          onClick={() => {
            setValidationMenuToggle(false);
            setMenuAccountToggle();
          }}
        >
          <icons.MdManageAccounts className="reactIcons" />
        </li>
        <li>
          <icons.GiHamburgerMenu
            className="menuIcon reactIcons"
            onClick={handleBurgerMenuToggles}
          />
        </li>
      </ul>
    </div>
  );
}

export default TopMenu;
