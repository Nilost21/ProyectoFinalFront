import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return JSON.parse(localStorage.getItem('isLoggedIn')) || false;
  });
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem('user')) || null;
  });
  const [token, setToken] = useState(() => {
    return localStorage.getItem('token') || '';
  });

  useEffect(() => {
    // Almacenar el estado de autenticación, el estado y el token en el almacenamiento local
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
  }, [isLoggedIn, user, token]);

  const login = async (newToken, userData) => {
    setIsLoggedIn(true);
    setToken(newToken);
    setUser(userData);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Welcome back!',
      timer: 1500,
      showConfirmButton: false
    });
  };

  const logout = () => {
    setIsLoggedIn(false);
    setToken('');
    setUser(null);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'See you later!',
      timer: 1500,
      showConfirmButton: false
    });
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, user, token }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
