import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
  const navigate = useNavigate(); 
  return (
    <footer className="mt-5">
      <Container>
        <Row className="text-center">
          <Col>
            <h1 className='mt-5 text-white subtitle'>Elitebody</h1>
          </Col>
          <Col className='mt-3'>
            <h5 className="text-white subtitle">Enlaces útiles</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white paragraph text-decoration-none" onClick={() => navigate('/')}>home</a></li>
              <li><a href="#" className="text-white paragraph text-decoration-none" onClick={() => navigate('/login')}>login</a></li>
              <li><a href="#" className="text-white paragraph text-decoration-none" onClick={() => navigate('/register')}>register</a></li>
              <li><a href="#" className="text-white paragraph text-decoration-none" onClick={() => navigate('/contact')}>contact</a></li>
            </ul>
          </Col>
          <Col className='mt-3'>
            <h5 className="text-white subtitle">Enlaces útiles</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white paragraph text-decoration-none" onClick={() => navigate('/')}>about</a></li>
              <li><a href="#" className="text-white paragraph text-decoration-none" onClick={() => navigate('/products')}>admin</a></li>
              <li><a href="#" className="text-white paragraph text-decoration-none" onClick={() => navigate('/contact')}>service</a></li>
              <li><a href="#" className="text-white paragraph text-decoration-none" onClick={() => navigate('/contact')}>planning</a></li>
            </ul>
          </Col>
          <Col className='mt-3'>
            <h5 className="text-white subtitle">Redes sociales</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white paragraph text-decoration-none" onClick={() => navigate('/facebook')}><FaFacebook /></a></li>
              <li><a href="#" className="text-white paragraph text-decoration-none" onClick={() => navigate('/instagram')}><FaInstagram /></a></li>
              <li><a href="#" className="text-white paragraph text-decoration-none" onClick={() => navigate('/twitter')}><FaTwitter /></a></li>
              <li><a href="#" className="text-white paragraph text-decoration-none" onClick={() => navigate('/linkedin')}><FaLinkedin /></a></li>
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
