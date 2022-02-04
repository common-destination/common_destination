import React, { useEffect } from "react";
import moment from "moment";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";

const SelectDates = ({
  handleChangeField,
  minOutboundDate,
  maxReturnDate,
  stayTimeTogether,
  setDateAreValid,
}) => {
  useEffect(() => {
    const timeDifferenceInHours = moment(maxReturnDate).diff(
      moment(minOutboundDate),
      "hours"
    );
    // console.log({ timeDifferenceInHours });
    // console.log(timeDifferenceInHours - stayTimeTogether);

    timeDifferenceInHours >= stayTimeTogether
      ? setDateAreValid(true)
      : setDateAreValid(false);

    // if (timeDifferenceInHours <= 0)
    //   return alert("the return date must be after the outward date");
  }, [minOutboundDate, maxReturnDate, setDateAreValid, stayTimeTogether]);
  const minDateOutbound = new Date();
  const maxDateOutbound = new Date(moment().add(1, "years"));
  const minDateReturn = new Date(moment().add(stayTimeTogether, "hours"));
  const maxDateReturn = new Date(moment().add(stayTimeTogether, "hours").add(1, "years"));
  return (
    <div className="selectDates">
      <DateTimePickerComponent
        placeholder="Earliest date"
        value={minOutboundDate}
        min={minDateOutbound}
        max={maxDateOutbound}
        width={200}
        style={{margin: "0 1vw"}}
        format="dd-MM-yy HH:mm"
        step={60}
        onChange={(e) => handleChangeField("minOutboundDate", e.target.value)}
      />
      <DateTimePickerComponent
        placeholder="Latest return date"
        value={maxReturnDate}
        min={minDateReturn}
        max={maxDateReturn}
        width={200}
        style={{margin: "0 1vw"}}
        format="dd-MM-yy HH:mm"
        step={60}
        onChange={(e) => handleChangeField("maxReturnDate", e.target.value)}
      />
    </div>
  );
};

export default SelectDates;
