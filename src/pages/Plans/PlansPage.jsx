import { Container } from "react-bootstrap";
import CardPlan from "../../components/planComponents/CardPlan";
import "../../css/PlansPage.css";

import ClassPlan from "./ClassPlan";
import FullPlan from "./FullPlan";
import MusclePlan from "./MusclePlan";

const PlansPage = () => {
  return (
    <>
    <Container>
        <h1 className="prueba">planess pagee</h1>
        <h2>en su ruta</h2>
        <CardPlan/> {/* este componente se mostrara en la pagina principal */}
        <MusclePlan/>
        <ClassPlan/>
        <FullPlan/>
      </Container>
      <Container>
        <footer>
          <p>soy un footer</p>
        </footer>
      </Container>
      
    </>
  )
}

export default PlansPage
