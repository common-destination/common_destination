import React, { useState, useEffect } from "react";
import { useTheme } from "../ThemeContext";
import ShowPassenger from "./flightsSearch/ShowPassenger.jsx";
import icons from "../functions/icons.js";

function Home({ className }) {
  const { backendUrl } = useTheme();
  const [stayTimeTogether, setStayTimeTogether] = useState(1);
  const [passengers, setPassengers] = useState([]);
  const [departureAirports, setDepartureAirports] = useState([]);
  const emptyPassenger = {
    name: "",
    airport: "",
    minDepartureDate: "",
    maxReturnDate: "",
  };

  const addNewPassenger = () => {
    const _passengers = updatePassengersNames([...passengers, emptyPassenger]);
    setPassengers([..._passengers]);
  };

  const deletePassenger = (wichPassenger) => {
    if (passengers.length > 2) {
      let newArray = [...passengers];
      newArray.splice(wichPassenger, 1);
      console.log(newArray);
      const _passengers = updatePassengersNames(newArray);
      console.log(_passengers);

      setPassengers([..._passengers]);
      //   setPassengers(
      //           passengers.filter((element) => passenger.name !== wichPassenger)
      //         );
      // }
    }
    // updatePassengersNames(_passengers);
  };

  const updatePassenger = (passenger) => {
    // setPassengers((prev) => [...prev, passenger]);
    // console.log(passenger);
  };

  const updatePassengersNames = (passengers) => {
    const arr = [];
    passengers.forEach((passenger, index) => {
      const _passenger = { ...passenger };
      _passenger.name = `passenger${index + 1}`;
      arr.push(_passenger);
      // console.log(_passenger);
    });
    // console.log(arr);
    return arr;
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
    let _passengers = [emptyPassenger, emptyPassenger];
    _passengers = updatePassengersNames(_passengers);
    console.log({ _passengers });
    setPassengers([..._passengers]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log(passengers);


  return (
    <div className={className}>
      <div className="passengerAmount">
        <span>passengers: {passengers.length}</span>
        <label>
          <h5>min stay time together</h5>
          <input
            className="minimumJourney"
            type="number"
            value={stayTimeTogether}
            onChange={(e) => setStayTimeTogether(e.target.value)}
          />
        </label>
      </div>

      {passengers.map((passenger, index) => (
        <ShowPassenger
          key={index}
          departureAirports={departureAirports}
          deletePassenger={() => deletePassenger(index)}
          updatePassenger={updatePassenger}
          inputName={index}
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
