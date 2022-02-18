import React from "react";
import FlightSearch from "./flightsSearch/FlightSearch";

function Home({ className }) {
  return (
    <div className={className}>
      <h2>Where is your next trip together?</h2>
      <FlightSearch />
    </div>
  );
}

export default Home;
