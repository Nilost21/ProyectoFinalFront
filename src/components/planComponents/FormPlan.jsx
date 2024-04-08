import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import React, { useState } from "react";
import EmailPlanSender from "./EmailPlanSender";

const FormPlan = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleFormPlanSubmit = (e) => {
    e.preventDefault();
    console.log(`las validaciones estan andando`);//borrar

    if (name.length < 2) {
      alert("El nombre debe tener al menos 2 caracteres");
      return;
    }
    if (lastName.length < 2) {
      alert("El apellido debe tener al menos 2 caracteres");
      return;
    }
    if (name.length > 30) {
      alert("El nombre no debe tener mas de 30 caracteres");
      return;
    }
    if (lastName.length > 30) {
      alert("El apellido no debe tener mas de 30 caracteres");
      return;
    }

    const nameRegex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s']+$/;

    if (!nameRegex.test(name)) {
      alert("Ingrese un nombre válido");
      return;
    }
    if (!nameRegex.test(lastName)) {
      alert("Ingrese un apellido válido");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert("Ingrese un email válido");
      return;
    }

    if (email.length > 50) {
      alert("El email no puede tener mas de 50 caracteres");
      return;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      alert("El teléfono debe tener 10 dígitos numéricos");
      return;
    }

    if (message.length > 1500) {
      alert("El mensaje no puede tener más de 1500 caracteres");
      return;
    }
    if (message === "") {
      alert("El campo no debe estar vacio");
      return;
    }
    alert("Formulario enviado");
  };

  return (
    <>
      <Form onSubmit={handleFormPlanSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formPlanName">
            <Form.Control
              type="text"
              placeholder="First Name"
              maxLength={30}
              minLength={2}
              pattern="^[a-zA-ZÀ-ÿ\u00f1\u00d1\s']+$"
              required
              title="Ingresa un nombre válido (solo letras y espacios)"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formPlanLastName">
            <Form.Control
              type="text"
              placeholder="Last Name"
              maxLength={30}
              minLength={2}
              pattern="^[a-zA-ZÀ-ÿ\u00f1\u00d1\s']+$"
              required
              title="Ingresa un apellido válido (solo letras y espacios)"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formPlanEmail">
            <Form.Control
              type="email"
              title="Ingresa un correo electrónico válido (Ejemplo@ejemplo.com)"
              placeholder="Email"
              maxLength={50}
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formPlanPhone">
            <Form.Control
              type="tel"
              placeholder="Phone"
              maxLength={10}
              pattern="[0-9]{10}"
              required
              title="Ingresa un número de teléfono válido sin 0 ni 15 (ejemplo: XXX XXXXXXX)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formPlanMessage">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Message"
              maxLength={1500}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Send Message
        </Button>
      </Form>
      <EmailPlanSender
        name={name}
        lastName={lastName}
        email={email}
        phone={phone}
        message={message}
      />
    </>
  );
};

export default FormPlan;
