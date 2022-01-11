/* eslint-disable react/button-has-type */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../ThemeContext';

const Navbar = () => {
  const { burgerMenuToggle, setBurgerMenuToggle, devices } = useTheme();
  const handleBurgerMenuToggle = () => {
    if (devices.burgerMenu && !burgerMenuToggle) {
      setBurgerMenuToggle(true);
    }
    if (devices.burgerMenu && burgerMenuToggle) {
      setBurgerMenuToggle(false);
    }
  };

  return (
    <div className='Navbar'>
      {!devices.burgerMenu || burgerMenuToggle ? (
        <ul className={!burgerMenuToggle ? 'navBar' : 'burgerMenu'}>
          <li onClick={handleBurgerMenuToggle}>
            <NavLink className='navLink' to='/'>
              HOME
            </NavLink>
          </li>
          <li onClick={handleBurgerMenuToggle}>
            <NavLink className='navLink' to='/login'>
              LOGIN
            </NavLink>
          </li>
          <li onClick={handleBurgerMenuToggle}>
            <NavLink className='navLink' to='/signup'>
              SIGNUP
            </NavLink>
          </li>
          <li onClick={handleBurgerMenuToggle}>
            <NavLink className='navLink' to='/profil'>
              PROFIL
            </NavLink>
          </li>
          <li onClick={handleBurgerMenuToggle}>
            <NavLink className='navLink' to='/about'>
              ABOUT
            </NavLink>
          </li>

          <li onClick={handleBurgerMenuToggle}>
            <NavLink className='navLink' to='/contact'>
              CONTACT
            </NavLink>
          </li>
        </ul>
      ) : (
        devices.burgerMenu &&
        !burgerMenuToggle && (
          <div
            onClick={handleBurgerMenuToggle}
            className='burgerIcon'
            to='/burgermenu'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              className='bi bi-list'
              viewBox='0 0 16 16'
            >
              <path
                fillRule='evenodd'
                d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
              />
            </svg>
          </div>
        )
      )}
      {devices.burgerMenu && burgerMenuToggle && (
        <p className='burgerX' onClick={handleBurgerMenuToggle}>
          X
        </p>
      )}
    </div>
  );
};

export default Navbar;
