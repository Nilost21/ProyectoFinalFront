import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = ({ show, handleClose, showLoginModal }) => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Respuesta del servidor:', data);
        // Aquí puedes agregar lógica adicional, como redireccionar al usuario a una página de éxito
        // Restablece el estado del formulario
        setFormData({
          username: '',
          email: '',
          password: '',
          confirmPassword: ''
        });

        // Cierra el modal de registro
        handleClose();

        // Abre el modal de inicio de sesión
        //handleLoginModalShow();
        showLoginModal();
      } else {
        throw new Error('Error al enviar la solicitud');
      }
    } catch (error) {
      console.error('Error:', error.message);
      // Aquí puedes manejar el error, como mostrar un mensaje al usuario
    }
  };

  const handleLoginClick = () => {
    handleClose(); // Cierra el modal de registro
    showLoginModal(); // Llama a la función para mostrar el modal de inicio de sesión en MyNavbar
  };

  return (

    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header style={{ backgroundColor: '#08080C' }} closeButton>
        <Modal.Title style={{ color: 'white' }}>Crear usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: '#08080C' }}>
        <Form>
          <Form.Group controlId="formBasicUsername">
            <Form.Label style={{ color: 'white' }}>Usuario</Form.Label>
            <Form.Control type="text" name="username" value={formData.username} onChange={handleInputChange} placeholder="Ingrese su usuario" style={{ backgroundColor: 'black', color: 'white' }} />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{ color: 'white' }}>Email</Form.Label>
            <Form.Control type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Ingrese su email" style={{ backgroundColor: 'black', color: 'white' }} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label style={{ color: 'white' }}>Contraseña</Form.Label>
            <Form.Control type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Contraseña" style={{ backgroundColor: 'black', color: 'white' }} />
          </Form.Group>

          <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label style={{ color: 'white' }}>Contraseña</Form.Label>
            <Form.Control type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} placeholder="Confirme su contraseña" style={{ backgroundColor: 'black', color: 'white' }} />
          </Form.Group>

          <p>¿Ya tienes una cuenta? <Button variant="link" onClick={handleLoginClick}>Iniciar Sesión</Button></p>
        </Form>
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: 'black' }}>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleSignUp}>
          Registrarse
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SignUp;
