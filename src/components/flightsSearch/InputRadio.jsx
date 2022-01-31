import React from "react";

const InputRadio = (props) => {
  return (
    <>
      <input
        checked={props.checked}
        onClick={props.setCalendarToggle}
        type="radio"
        name={props.inputName}
        id="trip"
      />
      <label>{props.text}</label>
    </>
  );
};

export default InputRadio;
