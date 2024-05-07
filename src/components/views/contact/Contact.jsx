import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios'; // Importera axios för att göra HTTP-förfrågningar
import EmailService from '../../services/EmailService';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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

    try {
      // Skicka e-postdata till backend genom en HTTP POST-förfrågan
      const response = await axios.post('http://localhost:5000/api/email/send', {
        name,
        email,
        message
      });

      console.log(response.data); // Skriver ut svaret från servern i konsolen

      // Återställ formuläret efter att e-posten skickats
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Ett fel uppstod:', error);
    }

    // Skicka e-post direkt från frontend
    const emailService = new EmailService();
    emailService.SendEmail("your-email@example.com", "Your Name", "recipient@example.com", "Recipient Name", "Subject", "Message body");
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div>
        <label htmlFor="name" className="form-label">Namn:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          className="form-name"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="form-label">E-post:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          className="form-input"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="form-label">Meddelande:</label>
        <textarea
          id="message"
          value={message}
          onChange={handleMessageChange}
          className="form-textarea"
          required
        />
      </div>
      <button type="submit" className="form-submit">Skicka</button>
    </form>
  );
};

export default Contact;
