import React, { useState, useEffect } from "react";
import { useTheme } from "../ThemeContext";
import PassengersCriteria from "./flightsSearch/PassengersCriteria.jsx";
import icons from "../functions/icons.js";

function Home(props) {
  const { backendUrl } = useTheme();
  const [arrPassengers, setArrPassengers] = useState(["passenger"]);
  const [departureAirport, setDepartureAirport] = useState([]);

  const addNewPassenger = () => {
    setArrPassengers((prev) => [...prev, "passenger"]);
  };

  const deletePassenger = (wichPassenger) => {
    let newArray = [...arrPassengers];
    newArray.splice(wichPassenger, 1);
    return setArrPassengers(newArray);
  };

  console.log(arrPassengers);

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
    setArrPassengers((prev) =>
      prev.map((passenger, index) => `passenger ${index + 1}`)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arrPassengers]);

  return (
    <div className={props.className}>
      {arrPassengers.map((passenger, index) => (
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
