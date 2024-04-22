/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Swal from 'sweetalert2';

export const ClassProvider = createContext();

function ClassContext({ children }) {
  const [classes, setClasses] = useState([]);

  const getClasses = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/class/');
      const data = response.data;
      setClasses([...data]);
    } catch (error) {
      console.log(error);
    }
  };

  const addClass = async (newClass) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/api/class/create',
        newClass
      );
      const data = response.data;
      setClasses([...classes, data]);
      await getClasses();
    } catch (error) {
      console.log('Error while creating a new class', error.message || error);
    }
  };

  const deleteClass = async (_id) => {
    try {
      await axios.delete(
        `http://localhost:3000/api/class/${_id}`
      );
      const filteredClasses = classes.filter((e) => e.id !== _id);
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Class eliminated',
        showConfirmButton: false,
        timer: 1500,
      });
      setClasses([...filteredClasses]);
      await getClasses();
    } catch (error) {
      console.log(error, 'Error when deleting class');
    }
  };

  const updateClass = async (classToEdit) => {
    try {
      await axios.put(
        `http://localhost:3000/api/class/${classToEdit._id}`,
        classToEdit
      );
      const updatedClass = classes.map((c) =>
        c._id === classToEdit._id ? classToEdit : c
      );
      setClasses(updatedClass);
    } catch (error) {
      console.log(error, 'Error updating class');
    }
  };

  useEffect(() => {
    getClasses();
  }, []);

  return (
    <ClassProvider.Provider
      value={{
        classes,
        addClass,
        deleteClass,
        updateClass,
        getClasses
      }}
    >
      {children}
    </ClassProvider.Provider>
  );
}

ClassContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ClassContext;
