import React, { useState, useEffect } from "react";
import icons from "../../functions/icons.js";

function GeneralCriteria({
  passengers,
  stayTimeTogether,
  setStayTimeTogether,
}) {
  const [daysCounter, setDaysCounter] = useState(1);
  const [hoursCounter, setHoursCounter] = useState(0);

  useEffect(() => {
    setStayTimeTogether(daysCounter * 24 + hoursCounter);
    // console.log(stayTimeTogether);
  }, [
    daysCounter,
    hoursCounter,
    passengers,
    stayTimeTogether,
    setStayTimeTogether,
  ]);

  return (
    <div className="generalCriteria">
      <span>passengers: {passengers.length}</span>
      <label>
        <h5 title="infos sdhjddsjdslkjdsjdsk jdsajdsaldsajds">
          meeting duration:
        </h5>
        <div className="stayTimeTogether">
          {daysCounter > 0 && (
            <>
              <p> min </p>
              <icons.HiMinusCircle
                onClick={() => {
                  if (daysCounter < 2) {
                    setHoursCounter(24);
                  }
                  if (daysCounter >= 1) {
                    setDaysCounter((prev) => prev - 1);
                  }
                }}
              />
              <p>{daysCounter}</p>
              <icons.BsPlusCircleFill
                onClick={() => setDaysCounter((prev) => prev + 1)}
              />
              <p> days</p>
            </>
          )}

          {daysCounter < 1 && (
            <>
              <p> min </p>

              <icons.HiMinusCircle
                onClick={() => {
                  if (hoursCounter >= 4)
                    return setHoursCounter((prev) => prev - 2);
                  if (hoursCounter === 24) return setHoursCounter(0);
                }}
              />
              <p>{hoursCounter}</p>
              <icons.BsPlusCircleFill
                onClick={() => {
                  if (hoursCounter >= 23) {
                    setDaysCounter(1);
                    setHoursCounter(0);
                  }
                  if (hoursCounter < 24) {
                    setHoursCounter((prev) => prev + 2);
                  }
                }}
              />
              <p> hours </p>
            </>
          )}
        </div>
      </label>
    </div>
  );
}

export default GeneralCriteria;
