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
}) => {
  const handleChangeField = (key, value) => {
    passenger[key] = value;
    handlePassengerChange();
  };
  return (
    <>
      <div className="showPassenger">
        <div className="airportDeleteContainer">
          <SelectDepartureAirport
            departureAirports={departureAirports}
            airport={passenger.airport}
            handleChangeField={handleChangeField}
            setAirportsValidation={setAirportsValidation}
          />
          {canDelete && (
            <icons.RiDeleteBinLine
              className="deletePassenger"
              onClick={handlePassengerDelete}
            />
          )}
        </div>
        <SelectDates
          handleChangeField={handleChangeField}
          minOutboundDate={passenger.minOutboundDate}
          maxReturnDate={passenger.maxReturnDate}
          stayTimeTogether={stayTimeTogether}
          setPassengersValidation={setPassengersValidation}
        />
        {/* {canDelete && (
          <icons.RiDeleteBinLine
            className="deletePassenger"
            onClick={handlePassengerDelete}
          />
        )} */}
      </div>
    </>
  );
};

export default ShowPassenger;
