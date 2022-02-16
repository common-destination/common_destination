import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useTheme } from "../../ThemeContext.js";

function CommonDestinations() {
  const [commonDestinations, setCommonDestinations] = useState([]);
  const [uniqueAirports, setUniqueAirports] = useState([]);
  const { backendUrl, setFlightsToDestination } = useTheme();

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

  const getFlightsToDestination = (airport) => {
    const _flightsToDestination = commonDestinations.filter(
      (commonDestination) => commonDestination.airport === airport
    );
    setFlightsToDestination(_flightsToDestination);
    console.log(_flightsToDestination);
  };
  return (
    <div className="commonDestinations">
      {/* {!commonDestinations && (
        <>
          <h5>
            there are no suitable destinations with these criteria, try changing
            the dates or the meeting time
          </h5>
        </>
      )} */}

      {commonDestinations.length > 0 ? (
        <ul className="destinations">
          {uniqueAirports.map((uniqueAirport, index) => (
            <NavLink
              key={index}
              to="flights-to-destination"
              onClick={() => getFlightsToDestination(uniqueAirport)}
            >
              <div key={index} className="destination">
                <h2>{uniqueAirport}</h2>
              </div>
            </NavLink>
          ))}
        </ul>
      ) : (
        <h5>Loading...</h5>
      )}
      <Outlet />
    </div>
  );
}

export default CommonDestinations;
