/* eslint-disable react/button-has-type */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import { FcHome } from "react-icons/fc";
import { SiGnuprivacyguard } from "react-icons/si";
import { MdManageAccounts, MdOutlineClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { TiArrowSortedDown } from "react-icons/ti";
import BurgerMenu from "./BurgerMenu";
import AccountMenu from "./AccountMenu";

const Navbar = () => {
  const {
    burgerMenuToggle,
    setBurgerMenuToggle,
    setValidationMenuToggle,
    setMenuAccountToggle,
    menuAccountToggle,
  } = useTheme();

  const handleToggles = () => {
    !burgerMenuToggle ? setBurgerMenuToggle(true) : setBurgerMenuToggle(false);
    setValidationMenuToggle(false);
  };

  const handleValidationToggle = () => {
    setValidationMenuToggle(true);
  };

  const handleMenuAccountToggle = () => {
    setMenuAccountToggle(true);
  };

  return (
    <div className="Navbar">
      {!burgerMenuToggle && (
        <>
          <ul className="topNavBar">
            <li
              onClick={() => {
                handleValidationToggle();
              }}
              style={{ cursor: "pointer" }}
            >
              <SiGnuprivacyguard className="reactIcons" id="loginIcon" />
              LOG IN
            </li>
            <li
              onClick={() => {
                setValidationMenuToggle(false);
              }}
            >
              <NavLink to="/">
                <FcHome className="reactIcons" />
              </NavLink>
            </li>
            <li
              onClick={() => {
                setValidationMenuToggle(false);
                handleMenuAccountToggle();
              }}
            >
              <MdManageAccounts
                className="reactIcons"
                style={{ margin: "0" }}
              />
              <TiArrowSortedDown style={{ margin: "-20% -10%" }} />
            </li>
          </ul>
          <GiHamburgerMenu className="menuIcon" onClick={handleToggles} />
        </>
      )}
      {menuAccountToggle && (
        <AccountMenu setMenuAccountToggle={setMenuAccountToggle} />
      )}
      {burgerMenuToggle && (
        <>
          <BurgerMenu
            handleToggles={handleToggles}
            handleValidationToggle={handleValidationToggle}
          />
          <MdOutlineClose className="menuIconClosed" onClick={handleToggles} />
        </>
      )}
    </div>
  );
};

export default Navbar;
