import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [flight, setFlight] = useState([]);

  const url = 'http://api.aviationstack.com/v1/flights?';

  useEffect(() => {
    (async () => {
      let params = new URLSearchParams({
        access_key: '971718036530bcdb31f99cd133604de6',
        limit: 10000,
        // flight_date: '2019-02-31'
      });
      let response = await fetch(`${url}${params}`);
      response = await response.json();
      setFlight(response);
      
    })();
  }, []);
  console.log(flight);
  return <div className='App'>whffffdddi</div>;
}

export default App;
