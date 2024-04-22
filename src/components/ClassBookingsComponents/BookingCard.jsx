{
  /* esqueleto de cards */
}
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import "../../css/ClassBookings/BookingCard.css";

import { useNavigate } from "react-router-dom";

const BookingCard = ({ name, hour, date, instructor, description }) => {

  const navigate = useNavigate();

  /* const handleBookingPage = () => {
    navigate(`/class-bookings`);
  }; */

  return (
    <>
      <Card
        style={{ width: "18rem" }}
        className="mb-5 mt-5 text-center custom-booking-card"
      >
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Card.Title className="text-white paragraph mt-1 mb-3 fs-3">
                Boxing
              </Card.Title>
            </ListGroup.Item>
            <ListGroup.Item>
              <Card.Text className="mb-1 mt-1 small-font">
                Monday at 5 PM
              </Card.Text>
              <Card.Text className="mb-1 mt-1 small-font">Instructor</Card.Text>
            </ListGroup.Item>
            <ListGroup.Item>
              <Card.Text className="small-font description-booking-card mt-1 mb-1">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </ListGroup.Item>
          </ListGroup>
          <Button
            variant="primary"
            className="custom-btn-bc small-font fw-bold"
            onClick={ () => navigate("/class-bookings") }
          >
            Reserve
          </Button>
        </Card.Body>
      </Card>

      {/* Card con props */}
      <Card
        style={{ width: "18rem" }}
        className="mb-5 mt-5 text-center custom-booking-card"
      >
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Card.Title className="text-white paragraph mt-1 mb-3 fs-3">
              {name}name
              </Card.Title>
            </ListGroup.Item>
            <ListGroup.Item>
              <Card.Text className="mb-1 mt-1 small-font">
              {date} at {hour}date at hour
              </Card.Text>
              <Card.Text className="mb-1 mt-1 small-font">{instructor}Instructor</Card.Text>
            </ListGroup.Item>
            <ListGroup.Item>
              <Card.Text className="small-font description-booking-card mt-1 mb-1">
              {description}
              Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </ListGroup.Item>
          </ListGroup>
          <Button
            variant="primary"
            className="custom-btn-bc small-font fw-bold"
            onClick={ () => navigate("/class-bookings") }
          >
            Reserve
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default BookingCard;
