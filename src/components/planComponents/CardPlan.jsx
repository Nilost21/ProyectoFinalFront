import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const CardPlan = ({name, price, description}) => {
  const handleClick = () => {
    // Aquí puedes realizar la acción que desees cuando se haga clic en el botón
    console.log('Se hizo clic en el botón');
  };
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>${price}</Card.Text>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" onClick={handleClick}>Go somewhere</Button>   
      </Card.Body>
    </Card>
    </>
  )
}




export default CardPlan
