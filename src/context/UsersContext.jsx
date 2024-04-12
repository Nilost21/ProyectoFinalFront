import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export const UsersProvider = createContext();

function UsersContext({ children }) {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      const response = await axios.get('http://localhost:3000/api/user/', config);
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
    <UsersProvider.Provider value={{ users, getUsers }}>
      {children}
    </UsersProvider.Provider>
  );
}

UsersContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UsersContext;
