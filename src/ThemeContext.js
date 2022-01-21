import React, { useState, useContext } from "react";
import useMediaQuery from "./functions/UseMediaQuery.jsx";

const ThemeContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [burgerMenuToggle, setBurgerMenuToggle] = useState(false);
  const [scrollbarImg, setScrollbarImg] = useState("stopDown");
  const [validationMenuToggle, setValidationMenuToggle] = useState(false);
  const [signupToggle, setSignupToggle] = useState(false);
  const [loginToggle, setLoginToggle] = useState(true);
  const [airplanePosition, setAirplanePosition] = useState(0);
  const [menuAccountToggle, setMenuAccountToggle] = useState(false);
  const mediaQueries = {
    burgerMenu: useMediaQuery("(max-width: 750px)"),
  };

  return (
    <ThemeContext.Provider
      value={{
        burgerMenuToggle,
        setBurgerMenuToggle,
        validationMenuToggle,
        setValidationMenuToggle,
        signupToggle,
        setSignupToggle,
        loginToggle,
        setLoginToggle,
        mediaQueries,
        scrollbarImg,
        setScrollbarImg,
        airplanePosition,
        setAirplanePosition,
        setMenuAccountToggle,
        menuAccountToggle,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
