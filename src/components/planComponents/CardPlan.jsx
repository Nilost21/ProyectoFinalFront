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
    <Card style={{ width: '18rem'}} className='mb-3 mb-lg-0 custom-card-plan'>
      <Card.Body>
        <Card.Title className="title text-light name-card-plan"><h3>{name}</h3></Card.Title>
        <Card.Text className="title text-light price-card-plan">${price}</Card.Text>
        <Card.Subtitle className="mb-2 small-font month-card-plan">per month</Card.Subtitle>
        <Card.Text className="paragraph text-light description-card-plan mt-4 mb-4">{description}</Card.Text>
        <ButtonCardPlan 
        
        variant="custom-button-card-plan"  
        children="CHOOSE" 
        onClick={handleShowPlanInfo}></ButtonCardPlan>   
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
