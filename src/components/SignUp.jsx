/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { UsersProvider } from '../context/UsersContext';
import { schema } from '../schema/SignUpSchema';
import errorMessages from '../utils/errorMessages';
import './../css/Form.css';

const SignUp = ({ show, handleClose, showLoginModal }) => {
  const { users, getUsers, createUser } = useContext(UsersProvider);

  const handleSignUp = async (user) => {
    try {
      // Call createUser function with the form values
      await createUser(user);
      // Show success message or navigate to login page
      toast.success('User registered successfully');
      handleClose();
      showLoginModal();
    } catch (error) {
      if (error.response) {
        // Si la respuesta contiene un error
        const errorCode = error.response.status;
        const errorMessage = errorMessages[errorCode] || 'An unexpected error occurred.';
        toast.error(errorMessage);
      } else if (error.request) {
        // Si no se recibe respuesta del servidor
        toast.error('No response from server. Please try again later.');
      } else {
        // Si ocurre un error durante la solicitud
        console.error('Registration error:', error.message);
        toast.error('An error occurred while registering the user');
      }
    }
  };

  const handleLoginClick = () => {
    handleClose();
    showLoginModal();
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
          New user
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="gradient-bg shadow-box text-light pb-3 px-4 rounded-bottom-4">
        <Formik
          validationSchema={schema}
          onSubmit={handleSignUp}
          initialValues={{
            name: '',
            lastname: '',
            phonenumber: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
        >
          {({ handleSubmit, handleChange, values }) => (
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <Form.Group controlId="formBasicName">
                    <Form.Label className="subtitle fs-5 px-3 pt-1 rounded-5 mb-2 ps-1">
                      Name
                    </Form.Label>
                    <Form.Control
                      className="paragraph"
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="formik-error-message"
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicLastname">
                    <Form.Label className="subtitle fs-5 px-3 pt-1 rounded-5 mb-2 ps-1">
                      Lastname
                    </Form.Label>
                    <Form.Control
                      className="paragraph"
                      type="text"
                      name="lastname"
                      value={values.lastname}
                      onChange={handleChange}
                      placeholder="Enter your lastname"
                    />
                    <ErrorMessage
                      name="lastname"
                      component="div"
                      className="formik-error-message"
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPhoneNumber">
                    <Form.Label className="subtitle fs-5 px-3 pt-1 rounded-5 mb-2 ps-1">
                      Phone Number
                    </Form.Label>
                    <Form.Control
                      className="paragraph"
                      type="text"
                      name="phonenumber"
                      value={values.phonenumber}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                    />
                    <ErrorMessage
                      name="phonenumber"
                      component="div"
                      className="formik-error-message"
                    />
                  </Form.Group>
                </Col>

                <Col>
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
                      placeholder="Enter a password"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="formik-error-message"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicConfirmPassword">
                    <Form.Label className="subtitle fs-5 px-3 pt-1 rounded-5 mb-2 ps-1">
                      Repeat Password
                    </Form.Label>
                    <Form.Control
                      className="paragraph"
                      type="password"
                      name="confirmPassword"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm your password"
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="formik-error-message"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <p className="subtitle fs-5 px-3 pt-1 rounded-5 mb-2 ps-1 mt-4 mb-4">
                Already have an account?{' '}
                <Link onClick={handleLoginClick}>Log In</Link>
              </p>

              <Button
                className="gradient-background border-0 rounded-5 subtitle py-1 mt-1 shadow-on-hover w-25"
                onClick={handleClose}
              >
                Close
              </Button>
              <Button
                className="gradient-background border-0 rounded-5 subtitle py-1 mt-1 shadow-on-hover w-25"
                type="submit"
              >
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

SignUp.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  showLoginModal: PropTypes.func,
};


export default SignUp;

