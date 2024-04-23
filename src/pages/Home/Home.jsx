/* eslint-disable no-unused-vars */
import './../../css/Home.css';
import './../../css/NutritionComponent.css';
import '../../css/Footer/Footer.css';
import { Container, Col, Row } from 'react-bootstrap';
import TitleHomeComponent from '../../components/TitleHomeComponent';
import NavbarComponent from '../../components/NavbarComponent';
import CardExperience from '../../components/Cards Home/CardExperience';
import CardTrainer from '../../components/Cards Home/CardTrainer';
import CardDiet from '../../components/Cards Home/CardDiet';
import CardSatisfied from '../../components/Cards Home/CardSatisfied';
import CardFlex from '../../components/Cards Home/CardFlex';
import FooterComponent from '../../components/FooterComponent';
import PlanList from '../Plans/PlanList';

import NutritionTitle from '../../components/NutritionComponents/NutritionTitle';
import NutritionFood from '../../components/NutritionComponents/NutritionFood';
import TrainingComponent from '../../components/NutritionComponents/TrainingComponent';
import NutritionBtn from '../../components/NutritionComponents/NutritionBtn';
import ClassBookings from '../../components/ClassBookingsComponents/ClassBookings';

function Home() {
  return (
    <>
      <Container fluid>
        <Row className="p-0 bg-home pe-5 pb-5 pb-md-0">
          <NavbarComponent />´{ }
          <Col className="ms-xl-5 ms-4" xxl={5} xl={7} lg={8} md={9}>
            <TitleHomeComponent />
          </Col>
        </Row>
        <Row className="pb-5 d-flex flex-row justify-content-center px-5">
          <Col xl={3} lg={3} md={6} sm={8}>
            <CardExperience />
          </Col>
          <Col xl={3} lg={3} md={6} sm={8}>
            <CardTrainer />
          </Col>
          <Col xl={3} lg={3} md={6} sm={12} xs={12}>
            <CardDiet />
          </Col>
        </Row>
        <Row className="mt-5 ps-md-5 ms-5 d-flex flex-row justify-content-end">
          <Col lg={4} xs={12} s={12}>
            <CardSatisfied />
          </Col>
          <Col lg={7} xs={12} s={12} className="px-0 pe-md-5 ps-md-0">
            <CardFlex />
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row className="d-flex flex-row justify-content-start">
          <Col xl={12} className="p-0 mb-5 background-color">

            <Row className="d-flex flex-row justify-content-center mt-5">
              <NutritionTitle />
            </Row>

            <Row className="d-flex flex-row justify-content-between">
              <Col xl={5} className="">
                <NutritionFood />
              </Col>
              {/* Segunda columna */}
              <Col xl={6} className="mb-4">
                <TrainingComponent />
              </Col>
            </Row>

            <Row>
              <div className="d-flex flex-row justify-content-center">
                <NutritionBtn />
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container>
        <PlanList />
      </Container>
      <Container>
        <ClassBookings/>
      </Container>

      <Container
        fluid
        className="d-flex flex-row justify-content-around mt-5  border-footer bg-footer"
      >
        <FooterComponent />
      </Container>
    </>
  );
}

export default Home;
