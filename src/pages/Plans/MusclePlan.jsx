import { Container } from 'react-bootstrap';
import FormPlan from '../../components/planComponents/FormPlan';

const MusclePlan = () => {
  return (
    <>
    <Container>
        <header>
        <h1>plan solo musculos</h1>
        <FormPlan planType="muscle-plan"/>
        </header>
  
      
    </Container>
    </>
  )
}

export default MusclePlan;
