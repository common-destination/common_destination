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
  const [validationMenuToggle, setValidationMenuToggle] = useState(false);
  const [signupToggle, setSignupToggle] = useState(false);
  const [loginToggle, setLoginToggle] = useState(true);
  const [airplanePosition, setAirplanePosition] = useState(0);
  const [menuAccountToggle, setMenuAccountToggle] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const mediaQueries = {
    smallView: useMediaQuery("(max-width: 750px)"),
  };
  
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const handleLogout = async (e) => {
    const requestOptions = {
      method: "GET",
      credentials: "include",
    };
    const response = await fetch(`${backendUrl}/users/logout`, requestOptions);
    if (response.ok) {
      const _currentUser = await response.json();
      setCurrentUser((prev) => ({ ...prev, ..._currentUser }));
    }
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
        currentUser,
        setCurrentUser,
        backendUrl,
        setMenuAccountToggle,
        menuAccountToggle,
        handleLogout,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
