import React from "react";

function GeneralCriteria({passengers, durationPicker, setDurationPicker}) {
  return (
    <div className="generalCriteria">
      <span>passengers: {passengers.length}</span>
      <label>
        <h5>min stay time together</h5>
        <div className="stayTimeTogether">
          <p>days:</p>
          <input
            type="text"
            value={durationPicker.days}
            onChange={(e) =>
              setDurationPicker((prev) => (prev.days = e.target.value))
            }
          />
          <p>hours:</p>
          <input
            type="text"
            value={durationPicker.hours}
            onChange={(e) =>
              setDurationPicker((prev) => (prev.hours = e.target.value))
            }
          />
        </div>
      </label>
    </div>
  );
}

export default GeneralCriteria;
