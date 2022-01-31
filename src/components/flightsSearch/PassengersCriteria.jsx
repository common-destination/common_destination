import React, { useState } from "react";
import Calendar from "./Calendar.jsx";
import SelectDepartureAirport from "./SelectDepartureAirport.jsx";
import InputRadio from "./InputRadio.jsx";
import icons from "../../functions/icons.js";
import InputNumber from "./InputNumber.jsx";

const PassengersCriteria = (props) => {
  const [calendarToggle, setCalendarToggle] = useState(true);

  return (
    <div className="flightSearch">
      <div className="inputRadioContainer">
        <h3>{props.passengerName}</h3>
        <InputRadio
          setCalendarToggle={() => {
            setCalendarToggle(true);
          }}
          text="Roundtrip"
          checked={calendarToggle ? true : false}
          inputName={props.inputName}
        />
        <InputRadio
          setCalendarToggle={() => {
            setCalendarToggle(false);
          }}
          text="Oneway"
          inputName={props.inputName}
        />
        {props.passengers.length > 2 && (
          <icons.RiDeleteBinLine
            className="deletePassenger"
            onClick={props.deletePassenger}
          />
        )}
      </div>
      <SelectDepartureAirport departureAirport={props.departureAirport} />
      <div className="chooseDates">
        <Calendar calendarToggle={calendarToggle} />
        <InputNumber />
      </div>
    </div>
  );
};

export default PassengersCriteria;
