import React, { useState, useEffect } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import ShowPassenger from "./flightsSearch/ShowPassenger.jsx";
import GeneralCriteria from "./flightsSearch/GeneralCriteria.jsx";
import icons from "../functions/icons.js";

const _emptyPassenger = {
  id: "",
  airport: "",
  minOutboundDate: "",
  maxReturnDate: "",
};

function Home({ className }) {
  const { backendUrl } = useTheme();
  const [stayTimeTogether, setStayTimeTogether] = useState(24);
  const [passengers, setPassengers] = useState([]);
  const [departureAirports, setDepartureAirports] = useState([]);
  const [datesValidation, setDatesValidation] = useState(false);
  const navigate = useNavigate();
  const outbounds = passengers.map((passenger) => passenger.minOutboundDate);
  const returns = passengers.map((passenger) => passenger.maxReturnDate);

  const fillDataIntoPassengers = (passengers) => {
    passengers.forEach((passenger, index) => {
      passenger.id = `${index + 1}`;
      passenger.genericTitle = `Passenger${index + 1}`;
      // passenger.minOutboundDate = new Date();
      // passenger.maxReturnDate = new Date(
      //   moment().add(stayTimeTogether, "hours")
      // );
    });
    return passengers;
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
    const _passengers = [{ ..._emptyPassenger }, { ..._emptyPassenger }];
    setPassengers([...fillDataIntoPassengers(_passengers)]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log(passengers);
  // console.log(stayTimeTogether);

  useEffect(() => {
    if (outbounds.length > 0 && returns.length > 0) {
      const earliestReturn = moment(
        returns.reduce((a, b) => Math.min(moment(a), moment(b)))
      );
      const lastestOutbound = moment(
        outbounds.reduce((a, b) => Math.max(moment(b), moment(a)))
      );
      const howManyTimeTogether = moment(earliestReturn).diff(
        moment(lastestOutbound),
        "hours"
      );

      howManyTimeTogether + 1 >= stayTimeTogether
        ? setDatesValidation(true)
        : setDatesValidation(false);
    }
  }, [passengers, outbounds, returns, stayTimeTogether]);

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
    const response = await fetch(
      `${backendUrl}/flights/passengers-data`,
      requestOptions
    );

    if (returns.includes("") || outbounds.includes("")) {
      setDatesValidation(false);
      alert("empty fields");
    }
    if (response.ok && datesValidation) {
      const _passengers = [{ ..._emptyPassenger }, { ..._emptyPassenger }];
      setPassengers([...fillDataIntoPassengers(_passengers)]);
      navigate("/commonDestinations");
    } else {
      console.log("error");
    }
  };

  // console.log({ passengers });
  return (
    <div className={className}>
      <div className="passengersCriteria">
        <GeneralCriteria
          passengers={passengers}
          stayTimeTogether={stayTimeTogether}
          setStayTimeTogether={setStayTimeTogether}
        />
        {passengers.map((passenger, index) => (
          <ShowPassenger
            key={index}
            departureAirports={departureAirports}
            handlePassengerChange={handlePassengerChange}
            handlePassengerDelete={handlePassengerDelete}
            canDelete={passengers.length > 2}
            passenger={passenger}
            stayTimeTogether={stayTimeTogether}
          />
        ))}
        <div className="btnContainer">
          <icons.GrAddCircle
            className="addPassengerBtn"
            type="button"
            onClick={handlePassengerAdd}
          />
          <button className="submitBtn" type="button" onClick={handleSubmit}>
            Common Destinations
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
