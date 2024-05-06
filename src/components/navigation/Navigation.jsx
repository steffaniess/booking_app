import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul className="navigation-list">
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
