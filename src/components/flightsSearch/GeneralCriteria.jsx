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
    // if (daysCounter === 0) return setHoursCounter(24);
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
                onClick={() =>
                  daysCounter > 0
                    ? setDaysCounter((prev) => prev - 1)
                    : setDaysCounter((prev) => prev - 0)
                }
              />
              <p>{daysCounter}</p>
              <icons.BsPlusCircleFill
                onClick={() => setDaysCounter((prev) => prev + 1)}
              />
            </>
          )}

          {daysCounter <= 0 && (
            <>
              <p>hours:</p>
              <icons.HiMinusCircle
                onClick={() =>
                  hoursCounter > 0
                    ? setHoursCounter((prev) => prev - 1)
                    : setHoursCounter((prev) => prev - 0)
                }
              />
              <p>{hoursCounter}</p>
              <icons.BsPlusCircleFill
                onClick={() => setHoursCounter((prev) => prev + 1)}
              />
            </>
          )}
        </div>
      </label>
    </div>
  );
}

export default GeneralCriteria;
