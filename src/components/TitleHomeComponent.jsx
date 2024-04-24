// eslint-disable-next-line no-unused-vars
import { Card, Row, Col, Button } from 'react-bootstrap';
import '../css/Title.css';

function TitleHomeComponent() {
  return (
    <>
      <Card className="bg-transparent border-0 ms-xl-5 ms-md-5 mb-5 mt-5">
        <Card.Body className="bg-transparent p-0 w-75">
          <Card.Subtitle className="paragraph text-white fs-5 mt-5">
            Gym Station
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#BD6EDD"
              className="bi bi-dash-lg ms-1 text-color"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
              />
            </svg>
          </Card.Subtitle>
          <Card.Title className="title text-white mt-4 mb-3 increase-font-size">
            Take care of Your health with our exercise plans.
          </Card.Title>
          <Card.Text className="small-font pe-5 me-5 mt-4 text-color-small">
            We have been creating and implementing projects for many years all
            over the wold, we have hundreds of satisfaced customers
          </Card.Text>
          <div className="mb-4 pb-5">
            <Button className="gradient-background border-0 rounded-5 subtitle py-2 my-3 ps-5 pe-3  shadow-on-hover">
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right ms-4 mt-1"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
export default TitleHomeComponent;
