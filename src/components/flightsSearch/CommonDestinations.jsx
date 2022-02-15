import React, { useEffect, useState } from "react";
import { Routes, Route} from "react-router-dom";
import { useTheme } from "../../ThemeContext.js";
import CommonDestination from "./CommonDestination.jsx";

function CommonDestinations({ className }) {
  const [commonDestinations, setCommonDestinations] = useState([]);
  const [uniqueAirports, setUniqueAirports] = useState([]);
  const { backendUrl } = useTheme();
  console.log(commonDestinations);
  // console.log(uniqueAirports);
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
  return (
    <div className={className}>
         {/* <Routes>
            {uniqueAirports.map((uniqueAirport, index) => (
              <Route
                path="/uniqueAirport"
                element={
                  <CommonDestination key={index} airport={uniqueAirport} />
                }
              ></Route>
            ))}
          </Routes> */}
      {/* {!commonDestinations && (
        <>
          <h5>
            there are no suitable destinations with these criteria, try changing
            the dates or the meeting time
          </h5>
        </>
      )} */}

      {commonDestinations.length > 0 ? (
        <ul className="uniqueAirports">
          <Routes>
            {uniqueAirports.map((uniqueAirport, index) => (
              <Route
                path="/uniqueAirport"
                element={
                  <CommonDestination key={index} airport={uniqueAirport} />
                }
              ></Route>
            ))}
          </Routes>
        </ul>
      ) : (
        <h5>Loading...</h5>
      )}
    </div>
  );
}

export default CommonDestinations;
