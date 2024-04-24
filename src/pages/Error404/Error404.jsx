import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import error404Img from '../../assets/img/error404/img404.png';
import FooterComponent from '../../components/FooterComponent';
import NavbarComponent from '../../components/NavbarComponent';

const Error404 = () => {
  return (
    <>
      <Container fluid>
        <NavbarComponent />
      </Container>
      <div className="d-flex align-items-center min-vh-100 overflow-x-hidden">
        <Container>
          <Row className="justify-content-center text-center text-white">
            <Col xs={12} sm={6} md={6} lg={6} xl={6} className="mb-4 mb-sm-0">
              <img
                src={error404Img}
                alt="img-error404"
                className="img-fluid"
                style={{ maxWidth: '300px' }}
              />
            </Col>
            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
              <h1 className="title">Error 404</h1>
              <h3 className="subtitle">
                Oops! It looks like you re a little lost.
              </h3>
              <h3 className="subtitle">
                You can go back to the homepage by clicking the button below.
              </h3>
              <Link to="/">
                <Button
                  variant="outline-light"
                  className="px-4 py-2 rounded-pill small-font fw-bold text-uppercase border-2"
                  style={{ borderColor: '#8A2BE2', color: '#8A2BE2' }}
                >
                  Back to Home
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <Container
        fluid
        className="d-flex flex-row justify-content-around mt-5  border-footer bg-footer"
      >
        <FooterComponent />
      </Container>
    </>
  );
};

export default Error404;
