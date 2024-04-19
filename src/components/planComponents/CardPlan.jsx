import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "../../css/Plans/CardPlan.css";
import ButtonCardPlan from "./ButtonCardPlan";
import ButtonLevel from "./ButtonLevel";

function CardPlan({ level, name, price, description, page }) {
  const navigate = useNavigate();

  const handleShowPlanInfo = () => {
    navigate(`/plans/${page}`);

    console.log(`Se hizo clic en el botón ${page}`); //borrar luego
  };
  return (
    <>
      <Card
        style={{ width: "18rem" }}
        className="mb-3 mt-5 mb-lg-0 custom-card-plan"
      >
        <Card.Body>
          <div className="d-flex mt-3 mb-3">
            <ButtonLevel children={level} />
          </div>
          <Card.Title
            /* className="title text-light name-card-plan" */ 
            className="text-white paragraph mt-1 mb-3 fs-2"
          >
            {name}
          </Card.Title>
          <Card.Text className="title text-light price-card-plan">
            ${price}
          </Card.Text>
          <Card.Subtitle className="mb-2 small-font month-card-plan">
            per month
          </Card.Subtitle>
          <Card.Text className="small-font description-card-plan mt-4 mb-4">
            {description}
          </Card.Text>
          <ButtonCardPlan
            variant="custom-button-card-plan"
            children="CHOOSE"
            onClick={handleShowPlanInfo}
          ></ButtonCardPlan>
        </Card.Body>
      </Card>
    </>
  );
}

CardPlan.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CardPlan;
