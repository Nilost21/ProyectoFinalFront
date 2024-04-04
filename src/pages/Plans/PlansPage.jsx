import { Container } from "react-bootstrap";
import "../../css/PlansPage.css";

import ClassPlan from "./ClassPlan";
import FullPlan from "./FullPlan";
import MusclePlan from "./MusclePlan";
import PlanList from "./PlanList";

const PlansPage = () => {
  return (
    <>
    <Container>
        <h1 className="prueba">planess pagee</h1>
        <h2>en su ruta</h2>
        <PlanList/> {/* este componente se mostrara en la pagina principal */}
        {/* <MusclePlan/>
        <ClassPlan/>
        <FullPlan/> */}
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
