import React from "react";
import { useTheme } from "../../ThemeContext.js";

function SelectDepartureAirport() {
  const { mediaQueries } = useTheme();

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
      <form>
        <div>
          <input
            type="search"
            name="from"
            id="from"
            placeholder="Select your Airport"
            autoComplete="true"
            autoFocus={mediaQueries.smallView ? true : false}
          />
        </div>
        <div>
          <div>
            <label>
              <h5>Depart</h5>
              <input type="date" name="date" />
            </label>
          </div>
          <div>
            <label>
              <h5>Return</h5>
            </label>
          </div>
        </div>
        <input type="date" name="date" />
      </form>
      <div>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default SelectDepartureAirport;
