import { Card } from 'react-bootstrap';
import ButtonComponent from './ButtonComponent';
import PropTypes from 'prop-types';

function CardComponent({ name, description, func, price }) {
  return (
    <>
      <Card style={{ width: '18rem' }} className="text-light bg-dark ">
        <Card.Body>
          <Card.Title className="subtitle">{name}</Card.Title>
          <Card.Text className="paragraph ">{description}</Card.Text>
          <div className="d-flex justify-content-around">
            <ButtonComponent text="Go somewhere" func={func} />
            <Card.Text className="subtitle fs-2  me-1 ">${price}</Card.Text>
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
  price: PropTypes.number.isRequired,
};

export default CardComponent;
