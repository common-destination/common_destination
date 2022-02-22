import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../ThemeContext.js";
import icons from "../../functions/icons.js";

function CommonDestinations() {
  const [commonDestinations, setCommonDestinations] = useState([]);
  const { backendUrl } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const requestOptions = {
        method: "GET",
        credentials: "include",
      };
      const response = await fetch(
        `${backendUrl}/common-destinations`,
        requestOptions
      );
      const _commonDestinations = await response.json();
      setCommonDestinations(_commonDestinations);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const convertHours = (timeTogether) => {
    const day = Math.floor(timeTogether / 24);
    const hour = Math.floor(timeTogether % 24);
    if (day === 0 && hour === 1) return `${hour} hour`;
    else if (day === 0 && hour > 1) return `${hour} hours`;
    else if (day === 1 && hour === 0) return `${day} day`;
    else if (day === 1 && hour === 1) return `${day} day ${hour} hour`;
    else if (day === 1 && hour > 1) return `${day} day ${hour} hours`;
    else if (day > 1 && hour === 0) return `${day} days`;
    else if (day > 1 && hour === 1) return `${day} days ${hour} hour`;
    else if (day > 1 && hour > 1) return `${day} days ${hour} hours`;
    else return `${day} days ${hour} hours, please check again`;
  };
  convertHours();

  return (
    <div className="commonDestinations">
      {commonDestinations.length > 0 && (
        <ul className="destinations">
          {commonDestinations.map((destination, index) => (
            <li key={index} className="destination">
              <h2>{destination.airport}</h2>
              <ul className="commonDestinationsToAirport">
                {destination.commonDestinationsToAirport.map(
                  (commonDestinationToAirport, index) => (
                    <li
                      key={index}
                      className="commonDestinationToAirport"
                      onClick={() => {
                        navigate("/passenger-flights", {
                          state: commonDestinationToAirport.trips,
                        });
                      }}
                    >
                      <icons.FaClock />
                      {convertHours(commonDestinationToAirport.timeTogether)}
                      <icons.FaEuroSign />
                      {commonDestinationToAirport.groupPrice}
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
