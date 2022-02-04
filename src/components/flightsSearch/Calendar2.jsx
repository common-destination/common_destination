import React, { useEffect } from "react";
import moment from "moment";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";

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
    // console.log({ timeDifferenceInHours });
    // console.log(timeDifferenceInHours - stayTimeTogether);

    timeDifferenceInHours >= stayTimeTogether
      ? setCalendarIsValid(true)
      : setCalendarIsValid(false);

    // if (timeDifferenceInHours <= 0)
    //   return alert("the return date must be after the outward date");
  }, [minOutboundDate, maxReturnDate, setCalendarIsValid, stayTimeTogether]);
  const minDate = new Date();
  const maxDate = new Date(moment().add(1, "years"));
  return (
    <div className="calendar">
      <DateTimePickerComponent
        placeholder="Earliest date"
        value={minOutboundDate}
        min={minDate}
        max={maxDate}
        width={200}
        format="dd-MM-yy HH:mm"
        step={60}
        onChange={(e) => handleChangeField("minOutboundDate", e.target.value)}
      />
      <DateTimePickerComponent
        placeholder="Latest return date"
        value={maxReturnDate}
        min={minDate}
        max={maxDate}
        width={200}
        format="dd-MM-yy HH:mm"
        step={60}
        onChange={(e) => handleChangeField("maxReturnDate", e.target.value)}
      />
    </div>
  );
};

export default Calendar;
