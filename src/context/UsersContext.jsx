import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useAuth } from './Utils/authUtils';

export const UsersProvider = createContext();

function UsersContext({ children }) {
  const [users, setUsers] = useState([]);
  const { isLoggedIn, user } = useAuth();

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
      setUsers([...data]);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const createUser = async (user) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/api/auth/signup',
        user
      );
      const data = response.data;
      setUsers(prevUsers => [...prevUsers, data]);
      return data;
    } catch (error) {
      console.error('Registration error:', error.message);
      throw error;
    }
  };

  const userLogIn = async (user) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/api/auth/signin',
        user
      );
      return response;
    } catch (error) {
      console.error('Login error:', error.message);
      throw error;
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

  const getUserName = async (id) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        `http://localhost:3000/api/user/name/${id}`,
        config
      );
      const data = response.data;
      return data;
    } catch (error) {
      console.log(error);
      throw error;
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
      await axios.delete(
        `http://localhost:3000/api/user/${id}`,
        config
      );
      const filteredUsers = users.filter(user => user._id !== id);
      Swal.fire({
        position: 'center',
        icon: 'Success',
        title: 'User deleted succesfully',
        showConfirmButton: false,
        timer: 1500,
      });
      setUsers([...filteredUsers]);
      await getUsers();
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  /* Funciones para el perfil del usuario */

  const getMyUser = async (id) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        `http://localhost:3000/api/user/profile/${id}`,
        config
      );
      const data = response.data;
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const editUser = async (user) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      await axios.put(
        `http://localhost:3000/api/user/profile/${user.id}`,
        user,
        config
      );
      const updatedUsers = users.map((u) =>
        u._id === users._id ? user : u
      );
      setUsers(updatedUsers);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  /*   const deleteMyUser = async (id) => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return;
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };
        await axios.delete(`http://localhost:3000/api/profile/user/${id}`, config);
        const filteredUsers = users.filter(user => user._id !== id);
        Swal.fire({
          position: 'center',
          icon: 'Success',
          title: 'User deleted succesfully',
          showConfirmButton: false,
          timer: 1500,
        });
        setUsers([...filteredUsers]);
        await getUsers();
      } catch (error) {
        console.log(error);
        throw error;
      }
    }; */

  useEffect(() => {
    if (isLoggedIn && user.isAdmin) {
      getUsers();
    }
  }, [isLoggedIn, user]);

  return (
    <UsersProvider.Provider value={{
      users,
      getUsers,
      createUser,
      userLogIn,
      getUser,
      getUserName,
      getMyUser,
      editUser,
      deleteUser
    }}>
      {children}
    </UsersProvider.Provider>
  );
}

UsersContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UsersContext;