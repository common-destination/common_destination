import React from "react";

function SelectDepartureAirport(props) {
  // const [selectNote, setSelectNote] = useState("select_note");

  // const handleChange = (e) => {
  //   setSelectNote(e.target.value);
  // };
  return (
    <div className="selectDeparture">
      <label>
        <h5>From</h5>
      </label>
      <input placeholder="Choose an airport" list="opts" />
      <datalist id="opts">
        {props.departureAirport.map((airport, index) => (
          <option key={index} value={airport}>
            {airport}
          </option>
        ))}
      </datalist>
      {/* <select value={selectNote} onChange={handleChange}>
        <option value="select_note" disabled>
          Choose an airport
        </option>
        {props.departureAirport.map((airport, index) => (
          <option key={index} value={airport}>
            {airport}
          </option>
        ))}
      </select> */}
    </div>
  );
}

export default SelectDepartureAirport;
