import React, { useState, useEffect } from "react";

function SelectDepartureAirport({
  airport,
  handleChangeField,
  departureAirports,
  setAirportsValidation,
  errorsToggle
  
}) {
  const [airportIsValid, setAirportIsValid] = useState(false);

  const styles = {
    border: errorsToggle && !airportIsValid ? "3px solid red" : "1px solid black ",
  };

  useEffect(() => {
    departureAirports.includes(airport)
      ? setAirportIsValid(true)
      : setAirportIsValid(false);
      setAirportsValidation(false);
  }, [
    airport,
    airportIsValid,
    setAirportsValidation,
    departureAirports,
    
  ]);

  return (
    <div className="selectDeparture">
      <input
        placeholder="departure airport"
        list="opts"
        value={airport}
        onChange={(e) => handleChangeField("airport", e.target.value)}
        style={styles}
      />
      <datalist id="opts">
        {departureAirports.map((departureAirport, index) => (
          <option key={index} value={departureAirport}>
            {departureAirport}
          </option>
        ))}
      </datalist>
    </div>
  );
}

export default SelectDepartureAirport;
