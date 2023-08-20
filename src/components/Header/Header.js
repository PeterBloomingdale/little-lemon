import React from 'react';
import Nav from '../Nav/Nav';
import logo from '../../assets/Logo.svg';
import './Header.css';

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <Nav />
    </header>
  );
}

export default Header;
