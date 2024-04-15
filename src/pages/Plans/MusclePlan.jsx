import { Container } from "react-bootstrap";
import FormPlan from "../../components/planComponents/FormPlan";
import coverImageMuscle from "../../assets/img/Plans/cover-image-muscle-plan.png";
import "../../css/Plans/MusclePlan.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const MusclePlan = () => {
  return (
    <>
      <header>
        <div
          className="cover-section"
          style={{
            backgroundImage: `url(${coverImageMuscle})`,
            position: "relative",
          }}
        >
          <div className="cover-overlay"></div>
          <div className="cover-content" style={{width:'1080px'}}>
            <h1>Muscle Only Plan</h1>
            <p className="me-2 ms-2">
              Achieve your muscle-building goals with our tailored plan.
              Designed for all fitness levels, it focuses on progressive
              training and balanced nutrition for optimal muscle growth. Start
              today and unlock your strength potential.
            </p>
            <div className="container-fluid" style={{width:'300px'}}>
              <ul>
                <li>
                  <i class="bi bi-check-circle-fill me-2"></i>Weightlifting
                  Exercises
                </li>
                <li>
                  <i class="bi bi-check-circle-fill me-2"></i>Training Routines
                </li>
                <li>
                  <i class="bi bi-check-circle-fill me-2"></i>Premium support
                  for Diets
                </li>
                <li>
                  <i class="bi bi-check-circle-fill me-2"></i>Includes Personal
                  Trainer Guidance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <Container>
        <FormPlan planType="muscle-plan" />
      </Container>
    </>
  );
};

export default MusclePlan;
