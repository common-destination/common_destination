import React, { useState, useContext } from 'react';
import useMediaQuery from './components/UseMediaQuery';

const ThemeContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [burgerMenuToggle, setBurgerMenuToggle] = useState(false);
  const devices = {
    burgerMenu: useMediaQuery('(max-width: 750px)'),
  };

  return (
    <ThemeContext.Provider
      value={{
        devices,
        burgerMenuToggle,
        setBurgerMenuToggle,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
