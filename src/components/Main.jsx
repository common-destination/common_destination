/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Profil from './Profil';
import About from './About';
import Contact from './Contact';
import Home from './Home';

const Main = () => {
  return (
    <div className='Main'>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/profil' element={<Profil />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route exact path='/' element={<Home />}></Route>
      </Routes>
    </div>
  );
};

export default Main;
