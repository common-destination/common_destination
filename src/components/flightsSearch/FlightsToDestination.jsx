import React from "react";
import { useTheme } from "../../ThemeContext.js";
import { NavLink, Outlet } from "react-router-dom";

function FlightToDestination() {
  const { flightsToDestination, setPassengersFlights } = useTheme();

  const getPassengersFlights = (flightsToDestination) => {
    const _passengersFlights = flightsToDestination.passengerFlights;
    setPassengersFlights(_passengersFlights);
    console.log(_passengersFlights);
  };

  return (
    <>
      <ul className="flightsToDestination">
        {flightsToDestination.map((flightToDestination, index) => (
          <NavLink
            key={index}
            to="passenger-flights"
            onClick={() =>
              getPassengersFlights(flightToDestination)
            }
          >
            <div key={index} className="flightToDestination">
              <h2>{`${flightToDestination.airport}-${flightToDestination.howManyTimeTogether}h--${flightToDestination.groupPrice}€`}</h2>
            </div>
          </NavLink>
        ))}
      </ul>
      <Outlet />
    </>
  );
}

export default FlightToDestination;
