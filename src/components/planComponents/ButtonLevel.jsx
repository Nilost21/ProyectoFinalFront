import { Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../css/Plans/ButtonLevel.css";

const ButtonLevel = ({ children }) => {
  return (
    <>
      <Button className="custom-button-level small-font">{children}</Button>
    </>
  );
};

export default ButtonLevel;
