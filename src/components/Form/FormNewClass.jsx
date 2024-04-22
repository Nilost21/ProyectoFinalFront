/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Button, Form } from 'react-bootstrap';
import './../../css/Form.css';
import { useState, useContext } from 'react';
import { ClassProvider } from '../../context/ClassContex';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';

function FormNewClass({ editClass, handleClose }) {
  const { addClass, updateClass } = useContext(ClassProvider);

  const [classes, setClasses] = useState({
    id: editClass ? editClass._id : uuidv4(),
    name: editClass ? editClass.name : '',
    description: editClass ? editClass.description : '',
    teacher: editClass ? editClass.teacher : '',
    dateAndTime: editClass ? editClass.dateAndTime : '',
  });

  const handleChange = (e) => {
    setClasses({
      ...classes,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !classes.name ||
      !classes.description ||
      !classes.teacher ||
      !classes.dateAndTime
    ) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Please fill in all fields',
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    if (editClass) {
      updateClass(classes);
      handleClose();
    } else {
      addClass(classes);
    }

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Class Checked',
      showConfirmButton: false,
      timer: 1500,
    });

    setClasses({
      id: uuidv4(),
      name: '',
      price: '',
      description: '',
      image: '',
    });
  };

  return (
    <>
      <div className="text-star bg-dark shadow-box text-white rounded-top-4 py-1">
        <h3 className="subtitle ps-3 mt-2 pt-1 my-0 ">Gym class</h3>
      </div>
      <Form
        onSubmit={handleSubmit}
        className=" gradient-bg shadow-box text-light rounded-bottom-3 pb-3 px-4 rounded-bottom-4"
      >
        <Form.Group className="mb-1 pt-1">
          <Form.Label className=" subtitle fs-5 px-3 pt-1 rounded-5 mb-2  ps-1">
            Name
          </Form.Label>
          <Form.Control
            className="paragraph"
            type="text"
            value={classes.name}
            onChange={handleChange}
            name="name"
            placeholder="Enter the class name"
          />
        </Form.Group>

        <Form.Group className="mb-3 pt-1">
          <Form.Label className="subtitle fs-5 px-3 rounded-5 mb-2 ps-1">
            Description
          </Form.Label>
          <Form.Control
            className="paragraph no-resizable"
            type="text"
            as="textarea"
            value={classes.description}
            onChange={handleChange}
            name="description"
            placeholder="Write a description"
          />
        </Form.Group>

        <Form.Group className="mb-3 pt-1">
          <Form.Label className="subtitle fs-5 px-3 rounded-5 mb-2 ps-1">
            Teacher
          </Form.Label>
          <Form.Control
            className="paragraph"
            type="text"
            value={classes.teacher}
            onChange={handleChange}
            name="teacher"
            placeholder="Enter the teacher's name"
          />
        </Form.Group>

        {/* Campo para la fecha y hora */}
        <Form.Group className="mb-3 pt-1">
          <Form.Label className="subtitle fs-5 px-3 rounded-5 mb-2 ps-1">
            Date and Time
          </Form.Label>
          <Form.Control
            className="paragraph"
            type="datetime-local"
            value={classes.dateAndTime}
            onChange={handleChange}
            name="dateAndTime"
          />
        </Form.Group>

        {editClass ? (
          <div className="mt-1">
            <Button
              className="gradient-background border-0 rounded-5 subtitle py-1 mt-1 shadow-on-hover w-100"
              type="submit"
            >
              Edit Class{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right-short mt-1 pe-0"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                />
              </svg>
            </Button>
          </div>
        ) : (
          <div className="mt-1">
            <Button
              className="gradient-background border-0 rounded-5 subtitle py-1 mt-1 shadow-on-hover w-100"
              type="submit"
            >
              Add Class{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right-short mt-1 pe-0"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                />
              </svg>
            </Button>
          </div>
        )}
      </Form>
    </>
  );
}

FormNewClass.propTypes = {
  editClass: PropTypes.object,
  handleClose: PropTypes.func,
};
export default FormNewClass;
