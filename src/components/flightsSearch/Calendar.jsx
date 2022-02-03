// import moment from "moment";
// import React, { useState } from "react";
// import DatePicker from "react-datepicker";

const Calendar = ({
  handleMinOutboundDate,
  handleMaxReturnDate,
  minOutboundDate,
  maxReturnDate,
}) => {
  // console.log(minOutboundDate);
  // console.log(maxReturnDate);
  // const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="calendar">
      {/* <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        locale="pt-BR"
        showTimeSelect
        timeFormat="mm"
        timeIntervals={15}
        dateFormat="Pp"
      /> */}
      
      <label>
        <h5>min depart date</h5>
        <input
          type="datetime-local"
          name="date"
          value={minOutboundDate}
          onChange={(e) => handleMinOutboundDate(e.target.value)}
        />
      </label>
      <label>
        <h5>max depart date</h5>
        <input
          type="datetime-local"
          name="date"
          value={maxReturnDate}
          onChange={(e) => handleMaxReturnDate(e.target.value)}
        />
      </label>
    </div>
  );
};

export default Calendar;
