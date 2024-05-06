import { Col, Container, Row } from 'react-bootstrap';
import NavbarComponent from '../../components/NavbarComponent';
import UserPicture from '../../components/Profile/UserPicture';
import UserInfo from '../../components/Profile/UserInfo';
import { useAuth } from '../../context/Utils/authUtils';

function Profile() {
  const { user } = useAuth();

  return (
    <>
      <Container fluid>
        <Row className="p-0 pe-5 pb-5 pb-md-0">
          <NavbarComponent />
        </Row>
        <Row className="d-flex flex-row justify-content-between mt-5">
          <Col lg={4} xs={12} className="d-flex flex-row justify-content-lg-end justify-content-center px-5 px-lg-0">
            <UserPicture
              name={user.name}
              lastname={user.lastname}
              avatar={user.avatar}
            />
          </Col>
          <Col lg={7} xs={12} className="ms-lg-2">
            <UserInfo />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Profile;
