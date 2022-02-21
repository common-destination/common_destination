// import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function PassengersFlights() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="passengerFlights">
      <button onClick={() => navigate(-1)}>go back</button>
      <ul className="passengerFlightsList">
        {location.state.map((passengerFlight, index) => (
          <li key={index} className="passengerFlight">
            <h3>{`passenger ${passengerFlight.passengerId}`}</h3>
            <h3>{`OUTBOUND:${passengerFlight.outboundFlight.from}  departure:${passengerFlight.outboundFlight.departure} - arrival:${passengerFlight.outboundFlight.arrival}`}</h3>
            <h3>{`RETURN:${passengerFlight.returnFlight.from}  departure:${passengerFlight.returnFlight.departure} - arrival:${passengerFlight.returnFlight.arrival}`}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PassengersFlights;
