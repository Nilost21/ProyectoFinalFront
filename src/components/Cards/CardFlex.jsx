// eslint-disable-next-line no-unused-vars
import { Card, Col, Row, Button } from 'react-bootstrap';
import '../../css/Title.css';
import '../../css/Card.css';
import '../../css/Home.css';

function CardFlex() {
  return (
    <>
      <Card className="bg-transparent border-0  text-white pe-md-0 mt-5  ">
        <Card.Img
          src="https://imgtr.ee/images/2024/05/17/1273103ec02c0083e00344dd51fedbb9.jpeg"
          alt="Card image"
          className=" border-0 rounded-top-3 shadow-box mb-3 "
        />

        <Row className=" ">
          <Col xl={10}>
            <Card.Title className="subtitle mt-4 mb-3 increase-font-flex pe-md-5 text-shadow-effect">
              Get in shape and training at the gym or home
            </Card.Title>
          </Col>
          <Col
            xl={10}
            className="d-flex flex-column justify-content-end pe-md-5 pe-xl-5ps-xl-3"
          >
            <Card.Text className="paragraph text-color-small pt-md-0 increase-font-small pe-md-5 text-shadow-effect">
              We have been creating and implementing projects for many years all
              over the wold, we have hundreds of satisfaced customers
            </Card.Text>
          </Col>
        </Row>
      </Card>
    </>
  );
}
export default CardFlex;
