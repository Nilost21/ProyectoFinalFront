import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className="d-flex align-items-center min-vh-100 overflow-x-hidden">
      <Container>
        <Row className="justify-content-center text-center text-white">
          <Col xs={12} sm={6} md={6} lg={6} xl={6} className="mb-4 mb-sm-0">
            <img
              src="https://img.freepik.com/vector-premium/cute-red-panda-lifting-dumbbell-gym-fitness-dibujos-animados-vector-icono-ilustracion-deporte-animal-aislado_138676-6140.jpg?w=2000"
              alt="Red panda lifting dumbbell"
              className="img-fluid"
              style={{ maxWidth: '300px' }}
            />
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} xl={6}>
            <h1 className='title'>Error 404</h1>
            <h3 className='subtitle'>¡Ups! Parece que te has perdido un poco.</h3>
            <h3 className='subtitle'>No te preocupes, puedes volver al inicio haciendo clic en el botón de abajo.</h3>
            <Link to="/">
              <Button 
                variant="outline-light" 
                className="px-4 py-2 rounded-pill text-uppercase border-2" 
                style={{ borderColor: '#8A2BE2', color: '#8A2BE2' }}
              >
                Volver al inicio
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Error404;
