import React, { useState, useEffect } from "react";
import { useTheme } from "../ThemeContext";
import PassengersCriteria from "./flightsSearch/PassengersCriteria.jsx";

function Home(props) {
  const { backendUrl } = useTheme();
  const [arrPassengers, setArrPassengers] = useState([""]);
  const [departureAirport, setDepartureAirport] = useState([]);

  const addNewPassenger = (e) => {
    e.preventDefault();
    setArrPassengers((prev) => [...prev, `${[""]}`]);
  };

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
      {arrPassengers.map((passenger, index) => (
        <PassengersCriteria key={index} departureAirport={departureAirport} index={index} />
      ))}
      <div className="btnContainer">
        <button
          className="addPassengerBtn"
          type="button"
          onClick={addNewPassenger}
        >
          Add new Passenger
        </button>
        <button className="submitBtn" type="button">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Home;
