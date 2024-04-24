import { useState, useContext } from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { CartProvider } from '../context/CartContext';
import ButtonComponent from './ButtonComponent';
import '../css/Cart/Cart.css';

import SignIn from './SignIn';
import SignUp from './SignUp';
import { useAuth } from '../context/Utils/authUtils';

import './../css/Navbar.css';
import CartSVG from '../utils/CartSVG';

function NavbarComponent() {
  const {
    cart: products,
    removeToCart,
    increaseQuantity,
    decrementQuantity,
    clearCart,
    buyComplete,
  } = useContext(CartProvider);

  const isEmpty = () => products.length === 0;

  const cartTotal = () => {
    return products.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  };

  const handleItemClick = (event) => {
    event.stopPropagation();
  };

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
    navigate('/adminclasses');
  };

  const handleUsersButton = () => {
    navigate('/adminusers');
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-navbar mt-3 rounded-3 py-1 mx-5"
      >
        <Container fluid className="px-0">
          <Navbar.Brand
            className="title cursor-pointer"
            onClick={() => navigate('/')}
          >
            <h5 className="mt-2 gradient-text text-shadow fs-2">ELITEBODY</h5>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="custom-toggle"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
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

              {/* Inicio carrito */}
              {isLoggedIn ? (
                <>
                  <NavDropdown
                    title={<CartSVG />}
                    id="navbar-dropdown"
                    className="hide-toggle-icon pe-5 me-5 border-0"
                  >
                    <NavDropdown.Item
                      id="carrito"
                      onClick={handleItemClick}
                      className="px-3 bg-dark border-0"
                    >
                      {isEmpty() ? (
                        <div>
                          <button className="btn bg-transparent text-white w-100 0 p-2 subtitle rounded-4">
                            Cart is Empty{' '}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="17"
                              height="17"
                              fill="currentColor"
                              className="bi bi-emoji-tear-fill ms-1 mb-0"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.5 3.5a.5.5 0 0 0 .5.5c.838 0 1.65.416 2.053 1.224a.5.5 0 1 0 .894-.448C12.351 3.584 11.162 3 10 3a.5.5 0 0 0-.5.5M7 6.5C7 5.672 6.552 5 6 5s-1 .672-1 1.5S5.448 8 6 8s1-.672 1-1.5M4.5 13c.828 0 1.5-.746 1.5-1.667 0-.706-.882-2.29-1.294-2.99a.238.238 0 0 0-.412 0C3.882 9.044 3 10.628 3 11.334 3 12.253 3.672 13 4.5 13M8 11.197c.916 0 1.607.408 2.25.826.212.138.424-.069.282-.277-.564-.83-1.558-2.049-2.532-2.049-.53 0-1.066.361-1.536.824q.126.27.232.535.069.174.135.373A3.1 3.1 0 0 1 8 11.197M10 8c.552 0 1-.672 1-1.5S10.552 5 10 5s-1 .672-1 1.5S9.448 8 10 8M6.5 3c-1.162 0-2.35.584-2.947 1.776a.5.5 0 1 0 .894.448C4.851 4.416 5.662 4 6.5 4a.5.5 0 0 0 0-1" />
                            </svg>
                          </button>
                        </div>
                      ) : (
                        <>
                          <div>
                            <table className="w-100 table bg-dark border-0 ">
                              <thead>
                                <tr className="subtitle pe-0 bg-dark">
                                  <th className="bg-dark text-white border-0">
                                    Image
                                  </th>
                                  <th className="pe-0  bg-dark text-white border-0">
                                    Name
                                  </th>
                                  <th className="pe-0 bg-dark text-white border-0 ">
                                    Price
                                  </th>
                                  <th className="pe-0 bg-dark text-white border-0">
                                    Quantity
                                  </th>
                                  <th className="px-0 bg-dark text-white border-0"></th>
                                </tr>
                              </thead>
                              <tbody>
                                {products.map((product) => (
                                  <tr key={product._id}>
                                    <td className="bg-dark border-0 rounded-0">
                                      <img
                                        className="img-fluid bg-dark rounded-2"
                                        src={`${product.image}`}
                                        alt="imagen guitarra"
                                      />
                                    </td>
                                    <td className="paragraph bg-dark text-white border-0">
                                      {product.name}
                                    </td>
                                    <td className="fw-bold subtitle bg-dark text-white border-0">
                                      ${product.price}
                                    </td>
                                    <td className="flex align-items-start gap-4 bg-dark text-white border-0">
                                      <button
                                        onClick={() =>
                                          decrementQuantity(product._id)
                                        }
                                        type="button"
                                        className="btn btn-dark fw-bold"
                                      >
                                        -
                                      </button>
                                      {product.quantity}
                                      <button
                                        onClick={() =>
                                          increaseQuantity(product._id)
                                        }
                                        type="button"
                                        className="btn btn-dark fw-bold "
                                      >
                                        +
                                      </button>
                                    </td>
                                    <td className="bg-dark text-white border-0">
                                      <button
                                        onClick={() =>
                                          removeToCart(product._id)
                                        }
                                        className="btn btn-light rounded-5 fw-bold py-1 px-2 "
                                        type="button"
                                      >
                                        X
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>

                            <p className="text-start text-white paragraph fs-5 mb-0">
                              Subtotal:
                              {
                                <span className="fw-bold subtitle fs-4">
                                  {' '}
                                  ${cartTotal()}
                                </span>
                              }
                            </p>
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <button
                              onClick={clearCart}
                              className="btn btn-light w-100 mt-3 p-2 subtitle rounded-5"
                            >
                              Clear Cart{' '}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="17"
                                height="17"
                                fill="currentColor"
                                className="bi bi-trash2-fill ms-1"
                                viewBox="0 0 16 16"
                              >
                                <path d="M2.037 3.225A.7.7 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.7.7 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z" />
                              </svg>
                            </button>
                            <button
                              onClick={buyComplete}
                              className="btn gradient-background text-white w-100 mt-3 p-2 subtitle rounded-5"
                            >
                              buy complete{' '}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="17"
                                height="17"
                                fill="currentColor"
                                className="bi bi-bag-check-fill ms-1 mb-1"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0m-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"
                                />
                              </svg>
                            </button>
                          </div>
                        </>
                      )}
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <></>
              )}
              {/* Fin carrito */}
            </Nav>
            <Nav className="pe-4">
              {isLoggedIn ? (
                <>
                  {user && user.isAdmin && (
                    <Nav.Link
                      onClick={handleProductsButton}
                      className="subtitle mt-1 text-light text-shadow navbar-button"
                    >
                      Products
                    </Nav.Link>
                  )}
                  {user && user.isAdmin && (
                    <Nav.Link
                      onClick={handleClassesButton}
                      className="subtitle mt-1 text-light text-shadow navbar-button"
                    >
                      Classes
                    </Nav.Link>
                  )}
                  {user && user.isAdmin && (
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
