import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/App.scss';
import Navbar from './components/Navbar';
import Main from './components/Main';
import { useTheme } from './ThemeContext';

function App() {
  const { burgerMenu } = useTheme();

  return (
    <Router>
      <div className='App' id='app-background'>
        <Navbar />
        {!burgerMenu && <Main />}
      </div>
    </Router>
  );
}

export default App;
