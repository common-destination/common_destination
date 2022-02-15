import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useTheme } from "../../ThemeContext.js";

function CommonDestinations(className) {
  const [commonDestinations, setCommonDestinations] = useState([]);
  const { backendUrl } = useTheme();
  // const navigate = useNavigate();

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
      console.log(response);
      if (response.ok) {
        const _commonDestinations = await response.json();
        setCommonDestinations(_commonDestinations);
        console.log(commonDestinations);
      }
    })();
    // console.log(currentUser);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={className}>
      <ul>
        {commonDestinations.map(
          (commonDestination) =>
            [...new Set(commonDestination.airport)].map(
              (uniqueAirport, index) => <div key={index}>{uniqueAirport}</div>
            )
            // [...new Set(airports.map((airport) => airport.airport))]
          // <>
          //   <h2>{commonDestination.airport}</h2>
          //   {/* <li>{commonDestination.passengerFlights}</li> */}
          // </>
        )}
      </ul>
    </div>
  );
}

export default CommonDestinations;
