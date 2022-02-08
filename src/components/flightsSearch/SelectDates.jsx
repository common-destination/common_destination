import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
// import "../../styles/datePicker.scss";
// import setHours from "date-fns/setHours";
// import setMinutes from "date-fns/setMinutes";

const SelectDates = ({
  handleChangeField,
  minOutboundDate,
  maxReturnDate,
  stayTimeTogether,
}) => {
  // const [startDate, setStartDate] = useState(
  //   setHours(setMinutes(new Date(), 0), 9)
  // );
  const [dateAreValid, setDateAreValid] = useState(true);
  // const [startDate, setStartDate] = useState("");
  // const [returnDate, setReturnDate] = useState("");
  const today = new Date();
  const minDateOutbound = new Date(moment(today));
  const maxDateOutbound = new Date(moment(today).add(1, "years"));
  const minDateReturn = new Date(moment(today).add(stayTimeTogether, "hours"));
  const maxDateReturn = new Date(
    moment(today).add(stayTimeTogether, "hours").add(1, "years")
  );

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    return currentDate.getTime() < selectedDate.getTime();
  };

  useEffect(() => {
    const timeDifferenceInHours = moment(maxReturnDate).diff(
      moment(minOutboundDate),
      "hours"
    );
    timeDifferenceInHours >= stayTimeTogether
      ? setDateAreValid(true)
      : setDateAreValid(false);
  }, [minOutboundDate, maxReturnDate, setDateAreValid, stayTimeTogether]);

  return (
    <div className="selectDates">
      <DatePicker className="date-picker"
        placeholderText={"earliest start"}
        minDate={minDateOutbound}
        maxDate={maxDateOutbound}
        selected={minOutboundDate}
        onChange={(date) => {
          // setStartDate(date);
          handleChangeField("minOutboundDate", date);
        }}
        showTimeSelect
        filterTime={filterPassedTime}
        timeIntervals={60}
        dateFormat="dd-MMM-yyyy HH:mm"
      />
      <DatePicker className="date-picker"
        placeholderText={"lastest return"}
        minDate={minDateReturn}
        maxDate={maxDateReturn}
        selected={maxReturnDate}
        onChange={(date) => {
          // setReturnDate(date);
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
