import React from "react";
// import { useTheme } from "../../ThemeContext.js";

function SelectDepartureAirport() {
  // const { mediaQueries } = useTheme();

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
    </div>
  );
}

export default SelectDepartureAirport;
