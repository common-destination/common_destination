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
  airportsError,
  datesError,
}) => {
  const handleChangeField = (key, value) => {
    passenger[key] = value;
    handlePassengerChange();
  };

  return (
    <>
      <div
        className="showPassenger"
        style={{ opacity: airportsError || datesError ? 0.5 : 1 }}
      >
        <SelectDepartureAirport
          departureAirports={departureAirports}
          airport={passenger.airport}
          handleChangeField={handleChangeField}
          airportsError={airportsError}
        />
        <SelectDates
          handleChangeField={handleChangeField}
          minOutboundDate={passenger.minOutboundDate}
          maxReturnDate={passenger.maxReturnDate}
          stayTimeTogether={stayTimeTogether}
          datesError={datesError}
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
