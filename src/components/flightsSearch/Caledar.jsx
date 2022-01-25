import React from "react";

const Caledar = () => {
  return (
    <div className="calendar">
      <label>
        <h5>Depart</h5>
        <input type="date" name="date" />
      </label>
      <label>
        <h5>Return</h5>
        <input type="date" name="date" />
      </label>
    </div>
  );
};

export default Caledar;
