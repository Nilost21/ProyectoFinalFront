import { Container, Row, Col } from 'react-bootstrap';
import TableUsers from '../../components/Table/TableUsers';
import TableProducts from '../../components/Table/TableProducts';
import FormProducts from '../../components/Form/FormProducts';

function Admin() {
  return (
    <>
      <h1 className="title ms-5 ps-3 mt-3 text-center">PAGINA ADMIN</h1>

      <Container>
        <Row className="d-flex flex-row justify-content-between px-xs-3">
          <Col xl={3} xs={12}>
            <Row>
              <FormProducts />
            </Row>
          </Col>
          <Col xl={8}>
            <Row>
              <TableUsers />
            </Row>
            <Row className="mt-5">
              <TableProducts />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Admin;
