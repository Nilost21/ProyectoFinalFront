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
import { activateScrollAnimation } from '../../utils/activateScrollAnimation.js';
import React, { useEffect } from 'react';

import NutritionTitle from '../../components/NutritionComponents/NutritionTitle';
import NutritionFood from '../../components/NutritionComponents/NutritionFood';
import TrainingComponent from '../../components/NutritionComponents/TrainingComponent';
import NutritionBtn from '../../components/NutritionComponents/NutritionBtn';

function Home() {
  return (
    <>
      <Container fluid>
        <Row className="p-0 bg-home pe-md-5 pb-5 pb-md-0">
          <NavbarComponent />
          <Col
            className="ms-xl-5 ms-4"
            xxl={5}
            xl={7}
            lg={8}
            md={9}
            data-aos="fade-right"
          >
            <TitleHomeComponent />
          </Col>
        </Row>
        <Row
          className=" d-flex flex-row justify-content-center px-5"
          data-aos="fade-left"
        >
          <Col xl={3} lg={6} md={5} sm={8}>
            <CardExperience />
          </Col>
          <Col xl={3} lg={6} md={5} sm={8}>
            <CardTrainer />
          </Col>
          <Col xl={3} lg={6} md={5} sm={12} xs={12}>
            <CardDiet />
          </Col>
        </Row>
      </Container>
      <Container fluid data-aos="fade-up">
        <Row className="mt-5 ps-md-5 ms-5 d-flex flex-row justify-content-lg-center">
          <Col
            md={8}
            xl={5}
            xs={12}
            s={12}
            className="d-flex flex-column justify-content-center p-0 ms-ms-5 ps-md-5 "
          >
            <CardSatisfied />
          </Col>
          <Col
            lg={5}
            xs={10}
            s={12}
            className=" d-xxl-flex flex-xl-row px-0 ps-md-0 mb-5"
          >
            <CardFlex />
          </Col>
        </Row>
      </Container>
      <Container className="my-0 py-3" data-aos="fade-left">
        <PlanList />
      </Container>
      <Container fluid className="bg-footer my-5">
        <Row className="d-flex flex-row justify-content-start">
          <Col>
            <Row
              className="d-flex flex-row justify-content-center mt-5"
              data-aos="fade-down"
            >
              <NutritionTitle />
            </Row>

            <Row className="d-flex flex-row justify-content-between">
              <Col xl={5} className="">
                <NutritionFood />
              </Col>
              <Col xl={6} className="mb-4">
                <TrainingComponent />
              </Col>
            </Row>

            <Row data-aos="fade-down">
              <div className="d-flex flex-row justify-content-center mb-3">
                <NutritionBtn />
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        className="d-flex flex-row justify-content-around mt-5 border-footer bg-footer"
      >
        <FooterComponent />
      </Container>
    </>
  );
}

export default Home;
