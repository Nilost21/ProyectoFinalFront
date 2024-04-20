import { Container } from "react-bootstrap";
import FormPlan from "../../components/planComponents/FormPlan";
import coverImageMuscle from "../../assets/img/Plans/cover-image-muscle-plan.png";
import "../../css/Plans/PlanDetail.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavbarComponent from "../../components/NavbarComponent";

const MusclePlan = () => {
  return (
    <>
      <Container fluid>
        <NavbarComponent />
      </Container>
      <header>
        <div
          className="cover-section-plans"
          style={{
            backgroundImage: `url(${coverImageMuscle})`,
            position: "relative",
          }}
        >
          <div className="cover-overlay-plans"></div>

          <div
            className="cover-content-plans paragraph"
            style={{ width: "1080px" }}
          >
            <h1 className="mb-3 mb-md-5 mt-2">Muscle Only Plan</h1>
            <p className="me-2 ms-2 small-font mt-5">
              Achieve your muscle-building goals with our tailored plan.
              Designed for all fitness levels, it focuses on progressive
              training and balanced nutrition for optimal muscle growth. Start
              today and unlock your strength potential.
            </p>
            <div
              className="container-fluid mt-5 d-flex justify-content-center align-items-center"
              style={{ width: "310px" }}
            >
              <ul className="ul-plans">
                <li>
                  <i className="bi bi-check-circle-fill me-2"></i>Weightlifting
                  Exercises
                </li>
                <li>
                  <i className="bi bi-check-circle-fill me-2"></i>Training
                  Routines
                </li>
                <li>
                  <i className="bi bi-check-circle-fill me-2"></i>Premium
                  support for Diets
                </li>
                <li>
                  <i className="bi bi-check-circle-fill me-2"></i>Includes
                  Personal Trainer Guidance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <Container>
        <p className="paragraph text-light text-center size-title-form mt-4">
          Want to know more?
        </p>
        <p className="paragraph text-light text-center size-subtitle-form">
          Make your inquiry now!
        </p>
        <FormPlan planType="Muscle Only Plan" />
      </Container>
    </>
  );
};

export default MusclePlan;
