import { Card } from 'react-bootstrap';
import ButtonComponent from './ButtonComponent';
import PropTypes from 'prop-types';

function CardComponent({ name, description, func }) {
  return (
    <>
      <Card
        style={{ width: '18rem' }}
        className="text-light paragraph bg-dark mb-3"
      >
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <ButtonComponent text="Go somewhere" func={func} />
        </Card.Body>
      </Card>
    </>
  );
}

CardComponent.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  func: PropTypes.func,
};

export default CardComponent;
