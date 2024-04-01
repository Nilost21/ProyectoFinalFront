import { Container } from "react-bootstrap";
import "../../css/PlansPage.css";
import CardsPlan from "./CardsPlan";
import ClassPlan from "./ClassPlan";
import FullPlan from "./FullPlan";
import MusclePlan from "./MusclePlan";

const PlansPage = () => {
  return (
    <>
    <Container>
        <h1 className="prueba">planess pagee</h1>
        <h2>en su ruta</h2>
        <CardsPlan/> {/* este componente se mostrara en la pagina principal */}
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
