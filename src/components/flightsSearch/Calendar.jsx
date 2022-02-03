// import moment from "moment";

const Calendar = ({ handleChangeField, minOutboundDate, maxReturnDate }) => {
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
