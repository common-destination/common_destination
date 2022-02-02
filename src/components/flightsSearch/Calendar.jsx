// import moment from "moment";

const Calendar = (props) => {
  // console.log(props.minOutboundDate);
  // console.log(props.returnDepartureDate);

  return (
    <div className="calendar">
      <label>
        <h5>min depart date</h5>
        <input
          type="datetime-local"
          name="date"
          value={props.minOutboundDate}
          onChange={(e) => props.setMinOutboundDate(e.target.value)}
        />
      </label>
      <label>
        <h5>max depart date</h5>
        <input
          type="datetime-local"
          name="date"
          value={props.maxReturnDate}
          onChange={(e) => props.setMaxReturnDate(e.target.value)}
        />
      </label>
    </div>
  );
};

export default Calendar;
