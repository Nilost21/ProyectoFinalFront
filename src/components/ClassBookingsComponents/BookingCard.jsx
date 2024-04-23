{
  /* esqueleto de cards */
}
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import "../../css/ClassBookings/BookingCard.css";

import { useNavigate } from "react-router-dom";

const BookingCard = ({ name, description, teacher, dateAndTime }) => {

  const navigate = useNavigate();

  /* const handleBookingPage = () => {
    navigate(`/class-bookings`);
  }; */

  return (
    <>
      <Card
        style={{ width: "16rem" }}
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
          <div className="button-container d-flex justify-content-center">
          <Button
            variant="primary"
            className="custom-btn-bc small-font fw-bold"
            onClick={ () => navigate("/class-bookings") }
          >
            Reserve
          </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default BookingCard;
