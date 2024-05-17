import { Card, Button, Col } from 'react-bootstrap';
import StarSVG from '../../utils/StarSVG';
import '../../css/Card.css';
import '../../css/Home.css';

function CardSatisfied() {
  return (
    <>
      <Card className="bg-transparent mb-5 rounded-3 border-0 p-0 mt-md-5  ">
        <h1 className="title number-color  increase-font-number ms-3">
          1 4 0 0 0 +
        </h1>
        <Card.Body className="pt-1">
          <div className="p-0">
            <Button className="bg-transparent py-1 mb-1 border-0 d-flex flex-row justify-content-around">
              <StarSVG />
              <StarSVG />
              <StarSVG />
              <StarSVG />
              <StarSVG />
            </Button>
          </div>
          <Card.Title>
            <h1 className="text-white paragraph mb-3 increase-font-satisfied text-shadow-effect mt-md-4">
              Satisfied Costumers
            </h1>
          </Card.Title>
          <Col md={9}>
            <Card.Text className="text-color-small small-font pe-5  text-shadow-effect increase-font-small">
              So many people have already trusted us. This number is constantly
              growing thanks to the positive feedback from our customers.
            </Card.Text>
          </Col>
          <Button className="bg-transparent border-0 subtitle px-0 mt-3">
            {' '}
            <span className="gradient-hover">Read More</span>{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="currentColor"
              className="bi bi-arrow-right-circle-fill ms-1"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
            </svg>
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
export default CardSatisfied;
