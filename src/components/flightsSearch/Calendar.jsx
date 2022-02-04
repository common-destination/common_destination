import React, { useEffect } from "react";
import moment from "moment";

const Calendar = ({
  handleChangeField,
  minOutboundDate,
  maxReturnDate,
  stayTimeTogether,
  setCalendarIsValid,
}) => {
  useEffect(() => {
    const timeDifferenceInHours = moment(maxReturnDate).diff(
      moment(minOutboundDate),
      "hours"
    );
    console.log({ timeDifferenceInHours });
    console.log(timeDifferenceInHours - stayTimeTogether);

    timeDifferenceInHours >= stayTimeTogether
      ? setCalendarIsValid(true)
      : setCalendarIsValid(false);

    // if (timeDifferenceInHours <= 0)
    //   return alert("the return date must be after the outward date");
  }, [minOutboundDate, maxReturnDate, setCalendarIsValid, stayTimeTogether]);

  return (
    <div className="calendar">
      <label>
        <h5>Earliest departure date</h5>
        <input
          type="datetime-local"
          name="date"
          value={minOutboundDate}
          onChange={(e) => handleChangeField("minOutboundDate", e.target.value)}
        />
      </label>
      <label>
        <h5>Latest return date</h5>
        <input
          type="datetime-local"
          name="date"
          value={maxReturnDate}
          onChange={(e) => handleChangeField("maxReturnDate", e.target.value)}
        />
      </label>
    </div>
  );
};

export default Calendar;
