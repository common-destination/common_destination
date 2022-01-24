/* eslint-disable react/button-has-type */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { useTheme } from "../ThemeContext";
import BurgerMenu from "./navbar/BurgerMenu";
import AccountMenu from "./navbar/AccountMenu";
import TopMenu from "./navbar/TopMenu";
import icons from "../functions/icons.js"

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
        <TopMenu
          handleMenuAccountToggle={handleMenuAccountToggle}
          setValidationMenuToggle={setValidationMenuToggle}
          handleValidationToggle={handleValidationToggle}
          handleToggles={handleToggles}
        />
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
          <icons.MdOutlineClose className="menuIconClosed" onClick={handleToggles} />
        </>
      )}
    </div>
  );
};

export default Navbar;
