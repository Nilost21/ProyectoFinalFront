/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Swal from 'sweetalert2';
import axiosInstance from '../utils/axiosInstance';

export const EnrollmentProvider = createContext();

function EnrollmentContext({ children }) {
  const [enrollments, setEnrollments] = useState([]);
  const [classesForToday, setClassesForToday] = useState([]);
  const [userEnrollments, setuserEnrollments] = useState([]);

  const getEnrollments = async () => {
    const response = await axios.get('http://localhost:3000/api/enrollment/');
    const data = response.data;
    setEnrollments([...data]);
  };

  const getEnrollmentsForToday = async () => {
    const response = await axios.get('http://localhost:3000/api/enrollment/enrollments/today');
    const data = response.data;
    setClassesForToday([...data]);
    return data;
  };

  const newEnrollment = async (enrollmentData) => {
    const response = await axiosInstance.post('/enrollment/', enrollmentData);
    const data = response.data;
    if (data.message === 'You are already enrolled in the class.') {
      return data;
    }
    setEnrollments([...enrollments, data]);
    return data;
  };

  const deleteEnrollment = async (_id) => {
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
  };

  const getUserEnrollments = async (userId) => {
    const token = localStorage.getItem('token');
    if (!token) return;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(
      `http://localhost:3000/api/enrollment/enrollments/${userId}`,
      config
    );
    const data = response.data;
    setuserEnrollments([...data]);
    return data;
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
