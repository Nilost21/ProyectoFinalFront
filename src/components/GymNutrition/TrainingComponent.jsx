import { Col, Row } from 'react-bootstrap';
import './../../css/NutritionComponent.css';

const TrainingComponent = () => {
  return (
    <>
      <div className="mx-3 pe-md-5" data-aos="fade-right">
        {/* Primera fila */}
        <Row className="mb-3 border-top custom-row">
          <Col
            xs={4}
            className="d-flex justify-content-center align-items-center"
          >
            <img
              src="https://i.pinimg.com/564x/ef/51/15/ef5115dc1633ec5c743e20270750ed4c.jpg"
              alt="Imagen"
              className="img-fluid rounded-circle mt-md-5 training-image shadow-box"
            />
          </Col>
          <Col xs={8} className="d-flex align-items-center">
            <div>
              <p className="mt-4 mt-md-5 custom-title paragraph fs-2">
                Training
              </p>
              <h2 className="text-white mb-md-3 fs-1 paragraph">
                How to stay fit in winter?
              </h2>
              <p className="text-white-50 mt-md-4 custom-text small-font fs-5">
                In this article, we will show you tips on how to stay in shape
                during the winter. Check and share!
              </p>
            </div>
          </Col>
        </Row>

        {/* Segunda fila */}
        <Row className="mb-0 mb-md-3 mt-md-5 border-top custom-row">
          <Col
            xs={4}
            className="d-flex justify-content-center align-items-center"
          >
            <img
              src="https://i.pinimg.com/564x/98/6e/80/986e8020d901fe1c313e9460495ec5c3.jpg"
              alt="Imagen"
              className="img-fluid rounded-circle mt-md-5 training-image shadow-box"
            />
          </Col>
          <Col xs={8} className="d-flex align-items-center">
            <div>
              <p className="mt-4 mt-md-5 custom-title paragraph fs-2">
                Healthy food
              </p>
              <h2 className="text-white mb-md-3 fs-1 paragraph">
                Required for dinner
              </h2>
              <p className="text-white-50 mt-md-4 pe-md-5 custom-text small-font fs-5">
                A recipe for quick and effective preparation of dinner. In this
                article, you will learn some recipes for delicious dinner
                dishes. For work or maybe at home? Take them with you!
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default TrainingComponent;
