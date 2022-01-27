import React from "react";
import { useTheme } from "../../ThemeContext";
import Login from "./Login";
import Signup from "./Signup";
import icons from "../../functions/icons.js";

function Validation() {
  const {
    setValidationMenuToggle,
    signupToggle,
    setSignupToggle,
    loginToggle,
    setLoginToggle,
    mediaQueries,
  } = useTheme();
  return (
    <div
      className="Validation"
      style={{
        width: mediaQueries.smallView ? "100vw" : "40vw",
        minHeight: mediaQueries.smallView ? "100vh" : "70vh",
      }}
    >
      <ul>
        {loginToggle ? (
          <li
            onClick={() => {
              setLoginToggle(false);
              setSignupToggle(true);
            }}
            style={{ cursor: "pointer" }}
          >
            sign up
          </li>
        ) : (
          <li
            onClick={() => {
              setLoginToggle(true);
              setSignupToggle(false);
            }}
            style={{ cursor: "pointer" }}
          >
            login
          </li>
        )}
      </ul>
      <icons.MdOutlineClose
        className="menuIconClosed"
        onClick={() => {
          setValidationMenuToggle(false);
        }}
      />

      {loginToggle && <Login />}
      {signupToggle && <Signup />}
    </div>
  );
}

export default Validation;
