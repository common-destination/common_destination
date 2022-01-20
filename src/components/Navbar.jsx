/* eslint-disable react/button-has-type */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import icons from "../functions/icons.js";

const Navbar = () => {
  const {
    mediaQueries,
    burgerMenuToggle,
    setBurgerMenuToggle,
    // validationToggle,
    setValidationToggle,
    gender,
    currentUser,
  } = useTheme();

  // console.log(mediaQueries.burgerMenu);

  const handleToogles = () => {
    !burgerMenuToggle ? setBurgerMenuToggle(true) : setBurgerMenuToggle(false);
    setValidationToggle(false);
  };

  const handleValidationToggle = () => {
    setValidationToggle(true);
  };

  return (
    <div className="Navbar">
      {!burgerMenuToggle && (
        <ul className="topNavBar">
          <li
            onClick={() => {
              setValidationToggle(false);
            }}
          >
            <NavLink to="/">HOME</NavLink>
          </li>
          <li
            onClick={() => {
              setValidationToggle(false);
            }}
          >
            <NavLink to="/account">
              <img
                src={gender === "male" ? icons.avatarMale : icons.avatarFemale}
                alt="avatar"
              />
              <span>{"ciao " + currentUser.username}</span>
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
              handleValidationToggle();
            }}
            style={{ cursor: "pointer" }}
          >
            LOGIN
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
            <img className="menuIcon" src={icons.menuIcon} alt="menu" />
          </div>
        )
      )}
      {burgerMenuToggle && (
        <img
          className="menuIconClosed"
          src={icons.menuIconClosed}
          alt="menuClosed"
          onClick={handleToogles}
        />
      )}
    </div>
  );
};

export default Navbar;
