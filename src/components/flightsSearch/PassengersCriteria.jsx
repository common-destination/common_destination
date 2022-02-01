import React, { useState } from "react";
import Calendar from "./Calendar.jsx";
import SelectDepartureAirport from "./SelectDepartureAirport.jsx";
import InputRadios from "./InputRadios.jsx";
import icons from "../../functions/icons.js";
import InputNumber from "./InputNumber.jsx";

const PassengersCriteria = (props) => {
  const [calendarToggle, setCalendarToggle] = useState(true);

  return (
    <div className="flightSearch">
      <p>{props.id}</p>
      <div className="inputRadioContainer">
        <h3>{props.passengerName}</h3>
        <InputRadios
          roundTripToggle={() => setCalendarToggle(true)}
          oneWayToggle={() => setCalendarToggle(false)}
          defaultChecked={calendarToggle ? true : false}
          inputName={props.inputName}
        />
        {props.passengers.length > 2 && (
          <icons.RiDeleteBinLine
            className="deletePassenger"
            onClick={props.deletePassenger}
          />
        )}
      </div>
      <div className="searchAndInputNumberWrapper">
        <SelectDepartureAirport departureAirport={props.departureAirport} />
        <InputNumber />
      </div>
      <div className="chooseDates">
        <Calendar calendarToggle={calendarToggle} />
        <InputNumber labelText="max stay time" />
      </div>
    </div>
  );
};

export default PassengersCriteria;
