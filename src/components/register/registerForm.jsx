// import React, { useState } from 'react';
// import axios from 'axios';
// import './Auth.css';

// const RegisterForm = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('https://localhost:7011/api/auth/register', { username, email, password });
//       console.log('Registration successful', response.data);
//     } catch (error) {
//       console.error('Registration error', error);
//       setError('Failed to register');
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Username:</label>
//           <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
//         </div>
//         <div className="form-group">
//           <label>Email:</label>
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         </div>
//         <div className="form-group">
//           <label>Password:</label>
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         </div>
//         <button type="submit">Register</button>
//         {error && <p className="error">{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default RegisterForm;
