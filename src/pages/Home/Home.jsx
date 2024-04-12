/* eslint-disable no-unused-vars */
import './../../css/Home.css';
import { Container, Col, Row } from 'react-bootstrap';
import Products from '../Products/Products';
import TitleHomeComponent from '../../components/TitleHomeComponent';
import NavbarComponent from '../../components/NavbarComponent';

function Home() {
  return (
    <>
      <Container fluid>
        <Row className=" p-0 bg-home pe-lg-5 pb-5">
          <NavbarComponent />
          <Col className="ms-xl-5" xxl={5} xl={7} lg={8} md={9}>
            <TitleHomeComponent />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Home;
