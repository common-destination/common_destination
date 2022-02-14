import React from "react";
import icons from "../functions/icons.js";

export const PopUps = ({
  className,
  text1,
  text2,
  text3,
  text4,
  setErrorsToggle,
}) => {
  return (
    <div className={className}>
      <icons.MdOutlineClose
        className="menuIconClosed"
        onClick={() => {
          setErrorsToggle(false);
        }}
        style={{ cursor: "pointer" }}
      />
      <h3>Fields marked in red are wrong</h3>
      <br />

      {(text1 || text2 || text3) && <h4>DATES ERRORS:</h4>}

      {text1 && (
        <>
          <p>- {text1}</p>
          <br />
        </>
      )}
      {text2 && (
        <>
          <p>- {text2}</p>
          <br />
        </>
      )}
      {text3 && (
        <>
          <p>- {text3}</p>
          <br />
        </>
      )}

      {text4 && <h4>AIRPORTS ERRORS:</h4>}

      {text4 && (
        <>
          <p>- {text4}</p>
          <br />
        </>
      )}
    </div>
  );
};
