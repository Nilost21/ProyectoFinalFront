import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../css/CardPlan.css';
import ButtonCardPlan from './ButtonCardPlan';

function CardPlan ({name, price, description, page}) {
  const navigate = useNavigate();

  const handleShowPlanInfo = () => {
     navigate(`/plans/${page}`);

    console.log(`Se hizo clic en el botón ${page}`);//borrar luego
  };
  return (
    <>
    <Card style={{ width: '18rem'}} className='mb-3 mb-lg-0 cardcolor'>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>${price}</Card.Text>
        <Card.Subtitle className="mb-2 text-muted">per month</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <ButtonCardPlan /* variant="primary" */ children="CHOOSE" onClick={handleShowPlanInfo}></ButtonCardPlan>   
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
