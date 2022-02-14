import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
// import "../../styles/datePicker.scss";

const today = new Date();

const SelectDates = ({
  handleChangeField,
  minOutboundDate,
  maxReturnDate,
  stayTimeTogether,
  markedErrors,
 earliestReturn,
 lastestOutbound,
 setOtboundLaterThanReturn
}) => {
  const [dateAreValid, setDateAreValid] = useState(false);
  const [outboundIsEmpty, setOutboundIsEmpty] = useState(true);
  const [returnIsEmpty, setReturnIsEmpty] = useState(true);
  const [maxOutbound, setMaxOutbound] = useState(
    new Date(moment(today).add(1, "years"))
  );
  
  const minOutbound = new Date(moment(today));
  // const maxOutbound = new Date(moment(today).add(1, "years"));
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

dateAreValid ? setOtboundLaterThanReturn(true) : setOtboundLaterThanReturn(false);

    minOutboundDate === ""
      ? setOutboundIsEmpty(true)
      : setOutboundIsEmpty(false);

    maxReturnDate === "" ? setReturnIsEmpty(true) : setReturnIsEmpty(false);
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

    maxReturnDate !== ""
      ? setMaxOutbound(
          new Date(moment(maxReturnDate).subtract(stayTimeTogether, "hours"))
        )
      : setMaxOutbound(maxOutbound);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minOutboundDate, maxReturnDate, setDateAreValid, stayTimeTogether]);


  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    return currentDate.getTime() < selectedDate.getTime();
  };
  return (
    <div className="selectDates">
      <DatePicker
        className={
          (outboundIsEmpty && markedErrors) ||
          (!dateAreValid && markedErrors) ||
          (minOutboundDate === lastestOutbound && markedErrors)
            ? "dateError datePicker"
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
          (returnIsEmpty && markedErrors) ||
          (!dateAreValid && markedErrors) ||
          (maxReturnDate === earliestReturn && markedErrors)
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

      />
    </div>
  );
};
export default SelectDates;
