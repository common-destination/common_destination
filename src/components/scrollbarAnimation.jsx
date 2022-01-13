import { useState, useRef, useEffect } from "react";
import { useTheme } from "../ThemeContext";

const ScrollbarAnimation = () => {
  const [scrollCount, setScrollCount] = useState(0);
  const { setScrollbar, setAirplanePosition } = useTheme();
  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }
  const prevCount = usePrevious(scrollCount);
  window.addEventListener("scroll", function () {
    setScrollCount(window.pageYOffset);
    // console.log(`pageYOffset:${window.pageYOffset}`);
    // console.log(`scrolly:${window.scrollY}`);
    console.log(`scrollCount: ${scrollCount}`);
    console.log(`prevCountt: ${prevCount}`);
    // console.log(differce);
    if (window.scrollY === 0) {
      setScrollbar("stopDown");
      setAirplanePosition(0);
    } else if (window.scrollY > scrollCount) {
      setScrollbar("down");
      setAirplanePosition(window.scrollY / 10);
    } else if (window.scrollY < scrollCount && window.scrollY !== 0) {
      setScrollbar("up");
      setAirplanePosition(window.scrollY / 10);
    }
    setTimeout(() => {
      if (scrollCount === prevCount && window.scrollY !== 0) {
        setScrollbar("stopUp");
        setAirplanePosition(window.scrollY / 10);
      }
    }, 5000);
  });
};

export default ScrollbarAnimation;
