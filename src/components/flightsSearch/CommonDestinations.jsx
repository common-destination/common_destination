import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
import { useTheme } from "../../ThemeContext.js";

function CommonDestinations() {
  const [commonDestinations, setCommonDestinations] = useState([]);
  const [uniqueAirports, setUniqueAirports] = useState([]);
  const { backendUrl } = useTheme();

  useEffect(() => {
    (async () => {
      const requestOptions = {
        method: "GET",
        credentials: "include",
      };
      const response = await fetch(
        `${backendUrl}/common-destinations/two`,
        requestOptions
      );
      const _commonDestinations = await response.json();
      setCommonDestinations(_commonDestinations);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const _uniqueAirports = [
      ...new Set(
        commonDestinations.map((commonDestination) => commonDestination.airport)
      ),
    ];
    setUniqueAirports(_uniqueAirports);
  }, [commonDestinations]);

  const flightsToDestination = (airport) => {
    return commonDestinations.filter(
      (commonDestination) => commonDestination.airport === airport
    );
  };

  return (
    <div className="commonDestinations">
      {commonDestinations.length > 0 ? (
        <ul className="destinations">
          {uniqueAirports.map((uniqueAirport, index) => (
            <li key={index} className="destination">
              <h2>{uniqueAirport}</h2>
              <ul className="flightsToDestination">
                {flightsToDestination(uniqueAirport).map(
                  (flightToDestination, index) => (
                    <li key={index} className="flightToDestination">
                      <h2>{`${flightToDestination.airport}-${flightToDestination.howManyTimeTogether}h--${flightToDestination.groupPrice}€`}</h2>
                      <ul className="passengerFlights">
                        {flightToDestination.passengerFlights.map(
                          (passengerFlight, index) => (
                            <li key={index} className="passengerFlight">
                              <h2>{`passenger${passengerFlight.passengerId}:  ${passengerFlight.outboundFlight.from} - ${passengerFlight.outboundFlight.to}`}</h2>
                              <h2>{`passenger${passengerFlight.passengerId}:   ${passengerFlight.returnFlight.from} - ${passengerFlight.returnFlight.to}`}</h2>
                              <ul className="passengerFlight">
                                <h3>{`OUTBOUND:${passengerFlight.outboundFlight.from}  departure:${passengerFlight.outboundFlight.departure} - arrival:${passengerFlight.outboundFlight.arrival}`}</h3>
                                <h3>{`RETURN:${passengerFlight.returnFlight.from}  departure:${passengerFlight.returnFlight.departure} - arrival:${passengerFlight.returnFlight.arrival}`}</h3>
                              </ul>
                            </li>
                          )
                        )}
                      </ul>
                    </li>
                  )
                )}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <h5>Loading...</h5>
      )}
    </div>
  );
}

export default CommonDestinations;
