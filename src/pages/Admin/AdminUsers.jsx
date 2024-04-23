import './../../css/Home.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useContext } from 'react';
import NavbarComponent from '../../components/NavbarComponent';
import TableUsers from '../../components/Table/TableUsers';
import { UsersProvider } from '../../context/UsersContext';

function AdminUsers() {

  const { getUsers } = useContext(UsersProvider);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <>
      <Container fluid>
        <Row className="p-0 pe-5 pb-5 pb-md-0">
          <NavbarComponent />
        </Row>
        <h1 className="title ms-5 ps-3 mt-3 text-center text-white-50 fs-2">All users</h1>
        <Container>
          <Row className="d-flex flex-row justify-content-between px-xs-3">
            <Col xl={12}>
              <Row className="mt-5">
                <TableUsers />
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default AdminUsers;
