import React, { useState } from "react";
import SelectDepartureAirport from "./flightsSearch/SelectDepartureAirport";
// import { useTheme } from "../ThemeContext";

function Home(props) {
  const [arrPassengers, setArrPassengers] = useState([""]);

  return (
    <div className={props.className}>
      {arrPassengers.map((passenger) => (
        <div>
          <SelectDepartureAirport />
        </div>
      ))}
      <button
        type="button"
        onClick={() => setArrPassengers((prev) => [...prev, `${[""]}`])}
      >
        Add new Passenger
      </button>
    </div>
  );
}

export default Home;
