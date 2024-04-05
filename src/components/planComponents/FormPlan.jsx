import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import React, { useState } from 'react';

const FormPlan = () => {

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar nombre y apellido
    if (nombre.length < 2 ) {
      alert('El nombre debe tener al menos 2 caracteres');
      return;
    } 
    if (apellido.length < 2) {
      alert('El apellido debe tener al menos 2 caracteres');
      return;
    }

    if (nombre.length > 30) {
      alert('El nombre no debe tener mas de 30 caracteres');
      return;
    }

    if (apellido.length > 30) {
      alert('El apellido no debe tener mas de 30 caracteres');
      return;
    }

    const nombyapRegex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s']+$/;

    if (!nombyapRegex.test(nombre) ) {
      alert('Ingrese un nombre válido');
      return;
    }
    if (!nombyapRegex.test(apellido)) {
      alert('Ingrese un apellido válido');
      return;
    }

    // Validar email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert('Ingrese un email válido');
      return;
    }

    if (email.length > 50) {
      alert('El email no puede tener mas de 50 caracteres');
      return;
    }

    // Validar teléfono
    const telefonoRegex = /^[0-9]{10}$/;
    if (!telefonoRegex.test(telefono)) {
      alert('El teléfono debe tener 10 dígitos numéricos');
      return;
    }

    // Validar mensaje
    if (mensaje.length > 1500) {
      alert('El mensaje no puede tener más de 1500 caracteres');
      return;
    }
    if (mensaje === "") {
      alert('El campo no debe estar vacio');
      return;
    }

    // Si todas las validaciones pasan, puedes enviar el formulario aquí
    alert('Formulario enviado');
  };


  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridNombre">
            <Form.Control 
            type="text" 
            placeholder="First Name" 
            maxLength={30} 
            minLength={2}
            pattern="^[a-zA-ZÀ-ÿ\u00f1\u00d1\s']+$"
            required 
            title="Ingresa un nombre válido (solo letras y espacios)" 
            value={nombre}
          onChange={(e) => setNombre(e.target.value)}/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridApellido">
            <Form.Control 
            type="text" 
            placeholder="Last Name" 
            maxLength={30} 
            minLength={2}
            pattern="^[a-zA-ZÀ-ÿ\u00f1\u00d1\s']+$"
            required
            title="Ingresa un apellido válido (solo letras y espacios)"
            value={apellido}
          onChange={(e) => setApellido(e.target.value)} />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
          
            <Form.Control 
            type="email" 
            title="Ingresa un correo electrónico válido (Ejemplo@ejemplo.com)" 
            placeholder="Email" 
            maxLength={50}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridTelefono">
           
            <Form.Control 
            type="tel" 
            placeholder="Phone" 
            maxLength={10}
            pattern="[0-9]{10}"  
            required
            title="Ingresa un número de teléfono válido sin 0 ni 15 (ejemplo: XXX XXXXXXX)"
            value={telefono}
          onChange={(e) => setTelefono(e.target.value)} />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridMensaje">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Message"
              maxLength={1500}
              required
              value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Send Message
        </Button>
      </Form>
    </>
  );
};

export default FormPlan;
