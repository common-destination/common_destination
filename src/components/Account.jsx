import React from "react";
import { useTheme } from "../ThemeContext.js";
import { useNavigate } from "react-router-dom";
import icons from "..//functions/icons.js";
import convertHours from "../functions/convertHours.js";

function Account({ className }) {
  const { currentUser } = useTheme();
  const navigate = useNavigate();


  return (
    <div className={className}>
      {currentUser && <h1> {`WELCOME ${currentUser.username}`}</h1>}

      <br />
      {Object.values(currentUser).length > 0 && (
        <>
          <h2>{`you have ${currentUser.favoriteTrips.length} favorite trips`}</h2>
          <ul>
            {currentUser.favoriteTrips.map((favoriteTrip, index) => (
              <li
                key={index}
                className="commonDestinationToAirport"
                onClick={() => {
                  navigate("/passenger-flights", {
                    state: favoriteTrip,
                  });
                }}
              >
                {favoriteTrip.trips[0].outboundFlight.to}
                <icons.FaClock />
                {convertHours(favoriteTrip.timeTogether)}
                <icons.FaEuroSign />
                {favoriteTrip.groupPrice}
              </li>
            ))}
          </ul>
          {/* // <ul className="passengerFlightsList">
        //   {currentUser.favoriteTrips.trips.map((passengerFlight, index) => ( */}
          {/* //   <li key={index} className="passengerFlight">
        //     <div>
        //       <icons.FaUser />
        //       {passengerFlight.passengerId}
        //     </div>
        //     <div className="passengerOutbound">
        //       <p>{`OUTBOUND: ${passengerFlight.outboundFlight.from}`}</p>
        //       <p>
        //         <icons.FaPlaneDeparture />
        //         {passengerFlight.outboundFlight.departure} -{" "}
        //         <icons.FaPlaneArrival />
        //         {passengerFlight.outboundFlight.arrival}
        //       </p>
        //     </div>
        //     <div className="passengerOutbound">
        //       <p>{`RETURN: ${passengerFlight.returnFlight.from} `}</p>
        //       <p>
        //         <icons.FaPlaneDeparture />
        //         {passengerFlight.returnFlight.departure} -{" "}
        //         <icons.FaPlaneArrival />
        //         {passengerFlight.returnFlight.arrival}
        //       </p>
        //       <p>
        //         {`Total price: ${passengerFlight.totalPrice}`}
        //         <icons.FaEuroSign />
        //       </p>
        //       <p>
        //         {`Stay time: ${convertHours(passengerFlight.stayTime)}`}
        //         <icons.FaClock />
        //       </p>
        //     </div>
        //   </li>
        // ))}
        // </ul> */}
        </>
      )}
    </div>
  );
}

export default Account;
