import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './../css/Navbar.css';
import { useNavigate } from 'react-router';
import ButtonComponent from './ButtonComponent';

function NavbarComponent() {
  const navigate = useNavigate();

  const click = () => {
    console.log('Hiciste click en el botón');
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
            className="title cursor-pointer text-dark"
            onClick={() => navigate('/')}
          >
            <h5 className="mt-2 text-dark text-shadow">ELITEBODY</h5>
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
              <Nav.Link className="subtitle mt-1 text-white">Products</Nav.Link>
              <NavDropdown
                className="subtitle mt-1"
                title="About Us"
                id="collapsible-nav-dropdown"
                menuVariant="dark"
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
            <Nav>
              <Nav.Link
                className="subtitle mt-1 text-light text-shadow"
                href="#features"
                onClick={() => navigate('/admin')}
              >
                ADMIN
              </Nav.Link>
              <Nav.Link className="subtitle mt-1 text-light" href="#features">
                Login
              </Nav.Link>
              <ButtonComponent text={'Register'} func={click} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default NavbarComponent;
