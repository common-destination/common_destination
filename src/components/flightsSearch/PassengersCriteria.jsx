import React, { useState } from "react";
import Calendar from "./Calendar.jsx";
import SelectDepartureAirport from "./SelectDepartureAirport.jsx";
import InputRadio from "./InputRadio.jsx";

const PassengersCriteria = (props) => {
  const [calendarToggle, setCalendarToggle] = useState(true);

  return (
    <div className="flightSearch">
      <div className="inputRadioContainer">
        <InputRadio
          setCalendarToggle={() => {
            setCalendarToggle(true);
          }}
          text="Roundtrip"
          inputName={props.index}
        />
        <InputRadio
          setCalendarToggle={() => {
            setCalendarToggle(false);
          }}
          text="Oneway"
          inputName={props.index}
        />
      </div>
      <SelectDepartureAirport departureAirport={props.departureAirport} />
      <Calendar calendarToggle={calendarToggle} />
    </div>
  );
};

export default PassengersCriteria;
