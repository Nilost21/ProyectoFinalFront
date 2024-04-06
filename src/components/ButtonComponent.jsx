import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './../css/Button.css';

function ButtonComponent({ text, onClick }) {

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="mt-1">
      <Button
        onClick={handleClick}
        className="gradient-background border-0 rounded-5 subtitle py-1 shadow-on-hover"
      >
        <div className="mt-1">
          {text}{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right-short"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
            />
          </svg>
        </div>
      </Button>
    </div>
  );
}

ButtonComponent.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default ButtonComponent;