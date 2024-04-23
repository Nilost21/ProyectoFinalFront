import { Container } from "react-bootstrap";
import FormPlan from "../../components/planComponents/FormPlan";
import "../../css/Plans/PlanDetail.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavbarComponent from "../../components/NavbarComponent";
import coverImageFull from "../../assets/img/Plans/cover-image-full-plan.png";

const FullPlan = () => {
  return (
    <>
      <Container fluid>
        <NavbarComponent />
      </Container>
      <header>
        <div
          className="cover-section-plans"
          style={{
            backgroundImage: `url(${coverImageFull})`,
            position: "relative",
          }}
        >
          <div className="cover-overlay-plans"></div>

          <div
            className="cover-content-plans paragraph"
            style={{ width: "1080px" }}
          >
            <h1 className="mb-2 mb-md-5 mt-2">Full Plan</h1>
            <p className="me-2 ms-2 small-font mt-1">
              Get unlimited access to our gym facilities, including classes and
              amenities. Our experienced trainers offer personalized assessments
              and workout plans to help you reach your goals. Enjoy
              member-exclusive discounts and events. Join now for a tailored
              fitness experience!
            </p>
            <div
              className="container-fluid mt-1 mt-md-5 d-flex justify-content-center align-items-center"
              style={{ width: "310px" }}
            >
              <ul className="ul-plans">
                <li>
                  <i className="bi bi-check-circle-fill me-2"></i>Unlimited gym
                  access
                </li>
                <li>
                  <i className="bi bi-check-circle-fill me-2"></i>Customized
                  workout plans
                </li>
                <li>
                  <i className="bi bi-check-circle-fill me-2"></i>One-on-one
                  training sessions
                </li>
                <li>
                  <i className="bi bi-check-circle-fill me-2"></i>Nutritional
                  guidance
                </li>
                <li>
                  <i className="bi bi-check-circle-fill me-2"></i>Discounts on
                  additional services
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

        <FormPlan planType="Full Plan" />
      </Container>
    </>
  );
};

export default FullPlan;
