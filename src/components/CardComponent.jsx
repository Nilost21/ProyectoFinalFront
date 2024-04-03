import { Card } from 'react-bootstrap';
import './../css/Card.css';
import ButtonComponent from './ButtonComponent';
import PropTypes from 'prop-types';

function CardComponent({ name, description, func, price, image }) {
  return (
    <>
      <Card
        style={{ width: '18rem' }}
        className="text-light bg-dark rounded-5 border-0 rounded-4 mb-3 "
      >
        <Card.Body className=" shadow-box rounded-4 border-0 rounded-5">
          <Card.Img
            variant="top"
            src={`${image}`}
            className="rounded-4 mb-2 p-2"
          />
          <Card.Title className="subtitle mt-1">{name}</Card.Title>
          <Card.Text className="paragraph ">{description}</Card.Text>
          <div className="d-flex justify-content-around">
            <ButtonComponent text="Go somewhere" func={func} />
            <Card.Text className="subtitle fs-2  me-1 ">${price},99</Card.Text>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

CardComponent.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  func: PropTypes.func,
  price: PropTypes.string,
  image: PropTypes.string,
};

export default CardComponent;
