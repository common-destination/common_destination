import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

const SelectDates = ({
  handleChangeField,
  minOutboundDate,
  maxReturnDate,
  stayTimeTogether,
}) => {

  const [dateAreValid, setDateAreValid] = useState(true);
  const [dateIsEmpty, setDateIsEmpty] = useState(true);
  const [dateIsValid, setDateIsValid] = useState(true);
  const today = new Date();
  const minOutbound = new Date(moment(today));
  const maxOutbound = new Date(moment(today).add(1, "years"));
  const minReturn = new Date(moment(today).add(stayTimeTogether, "hours"));
  const maxReturn = new Date(
    moment(today).add(stayTimeTogether, "hours").add(1, "years")
  );


  useEffect(() => {
    const timeDifferenceInHours = moment(maxReturnDate).diff(
      moment(minOutboundDate),
      "hours"
    );
    timeDifferenceInHours >= stayTimeTogether 
      ? setDateAreValid(true)
      : setDateAreValid(false);
  }, [minOutboundDate, maxReturnDate, setDateAreValid, stayTimeTogether]);


  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    return currentDate.getTime() < selectedDate.getTime();
  };

  return (
    <div className="selectDates">
      <DatePicker
        placeholderText={"earliest start"}
        minDate={minOutbound}
        maxDate={maxOutbound}
        selected={minOutboundDate}
        onChange={(date) => {
          handleChangeField("minOutboundDate", date);
        }}
        showTimeSelect
        filterTime={filterPassedTime}
        timeFormat="HH:mm"
        timeIntervals={60}
        dateFormat="dd-MMM-yyyy HH:mm"
      />
      <DatePicker
        placeholderText={"lastest return"}
        minDate={minReturn}
        maxDate={maxReturn}
        selected={maxReturnDate}
        onChange={(date) => {
          handleChangeField("maxReturnDate", date);
        }}
        showTimeSelect
        filterTime={filterPassedTime}
        timeFormat="HH:mm"
        timeIntervals={60}
        dateFormat="dd-MMM-yyyy HH:mm"
      />
    </div>
  );
};
export default SelectDates;