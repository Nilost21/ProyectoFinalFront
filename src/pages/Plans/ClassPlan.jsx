import { Container } from "react-bootstrap";
import FormPlan from "../../components/planComponents/FormPlan";
import "../../css/Plans/PlanDetail.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavbarComponent from "../../components/NavbarComponent";
import coverImageClass from "../../assets/img/Plans/cover-image-class-plan.png";

const ClassPlan = () => {
  return (
    <>
      <Container fluid>
        <NavbarComponent />
      </Container>
      <header>
        <div
          className="cover-section-plans"
          style={{
            backgroundImage: `url(${coverImageClass})`,
            position: "relative",
          }}
        >
          <div className="cover-overlay-plans"></div>

          <div
            className="cover-content-plans paragraph"
            style={{ width: "1080px" }}
          >
            <h1 className="mb-3 mb-md-5 mt-2">Class Only Plan</h1>
            <p className="me-2 ms-2 small-font mt-1">
              Our class-only plan provides access to a variety of fitness
              classes for all levels. Led by experienced instructors, classes
              include HIIT, yoga, spinning, and dance cardio. Whether you aim to
              build strength, improve flexibility, or stay active, our plan
              offers a dynamic workout experience tailored to your needs.
            </p>
            <div
              className="container-fluid mt-1 mt-md-5 d-flex justify-content-center align-items-center"
              style={{ width: "310px" }}
            >
              <ul className="ul-plans">
                <li>
                  <i className="bi bi-check-circle-fill me-2"></i>Access to all
                  fitness classes
                </li>
                <li>
                  <i className="bi bi-check-circle-fill me-2"></i>Experienced
                  instructors
                </li>
                <li>
                  <i className="bi bi-check-circle-fill me-2"></i>Progress
                  tracking
                </li>
                <li>
                  <i className="bi bi-check-circle-fill me-2"></i>Access to
                  amenities
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
        <FormPlan planType="Class Only Plan" />
      </Container>
    </>
  );
};

export default ClassPlan;
