import React, { useState, useEffect } from "react";
import { useTheme } from "../ThemeContext";
import PassengersCriteria from "./flightsSearch/PassengersCriteria.jsx";
import icons from "../functions/icons.js";

function Home(props) {
  const { backendUrl } = useTheme();
  const [passengers, setPassengers] = useState(["passenger"]);
  // const [passengers, setPassengers] = useState([
  //   "passenger1",
  //   "passenger2",
  //   "passenger3",
  //   "passenger4",
  // ]);
  const [departureAirport, setDepartureAirport] = useState([]);

  const addNewPassenger = () => {
    setPassengers((prev) => [...prev, "passenger"]);
  };

  const deletePassenger = (wichPassenger) => {
    let newArray = [...passengers];
    newArray.splice(wichPassenger, 1);
    return setPassengers(newArray);
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
  }, [passengers]);

  return (
    <div className={props.className}>
      {passengers.map((passenger, index) => (
        <PassengersCriteria
          key={index}
          departureAirport={departureAirport}
          deletePassenger={() => deletePassenger(index)}
          index={index}
          passengerName={passenger}
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
