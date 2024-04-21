// eslint-disable-next-line no-unused-vars
import { Card, Col, Row, Button } from 'react-bootstrap';
import '../../css/Title.css';
import '../../css/Card.css';

function CardFlex() {
  return (
    <>
      <Card className="bg-transparent border-0 ms-xl-5 ms-md-5 mb-5 text-white me-5 pb-5 px-5 mt-xl-5 ">
        <Card.Img
          src="../../../public/img/3.jpg"
          alt="Card image"
          className=" border-0 rounded-top-3 shadow-box "
        />
        <Card.ImgOverlay>
          <Row className="d-flex flex-row justify-content-between ">
            <Col xl={4}>
              <Card.Title className="subtitle text-white mt-4 fs-1 ps-5">
                Get in shape and training at the gym or home
              </Card.Title>
            </Col>
            <Col
              xl={3}
              className="d-flex flex-column justify-content-end pe-xl-5 mt-0 mt-xxl-0 ps-xl-3"
            >
              <Card.Text className="paragraph fs-5 mt-5 text-gray pt-md-0 pt-xxl-5  pe-xl-2 ">
                We have been creating and implementing projects for many years
                all over the wold, we have hundreds of satisfaced customers
              </Card.Text>
            </Col>
          </Row>
        </Card.ImgOverlay>
      </Card>
    </>
  );
}
export default CardFlex;
