import React, { useState, useContext } from 'react';
import useMediaQuery from './components/UseMediaQuery';

const ThemeContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const devices = {
    burgerMenu: useMediaQuery('(max-width: 750px)'),
    iPHone4: useMediaQuery('(max-width: 320px) and (max-height: 480px)'),
    mobilePortrait: useMediaQuery('(max-width: 567px)'),
    mobileLandscape: useMediaQuery('(min-width: 568px) and (max-width: 767px)'),
    tabletPortrait: useMediaQuery('(min-width: 768px) and (max-width: 1023px)'),
    tabletLandscape: useMediaQuery(
      '(min-width: 1024px) and (max-width: 1365px)'
    ),
    laptopDisplays: useMediaQuery(
      '(min-width: 1366px) and (max-width: 1679px)'
    ),
    desktopDisplays: useMediaQuery('(min-width: 1680px)'),
  };

  return (
    <ThemeContext.Provider
      value={{
        devices,
        burgerMenu,
        setBurgerMenu,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}