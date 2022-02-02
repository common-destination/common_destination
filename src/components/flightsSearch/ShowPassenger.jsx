import React, { useState } from "react";
import Calendar from "./Calendar.jsx";
import SelectDepartureAirport from "./SelectDepartureAirport.jsx";
import icons from "../../functions/icons.js";

const ShowPassenger = ({
  _passenger,
  // updatePassenger,
  passengerName,
  showDelete,
  deletePassenger,
  departureAirports,
}) => {
  const [passenger, setPassenger] = useState(_passenger);
  // passenger.name = passengerName;

  const handleAirport = (airport) => {
    passenger.airport = airport;
    setPassenger({ ...passenger });
  };

  const handleMinOutboundDate = (minOutboundDate) => {
    passenger.minOutboundDate = minOutboundDate;
    setPassenger({ ...passenger });
  };

  const handleMaxReturnDate = (maxReturnDate) => {
    passenger.maxReturnDate = maxReturnDate;
    setPassenger({ ...passenger });
  };

  // updatePassenger(passenger);

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
          handleAirport={handleAirport}
        />
      </div>
      <div className="chooseDates">
        <Calendar
          handleMinOutboundDate={handleMinOutboundDate}
          handleMaxReturnDate={handleMaxReturnDate}
          minOutboundDate={passenger.minOutboundDate}
          maxReturnDate={passenger.maxReturnDate}
        />
      </div>
    </div>
  );
};

export default ShowPassenger;
