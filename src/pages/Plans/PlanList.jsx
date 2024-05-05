import CardPlan from '../../components/GymPlans/CardPlan';
import { Container, Row, Col } from 'react-bootstrap';

const PlanList = () => {
  const plans = [
    {
      id: 1,
      level: 'Standard',
      name: 'Class Only Plan',
      price: 39,
      description:
        'Access to all fitness classes without additional gym amenities',
      page: 'class-plan',
    },

    {
      id: 2,
      level: 'Medium',
      name: 'Muscle Only Plan',
      price: 49,
      description: 'Focused on strength training with access to gym facilities',
      page: 'muscle-plan',
    },

    {
      id: 3,
      level: 'Premium',
      name: 'Full Plan',
      price: 59,
      description: 'Includes access to all gym facilities and fitness classes.',
      page: 'full-plan',
    },
  ];

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          {plans.map((product) => (
            <Col
              key={product.id}
              lg={4}
              className="d-flex justify-content-center text-center"

            >
              <CardPlan
                level={product.level}
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
  );
};

export default PlanList;
