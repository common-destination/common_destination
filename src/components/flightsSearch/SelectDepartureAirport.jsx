import React, { useState} from "react";

function SelectDepartureAirport(props) {
  const [airport, setAirport] = useState("");


  return (
    <div className="selectDeparture">
      <label>
        <h5>From</h5>
      </label>
      <input
        placeholder="Choose an airport"
        list="opts"
        value={airport}
        onChange={(e) => setAirport(e.target.value)}
      />
      <datalist id="opts">
        {props.departureAirport.map((departureAirport, index) => (
          <option key={index} value={departureAirport}>
            {departureAirport}
          </option>
        ))}
      </datalist>
    </div>
  );
}

export default SelectDepartureAirport;
