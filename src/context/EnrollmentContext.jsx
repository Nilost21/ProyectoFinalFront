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
      const response = await axios.get('http://localhost:3000/api/enrollment/');
      const data = response.data;
      setEnrollments([...data]);
    } catch (error) {
      console.log(error);
    }
  };

  const getEnrollmentsForToday = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/enrollment/enrollments/today');
      const data = response.data;
      setClassesForToday([...data]);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const newEnrollment = async (enrollmentData) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/api/enrollment/',
        enrollmentData
      );
      const data = response.data;
      setEnrollments([...enrollments, data]);
      return data;
    } catch (error) {
      console.log('Error at enrolling to the class', error.message || error);
    }
  };

  const deleteEnrollment = async (_id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/api/enrollment/${_id}`);
      console.log("res", res);
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
    }
  };

  const getUserEnrollments = async (userId) => {
    try {
      console.log("userId FRONT CONTEXT", userId)
      const response = await axios.get(`http://localhost:3000/api/enrollment/enrollments/${userId}`);
      const data = response.data;
      setuserEnrollments([...data]);
      return data;
    } catch (error) {
      console.error('Error fetching user enrollments:', error.message || error);
      throw new Error('Error fetching user enrollments');
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
        deleteEnrollment
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
