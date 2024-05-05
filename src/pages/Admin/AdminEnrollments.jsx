/* eslint-disable no-unused-vars */
import './../../css/Home.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useContext } from 'react';
import NavbarComponent from '../../components/NavbarComponent';
import { EnrollmentProvider } from '../../context/EnrollmentContext';
import AdminDashboard from '../../components/Tables/AdminDashboard';

const AdminEnrollments = () => {
  const { getEnrollmentsForToday } = useContext(EnrollmentProvider);

  useEffect(() => {
    getEnrollmentsForToday();
  }, [getEnrollmentsForToday]);

  return (
    <>
      <Container fluid>
        <Row className="p-0 pe-5 pb-5 pb-md-0">
          <NavbarComponent />
        </Row>
        <h1 className="title ms-5 ps-3 mt-3 text-center text-white-50 fs-2">Today&apos;s Enrollments 🏋️‍♂️</h1>
        <Container>
          <Row className="d-flex flex-row justify-content-between px-xs-3">
            <Col xl={12}>
              <Row className="mt-5">
                <AdminDashboard />
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default AdminEnrollments;
