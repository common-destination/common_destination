import React from "react";

const InputRadio = (props) => {
  return (
    <div>
      <input type="radio" name={props.inputName} id="roundtrip" />
      <label>{props.text}</label>
    </div>
  );
};

export default InputRadio;
