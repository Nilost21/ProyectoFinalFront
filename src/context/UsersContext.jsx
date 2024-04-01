/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export const UsersProvider = createContext();

function UsersContext({ children }) {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8000/users');
      const data = response.data;
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UsersProvider.Provider value={{ users }}>
      {children}
    </UsersProvider.Provider>
  );
}

UsersContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UsersContext;
