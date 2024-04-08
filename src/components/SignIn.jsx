import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/Auth/AuthContext';

import './../css/Form.css';

const SignIn = ({ show, handleClose, showRegisterModal }) => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();
  const { user, login } = useAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {

        const { token, user } = await response.json();
        console.log(user);
        login(token, user);

        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        setFormData({
          email: '',
          password: '',
        });

        handleClose();
        navigate('/');
      } else {
        throw new Error('Error al enviar la solicitud para iniciar sesión');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  const handleRegisterClick = () => {
    handleClose();
    showRegisterModal();
  };

  return (
    <Modal show={show} onHide={handleClose} contentClassName="bg-transparent border-0 p-0" centered>
      <Modal.Header className="text-star bg-dark shadow-box text-white rounded-top-4 py-1 border-0" closeButton>
        <Modal.Title className="subtitle ps-3 mt-2 pt-1 my-0">Log In</Modal.Title>
      </Modal.Header>
      <Modal.Body className="gradient-bg shadow-box text-light pb-3 px-4 rounded-bottom-4">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="subtitle fs-5 px-3 pt-1 rounded-5 mb-2 ps-1">Email</Form.Label>
            <Form.Control className="paragraph" type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className="subtitle fs-5 px-3 pt-1 rounded-5 mb-2 ps-1">Password</Form.Label>
            <Form.Control className="paragraph" type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Enter your password" />
          </Form.Group>
          <p className="subtitle fs-5 px-3 pt-1 rounded-5 mb-2 ps-1 mt-4 mb-4">Don't have an account? <Link onClick={handleRegisterClick}>Sign Up</Link></p>
        </Form>
        <Button className="gradient-background border-0 rounded-5 subtitle py-1 mt-1 shadow-on-hover w-25" onClick={handleClose}>
          Close
        </Button>
        <Button className="gradient-background border-0 rounded-5 subtitle py-1 mt-1 shadow-on-hover w-25" onClick={handleSignIn}>
          Log In
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default SignIn;
