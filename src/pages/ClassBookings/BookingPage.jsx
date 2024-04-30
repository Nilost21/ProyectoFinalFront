import NavbarComponent from "../../components/NavbarComponent";
import { Container, Row} from "react-bootstrap";
import ClassBookings from '../../components/ClassBookingsComponents/ClassBookings';


import "../../css/ClassBookings/BookingPage.css";
import FooterComponent from "../../components/FooterComponent";

{
  /* pagina que contendra cards para agendar turnos */
}

const BookingPage = () => {
  return (
    <>
      <Container fluid className="booking-page">
        <Row className="p-0 pe-md-5 pb-5 pb-md-0">
      <NavbarComponent/>
      <Container>
        <ClassBookings />
      </Container>
      
        
        </Row>
      </Container>
      
      
     
      
      <Container
        fluid
        className="d-flex flex-row justify-content-around  border-footer bg-footer"
      >
        <FooterComponent/>
      </Container>
    </>
  );
};

export default BookingPage;
