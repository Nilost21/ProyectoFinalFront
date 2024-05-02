/* eslint-disable no-unused-vars */
import { Container, Row, Col } from 'react-bootstrap';
import NavbarComponent from '../../components/NavbarComponent';
import TableUserClasses from '../../components/Table/TableUserClasses';

import { useEffect, useContext } from 'react';
import { useAuth } from '../../context/Utils/authUtils';
import { EnrollmentProvider } from '../../context/EnrollmentContext';

const MyClasses = () => {
  const { user } = useAuth();
  const userId = user._id;

  const { getUserEnrollments } = useContext(EnrollmentProvider);

  useEffect(() => {
    getUserEnrollments(userId);
  }, [getUserEnrollments, userId]);

  return (
    <>
      <Container fluid>
        <Row className="p-0 pe-5 pb-5 pb-md-0">
          <NavbarComponent />
        </Row>
        <h1 className="title ms-5 ps-3 mt-3 text-center text-white-50 fs-2">My classes 🏋🏽🔥💪🏼🎧</h1>
        <Container>
          <Row className="d-flex flex-row justify-content-between px-xs-3">
            <Col xl={12}>
              <Row className="mt-5">
                <TableUserClasses user={userId} />
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default MyClasses
