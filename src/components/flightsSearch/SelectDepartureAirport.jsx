function SelectDepartureAirport({airport, handleChangeField, departureAirports}) {
  // console.log(airport)
  return (
    <div className="selectDeparture">
      <label>
        <h5>From</h5>
      </label>
      <input
        placeholder="Choose an airport"
        list="opts"
        value={airport}
        onChange={(e) => handleChangeField('airport', e.target.value)}
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
