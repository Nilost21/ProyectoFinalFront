import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function CardPlan ({name, price, description, page}) {
  const navigate = useNavigate();

  const handleShowPlanInfo = () => {
     navigate(`/plans/${page}`);

    console.log(`Se hizo clic en el botón ${page}`);//borrar luego
  };
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>${price}</Card.Text>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" onClick={handleShowPlanInfo}>Go somewhere</Button>   
      </Card.Body>
    </Card>
    </>
  )
}

CardPlan.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CardPlan
