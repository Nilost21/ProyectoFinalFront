/* eslint-disable no-unused-vars */
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

import { EnrollmentProvider } from '../../context/EnrollmentContext';
import { useAuth } from '../../context/Utils/authUtils';

import '../../css/ClassBookings/BookingCard.css';

const BookingCard = ({ id, name, description, teacher, dateAndTime }) => {
  const { newEnrollment } = useContext(EnrollmentProvider);
  const { isLoggedIn, user } = useAuth();

  const handleEnroll = async () => {
    if (!isLoggedIn) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'You must log in',
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    try {
      const result = await newEnrollment({ user: user._id, gymClass: id });
      if (result.message === 'You are already enrolled in the class.') {
        Swal.fire({
          position: 'center',
          icon: 'info',
          title: 'You are already enrolled in the class.',
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Successfully enrolled in the class!',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      const errorMessage = error.response?.data?.error.message
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Error when booking the class.',
        text: errorMessage,
      });
    }
  };

  return (
    <>
      <Card
        style={{ width: "16rem" }}
        className="mb-5 mt-0 text-center custom-booking-card"
      >
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Card.Title className="text-white paragraph mt-1 mb-3 fs-3">
                {name}
              </Card.Title>
            </ListGroup.Item>
            <ListGroup.Item>
              <Card.Text className="mb-1 mt-1 small-font">
                {dateAndTime}
              </Card.Text>
              <Card.Text className="mb-1 mt-1 small-font">{teacher}</Card.Text>
            </ListGroup.Item>
            <ListGroup.Item>
              <Card.Text className="small-font description-booking-card mt-1 mb-1">
                {description}
              </Card.Text>
            </ListGroup.Item>
          </ListGroup>
          <div className="button-container d-flex justify-content-center">
            <Button
              variant="primary"
              className="custom-btn-bc small-font fw-bold"
              onClick={handleEnroll}
            >
              Reserve
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

BookingCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  teacher: PropTypes.string,
  dateAndTime: PropTypes.string
};

export default BookingCard;
