//import { Button, Card, Container, Col, Row } from 'react-bootstrap';
import './../../css/NutritionComponent.css';
import { Row } from 'react-bootstrap';

const NutritionTitle = () => {
  return (
    <>
      <Row className="d-flex flex-row justify-content-center mt-5">
        <h1 className="text-center subtitle increase-font-size-title text-white pe-0">
          Discover our nutrition posts and blog tips
        </h1>
        <div className="pe-0">
          <p className="text-center text-gray pt-3 px-md-5 mb-md-5 paragraph increase-font-paragraph  small-font">
            We have been creating and implementing projects for many years all
            over the world, <br />
            we have hundreds of satisfied customers.
          </p>
        </div>
      </Row>
    </>
  );
};

export default NutritionTitle;
