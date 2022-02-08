import React, { useState, useEffect } from "react";

function SelectDepartureAirport({
  airport,
  handleChangeField,
  departureAirports,
  setAirportsValidation,
  submitIsActive
}) {
  const [airportIsValid, setAirportIsValid] = useState(false);

  const styles = {
    border: submitIsActive && !airportIsValid ? "2px solid red" : "1px solid black ",
  };

  useEffect(() => {
   if(submitIsActive) {departureAirports.includes(airport)
      ? setAirportIsValid(true)
      : setAirportIsValid(false);
    if (airportIsValid) return setAirportsValidation(true)};
  }, [airport, airportIsValid, setAirportsValidation, departureAirports,submitIsActive]);


// useEffect(() => {


// },[submitIsActive])

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
