/* eslint-disable react/button-has-type */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import menuIcon from "../asset/icons/menu2.png";
import menuIconClosed from "../asset/icons/menuClosed2.png";

const Navbar = () => {
  const {
    burgerMenuToggle,
    setBurgerMenuToggle,
    signupToggle,
    setSignupToggle,
    loginToggle,
    setLoginToggle,
  } = useTheme();

  const handleToogles = () => {
    !burgerMenuToggle ? setBurgerMenuToggle(true) : setBurgerMenuToggle(false);
  };

  // !signupToggle ? setSignupToggle(true) : setSignupToggle(false);
  // !loginToggle ? setLoginToggle(true) : setLoginToggle(false);

  // if (!loginToggle) {
  //   setLoginToggle(true);
  // }
  // if (loginToggle) {
  //   setLoginToggle(false);
  // }

  // if (!signupToggle) {
  //   setSignupToggle(true);
  // }
  // if (signupToggle) {
  //   setSignupToggle(false);
  // }

  return (
    <div className="Navbar">
      {!burgerMenuToggle && (
        <ul className="topNavBar">
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/account">ACCOUNT</NavLink>
          </li>
        </ul>
      )}
      {burgerMenuToggle ? (
        <ul className="burgerMenu">
          <li onClick={handleToogles}>
            <NavLink to="/">HOME</NavLink>
          </li>
          {/* <li
            onClick={() => {
              handleBurgerMenuToggle();
              handlesignupToggle();
              handleloginToggle();
            }}
          > */}
          <li onClick={handleToogles}>LOGIN</li>
          <li onClick={handleToogles}>SIGNUP</li>
          <li onClick={handleToogles}>
            <NavLink to="/account">ACCOUNT</NavLink>
          </li>
          <li onClick={handleToogles}>
            <NavLink to="/about">ABOUT</NavLink>
          </li>

          <li onClick={handleToogles}>
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
        </ul>
      ) : (
        !burgerMenuToggle && (
          <div onClick={handleToogles} to="/burgermenu">
            <img className="menuIcon" src={menuIcon} alt="menu" />
          </div>
        )
      )}
      {burgerMenuToggle && (
        <img
          className="menuIconClosed"
          src={menuIconClosed}
          alt="menuClosed"
          onClick={handleToogles}
        />
      )}
    </div>
  );
};

export default Navbar;
