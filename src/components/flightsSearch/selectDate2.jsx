import React, { useEffect, useState } from "react";
import moment from "moment";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
const today = new Date().toLocaleString().split(",")[0];

console.log(today);

const SelectDates = ({
  handleChangeField,
  minOutboundDate,
  maxReturnDate,
  stayTimeTogether,
}) => {
  const [dateAreValid, setDateAreValid] = useState(true);
  const minDateOutbound = new Date(moment(today));
  const maxDateOutbound = new Date(moment(today).add(1, "years"));
  const minDateReturn = new Date(moment(today).add(stayTimeTogether, "hours"));
  const maxDateReturn = new Date(
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

  return (
    <div className="selectDates">
      <DatePicker
        placeholder="Earliest start"
        value={minOutboundDate}
        minDate={minDateOutbound}
        maxDate={maxDateOutbound}
        format="dd-MM-yy HH:mm"
        step={60}
        className="test"
        onChange={(e) => handleChangeField("minOutboundDate", e.target.value)}
      />
      <DatePicker
        placeholder="Latest return"
        value={maxReturnDate}
        minDate={minDateReturn}
        maxDate={maxDateReturn}
        format="dd-MM-yy HH:mm"
        step={60}
        onChange={(e) => handleChangeField("maxReturnDate", e.target.value)}
      />
    </div>
  );
};

export default SelectDates;
