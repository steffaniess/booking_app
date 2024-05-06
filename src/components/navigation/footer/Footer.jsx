// Footer.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons/faTiktok';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <ul className='social-icons'>
        <li>
          <a href="https://www.facebook.com/profile.php?id=61558005699964">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/fellowbt_simulator?igshid=NzZ2aDc0OWF2b3Bq&utm_source=qr">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li>
          <a href="https://www.tiktok.com/@fellowbot_simulator">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
