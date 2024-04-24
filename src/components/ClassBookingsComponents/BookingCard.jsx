/* eslint-disable no-unused-vars */
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

import { EnrollmentProvider } from '../../context/EnrollmentContext';
import { ClassProvider } from '../../context/ClassContex';
import { useAuth } from '../../context/Utils/authUtils';

import '../../css/ClassBookings/BookingCard.css';

const BookingCard = ({ id, name, description, teacher, dateAndTime }) => {
  const { newEnrollment } = useContext(EnrollmentProvider);
  const { isLoggedIn, user } = useAuth();

  const handleEnroll = async () => {
    if (!isLoggedIn) {
      console.log("User must log in");
      return;
    }
    try {
      const res = await newEnrollment({ user: user._id, gymClass: id });
      if (res) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Successfully enrolled in the class!',
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        throw new Error('The user is already enrolled');
      }
    } catch (error) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Error enrolling in class',
        text: error.message || error,
      });
    }
  };

  return (
    <>
      {/* Card con props */}
      <Card
        style={{ width: "18rem" }}
        className="mb-5 mt-5 text-center custom-booking-card"
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
          <Button
            variant="primary"
            className="custom-btn-bc small-font fw-bold"
            onClick={handleEnroll}
          >
            Reserve
          </Button>
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
