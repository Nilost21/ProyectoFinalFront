import BookingForm from "../../components/ClassBookingsComponents/BookingForm";
import NavbarComponent from "../../components/NavbarComponent";
import { Container, Row, Col } from "react-bootstrap";


import "../../css/ClassBookings/BookingPage.css";

{
  /* pagina que contendra el form para agendar turnos */
}

const BookingPage = () => {
  return (
    <>
      <Container fluid>
        <NavbarComponent />
      </Container>
      <div className="body-booking-page">
        <Container>
        <Row className="justify-content-center">
            <Col xs={12} md={8}>
              <h1 className="text-white paragraph text-center mb-3 mb-md-5 mt-2">
                Book your class here
              </h1>
              <BookingForm />
            </Col>
          </Row>
        </Container>
      </div>
     {/*  <footer>
        <h2 className="text-white">soy footer</h2>
      </footer> */}
    </>
  );
};

export default BookingPage;
