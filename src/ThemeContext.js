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
  const [gender, setGender] = useState("male");
  const [airplanePosition, setAirplanePosition] = useState(0);
  const mediaQueries = {
    burgerMenu: useMediaQuery("(max-width: 750px)"),
  };
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const [currentUser, setCurrentUser] = useState({});
  const [appMessage, setAppMessage] = useState({kind:"none", message: ""});

  // useEffect(() => {
  //   (async () => {
  //     const requestOptions = {
  //       method: "GET",
  //       credentials: "include",
  //     };
  //     const response = await fetch(
  //       // `${backendUrl}/users/currentuser`,
  //       `http://localhost:7033/users/currentuser`,
  //       requestOptions
  //     );
  //     if (response.ok) {
  //       const _currentUser = await response.json();
  //       setCurrentUser((prev) => ({ ...prev, ..._currentUser }));
  //     }
  //   })();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const initializePage = () => {
		setAppMessage(prev => ({ ...prev, ...{ kind: 'none', message: '' } }));
	}

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
        backendUrl,
        appMessage, 
			setAppMessage,
			initializePage
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
