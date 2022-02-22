// import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import icons from "../../functions/icons.js";
import convertHours from "../../functions/convertHours.js";
import formatFlightDurationWithoutLetters from "../../functions/formatFlightDurationWithoutLetters.js";

function PassengersFlights() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="passengerFlights">
      <ul className="passengerFlightsList">
        {location.state.map((passengerFlight, index) => (
          <li key={index} className="passengerFlight">
            <div className="passengerIcon">
              <icons.FaUser />
              {passengerFlight.passengerId}
            </div>
            <div className="passengerOutbound">
              <p>
                <icons.FaPlaneDeparture />
                {` ${passengerFlight.outboundFlight.from} - ${passengerFlight.outboundFlight.to}`}
              </p>
              <p>
                {`${passengerFlight.outboundFlight.departure.slice(0, -5)} - 
                ${passengerFlight.outboundFlight.arrival.slice(0, -5)}`}
              </p>
              <p>
                <icons.FaClock className="clockIcons" />
                {` ${passengerFlight.outboundFlight.departure.slice(11)} - 
                ${passengerFlight.outboundFlight.arrival.slice(11)}`}
              </p>
            </div>
            <div className="passengerOutbound">
              <p>
                <icons.FaPlaneArrival />
                {` ${passengerFlight.returnFlight.from} - ${passengerFlight.returnFlight.to}`}
              </p>
              <p>
                {`${passengerFlight.returnFlight.departure.slice(0, -5)} - 
                ${passengerFlight.returnFlight.arrival.slice(0, -5)}`}
              </p>
              <p>
                <icons.FaClock className="clockIcons" />
                {` ${passengerFlight.returnFlight.departure.slice(11)} - 
                ${passengerFlight.returnFlight.arrival.slice(11)}`}
              </p>
            </div>
            <div className="stayTimeTotalPrice">
              <p>
                {`Flight duration: ${formatFlightDurationWithoutLetters(
                  passengerFlight.outboundFlight.flightDuration
                )}`}
                <icons.FaClock className="clockIcons" />
              </p>
              <p>
                {`Total price: ${passengerFlight.totalPrice}`}
                <icons.FaEuroSign />
              </p>
              <p>
                {`Stay time: ${convertHours(passengerFlight.stayTime)}`}
                <icons.FaClock className="clockIcons" />
              </p>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate(-1)}>go back</button>
    </div>
  );
}

export default PassengersFlights;
