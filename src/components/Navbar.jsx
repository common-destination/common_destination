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
import { TiArrowSortedDown } from "react-icons/ti";

const Navbar = () => {
  const {
    mediaQueries,
    burgerMenuToggle,
    setBurgerMenuToggle,
    setValidationToggle,
    setMenuAccountToggle,
    menuAccountToggle,
  } = useTheme();

  const handleToggles = () => {
    !burgerMenuToggle ? setBurgerMenuToggle(true) : setBurgerMenuToggle(false);
    setValidationToggle(false);
  };

  const handleValidationToggle = () => {
    setValidationToggle(true);
  };

  const handleMenuAccountToggle = () => {
    setMenuAccountToggle(true);
  };

  return (
    <div className="Navbar">
      {!burgerMenuToggle && (
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
              setValidationToggle(false);
            }}
          >
            <NavLink to="/">
              <FcHome className="reactIcons" />
            </NavLink>
          </li>
          <li
            onMouseOver={() => {
              setValidationToggle(false);
              handleMenuAccountToggle();
            }}
          >
            <MdManageAccounts className="reactIcons" style={{ margin: "0" }} />
            <TiArrowSortedDown style={{ margin: "-20% -10%" }} />
          </li>

          {menuAccountToggle && (
            <ul
              onMouseLeave={() => {
                setMenuAccountToggle(false);
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
          )}
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
