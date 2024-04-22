import { Button, Card, Container, Col, Row } from 'react-bootstrap';

const FoodComponent = () => {
  return (
    <>
      <div>
        <Col xs={3} className="d-flex justify-content-center align-items-center">
          <img src="https://i.pinimg.com/564x/98/6e/80/986e8020d901fe1c313e9460495ec5c3.jpg" alt="Imagen" className="img-fluid rounded-circle" />
        </Col>
        <Col xs={9} className="d-flex align-items-center">
          <div>
            <p>Healthy food</p>
            <h2 className="text-white">Required for dinner</h2>
            <p className="text-white-50">A recipe for quick and effective preparation of dinner. In this article, you will learn some recipes for delicious dinner dishes. For work or maybe at home? Take them with you!</p>
          </div>
        </Col>
      </div>
    </>
  )
}

export default FoodComponent
