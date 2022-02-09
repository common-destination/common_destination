import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
// import "../../styles/datePicker.scss";


const SelectDates = ({
  handleChangeField,
  minOutboundDate,
  maxReturnDate,
  stayTimeTogether,
  datesError,
}) => {
  const [dateAreValid, setDateAreValid] = useState(false);
  const [dateIsEmpty, setDateIsEmpty] = useState(true);

  const today = new Date();
  const minOutbound = new Date(moment(today));
  const maxOutbound = new Date(moment(today).add(1, "years"));
  const minReturn = new Date(moment(today).add(stayTimeTogether, "hours"));
  const maxReturn = new Date(
    moment(today).add(stayTimeTogether, "hours").add(1, "years")
  );

  //  const styles = {
  //     border: datesError && dateIsEmpty || datesError && !dateAreValid ? "3px solid red" : "1px solid black ",
  //   };

  useEffect(() => {
    const timeDifferenceInHours = moment(maxReturnDate).diff(
      moment(minOutboundDate),
      "hours"
    );
    timeDifferenceInHours >= stayTimeTogether
      ? setDateAreValid(true)
      : setDateAreValid(false);

    minOutboundDate === "" || maxReturnDate === ""
      ? setDateIsEmpty(true)
      : setDateIsEmpty(false);
  }, [minOutboundDate, maxReturnDate, setDateAreValid, stayTimeTogether]);


  useEffect(() => {
    if (datesError) {
      if (dateIsEmpty) {
        alert("date is empty");
      }
      if (dateAreValid) {
        alert("departure is bigger than return");
      }
    }
  }, [datesError, dateAreValid, dateIsEmpty]);

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    return currentDate.getTime() < selectedDate.getTime();
  };


  return (
    <div className="selectDates">
      <DatePicker className="date-picker"
        placeholderText={"earliest start"}
        minDate={minOutbound}
        maxDate={maxOutbound}
        selected={minOutboundDate}
        onChange={(date) => {
          handleChangeField("minOutboundDate", date);
        }}
        showTimeSelect
        filterTime={filterPassedTime}
        timeIntervals={60}
        dateFormat="dd-MMM-yyyy HH:mm"
      />
      <DatePicker className="date-picker"
        placeholderText={"latest return"}
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
