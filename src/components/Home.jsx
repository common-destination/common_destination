import React, { useState, useEffect } from "react";
import { useTheme } from "../ThemeContext";
import PassengersCriteria from "./flightsSearch/PassengersCriteria.jsx";
import icons from "../functions/icons.js";

function Home(props) {
  const { backendUrl } = useTheme();
  const [passengers, setPassengers] = useState(["passenger1", "passengers2"]);
  const [departureAirport, setDepartureAirport] = useState([]);
  const [counter, setCounter] = useState(0);

  const addNewPassenger = () => {
    setPassengers((prev) => [...prev, "passenger"]);
    setCounter((prev) => prev + 1);
  };

  const deletePassenger = (wichPassenger) => {
    if (passengers.length > 2) {
      setCounter((prev) => prev - 1);
      let newArray = [...passengers];
      newArray.splice(wichPassenger, 1);
      return setPassengers(newArray);
    }
  };

  console.log(passengers);

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

  useEffect(() => {
    setPassengers((prev) =>
      prev.map((passenger, index) => `passenger ${index + 1}`)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  return (
    <div className={props.className}>
      {passengers.map((passenger, index) => (
        <PassengersCriteria
          key={index}
          departureAirport={departureAirport}
          deletePassenger={() => deletePassenger(index)}
          inputName={index}
          passengerName={passenger}
          passengers={passengers}
        />
      ))}
      <div className="btnContainer">
        <icons.GrAddCircle
          className="addPassengerBtn"
          type="button"
          onClick={addNewPassenger}
        />
        <button className="submitBtn" type="button">
          Search flights
        </button>
      </div>
    </div>
  );
}

export default Home;
