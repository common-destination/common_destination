// import React, { useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../../ThemeContext.js";
import icons from "../../functions/icons.js";
import convertHours from "../../functions/convertHours.js";
import Validation from "../../components/validation/Validation.jsx";

function PassengersFlights() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    currentUser,
    validationMenuToggle,
    setValidationMenuToggle,
    backendUrl,
  } = useTheme();

  const saveTrip = async () => {
    currentUser.username !== "anonymousUser"
      ? await fetch(
          `${backendUrl}/common-destinations/favorite-trips/${currentUser._id}`,
          {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ favoriteTrips: location.state }),
          }
        )
      : setValidationMenuToggle(true);
  };

  return (
    <div className="passengerFlights">
      {validationMenuToggle && <Validation />}
      <ul className="passengerFlightsList">
        {location.state.trips.map((passengerFlight, index) => (
          <li key={index} className="passengerFlight">
            <div>
              <icons.FaUser />
              {passengerFlight.passengerId}
            </div>
            <div className="passengerOutbound">
              <p>{`OUTBOUND: ${passengerFlight.outboundFlight.from}`}</p>
              <p>
                <icons.FaPlaneDeparture />
                {passengerFlight.outboundFlight.departure} -{" "}
                <icons.FaPlaneArrival />
                {passengerFlight.outboundFlight.arrival}
              </p>
            </div>
            <div className="passengerOutbound">
              <p>{`RETURN: ${passengerFlight.returnFlight.from} `}</p>
              <p>
                <icons.FaPlaneDeparture />
                {passengerFlight.returnFlight.departure} -{" "}
                <icons.FaPlaneArrival />
                {passengerFlight.returnFlight.arrival}
              </p>
              <p>
                {`Total price: ${passengerFlight.totalPrice}`}
                <icons.FaEuroSign />
              </p>
              <p>
                {`Stay time: ${convertHours(passengerFlight.stayTime)}`}
                <icons.FaClock />
              </p>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate(-1)}>go back</button>
      <br />
      <br />
      <icons.BsFillBookmarkCheckFill onClick={saveTrip} />
    </div>
  );
}

export default PassengersFlights;
