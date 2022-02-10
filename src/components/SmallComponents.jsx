import React from "react";
import icons from "../functions/icons.js";

export const PopUpInfos = ({
  className,
  text1,
  text2,
  text3,
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
      <br />
      {text1 !== "" && (
        <>
          <p>- {text1}</p>
          <br />
        </>
      )}
      {text2 !== "" && (
        <>
          <p>- {text2}</p>
          <br />
        </>
      )}
      {text3 !== "" && (
        <>
          <p>- {text3}</p>
          <br />
        </>
      )}
    </div>
  );
};
