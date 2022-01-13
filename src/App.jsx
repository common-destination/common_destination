import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/App.scss';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Main />
      </div>
    </Router>
  );
}

export default App;
