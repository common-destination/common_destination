// import React, { useState, useContext, useEffect } from "react";
import React, { useState, useContext } from "react";
import useMediaQuery from "./functions/UseMediaQuery.jsx";

const ThemeContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [burgerMenuToggle, setBurgerMenuToggle] = useState(false);
  const [scrollbarImg, setScrollbarImg] = useState("stopDown");
  const [validationToggle, setValidationToggle] = useState(false);
  const [signupToggle, setSignupToggle] = useState(false);
  const [loginToggle, setLoginToggle] = useState(true);
  const [airplanePosition, setAirplanePosition] = useState(0);
  const [menuAccountToggle, setMenuAccountToggle] = useState(false);
  const mediaQueries = {
    burgerMenu: useMediaQuery("(max-width: 750px)"),
  };
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const [currentUser, setCurrentUser] = useState({});

  return (
    <ThemeContext.Provider
      value={{
        burgerMenuToggle,
        setBurgerMenuToggle,
        validationToggle,
        setValidationToggle,
        signupToggle,
        setSignupToggle,
        loginToggle,
        setLoginToggle,
        mediaQueries,
        scrollbarImg,
        setScrollbarImg,
        airplanePosition,
        setAirplanePosition,
        currentUser,
        setCurrentUser,
        backendUrl,
        setMenuAccountToggle,
        menuAccountToggle,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
