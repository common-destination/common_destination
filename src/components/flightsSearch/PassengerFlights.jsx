import React from "react";
import { useTheme } from "../../ThemeContext.js";
import { NavLink, Outlet } from "react-router-dom";

function PassengersFlights() {
  const { passengersFlights, setPassengerFlight} = useTheme();
    const getPassengerFlight = (passengersFlights) => {
      const _passengerFlight = passengersFlights;
      setPassengerFlight(_passengerFlight);
      console.log(_passengerFlight);
    };

  return (
    <>
      <ul className="passengerFlights">
        {passengersFlights.map((passengerFlight, index) => (
            <NavLink key={index} to="passenger-flight"  onClick={() => getPassengerFlight(passengerFlight)}>
          <div key={index} className="passengerFlight">
            <h2>{`passenger${passengerFlight.passengerId}: flightId:${passengerFlight._id} ${passengerFlight.outboundFlight.from} - ${passengerFlight.outboundFlight.to}`}</h2>
            <h2>{`passenger${passengerFlight.passengerId}:  flightId:${passengerFlight._id} ${passengerFlight.returnFlight.from} - ${passengerFlight.returnFlight.to}`}</h2>
          </div>
           </NavLink>
        ))}
      </ul>
      <Outlet />
    </>
  );
}

export default PassengersFlights;
