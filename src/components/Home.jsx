import React, { useState, useEffect } from "react";
import { useTheme } from "../ThemeContext";
import PassengersCriteria from "./flightsSearch/PassengersCriteria.jsx";
import icons from "../functions/icons.js";

function Home(props) {
  const { backendUrl } = useTheme();
  const [passengers, setPassengers] = useState([]);
  const [departureAirport, setDepartureAirport] = useState([]);

  const addNewPassenger = () => {
    setPassengers((prev) => [...prev, {}]);
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

    setPassengers([
      {
        name: "",
        airport: "",
        minDepartureDate: "",
        maxReturnDate: "",
        maxStayTime: 1,
      },
      {
        name: "",
        airport: "",
        minDepartureDate: "",
        maxReturnDate: "",
        maxStayTime: 1,
      },
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={props.className}>
      {passengers.map((passenger, index) => (
        <PassengersCriteria
          key={index}
          departureAirport={departureAirport}
          deletePassenger={() => deletePassenger(index)}
          inputName={index}
          passengerName={`passenger ${index + 1}`}
          passengers={passengers}
        />
      ))}
      <div className="btnContainer">
        <icons.GrAddCircle
          className="addPassengerBtn"
          type="button"
          onClick={addNewPassenger}
        />
        <label>
          <h5>min stay time together</h5>
          <input className="minimumJourney" type="number" defaultValue={1} />
        </label>
        <button className="submitBtn" type="button">
          Search flights
        </button>
      </div>
    </div>

    //ciao
  );
}

export default Home;
