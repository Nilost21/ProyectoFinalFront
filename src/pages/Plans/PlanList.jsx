import CardPlan from "../../components/planComponents/CardPlan";
import { Container, Row, Col } from 'react-bootstrap';

const PlanList = () => {

    const plans = [
        { id: 1, name: 'Class Only Plan', price: 10 , description: 'Access to all fitness classes without additional gym amenities', page: 'class-plan'},
        { id: 2, name: 'Muscle Only Plan', price: 20, description: 'Focused on strength training with access to gym facilities', page: 'muscle-plan' },
        { id: 3, name: 'Full Plan', price: 30, description: 'Includes access to all gym facilities and fitness classes.', page: 'full-plan' },
      ];

  return (
    <>
    <Container>
            <Row className="justify-content-center">
                {plans.map((product) => (
                    <Col key={product.id}  lg={4} className="text-center" >
                        <CardPlan 
                            name={product.name}
                            price={product.price}
                            description={product.description}
                            page={product.page}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
       
        
      
    </>
  )
}

export default PlanList
