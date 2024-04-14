import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import '../../css/ButtonCardPlan.css';
import "bootstrap-icons/font/bootstrap-icons.css";

function ButtonCardPlan ({ /* variant ,*/ onClick, children })  {
  return (
    <>
      <Button /* variant={variant} */ className="custom-button-card-plan" onClick={onClick}>
      
      {children}
      <i class="bi bi-arrow-right-circle-fill"></i>
      
    </Button>
    </>
  );
}
ButtonCardPlan.propTypes = {
    /* variant: PropTypes.string, */
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };
 /*  ButtonCardPlan.defaultProps = {
    variant: 'primary',
  }; */

export default ButtonCardPlan;
