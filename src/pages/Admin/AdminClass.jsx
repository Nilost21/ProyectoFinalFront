import './../../css/Home.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useContext } from 'react';

import NavbarComponent from '../../components/NavbarComponent';
import TableClasses from '../../components/Table/TableClasses';
import FormNewClass from '../../components/Form/FormNewClass';
import { ClassProvider } from '../../context/ClassContex';

function AdminClass() {

  const { getClasses } = useContext(ClassProvider);

  useEffect(() => {
    getClasses();
  }, [getClasses]);

  return (
    <>
      <Container fluid>
        <Row className="p-0 pe-5 pb-5 pb-md-0">
          <NavbarComponent />
        </Row>
        <h1 className="title ms-5 ps-3 mt-3 text-center text-white-50 fs-2">Gym class management</h1>
        <Container>
          <Row className="d-flex flex-row justify-content-between px-xs-3">
            <Col xl={3} xs={12}>
              <Row>
                <FormNewClass />
              </Row>
            </Col>
            <Col xl={8}>
              <Row className="mt-5">
                <TableClasses />
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default AdminClass;
