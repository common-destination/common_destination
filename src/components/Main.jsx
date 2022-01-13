/* eslint-disable import/no-extraneous-dependencies */
import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Account from "./Account";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import { useTheme } from "../ThemeContext";
// import airplaneUp from "../asset/gifs/airplaneUp.gif";
import airplaneDown from "../asset/gifs/airplaneDown.gif";
import airplaneDownStopped from "../asset/gifs/airplaneDownStopped.gif";


const Main = () => {
  const [scrollbar, setScrollbar] = useState("stop");
  const { signupToggle, loginToggle } = useTheme();

  return (
    <div className="Main">
      {loginToggle && <Login />}
      {signupToggle && <Signup />}
      <img className="airplaneScrollBarDown" src={scrollbar === "stop" ? airplaneDownStopped : airplaneDown} alt="scrollBar" />
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
