// import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import icons from "../../functions/icons.js";

function PassengersFlights() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="passengerFlights">
     
      <ul className="passengerFlightsList">
        {location.state.map((passengerFlight, index) => (
          <li key={index} className="passengerFlight">
            <div>
              <icons.FaUser />
              {passengerFlight.passengerId}
            </div>
            <div className="passengerOutbound">
              <p>{`OUTBOUND: ${passengerFlight.outboundFlight.from}`}</p>
              <p><icons.FaPlaneDeparture />{passengerFlight.outboundFlight.departure} - <icons.FaPlaneArrival />{passengerFlight.outboundFlight.arrival}
              </p>
            </div>
            <div className="passengerOutbound">
              <p>{`RETURN: ${passengerFlight.returnFlight.from} `}</p>
              <p>
                <icons.FaPlaneDeparture />
                {passengerFlight.returnFlight.departure} - <icons.FaPlaneArrival />
                {passengerFlight.returnFlight.arrival}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate(-1)}>go back</button>
    </div>
  );
}

export default PassengersFlights;
