import SelectDates from "./SelectDates.jsx";
import SelectDepartureAirport from "./SelectDepartureAirport.jsx";
import icons from "../../functions/icons.js";

const ShowPassenger = ({
  passenger,
  handlePassengerChange,
  handlePassengerDelete,
  departureAirports,
  canDelete,
  stayTimeTogether,
  setDateAreValid,
}) => {
  const handleChangeField = (key, value) => {
    passenger[key] = value;
    // fieldIsValid ? handlePassengerChange() : console.log(value, "isn't valid");
    handlePassengerChange();
  };

  return (
    <div className="flightSearch">
      <SelectDepartureAirport
        departureAirports={departureAirports}
        airport={passenger.airport}
        handleChangeField={handleChangeField}
      />
      <SelectDates
        handleChangeField={handleChangeField}
        minOutboundDate={passenger.minOutboundDate}
        maxReturnDate={passenger.maxReturnDate}
        stayTimeTogether={stayTimeTogether}
        setDateAreValid={setDateAreValid}
      />
      {canDelete && (
        <icons.RiDeleteBinLine
          className="deletePassenger"
          onClick={handlePassengerDelete}
        />
      )}
    </div>
  );
};

export default ShowPassenger;
