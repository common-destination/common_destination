import React, { useState, useEffect } from "react";
import Caledar from "./flightsSearch/Caledar";
import SelectDepartureAirport from "./flightsSearch/SelectDepartureAirport";
import { useTheme } from "../ThemeContext";

function Home(props) {
  const { backendUrl } = useTheme();
  const [arrPassengers, setArrPassengers] = useState([""]);
  const [departureAirport, setDepartureAirport] = useState([]);

  useEffect(() => {
    (async () => {
      const requestOptions = {
        method: "GET",
        credentials: "include",
      };
      const response = await fetch(
        `${backendUrl}/flights/airports`,
        requestOptions
      );
      if (response.ok) {
        const _departureAirport = await response.json();
        setDepartureAirport(_departureAirport);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(departureAirport);

  return (
    <div className={props.className}>
      <form>
        {arrPassengers.map((passenger, index) => (
          <div key={index}>
            <SelectDepartureAirport departureAirport={departureAirport} />
            <Caledar />
          </div>
        ))}
        <button
          type="button"
          onClick={() => setArrPassengers((prev) => [...prev, `${[""]}`])}
        >
          Add new Passenger
        </button>
        <button type="button">Submit</button>
      </form>
    </div>
  );
}

export default Home;
