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
  errorsToggle
  
}) => {
  const handleChangeField = (key, value) => {
    passenger[key] = value;
    handlePassengerChange();
  };

  // console.log({errorsToggle});
  // console.log({submitIsActive});

  return (
    <>
      <div className="showPassenger" style={{opacity: errorsToggle && !setPassengersValidation ? 0.5 : 1}}>
        <SelectDepartureAirport
          departureAirports={departureAirports}
          airport={passenger.airport}
          handleChangeField={handleChangeField}
          setAirportsValidation={setAirportsValidation}
          errorsToggle={errorsToggle}
        />
        <SelectDates
          handleChangeField={handleChangeField}
          minOutboundDate={passenger.minOutboundDate}
          maxReturnDate={passenger.maxReturnDate}
          stayTimeTogether={stayTimeTogether}
          setPassengersValidation={setPassengersValidation}
         
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
