import React, {useState} from "react";

function InputNumber(props) {
  const [maxStayTime, setMaxStayTime] = useState(1);
  return (
    <>
      <label>
        <h5>{props.labelText}</h5>
        <input className="minimumJourney" type="number"  value={maxStayTime} min="1"
          max="30"
          onChange={(e) => setMaxStayTime(e.target.value)}/>
      </label>
    </>
  );
}

export default InputNumber;
