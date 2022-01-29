import React from "react";

const Calendar = (props) => {
  return (
    <div className="calendar">
      <label>
        <h5>max depart</h5>
        <input type="date" name="date" />
      </label>
      {props.calendarToggle && (
        <label>
          <h5>min return</h5>
          <input type="date" name="date" />
        </label>
      )}
    </div>
  );
};

export default Calendar;
