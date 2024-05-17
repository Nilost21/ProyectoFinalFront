import { Container, Row } from 'react-bootstrap';
import NavbarComponent from '../../components/NavbarComponent';

function Profile() {
  return (
    <>
      <Container fluid>
        <Row className="p-0 pe-5 pb-5 pb-md-0">
          <NavbarComponent />
        </Row>
        <h1 className="title ms-5 ps-3 mt-3 text-center text-white-50 fs-2">My profile</h1>
      </Container>
    </>
  )
}

export default Profile;
