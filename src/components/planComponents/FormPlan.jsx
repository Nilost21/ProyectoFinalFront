import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const FormPlan = () => {
  return (
    <>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Nombre" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridApellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text" placeholder="Apellido" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridTelefono">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control type="tel" placeholder="Teléfono" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridMensaje">
      <Form.Label>Mensaje</Form.Label>
      <Form.Control as="textarea" rows={3} placeholder="Escribe tu mensaje aquí" />
    </Form.Group>
  </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

    </>
  );
};

export default FormPlan;
