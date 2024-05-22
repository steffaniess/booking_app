import React, { useState } from 'react';
import axios from 'axios'; // Importera axios för att göra HTTP-förfrågningar
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Alla fält måste fyllas i.");
      return;
    }
    if (!email.includes('@')) {
      setError("Ange en giltig e-postadress.");
      return;
    }

    try {
      const formData = { name, email, message };
      const response = await axios.post('https://localhost:7011/api/emailAPI/send', formData);
      console.log(response.data);
      alert('E-postmeddelande skickat!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Ett fel uppstod:', error);
      setError('Ett fel uppstod när meddelandet skulle skickas.');
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-content">
          <div className="form-fields">
            {error && <p className="error-message">{error}</p>}
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name:</label>
              <input type="text" id="name" value={name} onChange={handleNameChange} className="form-input" required />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">E-mail:</label>
              <input type="email" id="email" value={email} onChange={handleEmailChange} className="form-input" required />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message:</label>
              <textarea id="message" value={message} onChange={handleMessageChange} className="form-textarea" required />
            </div>
            <button type="submit" className="form-submit">Send</button>
          </div>
          <div className="image-container">
            <img src="/images/deadangle.JPG" alt="deadangle" className="contact-image" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
