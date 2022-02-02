// import moment from "moment";

const Calendar = ({
  handleMinOutboundDate,
  handleMaxReturnDate,
  minOutboundDate,
  maxReturnDate,
}) => {
  // console.log(minOutboundDate);
  // console.log(maxReturnDate);

  return (
    <div className="calendar">
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
