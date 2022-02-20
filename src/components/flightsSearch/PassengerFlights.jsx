import React from "react";
import { useTheme } from "../../ThemeContext.js";
import { useNavigate } from "react-router-dom";

function PassengersFlights() {
  const { passengerFlights } = useTheme();
  const navigate = useNavigate();
  return (
    <div>
       <button onClick={() => navigate(-1)}>go back</button>
      <ul className="passengerFlights">
        {passengerFlights.map((passengerFlight, index) => (
          <li key={index} className="passengerFlight">
            <h2>{`passenger${passengerFlight.passengerId}:  ${passengerFlight.outboundFlight.from} - ${passengerFlight.outboundFlight.to}`}</h2>
            <h2>{`passenger${passengerFlight.passengerId}:   ${passengerFlight.returnFlight.from} - ${passengerFlight.returnFlight.to}`}</h2>
            <ul className="passengerFlight">
              <h3>{`OUTBOUND:${passengerFlight.outboundFlight.from}  departure:${passengerFlight.outboundFlight.departure} - arrival:${passengerFlight.outboundFlight.arrival}`}</h3>
              <h3>{`RETURN:${passengerFlight.returnFlight.from}  departure:${passengerFlight.returnFlight.departure} - arrival:${passengerFlight.returnFlight.arrival}`}</h3>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PassengersFlights;
