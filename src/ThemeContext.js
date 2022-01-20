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
  const [gender, setGender] = useState("male");
  const [airplanePosition, setAirplanePosition] = useState(0);
  const mediaQueries = {
    burgerMenu: useMediaQuery("(max-width: 750px)"),
  };

  const [currentUser, setCurrentUser] = useState({});

  const currentUserIsInGroup = (accessGroup) => {
    const accessGroupArray = currentUser.accessGroups
      .split(",")
      .map((m) => m.trim());
    return accessGroupArray.includes(accessGroup);
  };

  const backendUrl = process.env.REACT_APP_BACKEND_URL;

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
        gender,
        setGender,
        currentUser,
        setCurrentUser,
        currentUserIsInGroup,
        backendUrl,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
