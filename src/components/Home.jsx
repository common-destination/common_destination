import React, { useState, useEffect } from "react";
import { useTheme } from "../ThemeContext";
import ShowPassenger from "./flightsSearch/ShowPassenger.jsx";
import icons from "../functions/icons.js";

function Home({className}) {
  const { backendUrl } = useTheme();
  const [passengers, setPassengers] = useState([]);
  const [departureAirports, setDepartureAirports] = useState([]);
  const passengerSchema = {
    name: "",
    airport: "",
    minDepartureDate: "",
    maxReturnDate: "",
  }

  const addNewPassenger = () => {
    setPassengers((prev) => [...prev, passengerSchema]);
  };

  const deletePassenger = (wichPassenger) => {
    if (passengers.length > 2) {
      let newArray = [...passengers];
      newArray.splice(wichPassenger, 1);
      return setPassengers(newArray);
      //   setPassengers(
      //           passengers.filter((element) => passenger.name !== wichPassenger)
      //         );
      // }
    }
  };

  const updatePassenger = (passenger) => {
    setPassengers((prev) => [...prev, passenger]);
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
        const _departureAirports = await response.json();
        setDepartureAirports(_departureAirports);
      }
    })();

    setPassengers([
      passengerSchema,
      passengerSchema,
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(passengers);

  return (
    <div className={className}>
      <div className="passengerAmount">
        <span>Passengers: {passengers.length}</span>
        <label>
          <h5>min stay time together</h5>
          <input className="minimumJourney" type="number" min="0" defaultValue={1} />
        </label>
      </div>

      {passengers.map((passenger, index) => (
        <ShowPassenger
          key={index}
          departureAirports={departureAirports}
          deletePassenger={() => deletePassenger(index)}
          // updatePassenger={updatePassenger}
          inputName={index}
          passengerName={`passenger ${index + 1}`}
          showDelete={passengers.length > 2}
          _passenger={passenger}
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
