import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const Logout = () => {
  const { setAuth } = useContext(AuthContext);

  const handleLogout = () => {
    // Call the setAuth function with null to clear the authentication data
    setAuth(null);
    // Remove the 'auth' key from localStorage
    localStorage.removeItem('auth');
    window.location.href = '/login';
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
