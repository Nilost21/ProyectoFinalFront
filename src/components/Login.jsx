/* eslint-disable react/prop-types */
import { Modal, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = ({ show, handleClose, showRegisterModal }) => {
  const handleRegisterClick = () => {
    handleClose();
    showRegisterModal();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header style={{ backgroundColor: '#08080C' }} closeButton>
        <Modal.Title style={{ color: 'white' }}>Iniciar sesión</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: '#08080C' }}>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{ color: 'white' }}>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              style={{ backgroundColor: 'black', color: 'white' }}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label style={{ color: 'white' }}>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Contraseña"
              style={{ backgroundColor: 'black', color: 'white' }}
            />
          </Form.Group>
          <p>
            No tienes una cuenta?{' '}
            <Link to="#" onClick={handleRegisterClick}>
              Registrarse
            </Link>
          </p>
        </Form>
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: 'black' }}>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Iniciar sesión
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Login;
