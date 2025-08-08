import React from 'react';
import logo from './img/logo.png';
import './App.css';

const Header = ({ setSection }) => {
  return (
    <div className="blockHeader">
      <div className="blockLogo" onClick={() => setSection('home')} tabIndex={0} role="button" aria-label="Go to home">
        <img className="logo animate-rotate-hover" src={logo} alt="PizzAmore logo" />
      </div>
      <div className="blockTittle">
        <h1 className="tittle animate-shadow-glow" onClick={() => setSection('home')} tabIndex={0} role="button" aria-label="Go to home">
          PizzAmore
        </h1>
      </div>
    </div>
  );
};

export default Header;

