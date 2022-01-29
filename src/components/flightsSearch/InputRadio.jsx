import React from "react";

const InputRadio = (props) => {
  return (
    <div>
      <input
        checked={props.checked}
        onClick={props.setCalendarToggle}
        type="radio"
        name={props.inputName}
        id="trip"
      />
      <label>{props.text}</label>
    </div>
  );
};

export default InputRadio;
