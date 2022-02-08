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
  setPassengersValidation,
  setAirportsValidation,
  submitIsActive,
  setAirportsError,
}) => {
  const handleChangeField = (key, value) => {
    passenger[key] = value;
    handlePassengerChange();
  };
  return (
    <>
      <div className="showPassenger">
        <SelectDepartureAirport
          departureAirports={departureAirports}
          airport={passenger.airport}
          handleChangeField={handleChangeField}
          setAirportsValidation={setAirportsValidation}
          submitIsActive={submitIsActive}
          setAirportsError={setAirportsError}
        />
        <SelectDates
          handleChangeField={handleChangeField}
          minOutboundDate={passenger.minOutboundDate}
          maxReturnDate={passenger.maxReturnDate}
          stayTimeTogether={stayTimeTogether}
          setPassengersValidation={setPassengersValidation}
          submitIsActive={submitIsActive}
        />
        {canDelete && (
          <icons.RiDeleteBinLine
            className="deletePassenger"
            onClick={handlePassengerDelete}
          />
        )}
      </div>
    </>
  );
};

export default ShowPassenger;
