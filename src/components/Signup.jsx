import React from "react";
import { useTheme } from "../ThemeContext";
import menuIconClosed from "../asset/icons/menuClosed2.png";

function Signup() {
  const { mediaQueries, setSignupToggle } = useTheme();

  return (
    <div
      className="Signup"
      style={{
        width: mediaQueries.burgerMenu ? "100vw" : "40vw",
        minHeight: mediaQueries.burgerMenu ? "100vh" : "70vh",
      }}
    >
      <img
        className="menuIconClosed"
        src={menuIconClosed}
        alt="menuClosed"
        onClick={() => {
          setSignupToggle(false);
        }}
      />
      <h1>Signup</h1>
    </div>
  );
}

export default Signup;
