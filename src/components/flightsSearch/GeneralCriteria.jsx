import React, { useState, useEffect } from "react";
import icons from "../../functions/icons.js";
import * as SmallComponents from "../SmallComponents.jsx";
import popUp from "../../data/popUp.json";

function GeneralCriteria({
  passengers,
  stayTimeTogether,
  setStayTimeTogether,
  datesError,
  airportsError,
  setErrorsToggle,
}) {
  const [daysCounter, setDaysCounter] = useState(1);
  const [hoursCounter, setHoursCounter] = useState(0);
  const [mettingTimeInfos, setMeetingTimeInfos] = useState(false);

  useEffect(() => {
    setStayTimeTogether(daysCounter * 24 + hoursCounter);
  }, [
    daysCounter,
    hoursCounter,
    passengers,
    stayTimeTogether,
    setStayTimeTogether,
  ]);

  return (
    <div className="generalCriteria">
      {(datesError || airportsError) && (
        <SmallComponents.PopUps
          className="passengerCriteriaError"
          text1={datesError && popUp.datesErrors.departureLater}
          text2={datesError && popUp.datesErrors.withoutMeeting}
          text3={airportsError && popUp.airportsErrors}
          setErrorsToggle={setErrorsToggle}
        />
      )}

      <label>
        {mettingTimeInfos && (
          <SmallComponents.PopUps
            className="bubble bubble-bottom-left"
            text={popUp.meetingDuration}
            setInfos={setMeetingTimeInfos}
          />
        )}

        <div className="stayTimeTogether">
          <icons.FaInfoCircle
            className="iconInfo"
            style={{ cursor: "pointer" }}
            onClick={() => {
              !mettingTimeInfos
                ? setMeetingTimeInfos(true)
                : setMeetingTimeInfos(false);
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
