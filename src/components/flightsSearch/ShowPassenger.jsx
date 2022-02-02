import React, { useState, useEffect } from "react";
import Calendar from "./Calendar.jsx";
import SelectDepartureAirport from "./SelectDepartureAirport.jsx";
import icons from "../../functions/icons.js";

const ShowPassenger = ({
  _passenger,
  updatePassenger,
  passengerName,
  showDelete,
  deletePassenger,
  departureAirports,
}) => {
  // const [airport, setAirport] = useState("");
  // const [minOutboundDate, setMinOutboundDate] = useState("");
  // const [maxReturnDate, setMaxReturnDate] = useState("");
  const [passenger, setPassenger] = useState(_passenger);

  const handleAirportChange = (airport) => {
    passenger.airport = airport;
    setPassenger({ ...passenger });
  };

  // const handleCalendarChange = (airport) => {
  //   passenger.airport = airport;
  //   setPassenger({ ...passenger });
  // };


  return (
    <div className="flightSearch">
      <div className="inputRadioContainer">
        <h3>{passengerName}</h3>
        {showDelete && (
          <icons.RiDeleteBinLine
            className="deletePassenger"
            onClick={deletePassenger}
          />
        )}
      </div>
      <div className="searchAndInputNumberWrapper">
        <SelectDepartureAirport
          departureAirports={departureAirports}
          airport={passenger.airport}
          handleAirportChange={handleAirportChange}
        />
      </div>
      <div className="chooseDates">
        {/* <Calendar
          minOutboundDate={passenger.minOutboundDate}
          setMinOutboundDate={setMinOutboundDate}
          maxReturnDate={passenger.maxReturnDate}
          setMaxReturnDate={setMaxReturnDate}
        /> */}
      </div>
    </div>
  );
};

export default ShowPassenger;
