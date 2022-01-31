import React from "react";

function InputData(props) {
  return (
    <>
      <input
        type="text"
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        required={true}
        onChange={props.onChange}
      />
    </>
  );
}

export default InputData;
