import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export const UsersProvider = createContext();

function UsersContext({ children }) {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        'http://localhost:3000/api/user/',
        config
      );
      const data = response.data;
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async (id) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        `http://localhost:3000/api/user/${id}`,
        config
      );
      const data = response.data;
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const editUser = async (id, formData) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      const response = await axios.put(
        `http://localhost:3000/api/user/${id}`,
        formData,
        config
      );
      const updatedUser = response.data;
      setUsers(prevUsers => prevUsers.map(user => user._id === id ? updatedUser : user));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      await axios.delete(`http://localhost:3000/api/user/${id}`, config);
      setUsers(prevUsers => prevUsers.filter(user => user._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UsersProvider.Provider value={{ users, getUsers, getUser, editUser, deleteUser }}>
      {children}
    </UsersProvider.Provider>
  );
}

UsersContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UsersContext;
