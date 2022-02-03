function SelectDepartureAirport({handleAirport,passenger,departureAirports}) {
  // console.log(airport)
  return (
    <div className="selectDeparture">
      <label>
        <h5>From</h5>
      </label>
      <input
        placeholder="Choose an airport"
        list="opts"
        value={passenger.airport}
        onChange={(e) => handleAirport(e.target.value)}
      />
      <datalist id="opts">
        {departureAirports.map((departureAirport, index) => (
          <option key={index} value={departureAirport}>
            {departureAirport}
          </option>
        ))}
      </datalist>
    </div>
  );
}

export default SelectDepartureAirport;
