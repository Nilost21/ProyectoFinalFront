import { Container } from 'react-bootstrap';
import FormPlan from '../../components/planComponents/FormPlan';

const ClassPlan = () => {
  return (
    <>
    <Container>
        <header>
        <h1>plan solo clases</h1>
        <FormPlan planType="class-plan"/>
        </header>
  
      
    </Container>
      
    </>
  )
}

export default ClassPlan
