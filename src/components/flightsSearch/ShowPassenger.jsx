import Calendar from "./Calendar.jsx";
import SelectDepartureAirport from "./SelectDepartureAirport.jsx";
import icons from "../../functions/icons.js";

const ShowPassenger = ({
  passenger,
  handlePassengerChange,
  handlePassengerDelete,
  departureAirports,
  canDelete,
}) => {

  const handleChangeField = (key, value) => {
    passenger[key] = value;
    handlePassengerChange();
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
      <div className="searchAndInputNumberWrapper">
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
        />
      </div>
    </div>
  );
};

export default ShowPassenger;
