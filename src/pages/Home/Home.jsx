/* eslint-disable no-unused-vars */
import './../../css/Home.css';
import { Container, Col, Row } from 'react-bootstrap';
import Products from '../Products/Products';
import TitleHomeComponent from '../../components/TitleHomeComponent';
import NavbarComponent from '../../components/NavbarComponent';
import CardExperience from '../../components/Cards Home/CardExperience';
import CardTrainer from '../../components/Cards Home/CardTrainer';
import CardDiet from '../../components/Cards Home/CardDiet';
import CardSatisfied from '../../components/Cards Home/CardSatisfied';

function Home() {
  return (
    <>
      <Container fluid>
        <Row className=" p-0 bg-home pe-5 pb-5 pb-md-0">
          <NavbarComponent />
          <Col className="ms-xl-5 ms-4" xxl={5} xl={7} lg={8} md={9}>
            <TitleHomeComponent />
          </Col>
        </Row>
        <Row className="pb-5 d-flex flex-row justify-content-center px-5 ">
          <Col xl={3} lg={3} md={6} sm={8}>
            <CardExperience />
          </Col>
          <Col xl={3} lg={3} md={6} sm={8}>
            <CardTrainer />
          </Col>
          <Col xl={3} lg={3} md={6} sm={8}>
            <CardDiet />
          </Col>
        </Row>
        <Row className="mt-5 px-0 ms-5">
          <Col lg={4}>
            <CardSatisfied />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Home;
