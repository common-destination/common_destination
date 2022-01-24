import React from "react";
import { useTheme } from "../../ThemeContext.js";

function SelectDepartureAirport() {
  const { mediaQueries } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>
        <input
          type="radio"
          name="ticket"
          id="roundtrip"
          style={{ margin: "0 0.5rem 0 0" }}
        />
        <span
          style={{
            margin: "0 5rem 0 0",
            fontSize: "13.28px",
            fontWeight: "bold",
          }}
        >
          Roundtrip
        </span>
        <input
          type="radio"
          name="ticket"
          id="one-way"
          style={{ margin: "0 0.5rem 0 0" }}
        />
        <span
          style={{
            fontSize: "13.28px",
            fontWeight: "bold",
          }}
        >
          One Way
        </span>
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
            style={{
              textAlign: "center",
              width: "90vw",
              height: "2rem",
            }}
          />
        </div>
        <div>
          <div>
            <label>
              <h5>Depart</h5>
              <input
                type="date"
                name="date"
                required
                pattern="\d{4}-\d{2}-\d{2}"
              />
            </label>
          </div>
          <div>
            <label>
              <h5>Return</h5>
            </label>
          </div>
        </div>
        <input type="date" name="date" required pattern="\d{4}-\d{2}-\d{2}" />
      </form>
      <div>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default SelectDepartureAirport;
