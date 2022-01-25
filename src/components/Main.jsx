// import React, { useState } from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Validation from "./validation/Validation";
import Account from "./Account";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import { useTheme } from "../ThemeContext";
import { useEffect } from "react";

import images from "../functions/images.js";
import * as scrollbarAnimation from "../functions/scrollbarAnimation.jsx";

const Main = () => {
  const {
    validationMenuToggle,
    scrollbarImg,
    airplanePosition,
    setCurrentUser,
    currentUser,
    backendUrl,
    burgerMenuToggle,
    menuAccountToggle,
  } = useTheme();

  document.body.style.overflowY =
    validationMenuToggle || burgerMenuToggle ? "hidden" : "scroll";

  useEffect(() => {
    (async () => {
      const requestOptions = {
        method: "GET",
        credentials: "include",
      };
      const response = await fetch(
        `${backendUrl}/users/currentuser`,
        requestOptions
      );
      if (response.ok) {
        const _currentUser = await response.json();
        setCurrentUser((prev) => ({ ...prev, ..._currentUser }));
      }
    })();
    console.log(currentUser);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validationMenuToggle, menuAccountToggle]);



  return (
    <div
      className="Main"
    >
      {validationMenuToggle && <Validation />}

      {!burgerMenuToggle && (
        <img
          className="airplaneScrollBar"
          src={scrollbarAnimation.getScrollbarImage(
            scrollbarImg,
            images.airplaneDownStopped,
            images.airplaneDown,
            images.airplaneUpStopped,
            images.airplaneUp
          )}
          style={{ top: `${airplanePosition}px` }}
          alt="scrollBar"
        />
      )}

      <Routes>
        <Route
          path="/account"
          element={
            <Account
              className={
                validationMenuToggle ? "Account backgroundBlurOpac" : "Account"
              }
            />
          }
        ></Route>
        <Route
          path="/about"
          element={
            <About
              className={
                validationMenuToggle ? "About backgroundBlurOpac" : "About"
              }
            />
          }
        ></Route>
        <Route
          path="/contact"
          element={
            <Contact
              className={
                validationMenuToggle ? "Contact backgroundBlurOpac" : "Contact"
              }
            />
          }
        ></Route>
        <Route
          exact
          path="/"
          element={
            <Home
              className={
                validationMenuToggle ? "Home backgroundBlurOpac" : "Home"
              }
            />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default Main;
