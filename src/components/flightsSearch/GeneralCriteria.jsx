import React from "react";

function GeneralCriteria({
  passengers,
  durationPicker,
  handleDurationPickerChange,
}) {
  const handleChangeField = (key, value) => {
    durationPicker[key] = value;
    // fieldIsValid ? handlePassengerChange() : console.log(value, "isn't valid");
    handleDurationPickerChange();
  };
  // console.log(typeof durationPicker.days)
  console.log(typeof durationPicker.hours);
  return (
    <div className="generalCriteria">
      <span>passengers: {passengers.length}</span>
      <label>
        <h5>min stay time together</h5>
        <div className="stayTimeTogether">
          <p>days:</p>
          <input
            type="number"
            value={durationPicker.days}
            onChange={(e) => handleChangeField("days", parseInt(e.target.value))}
          />
          <p>hours:</p>
          <input
            type="number"
            value={durationPicker.hours}
            onChange={(e) => handleChangeField("hours", parseInt(e.target.value))}
          />
        </div>
      </label>
    </div>
  );
}

export default GeneralCriteria;
