import { Card, Button, Modal } from 'react-bootstrap';
import { useState } from 'react';

import '../../css/Card.css';
import '../../css/Home.css';
import InfoCardHome from './InfoCardHome';

function CardExperience() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const subTitle =
    "Our team of specialists is dedicated to providing you with comprehensive support throughout your fitness journey. From the moment you step into our facility, they take the time to understand your goals, limitations, and preferences. They meticulously oversee your form, ensuring that each exercise is performed safely and effectively. If you have any questions or concerns at any point during your workout, our specialists are readily available to provide guidance and assistance. Furthermore, they continuously monitor your progress and make necessary adjustments to your exercise plans to ensure that you're consistently moving towards your fitness goals. Whether you're aiming to build strength, improve flexibility, or enhance your overall health, our specialists are committed to helping you achieve success." +
    '\n\n' +
    'Feel confident knowing that our team is here to support you every step of the way, celebrating your victories and helping you overcome any challenges that may arise on your fitness journey.';

  return (
    <>
      <Card className="bg-experience mb-5 rounded-3 border-0 pt-5 pb-4 px-4 shadow-box  card-zoom ">
        <Card.Body className="pt-1">
          <div>
            <Button className="bg-transparent rounded-5 px-2 py-1 mb-4 border-experience ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="31"
                fill="#BB6BDC"
                className="bi bi-star-fill mb-1 p-2 "
                viewBox="0 0 16 16"
              >
                <path
                  className="star-color"
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                />
              </svg>
            </Button>
          </div>
          <Card.Title className="text-white paragraph mt-1 mb-3  fs-2">
            Experience
          </Card.Title>
          <Card.Text className="text-color-small small-font pe-3">
            Our specialists take core of your form and they will check and talk
            to you if you have any questions during the execution of the
            exercise plans
          </Card.Text>
          <Button
            onClick={handleShow}
            className="bg-transparent border-0 subtitle px-0 "
          >
            {' '}
            <span className="gradient-hover">Read More</span>{' '}
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

      <Modal
        contentClassName="bg-transparent border-0 p-0"
        show={show}
        onHide={handleClose}
      >
        <InfoCardHome
          handleClose={handleClose}
          textTitle={'Experience'}
          textSubtitle={subTitle}
        />
      </Modal>
    </>
  );
}
export default CardExperience;
