import React, { useState, useEffect } from "react";
import icons from "../../functions/icons.js";

function GeneralCriteria({
  passengers,
  stayTimeTogether,
  setStayTimeTogether,
}) {
  const [daysCounter, setDaysCounter] = useState(1);
  const [hoursCounter, setHoursCounter] = useState(0);
  const [infos, setInfos] = useState(false);

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
      <label
        onClick={() => {
          infos && setInfos(false);
        }}
      >
        {infos && (
          <div className="bubble bubble-bottom-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
            placeat quibusdam doloribus animi saepe quae quis enim.
          </div>
        )}
        <div className="stayTimeTogether">
          <icons.FaInfoCircle
            className="iconInfo"
            style={{ cursor: "pointer" }}
            onClick={() => {
              !infos ? setInfos(true) : setInfos(false);
            }}
          />
          <span>minimum duration</span>
          {daysCounter > 0 && (
            <>
              <icons.FaMinusCircle
                className="iconsPlusMinus"
                onClick={() => {
                  if (daysCounter < 2) {
                    setHoursCounter(22);
                  }
                  if (daysCounter >= 1) {
                    setDaysCounter((prev) => prev - 1);
                  }
                }}
              />
              <p>{daysCounter}</p>
              {/* {console.log("days", daysCounter)} */}
              <icons.FaPlusCircle
                className="iconsPlusMinus"
                onClick={() => setDaysCounter((prev) => prev + 1)}
              />
              <p> days</p>
            </>
          )}

          {daysCounter < 1 && (
            <>
              <icons.FaMinusCircle
                className="iconsPlusMinus"
                onClick={() => {
                  if (hoursCounter < 24 && hoursCounter > 2)
                    return setHoursCounter((prev) => prev - 2);
                  // if (hoursCounter === 24) return setHoursCounter(0); // => no need to set
                }}
              />
              <p>{hoursCounter}</p>
              {/* {console.log("hours", hoursCounter)} */}
              <icons.FaPlusCircle
                className="iconsPlusMinus"
                onClick={() => {
                  if (hoursCounter >= 22) {
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
      <span>passengers: {passengers.length}</span>
    </div>
  );
}

export default GeneralCriteria;
