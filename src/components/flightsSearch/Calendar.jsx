import React, { useState} from "react";

const Calendar = (props) => {
  const [minOutboundDate, setMinOutboundDate] = useState("");
  const [maxReturnDate, setMaxReturnDate] = useState("");

  return (
    <div className="calendar">
      <label>
        <h5>min depart date</h5>
        <input
          type="date"
          name="date"
          value={minOutboundDate}
          onChange={(e) => setMinOutboundDate(e.target.value)}
        />
      </label>
      {props.calendarToggle && (
        <label>
          <h5>max return date</h5>
          <input
            type="date"
            name="date"
            value={maxReturnDate}
            onChange={(e) => setMaxReturnDate(e.target.value)}
          />
        </label>
      )}
    </div>
  );
};

export default Calendar;
