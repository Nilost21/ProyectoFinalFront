/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import axios from 'axios';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

import 'react-toastify/dist/ReactToastify.css';

import { schema } from '../schema/SignInSchema';
import { useAuth } from '../context/Utils/authUtils';
import './../css/Form.css';

const SignIn = ({ show, handleClose, showRegisterModal }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    if (!show) {
      setFormData({
        email: '',
        password: '',
      });
    }
  }, [show]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3000/api/auth/signin',
        formData
      );

      const { token, user } = response.data;
      login(token, user);
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      setFormData({
        email: '',
        password: '',
      });

      handleClose();
      navigate('/');
    } catch (error) {
      const errorMessage = error.response?.data?.error.message || 'Unknown Error';
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Error enrolling in class',
        text: errorMessage
      });
    }
  };

  const handleRegisterClick = () => {
    handleClose();
    showRegisterModal();
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
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="subtitle fs-5 px-3 pt-1 rounded-5 mb-2 ps-1">
                  Email
                </Form.Label>
                <Form.Control
                  className="paragraph"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
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
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="formik-error-message"
                />
              </Form.Group>
              <p className="subtitle fs-5 px-3 pt-1 rounded-5 mb-2 ps-1 mt-4 mb-4">
                Don't have an account?{' '}
                <Link onClick={handleRegisterClick}>Sign Up</Link>
              </p>

              <Button
                className="gradient-background border-0 rounded-5 subtitle py-1 mt-1 shadow-on-hover w-25"
                onClick={handleClose}
              >
                Close
              </Button>
              <Button
                type="submit"
                className="gradient-background border-0 rounded-5 subtitle py-1 mt-1 shadow-on-hover w-25"
                onClick={handleSignIn}
              >
                Log In
              </Button>
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
