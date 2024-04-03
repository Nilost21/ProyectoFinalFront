/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Login from './Login';
import SignUp from './SignUp';

const MyNavbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleLoginModalShow = () => {
    setShowLoginModal(true);
  };

  const handleRegisterModalShow = () => {
    setShowRegisterModal(true);
  };

  // Cierra los modales
  const handleCloseModals = () => {
    setShowLoginModal(false);
    setShowRegisterModal(false);
  };

  return (
    <>
      <Navbar bg="transparent" variant="dark" expand="lg" fixed="top">
        <div className="container justify-content-between">
          <Navbar.Brand href="#home" className="ml-4">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-right">
              <Nav.Link href="#planes">Planes</Nav.Link>
              <Nav.Link href="#sobre-nosotros">Sobre nosotros</Nav.Link>
              <Nav.Link onClick={handleLoginModalShow}>Iniciar sesión</Nav.Link>
              <Nav.Link onClick={handleRegisterModalShow}>Registrarse</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Login show={showLoginModal} handleClose={handleCloseModals} showRegisterModal={handleRegisterModalShow} />
      <SignUp show={showRegisterModal} handleClose={handleCloseModals} showLoginModal={handleLoginModalShow} />
    </>
  );
};

export default MyNavbar;
