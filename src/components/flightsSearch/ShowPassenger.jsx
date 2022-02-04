import Calendar from "./Calendar2.jsx";
import SelectDepartureAirport from "./SelectDepartureAirport.jsx";
import icons from "../../functions/icons.js";



const ShowPassenger = ({
  passenger,
  handlePassengerChange,
  handlePassengerDelete,
  departureAirports,
  canDelete,
  stayTimeTogether,
  setCalendarIsValid
}) => {

  const handleChangeField = (key, value) => {
    passenger[key] = value;
    // fieldIsValid ? handlePassengerChange() : console.log(value, "isn't valid");
    handlePassengerChange() ;
  };

  return (
    <div className="flightSearch">
      <div className="inputRadioContainer">
        <h3>{passenger.genericTitle}</h3>
        {canDelete && (
          <icons.RiDeleteBinLine
            className="deletePassenger"
            onClick={handlePassengerDelete}
          />
        )}
      </div>
      <div className="selectDepartureAirport">
        <SelectDepartureAirport
          departureAirports={departureAirports}
          airport={passenger.airport}
          handleChangeField={handleChangeField}
        />
      </div>
      <div className="chooseDates">
        <Calendar
          handleChangeField={handleChangeField}
          minOutboundDate={passenger.minOutboundDate}
          maxReturnDate={passenger.maxReturnDate}
          stayTimeTogether={stayTimeTogether}
          setCalendarIsValid={setCalendarIsValid}
        />
      </div>
    </div>
  );
};

export default ShowPassenger;
