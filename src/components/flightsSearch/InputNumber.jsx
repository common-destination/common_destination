import React from "react";

function InputNumber(props) {
  return (
    <>
      <label>
        <h5>min stay time</h5>
        <input
          className="minimumJourney"
          type="number"
          min="1"
          max="30"
          defaultValue={1}
        />
      </label>
    </>
  );
}

export default InputNumber;
