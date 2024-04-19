import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import '../../css/Plans/ButtonCardPlan.css';
import "bootstrap-icons/font/bootstrap-icons.css";

function ButtonCardPlan ({ variant  , onClick, children })  {
  return (
    <>
      <Button variant={variant}  className="custom-button-card-plan small-font" onClick={onClick}>
      
      {children}
      <i class="bi bi-arrow-right-circle-fill icon-arrow-plan"></i>
      
    </Button>
    </>
  );
}
ButtonCardPlan.propTypes = {
    variant: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };
 ButtonCardPlan.defaultProps = {
    variant: 'custom-button-card-plan',
  };

export default ButtonCardPlan;
