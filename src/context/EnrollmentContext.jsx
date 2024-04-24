/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Swal from 'sweetalert2';

export const EnrollmentProvider = createContext();

function EnrollmentContext({ children }) {
  const [enrollments, setEnrollments] = useState([]);
  const [classesForToday, setClassesForToday] = useState([]);

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
      //await getEnrollments();
    } catch (error) {
      console.log('Error at enrolling to the class', error.message || error);
    }
  };

  const deleteEnrollment = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/enrollment/${id}`);
      const filteredEnrollments = enrollments.filter((e) => e.id !== id);
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

  useEffect(() => {
    getEnrollments();
    getEnrollmentsForToday();
  }, []);

  return (
    <EnrollmentProvider.Provider
      value={{
        enrollments,
        classesForToday,
        getEnrollments,
        getEnrollmentsForToday,
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
