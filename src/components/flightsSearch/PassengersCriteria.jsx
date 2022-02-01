import React, { useState } from "react";
import Calendar from "./Calendar.jsx";
import SelectDepartureAirport from "./SelectDepartureAirport.jsx";
import InputRadios from "./InputRadios.jsx";
import icons from "../../functions/icons.js";
import InputNumber from "./InputNumber.jsx";

const PassengersCriteria = (props) => {
  const [calendarToggle, setCalendarToggle] = useState(true);
  // const [passenger, setPassenger] = useState({});
  // const [airport, setAirport] = useState("");
  // const [minDepartureDate, setMinDepartureDate] = useState("");
  // const [maxDepartureDate, setMaxDepartureDate] = useState("");
  // const [maxStayTime, setMaxStayTime] = useState(1);

  // useEffect(() => {
  //   setPassenger({ airport, minDepartureDate, maxDepartureDate, maxStayTime });
  // }, [passengerName, airport, minDepartureDate, maxDepartureDate, maxStayTime]);
  const passengerName = props.passengerName;
  console.log(passengerName);

  return (
    <div className="flightSearch"> 
      <div className="inputRadioContainer">
        <h3>{passengerName}</h3>
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
        <InputNumber labelText="max stay time" />
      </div>
      <div className="chooseDates">
        <Calendar calendarToggle={calendarToggle} />
      </div>
    </div>
  );
};

export default PassengersCriteria;
