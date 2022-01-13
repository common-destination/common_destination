import React, { useState, useContext } from "react";
import useMediaQuery from "./components/UseMediaQuery";

const ThemeContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [burgerMenuToggle, setBurgerMenuToggle] = useState(false);
  const [scrollbar, setScrollbar] = useState("stopDown");
  const [signupToggle, setSignupToggle] = useState(false);
  const [loginToggle, setLoginToggle] = useState(false);
  const mediaQueries = {
    burgerMenu: useMediaQuery("(max-width: 750px)"),
  };

  return (
    <ThemeContext.Provider
      value={{
        burgerMenuToggle,
        setBurgerMenuToggle,
        signupToggle,
        setSignupToggle,
        loginToggle,
        setLoginToggle,
        mediaQueries,
        scrollbar,
        setScrollbar,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
