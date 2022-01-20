/* eslint-disable react/button-has-type */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import { FcHome } from "react-icons/fc";
import { FaHome } from "react-icons/fa";
import { SiGnuprivacyguard } from "react-icons/si";
import { MdManageAccounts, MdOutlineClose } from "react-icons/md";
import { BsInfoSquareFill } from "react-icons/bs";
import { GrContact } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const {
    mediaQueries,
    burgerMenuToggle,
    setBurgerMenuToggle,
    setValidationToggle,
  } = useTheme();

  // const reactIconstyles = { fontSize: "1.8vw", margin: "0 1vw" };

  const handleToggles = () => {
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
            <NavLink to="/">
              <FcHome className="reactIcons" />
            </NavLink>
          </li>
          <li
            onClick={() => {
              setValidationToggle(false);
            }}
          >
            <NavLink to="/account">
              <MdManageAccounts className="reactIcons" />
              <span></span>
            </NavLink>
          </li>
        </ul>
      )}
      {burgerMenuToggle ? (
        <ul
          className="burgerMenu"
          style={{
            width: mediaQueries.burgerMenu ? "100vw" : "30vw",
            height: mediaQueries.burgerMenu ? "100vh" : "70vh",
          }}
        >
          <li onClick={handleToggles}>
            <NavLink to="/">
              <FaHome className="reactIcons" /> HOME
            </NavLink>
          </li>
          <li
            onClick={() => {
              handleToggles();
              handleValidationToggle();
            }}
            style={{ cursor: "pointer" }}
          >
            <SiGnuprivacyguard className="reactIcons" />
            LOGIN
          </li>

          <li onClick={handleToggles}>
            <NavLink to="/account">
              <MdManageAccounts className="reactIcons" />
              ACCOUNT
            </NavLink>
          </li>
          <li onClick={handleToggles}>
            <NavLink to="/about">
              <BsInfoSquareFill className="reactIcons" />
              ABOUT
            </NavLink>
          </li>

          <li onClick={handleToggles}>
            <NavLink to="/contact">
              <GrContact className="reactIcons" />
              CONTACT
            </NavLink>
          </li>
        </ul>
      ) : (
        !burgerMenuToggle && (
          <GiHamburgerMenu className="menuIcon" onClick={handleToggles} />
        )
      )}
      {burgerMenuToggle && (
        <MdOutlineClose className="menuIconClosed" onClick={handleToggles} />
      )}
    </div>
  );
};

export default Navbar;
