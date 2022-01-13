// import React, { useState } from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Account from "./Account";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import { useTheme } from "../ThemeContext";
import airplaneDown from "../asset/gifs/airplaneDown.gif";
import airplaneDownStopped from "../asset/gifs/airplaneDownStopped.png";
import airplaneUp from "../asset/gifs/airplaneUp.gif";
import airplaneUpStopped from "../asset/gifs/airplaneUpStopped.png";

const Main = () => {
  const { signupToggle, loginToggle, scrollbar, airplanePosition } = useTheme();
  // console.log(airplanePosition);
  const getScrollbarImage = () => {
    if (scrollbar === "stopDown") {
      return airplaneDownStopped;
    }
    if (scrollbar === "down") {
      return airplaneDown;
    }
    if (scrollbar === "stopUp") {
      return airplaneUpStopped;
    }
    if (scrollbar === "up") {
      return airplaneUp;
    }
  };
  return (
    <div className="Main">
      {loginToggle && <Login />}
      {signupToggle && <Signup />}

      <img
        className="airplaneScrollBarDown"
        src={getScrollbarImage()}
        style={{ top: `${airplanePosition}px` }}
        alt="scrollBar"
      />
      <Routes>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
};

export default Main;
