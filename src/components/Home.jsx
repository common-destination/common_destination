import React, { useState, useEffect } from "react";
import { useTheme } from "../ThemeContext";
import ShowPassenger from "./flightsSearch/ShowPassenger.jsx";
import icons from "../functions/icons.js";

const _emptyPassenger = {
  id: "",
  airport: "",
  minOutboundDate: "",
  maxReturnDate: "",
};

const fillDataIntoPassengers = (passengers) => {
  passengers.forEach((passenger, index) => {
    passenger.id = `${index + 1}`;
    passenger.genericTitle = `Passenger #${index + 1}`;
  });
  return passengers;
};

function Home({ className }) {
  const { backendUrl } = useTheme();
  const [stayTimeTogether, setStayTimeTogether] = useState(1);
  const [passengers, setPassengers] = useState([]);
  const [departureAirports, setDepartureAirports] = useState([]);

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
    const _passengers = [{ ..._emptyPassenger }, { ..._emptyPassenger }];
    setPassengers([...fillDataIntoPassengers(_passengers)]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log({ passengers });

  const handlePassengerChange = () => {
    setPassengers([...passengers]);
  };

  const handlePassengerAdd = () => {
    const _passengers = [...passengers, { ..._emptyPassenger }];
    fillDataIntoPassengers(_passengers);
    setPassengers([..._passengers]);
  };

  const handlePassengerDelete = (index) => {
    const _passengers = [...passengers];
    _passengers.splice(index, 1);
    fillDataIntoPassengers(_passengers);
    setPassengers([..._passengers]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ passengers, stayTimeTogether }),
    };
    // console.log("request" + requestOptions);
    const response = await fetch(
      `${backendUrl}/flights/passengers-data`,
      requestOptions
    );
    // console.log("repsonse" + response);
    if (response.ok) {
      // const _passengers = await response.json();

      const _passengers = [{ ..._emptyPassenger }, { ..._emptyPassenger }];
      setPassengers([...fillDataIntoPassengers(_passengers)]);
    } else {
      console.log("error");
    }
  };

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
          handlePassengerChange={handlePassengerChange}
          handlePassengerDelete={handlePassengerDelete}
          canDelete={passengers.length > 2}
          passenger={passenger}
        />
      ))}
      <div className="btnContainer">
        <icons.GrAddCircle
          className="addPassengerBtn"
          type="button"
          onClick={handlePassengerAdd}
        />
        <button className="submitBtn" type="button" onClick={handleSubmit}>
          Search flights
        </button>
      </div>
    </div>
  );
}

export default Home;

