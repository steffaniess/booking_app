import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios'; // Importera axios för att göra HTTP-förfrågningar

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
      const response = await axios.post('https://localhost:7011/api/email/send', formData);
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
  <form onSubmit={handleSubmit} className="form-container">
      {error && <p className="error">{error}</p>}
      <div>
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} className="form-name" required />
      </div>
      <div>
          <label htmlFor="email" className="form-label">E-mail:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} className="form-input" required />
      </div>
      <div>
          <label htmlFor="message" className="form-label">Message:</label>
          <textarea id="message" value={message} onChange={handleMessageChange} className="form-textarea" required />
      </div>
      <button type="submit" className="form-submit">Send</button>
  </form>
);
};

export default Contact;