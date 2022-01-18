/* eslint-disable react/button-has-type */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import menuIcon from "../asset/icons/menu2.png";
import menuIconClosed from "../asset/icons/menuClosed2.png";
import avatarMale from "../asset/icons/avatarMale.png";
import avatarFemale from "../asset/icons/avatarFemale.png";

const Navbar = () => {
  const {
    mediaQueries,
    burgerMenuToggle,
    setBurgerMenuToggle,
    signupToggle,
    setSignupToggle,
    loginToggle,
    setLoginToggle,
    gender,
  } = useTheme();

  // console.log(mediaQueries.burgerMenu);

  const handleToogles = () => {
    !burgerMenuToggle ? setBurgerMenuToggle(true) : setBurgerMenuToggle(false);
    setSignupToggle(false);
    setLoginToggle(false);
  };

  const handleLoginToggles = () => {
    !loginToggle ? setLoginToggle(true) : setLoginToggle(false);
  };

  const handleSignupToggles = () => {
    !signupToggle ? setSignupToggle(true) : setSignupToggle(false);
  };

  return (
    <div className="Navbar">
      {!burgerMenuToggle && (
        <ul className="topNavBar">
          <li
            onClick={() => {
              setSignupToggle(false);
              setLoginToggle(false);
            }}
          >
            <NavLink to="/">HOME</NavLink>
          </li>
          <li
            onClick={() => {
              setSignupToggle(false);
              setLoginToggle(false);
            }}
          >
            <NavLink to="/account">
              <img
                src={gender === "male" ? avatarMale : avatarFemale}
                alt="avatar"
              />

              <span>username</span>
            </NavLink>
          </li>
        </ul>
      )}
      {burgerMenuToggle ? (
        <ul
          className="burgerMenu"
          style={{
            width: mediaQueries.burgerMenu ? "100vw" : "40vw",
            height: mediaQueries.burgerMenu ? "100vh" : "80vh",
          }}
        >
          <li onClick={handleToogles}>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li
            onClick={() => {
              handleToogles();
              handleLoginToggles();
              setSignupToggle(false);
            }}
            style={{ cursor: "pointer" }}
          >
            LOGIN
          </li>
          <li
            onClick={() => {
              handleToogles();
              handleSignupToggles();
              setLoginToggle(false);
            }}
            style={{ cursor: "pointer" }}
          >
            SIGNUP
          </li>
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
