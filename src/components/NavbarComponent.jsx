import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './../css/Navbar.css';
import { useNavigate } from 'react-router';

function NavbarComponent() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-transparent-white mt-3 rounded-3"
      >
        <Container>
          <Navbar.Brand
            className="title cursor-pointer"
            onClick={() => navigate('/')}
          >
            ELITEBODY
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="small-font " onClick={() => navigate('/')}>
                Home
              </Nav.Link>
              <Nav.Link
                className="small-font"
                onClick={() => navigate('/products')}
              >
                Products
              </Nav.Link>
              <NavDropdown
                className="small-font"
                title="About Us"
                id="collapsible-nav-dropdown"
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
              <Nav.Link className="subtitle mt-1" href="#features">
                Admin
              </Nav.Link>
              <Nav.Link className="subtitle mt-1" href="#features">
                Login
              </Nav.Link>
              <Nav.Link className="subtitle mt-1" href="#features">
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default NavbarComponent;
