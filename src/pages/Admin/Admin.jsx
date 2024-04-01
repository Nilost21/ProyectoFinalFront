import { Container, Row, Col } from 'react-bootstrap';
import TableUsers from '../../components/Table/TableUsers';
import TableProducts from '../../components/Table/TableProducts';
import FormProducts from '../../components/Form/FormProducts';

function Admin() {
  return (
    <>
      <h1 className="title ms-5 ps-3 mt-3 text-center">PAGINA ADMIN</h1>

      <Container>
        <Row className="d-flex flex-row justify-content-between">
          <Col xl={3} className="mt-4">
            <Row>
              <h3 className="subtitle ms-5 ps-3 mt-3 text-star">Formulario</h3>

              <FormProducts />
            </Row>
          </Col>
          <Col xl={8}>
            <Row>
              <h3 className="subtitle ms-5 ps-3 mt-3 text-center text-white">
                USERS
              </h3>
              <TableUsers />
            </Row>
            <Row className="mt-5">
              <h3 className="subtitle ms-5 ps-3 mt-3 text-center text-white">
                PRODUCTS
              </h3>
              <TableProducts />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Admin;