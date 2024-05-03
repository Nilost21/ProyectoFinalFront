/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import 'react-toastify/dist/ReactToastify.css';

import { UsersProvider } from '../context/UsersContext';
import { schema } from '../schema/SignUpSchema';
import './../css/Form.css';

const SignUp = ({ show, handleClose, showLoginModal }) => {
  const { createUser } = useContext(UsersProvider);
  const [showPasswordInfo, setShowPasswordInfo] = useState(false);

  const handleSignUp = async (user) => {
    try {
      const response = await createUser(user);
      if (response) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'User registered successfully',
          timer: 1500,
          showConfirmButton: false
        });
        handleClose();
        showLoginModal();
      }
    } catch (error) {
      const errorMessage = error.response?.data?.error.message
      console.log(error);
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Error enrolling in class',
        text: errorMessage
      });
    }
  };

  const handleLoginClick = () => {
    handleClose();
    showLoginModal();
  };

  const togglePasswordInfo = () => {
    setShowPasswordInfo(!showPasswordInfo);
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
                      Password{' '}
                      <span
                        className="text-info fs-6 question-mark"
                        onClick={togglePasswordInfo}
                      >
                        ?
                      </span>
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

              {showPasswordInfo && (
                <div className="text-muted">
                  {/* Aquí puedes agregar el texto de información sobre la contraseña */}
                  Password should contain at least 8 characters, including uppercase and lowercase letters, numbers, and special characters.
                </div>
              )}
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

