import React from "react";

function inputNumber(props) {
  return (
    <>
      <label>
        <h5>min Journey</h5>
        <input className="minimumJourney" type="number" defaultValue={1} />
      </label>
    </>
  );
}

export default inputNumber;
