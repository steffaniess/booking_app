import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navigation">
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`navigation-list ${isOpen ? 'open' : ''}`}>
        <li className="navigation-item">
          <NavLink to="/" className="navigation-link" activeClassName="active-link">Home</NavLink>
        </li>
        <li className="navigation-item">
          <NavLink to="/booking" className="navigation-link" activeClassName="active-link">Booking</NavLink>
        </li>
        <li className="navigation-item">
          <NavLink to="/about" className="navigation-link" activeClassName="active-link">About</NavLink>
        </li>
        <li className="navigation-item">
          <NavLink to="/contact" className="navigation-link" activeClassName="active-link">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
