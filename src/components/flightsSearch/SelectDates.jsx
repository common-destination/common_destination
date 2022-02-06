import React, { useEffect, useState } from "react";
import moment from "moment";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";

const SelectDates = ({
  handleChangeField,
  minOutboundDate,
  maxReturnDate,
  stayTimeTogether,
}) => {
  const [dateAreValid, setDateAreValid] = useState(true);

  useEffect(() => {
    const timeDifferenceInHours = moment(maxReturnDate).diff(
      moment(minOutboundDate),
      "hours"
    );
    console.log({ timeDifferenceInHours });
    console.log(timeDifferenceInHours - stayTimeTogether);
    console.log(typeof timeDifferenceInHours);
    timeDifferenceInHours >= stayTimeTogether
      ? setDateAreValid(true)
      : setDateAreValid(false)

    // if (timeDifferenceInHours <= 0)
    //   return alert("the return date must be after the outward date");
  }, [minOutboundDate, maxReturnDate, setDateAreValid, stayTimeTogether]);
  const minDateOutbound = new Date();
  const maxDateOutbound = new Date(moment().add(1, "years"));
  const minDateReturn = new Date(moment().add(stayTimeTogether, "hours"));
  const maxDateReturn = new Date(
    moment().add(stayTimeTogether, "hours").add(1, "years")
  );
  const styles = {
    width: "max-content",
    border: "1px solid" ,
    borderColor: dateAreValid ? "black": "red",
    margin: "0 1vw",
  };

  return (
    <div className="selectDates">
      <DateTimePickerComponent
        placeholder="Earliest date"
        value={minOutboundDate}
        min={minDateOutbound}
        max={maxDateOutbound}
        style={styles}
        format="dd-MM-yy HH:mm"
        step={60}
        onChange={(e) => handleChangeField("minOutboundDate", e.target.value)}
      />
      <DateTimePickerComponent
        placeholder="Latest return date"
        value={maxReturnDate}
        min={minDateReturn}
        max={maxDateReturn}
        style={styles}
        format="dd-MM-yy HH:mm"
        step={60}
        onChange={(e) => handleChangeField("maxReturnDate", e.target.value)}
      />
    </div>
  );
};

export default SelectDates;
