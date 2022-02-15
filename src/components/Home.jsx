import React from "react";
import FlightSearch from "./flightsSearch/FlightSearch";

function Home({ className }) {
  return (
    <div className={className}>
      <FlightSearch />
    </div>
  );
}

export default Home;
