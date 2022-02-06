import React, { useState, useEffect } from "react";

function SelectDepartureAirport({
  airport,
  handleChangeField,
  departureAirports,
  setAirportsValidation,
}) {
  const [airportIsValid, setAirportIsValid] = useState(false);

  const styles = {
    border: "1px solid",
    borderColor: airportIsValid ? "black" : "red",
  };

  useEffect(() => {
    departureAirports.includes(airport)
      ? setAirportIsValid(true)
      : setAirportIsValid(false);

    if (airportIsValid) return setAirportsValidation(true);
  }, [airport, departureAirports, airportIsValid, setAirportsValidation]);

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
