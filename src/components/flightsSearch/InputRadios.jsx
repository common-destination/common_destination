import React from "react";

const InputRadios = (props) => {
  return (
    <>
      <input
        defaultChecked={props.defaultChecked}
        onClick={props.roundTripToggle}
        type="radio"
        name={props.inputName}
        id="trip"
      />
      <label>Roundtrip</label>
      <input
        onClick={props.oneWayToggle}
        type="radio"
        name={props.inputName}
        id="trip"
      />
      <label>Oneway</label>
    </>
  );
};

export default InputRadios;
