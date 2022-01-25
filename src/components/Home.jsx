import React, { useState, useEffect } from "react";
import Caledar from "./flightsSearch/Caledar";
import SelectDepartureAirport from "./flightsSearch/SelectDepartureAirport";
// import { useTheme } from "../ThemeContext";

function Home(props) {
  const [arrPassengers, setArrPassengers] = useState([""]);
  const [departureAirport, setDepartureAirport] = useState([]);

  useEffect(() => {
    (async () => {
      const requestOptions = {
        method: "GET",
        credentials: "include",
      };
      // console.log("requestOptions", requestOptions);
      const response = await fetch(
        `http://localhost:8033/flights/airports`,
        requestOptions
      );
      // console.log("response", response);
      if (response.ok) {
        const _departureAirport = await response.json();
        setDepartureAirport(_departureAirport);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log("departureAirport", departureAirport);

  return (
    <div className={props.className}>
      {arrPassengers.map((passenger, index) => (
        <div key={index}>
          <SelectDepartureAirport />
          <Caledar />
        </div>
      ))}
      <button
        type="button"
        onClick={() => setArrPassengers((prev) => [...prev, `${[""]}`])}
      >
        Add new Passenger
      </button>
      <form>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Home;

