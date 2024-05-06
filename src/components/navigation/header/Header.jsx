import React from 'react';
import './Header.css'; // Importera CSS för header-styling här

const Header = () => {
    return (
        <header className="header">
            {/* Logga */}
            <div className="logo-container">
                <img src="/images/FB.png" alt="Logo" className="logo" />
            </div>
        </header>
    );
}

export default Header;
