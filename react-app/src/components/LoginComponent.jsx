// LoginComponent.js
import React, { useState } from 'react';
import { useUser } from './UserContext';

const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const { setUserRole } = useUser();

  const handleLogin = () => {
    // Dummy login logic
    if (username === 'admin') {
      setUserRole('admin');
    } else if (username === 'user1') {
      setUserRole('user1');
    } else if (username === 'user2') {
      setUserRole('user2');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginComponent;
