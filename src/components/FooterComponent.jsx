import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 

function Footer() {
  const navigate = useNavigate(); 
  return (
    <footer className="mt-5">
      <Container>
        <Row>
          <Col>
            <h1 className='text-center mt-5 text-white subtitle'>Elitebody</h1>
          </Col>
          <Col className='mt-3'>
            <h5 className="text-white subtitle">Enlaces útiles</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white paragraph" style={{ textDecoration: 'none' }} onClick={() => navigate('/')}>Inicio</a></li>
              <li><a href="#" className="text-white paragraph" style={{ textDecoration: 'none' }} onClick={() => navigate('/products')}>Acerca</a></li>
              <li><a href="#" className="text-white paragraph" style={{ textDecoration: 'none' }} onClick={() => navigate('/contact')}>Servicios</a></li>
              <li><a href="#" className="text-white paragraph" style={{ textDecoration: 'none' }} onClick={() => navigate('/contact')}>Contacto</a></li>
            </ul>
          </Col>
          <Col className='mt-3'>
            <h5 className="text-white subtitle">Enlaces útiles</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white paragraph" style={{ textDecoration: 'none' }}>Inicio</a></li>
              <li><a href="#" className="text-white paragraph" style={{ textDecoration: 'none' }}>Acerca</a></li>
              <li><a href="#" className="text-white paragraph" style={{ textDecoration: 'none' }}>Servicios</a></li>
              <li><a href="#" className="text-white paragraph" style={{ textDecoration: 'none' }}>Contacto</a></li>
            </ul>
          </Col>
          <Col className='mt-3'>
            <h5 className="text-white subtitle">Redes sociales</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white paragraph" style={{ textDecoration: 'none' }} onClick={() => navigate('/instagram')}>Instagram</a></li>
              <li><a href="#" className="text-white paragraph" style={{ textDecoration: 'none' }} onClick={() => navigate('/facebook')}>Facebook</a></li>
              <li><a href="#" className="text-white paragraph" style={{ textDecoration: 'none' }} onClick={() => navigate('/twitter')}>Twitter</a></li>
              <li><a href="#" className="text-white paragraph" style={{ textDecoration: 'none' }} onClick={() => navigate('/github')}>GitHub</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="text-center text-white p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
        © {new Date().getFullYear()} Elitebody
      </div>
    </footer>
  );
}

export default Footer;
