/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Swal from 'sweetalert2';

export const EnrollmentProvider = createContext();

function EnrollmentContext({ children }) {
  const [enrollments, setEnrollments] = useState([]);
  const [classesForToday, setClassesForToday] = useState([]);
  const [userEnrollments, setuserEnrollments] = useState([]);

  const getEnrollments = async () => {
    try {
      const response = await axios.get(
        'https://proyectofinalback.onrender.com/api/enrollment/'
      );
      const data = response.data;
      setEnrollments([...data]);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const getEnrollmentsForToday = async () => {
    try {
      const response = await axios.get(
        'https://proyectofinalback.onrender.com/api/enrollment/enrollments/today'
      );
      const data = response.data;
      setClassesForToday([...data]);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const newEnrollment = async (enrollmentData) => {
    try {
      const response = await axios.post(
        'https://proyectofinalback.onrender.com/api/enrollment/',
        enrollmentData
      );
      const data = response.data;
      setEnrollments([...enrollments, data]);
      return data;
    } catch (error) {
      console.log('Error at enrolling to the class', error.message || error);
      throw error;
    }
  };

  const deleteEnrollment = async (_id) => {
    try {
      const res = await axios.delete(
        `https://proyectofinalback.onrender.com/api/enrollment/${_id}`
      );
      console.log('res', res);
      const filteredEnrollments = enrollments.filter((e) => e.id !== _id);
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Class eliminated',
        showConfirmButton: false,
        timer: 1500,
      });
      setEnrollments([...filteredEnrollments]);
      await getEnrollments();
    } catch (error) {
      console.log(error, 'Error when deleting class');
      throw error;
    }
  };

  const getUserEnrollments = async (userId) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        `https://proyectofinalback.onrender.com/api/enrollment/enrollments/${userId}`,
        config
      );
      const data = response.data;
      setuserEnrollments([...data]);
      return data;
    } catch (error) {
      console.error('Error fetching user enrollments:', error.message || error);
      throw error;
    }
  };

  useEffect(() => {
    getEnrollments();
    getEnrollmentsForToday();
  }, []);

  return (
    <EnrollmentProvider.Provider
      value={{
        enrollments,
        classesForToday,
        userEnrollments,
        getEnrollments,
        getEnrollmentsForToday,
        getUserEnrollments,
        newEnrollment,
        deleteEnrollment,
      }}
    >
      {children}
    </EnrollmentProvider.Provider>
  );
}

EnrollmentContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default EnrollmentContext;
