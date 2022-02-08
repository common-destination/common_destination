import React from "react";
import icons from "../functions/icons.js";

export const PopUpInfos = ({className, text, setInfos}) => {
  return (
    <div className={className}>
      <p>{text}</p>
      <icons.MdOutlineClose
        className="menuIconClosed"
        onClick={()=> setInfos(false)}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};



