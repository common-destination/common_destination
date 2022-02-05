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
    console.log(stayTimeTogether);
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
        <h5>min stay time together</h5>
        <div className="stayTimeTogether">
          {daysCounter > 0 && (
            <>
              <p>days:</p>
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
            </>
          )}

          {daysCounter < 1 && (
            <>
              <p>hours:</p>
              <icons.HiMinusCircle
                onClick={() => {
                  // console.log({hoursCounter})
                  if (hoursCounter >= 4 )
                    return setHoursCounter((prev) => prev - 2);
                  // console.log("2",{hoursCounter})

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
            </>
          )}
        </div>
      </label>
    </div>
  );
}

export default GeneralCriteria;
