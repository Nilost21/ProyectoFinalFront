import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import ButtonComponent from './ButtonComponent';

import SignIn from './SignIn';
import SignUp from './SignUp';
import { useAuth } from '../context/Utils/authUtils';

import './../css/Navbar.css';

function NavbarComponent() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const { isLoggedIn, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLoginModalShow = () => setShowLoginModal(true);
  const handleRegisterModalShow = () => setShowRegisterModal(true);

  // Cierra los modales
  const handleCloseModals = () => {
    setShowLoginModal(false);
    setShowRegisterModal(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleProfileButton = () => {
    navigate('/profile');
  };

  const handleProductsButton = () => {
    navigate('/adminproducts');
  };

  const handleClassesButton = () => {
    navigate('/adminclasses')
  };

  const handleUsersButton = () => {
    navigate('/adminusers')
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-navbar mt-3 rounded-3 py-1 mx-5"
      >
        <Container fluid>
          <Navbar.Brand
            className="title cursor-pointer"
            onClick={() => navigate('/')}
          >
            <h5 className="mt-2 gradient-text text-shadow fs-2">ELITEBODY</h5>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="text-light">
            <Nav className="me-auto">
              <Nav.Link
                className="subtitle mt-1 text-white navbar-button"
                onClick={() => navigate('/')}
              >
                Home
              </Nav.Link>
              <Nav.Link
                className="subtitle mt-1 text-white navbar-button"
                onClick={() => navigate('/products')}
              >
                Products
              </Nav.Link>
              <Nav.Link
                className="subtitle mt-1 text-white navbar-button"
                onClick={() => navigate('/contact')}
              >
                Contact
              </Nav.Link>
            </Nav>
            <Nav className="pe-4">
              {isLoggedIn ? (
                <>
                  {user &&
                    user.isAdmin && (

                      <Nav.Link
                        onClick={handleProductsButton}
                        className="subtitle mt-1 text-light text-shadow navbar-button"
                      >
                        Products
                      </Nav.Link>
                    )}
                  {
                    user && user.isAdmin && (
                      <Nav.Link
                        onClick={handleClassesButton}
                        className="subtitle mt-1 text-light text-shadow navbar-button"
                      >
                        Classes
                      </Nav.Link>
                    )
                  }
                  {user &&
                    user.isAdmin && (
                      <Nav.Link
                        onClick={handleUsersButton}
                        className="subtitle mt-1 text-light text-shadow navbar-button"
                      >
                        Users
                      </Nav.Link>
                    )}
                  <Nav.Link
                    onClick={handleLogout}
                    className="subtitle mt-1 text-light navbar-button"
                  >
                    Logout
                  </Nav.Link>

                  <ButtonComponent
                    onClick={handleProfileButton}
                    text={user && user.name ? user.name : 'Profile'}
                  />
                </>
              ) : (
                <>
                  <Nav.Link
                    onClick={handleLoginModalShow}
                    className="subtitle mt-1 text-light mx-2 navbar-button"
                  >
                    Login
                  </Nav.Link>
                  <ButtonComponent
                    onClick={handleRegisterModalShow}
                    text={'Register'}
                  />
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
        <SignIn
          show={showLoginModal}
          handleClose={handleCloseModals}
          showRegisterModal={handleRegisterModalShow}
        />
        <SignUp
          show={showRegisterModal}
          handleClose={handleCloseModals}
          showLoginModal={handleLoginModalShow}
        />
      </Navbar>
    </>
  );
}
export default NavbarComponent;
