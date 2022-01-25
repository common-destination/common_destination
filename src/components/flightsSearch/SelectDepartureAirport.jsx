import React, { useState } from "react";

function SelectDepartureAirport(props) {
  const [selectNote, setSelectNote] = useState("select_note");

  const handleChange = (e) => {
    setSelectNote(e.target.value);
  };
  return (
    <div>
      <div>
        <input type="radio" name="ticket" id="roundtrip" />
        <span>Roundtrip</span>
        <input type="radio" name="ticket" id="one-way" />
        <span>One Way</span>
      </div>
      <div>
        <label>
          <h5>From</h5>
        </label>
      </div>
      <select value={selectNote} onChange={handleChange}>
        <option value="select_note" disabled>
          Please select...
        </option>
        {props.departureAirport.map((airport, index) => (
          <option key={index} value={airport}>
            {airport}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectDepartureAirport;
