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
  markedErrors,
  earliestReturn,
  lastestOutbound,
  setOtboundLaterThanReturn
}) => {
  const handleChangeField = (key, value) => {
    passenger[key] = value;
    handlePassengerChange();
  };

  return (
    <div
      className="showPassenger"
      //MAYBE ONLY ERRORTOGGLE AS CONDITION
      style={{ opacity: airportsError || datesError ? 0.5 : 1 }}
    >
      <div className="airportDeleteContainer">
        <SelectDepartureAirport
          departureAirports={departureAirports}
          airport={passenger.airport}
          handleChangeField={handleChangeField}
          markedErrors={markedErrors}
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
        markedErrors={markedErrors}
        earliestRetur={earliestReturn}
        lastestOutbound={lastestOutbound}
        setOtboundLaterThanReturn={setOtboundLaterThanReturn}
      />
    </div>
  );
};

export default ShowPassenger;
