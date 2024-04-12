import { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import ButtonComponent from './ButtonComponent';

import SignIn from './SignIn';
import SignUp from './SignUp';
import { useAuth } from '../context/Auth/AuthContext';

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

  const handleProfileButtonClick = () => {
    navigate('/profile');
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
                className="subtitle mt-1 text-white"
                onClick={() => navigate('/')}
              >
                Home
              </Nav.Link>
              <Nav.Link
                className="subtitle mt-1 text-white"
                onClick={() => navigate('/products')}
              >
                Products
              </Nav.Link>
              <NavDropdown
                className="subtitle mt-1"
                title={<span className="nav-dropdown-title">About Us</span>}
                id="collapsible-nav-dropdown"
                menuVariant="white"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="pe-4">
              {isLoggedIn ? ( // Si el usuario está autenticado, muestra el botón de Logout
                <>
                  {user &&
                    user.role === '6611a95b23873e069120fe2f' && ( // Si el usuario tiene rol ADMIN, muestra el botón
                      <Nav.Link
                        className="subtitle mt-1 text-light text-shadow"
                        href="#features"
                        onClick={() => navigate('/admin')}
                      >
                        Admin Management
                      </Nav.Link>
                    )}
                  <Nav.Link
                    onClick={handleLogout}
                    className="subtitle mt-1 text-light"
                  >
                    Logout
                  </Nav.Link>

                  <ButtonComponent
                    onClick={handleProfileButtonClick}
                    text={user && user.username ? user.username : 'Profile'}
                  />
                </>
              ) : (
                <>
                  <Nav.Link
                    onClick={handleLoginModalShow}
                    className="subtitle mt-1 text-light"
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
