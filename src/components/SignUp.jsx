import { Modal, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';

import { schema } from '../schema/SignUpSchema';
import './../css/Form.css';

const SignUp = ({ show, handleClose, showLoginModal }) => {
  const handleSignUp = async (values) => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Respuesta del servidor:', data);
        handleClose();
        showLoginModal();
      } else {
        throw new Error('Error al enviar la solicitud');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const handleLoginClick = () => {
    handleClose();
    showLoginModal();
  };

  return (
    <Modal show={show} onHide={handleClose} contentClassName="bg-transparent border-0 p-0" centered>
      <Modal.Header className="text-star bg-dark shadow-box text-white rounded-top-4 py-1 border-0" closeButton>
        <Modal.Title className="subtitle ps-3 mt-2 pt-1 my-0">New user</Modal.Title>
      </Modal.Header>
      <Modal.Body className="gradient-bg shadow-box text-light pb-3 px-4 rounded-bottom-4">
        <Formik
          validationSchema={schema}
          onSubmit={handleSignUp}
          initialValues={{
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
          }}
        >
          {({ handleSubmit, handleChange, values, errors }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicUsername">
                <Form.Label className="subtitle fs-5 px-3 pt-1 rounded-5 mb-2 ps-1">Username</Form.Label>
                <Form.Control
                  className="paragraph"
                  type="text"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  placeholder="Enter your username" />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="formik-error-message" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="subtitle fs-5 px-3 pt-1 rounded-5 mb-2 ps-1">Email</Form.Label>
                <Form.Control
                  className="paragraph"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Enter your email" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="formik-error-message" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label className="subtitle fs-5 px-3 pt-1 rounded-5 mb-2 ps-1">Password</Form.Label>
                <Form.Control
                  className="paragraph"
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  placeholder="Enter a password"
                  title="Password must be between 8 and 32 characters long, contain at least one digit, one uppercase letter, and one lowercase letter"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="formik-error-message" />
              </Form.Group>
              <Form.Group controlId="formBasicConfirmPassword">
                <Form.Label className="subtitle fs-5 px-3 pt-1 rounded-5 mb-2 ps-1">Repeat Password</Form.Label>
                <Form.Control
                  className="paragraph"
                  type="password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password" />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="formik-error-message" />
              </Form.Group>
              <p className="subtitle fs-5 px-3 pt-1 rounded-5 mb-2 ps-1 mt-4 mb-4">Already have an account? <Link onClick={handleLoginClick}>Log In</Link></p>
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

SignUp.PropTypes = {
  show: PropTypes.func,
  handleClose: PropTypes.func,
  showLoginModal: PropTypes.func,
};

export default SignUp;
