import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
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

  const [startDate, setStartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

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

  const styles = {
    dateInput: {
      borderWidth: 0,
    },
    dateText: {
      color: "red",
      textAlign: "left",
      fontSize: 20,
    },
  };

  return (
    <div className="selectDates">
      <DatePicker
        placeholderText={"earliest start"}
        minDate={minDateOutbound}
        maxDate={maxDateOutbound}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        filterTime={filterPassedTime}
        timeFormat="HH:mm"
        timeIntervals={60}
        dateFormat="dd-MMM-yyyy HH:mm"
        customStyles={styles}
        // timeCaption="hour"
      />
      <DatePicker
        placeholderText={"lastest return"}
        minDate={minDateReturn}
        maxDate={maxDateReturn}
        selected={returnDate}
        onChange={(date) => setReturnDate(date)}
        showTimeSelect
        filterTime={filterPassedTime}
        timeFormat="HH:mm"
        timeIntervals={60}
        dateFormat="dd-MMM-yyyy HH:mm"
       
        // timeCaption="hour"
      />
    </div>
  );
};
export default SelectDates;
