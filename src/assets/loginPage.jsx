import React, { useState } from 'react';
import '../assets/Styling/loginPage.css'
const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    onLogin(username, password);
  };

  return (
    <div className='login-page'>
    <div className="login-container">
      <FormHeader title="Login" />
      <div className="row">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />
      </div>
      <div className="row">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>
      <div id="button" className="row">
        <button onClick={handleLoginClick}>Login</button>
      </div>
    </div></div>
  );
};

const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;

export default LoginPage;
