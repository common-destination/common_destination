import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/App.scss";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { useTheme } from "./ThemeContext";

function App() {
  const { setScrollbar, setAirplanePosition } = useTheme();
  const [scrollCount, setScrollCount] = useState(0);

  window.addEventListener("scroll", function () {
    let differce = window.pageYOffset - scrollCount;
    setScrollCount(window.pageYOffset);

    // console.log(`pageYOffset:${window.pageYOffset}`);
    // console.log(`scrollCount: ${scrollCount}`);
    // console.log(differce);
    if (window.pageYOffset === 0) {
      setScrollbar("stopDown");
      setAirplanePosition(0);
    } else if (window.pageYOffset > scrollCount) {
      setScrollbar("down");
      setAirplanePosition(window.pageYOffset / 10);
    } else if (window.pageYOffset < scrollCount && window.pageYOffset !== 0) {
      setScrollbar("up");
      setAirplanePosition(window.pageYOffset / 10);
    }
    setTimeout(() => {
      if (differce === 1 && window.pageYOffset !== 0) {
        setScrollbar("stopUp");
        setAirplanePosition(window.pageYOffset);
      }
    }, 2000);
  });

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Main />
      </div>
    </Router>
  );
}

export default App;
