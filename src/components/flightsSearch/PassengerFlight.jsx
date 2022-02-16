import React from "react";
import { useTheme } from "../../ThemeContext.js";

function PassengersFlight() {
  const { passengerFlight } = useTheme();

  return (
    <>
      <ul className="passengerFlight">
        <h2>{`passenger:${passengerFlight.passengerId} flightID:${passengerFlight.passengerId}`}</h2>
        <h3>{`OUTBOUND:${passengerFlight.outboundFlight.from}  departure:${passengerFlight.outboundFlight.departure} - arrival:${passengerFlight.outboundFlight.arrival}`}</h3>
        <h3>{`RETURN:${passengerFlight.returnFlight.from}  departure:${passengerFlight.returnFlight.departure} - arrival:${passengerFlight.returnFlight.arrival}`}</h3>
      </ul>
    </>
  );
}

export default PassengersFlight;
