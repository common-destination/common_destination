import React, { useState, useEffect } from "react";
import Caledar from "./flightsSearch/Caledar";
import SelectDepartureAirport from "./flightsSearch/SelectDepartureAirport";
import { useTheme } from "../ThemeContext";
import InputRadio from "./flightsSearch/InputRadio";
// import InputType from "./flightsSearch/InputType";

function Home(props) {
  const { backendUrl } = useTheme();
  const [arrPassengers, setArrPassengers] = useState([""]);
  const [departureAirport, setDepartureAirport] = useState([]);
  const [counter, setCounter] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCounter(counter);
    setCounter(counter + 1);
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
  // console.log(departureAirport);

  return (
    <div className={props.className}>
      {arrPassengers.map((passenger, index) => (
        <div className="flightSearch" key={index}>
          <div className="inputRadioContainer">
            <InputRadio text="Roundtrip" inputName={index} />
            <InputRadio text="Oneway" inputName={index} />
          </div>
          <SelectDepartureAirport departureAirport={departureAirport} />
          <Caledar />
        </div>
      ))}
      <div className="btnContainer">
        <button
          className="addPassengerBtn"
          type="button"
          onClick={handleSubmit}
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
