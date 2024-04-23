import { Col, Row, Button } from 'react-bootstrap';
import '../css/Footer/Footer.css';

function FooterComponent() {
  return (
    <>
      <Row className="text-white mt-5 mb-4">
        <Col lg={3} className="subtitle fs-1">
          <h1 className="gradient-text fw-bold">ELITEBODY</h1>
        </Col>
        <Col lg={3}>
          {' '}
          <h1 className="fs-3 paragraph fw-bold mt-1">Healthy food</h1>
          <p className="small-font text-color-small pt-3 pe-5">
            Proper nutrition provides our body with the complex of vitamins it
            needs and makes us feel better. In this article, we`ll show you what
            to look for.
          </p>
          <Button className="bg-transparent border-0 subtitle px-0 ">
            {' '}
            <span className="gradient-hover">Read More</span>{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="currentColor"
              className="bi bi-arrow-right-circle-fill ms-1 "
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
            </svg>
          </Button>
        </Col>
        <Col lg={2}>
          {' '}
          <h1 className="fs-3 paragraph fw-bold mt-1">Navigation</h1>
          <ul className="list-unstyled pt-3">
            <li>
              <a
                href="#"
                className="text-decoration-none small-font text-color-small"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-decoration-none small-font text-color-small"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-decoration-none small-font text-color-small"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-decoration-none small-font text-color-small"
              >
                Blog
              </a>
            </li>
          </ul>
        </Col>
        <Col lg={3}>
          {' '}
          <h1 className="fs-3 paragraph fw-bold mt-1 pb-3">Categories</h1>
          <ul className="list-unstyled">
            <li>
              <a
                href="#"
                className="text-decoration-none small-font text-color-small"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-decoration-none small-font text-color-small"
              >
                Terms and condition
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-decoration-none small-font text-color-small"
              >
                Contact
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </>
  );
}
export default FooterComponent;
