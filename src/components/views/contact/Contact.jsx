import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios'; // Importera axios för att göra HTTP-förfrågningar

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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
        email,
        message
      });

      console.log(response.data); // Skriver ut svaret från servern i konsolen

      // Återställ formuläret efter att e-posten skickats
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Ett fel uppstod:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">E-post:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Meddelande:</label>
        <textarea
          id="message"
          value={message}
          onChange={handleMessageChange}
          required
        />
      </div>
      <button type="submit">Skicka</button>
    </form>
  );
};

export default Contact;
