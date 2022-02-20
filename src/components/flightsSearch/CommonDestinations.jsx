import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../ThemeContext.js";

function CommonDestinations() {
  const [commonDestinations, setCommonDestinations] = useState([]);
  const [uniqueAirports, setUniqueAirports] = useState([]);
  const { backendUrl } = useTheme();
  const navigate = useNavigate();

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
    if (commonDestinations !== "") {
      const _uniqueAirports = [
        ...new Set(
          commonDestinations.map(
            (commonDestination) => commonDestination.airport
          )
        ),
      ];
      setUniqueAirports(_uniqueAirports);
    }
  }, [commonDestinations]);

  const flightsToDestination = (airport) => {
    return commonDestinations.filter(
      (commonDestination) => commonDestination.airport === airport
    );
  };

  return (
    <div className="commonDestinations">
      {commonDestinations.length > 0 && (
        <ul className="destinations">
          {uniqueAirports.map((uniqueAirport, index) => (
            <li key={index} className="destination" toggle>
              <h2>{uniqueAirport}</h2>
              <ul className="flightsToDestination">
                {flightsToDestination(uniqueAirport).map(
                  (flightToDestination, index) => (
                    <li key={index} className="flightToDestination">
                      <h2
                        onClick={() => {
                          navigate("/passenger-flights", {
                            state: flightToDestination.passengerFlights,
                          });
                          
                        }}
                      >{`time: ${flightToDestination.howManyTimeTogether}h ${flightToDestination.groupPrice}€`}</h2>
                    </li>
                  )
                )}
              </ul>
            </li>
          ))}
        </ul>
      )}
      {commonDestinations.length === 0 && commonDestinations !== "" && (
        <h5>Loading...</h5>
      )}
      {commonDestinations === "" && (
        <>
          <h5>
            there are no suitable destinations with these criteria, try changing
            the dates or the meeting time
          </h5>
        </>
      )}
    </div>
  );
}

export default CommonDestinations;
