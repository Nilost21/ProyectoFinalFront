/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import 'react-toastify/dist/ReactToastify.css';

import { schema } from '../../schema/SignInSchema';
import { UsersProvider } from '../../context/UsersContext';
import { useAuth } from '../../context/Utils/authUtils';
import './../../css/Form.css';

const SignIn = ({ show, handleClose, showRegisterModal }) => {
  const { userLogIn } = useContext(UsersProvider);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = async (user) => {
    try {
      const response = await userLogIn(user);
      if (response) {
        const { token, user } = response.data;
        login(token, user);
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        handleClose();
        navigate('/');
      } else {
        console.log("No")
      }
    } catch (error) {
      const errorMessage = error.response?.data?.error.message || 'Unknown Error';
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Failed to login',
        text: errorMessage
      });
    }
  };

  const handleRegisterClick = () => {
    handleClose();
    showRegisterModal();
  };

  const isFormComplete = (values) => {
    return values.email !== '' && values.password !== '';
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      contentClassName="bg-transparent border-0 p-0"
      centered
    >
      <Modal.Header
        className="text-star bg-dark shadow-box text-white rounded-top-4 py-1 border-0"
        closeButton
      >
        <Modal.Title className="subtitle ps-3 mt-2 pt-1 my-0">
          Log In
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="gradient-bg shadow-box text-light pb-3 px-4 rounded-bottom-4">
        <Formik
          validationSchema={schema}
          onSubmit={handleSignIn}
          initialValues={{
            email: '',
            password: '',
          }}
        >
          {({ handleSubmit, handleChange, values }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="subtitle fs-5 px-3 pt-1 rounded-5 mb-2 ps-1">
                  Email
                </Form.Label>
                <Form.Control
                  className="paragraph"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="formik-error-message"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label className="subtitle fs-5 px-3 pt-1 rounded-5 mb-2 ps-1">
                  Password
                </Form.Label>
                <Form.Control
                  className="paragraph"
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="formik-error-message"
                />
              </Form.Group>
              <p className="subtitle fs-5 px-3 pt-1 rounded-5 mb-3 ps-1 mt-4 text-center">
                Don't have an account?{' '}
                <Link onClick={handleRegisterClick}>Sign Up</Link>
              </p>
              <div className="d-flex flex-row justify-content-center">
                <Button
                  className="gradient-background border-0 rounded-5 subtitle py-1 me-1 shadow-on-hover w-25"
                  onClick={handleClose}
                >
                  Close
                </Button>
                <Button
                  type="submit"
                  className="gradient-background border-0 rounded-5 subtitle py-1 ms-1 shadow-on-hover w-25"
                  disabled={!isFormComplete(values)}
                >
                  Log In
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
}

SignIn.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  showRegisterModal: PropTypes.func,
};

export default SignIn;
