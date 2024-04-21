import { Button } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";
import '../../css/Plans/ButtonLevel.css';
import PropTypes from "prop-types";

const ButtonLevel = ({children}) => {
  return (
    <>
    <Button className='custom-button-level small-font'>
    {children}
    </Button>
    </>
  )
}

ButtonLevel.propTypes = {
  children:PropTypes.node.isRequired,
};

export default ButtonLevel;
