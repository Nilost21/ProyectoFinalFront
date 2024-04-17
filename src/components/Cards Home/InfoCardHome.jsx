import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../../css/Card.css';
import '../../css/Home.css';

function InfoCardHome({ textTitle, textSubtitle, handleClose }) {
  return (
    <>
      <Card className="bg-experience mb-5 rounded-3 border-0 pt-5 pb-4 px-4 shadow-box ">
        <Card.Body className="pt-0">
          <div>
            <Button className="bg-transparent rounded-5 px-2 py-1 mb-4 border-experience ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="31"
                fill="#BB6BDC"
                className="bi bi-info-lg mb-1"
                viewBox="0 0 16 16"
              >
                <path d="m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0" />
              </svg>
            </Button>
          </div>
          <Card.Title className="text-white paragraph mt-1 mb-3 me-1 fs-2">
            {textTitle}
          </Card.Title>
          <Card.Text className="text-color-small small-font">
            {textSubtitle}
          </Card.Text>
          <Button
            onClick={handleClose}
            className="bg-transparent border-0 subtitle px-0 "
          >
            {' '}
            <span className="gradient-hover">Back To Home</span>{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="currentColor"
              className="bi bi-arrow-right-circle-fill ms-1 "
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
            </svg>
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

InfoCardHome.propTypes = {
  textTitle: PropTypes.string,
  textSubtitle: PropTypes.string,
  handleClose: PropTypes.func,
};

export default InfoCardHome;
