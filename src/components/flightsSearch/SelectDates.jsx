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
  markedErrors,
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

    handleChangeField(
      "minOutboundDate",
      minOutboundDate === "" && maxReturnDate !== ""
        ? new Date(moment(maxReturnDate).subtract(stayTimeTogether, "hours"))
        : minOutboundDate
    );

    handleChangeField(
      "maxReturnDate",
      timeDifferenceInHours < stayTimeTogether 
        ? new Date(moment(minOutboundDate).add(stayTimeTogether, "hours"))
        : maxReturnDate
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    minOutboundDate,
    maxReturnDate,
    setDateAreValid,
    stayTimeTogether,
  ]);

  // useEffect(() => {
  //   if (datesError) {
  //     if (dateIsEmpty) {
  //       alert("date is empty");
  //     }
  //     if (dateAreValid) {
  //       alert("departure is bigger than return");
  //     }
  //   }
  // }, [datesError, dateAreValid, dateIsEmpty]);

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    return currentDate.getTime() < selectedDate.getTime();
  };
  return (
    <div className="selectDates">
      <DatePicker
        className={
          dateIsEmpty && markedErrors
            ? // || (!dateAreValid && markedErrors)
              "dateError datePicker"
            : "datePicker"
        }
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
      <DatePicker
        className={
          (dateIsEmpty && markedErrors) || (!dateAreValid && markedErrors)
            ? "dateError datePicker"
            : "datePicker"
        }
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
        // disabled={minOutboundDate === "" ? true : false}
      />
    </div>
  );
};
export default SelectDates;
