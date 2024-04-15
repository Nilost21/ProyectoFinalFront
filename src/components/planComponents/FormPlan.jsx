import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";
/* import EmailPlanSender from "./EmailPlanSender"; */
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import '../../css/FormPlan.css';

const FormPlan = ({ planType }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormPlanSubmit = (e) => {
    e.preventDefault();
    console.log(`las validaciones estan andando`);//borrar

    if (!name.trim() && !lastName.trim() && !email.trim() && !phone.trim() && !message.trim()) {
      Swal.fire('Error', 'All fields are required', 'error');
      return;
    }
  

    if (name.length < 2) {
      Swal.fire('Error', 'The name must have at least 2 characters', 'error');
      return;
    }
    if (lastName.length < 2) {
      Swal.fire('Error', 'The last name must have at least 2 characters', 'error');
      return;
    }

    if (name.length > 30) {
      Swal.fire('Error', 'The name cannot exceed 30 characters', 'error');
      return;
    }
    if (lastName.length > 30) {
      Swal.fire('Error', 'The last name cannot exceed 30 characters', 'error');
      return;
    }

    const nameRegex = /^(?=.*[a-zA-Z])[\w\u00f1\u00d1\u00e1\u00e9\u00ed\u00f3\u00fa\u00c1\u00c9\u00cd\u00d3\u00da]+(?:[\s]+[\w\u00f1\u00d1\u00e1\u00e9\u00ed\u00f3\u00fa\u00c1\u00c9\u00cd\u00d3\u00da]+)*$/;

    if (!nameRegex.test(name)) {
      Swal.fire('Error', 'Enter a valid name', 'error');
      return;
    }

     if (!nameRegex.test(lastName)) { 
      Swal.fire('Error', 'Enter a valid last name', 'error');
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      Swal.fire('Error', 'Enter a valid email', 'error');
      return;
    }

    if (email.length > 50) {
      Swal.fire('Error', 'The email cannot exceed 50 characters', 'error');
      return;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      Swal.fire('Error', 'The phone number must have 10 numeric digits', 'error');
      return;
    }

    if (message.length > 1500) {
      Swal.fire('Error', 'The message cannot exceed 1500 characters', 'error');
      return;
    }
    if (message === "") {
      
      Swal.fire('Error', 'The message field cannot be empty', 'error');
      return;
    }
    
    
    Swal.fire('Sent', 'Your inquiry has been successfully sent', 'success');

    /* emailjs.send(
      'service_fsmi4tm',
      'template_0q7zmpm',
      {
        name: name,
        lastName: lastName,
        email: email,
        phone: phone,
        message: message,
        planType: planType
      },
      'hogPQ3aXzDYTe-4XH'
    ).then(() => {
      // Correo enviado al destinatario
      console.log('Correo enviado al destinatario');
    }).catch((error) => {
      console.error('Error al enviar correo al destinatario:', error);
    });

    emailjs.send(
      'service_fsmi4tm',
      'template_a7wqcem',
      {
        name: name,
        email: email
      },
      'hogPQ3aXzDYTe-4XH'
    ).then(() => {
      // Correo enviado al remitente
      console.log('Correo enviado al remitente');
    }).catch((error) => {
      console.error('Error al enviar correo al remitente:', error);
    });*/
    setFormSubmitted(true); 
  };

  return (
    <>
      <Form onSubmit={handleFormPlanSubmit} className="small-font text-light">
        <Row >
          <Form.Group as={Col} controlId="formPlanName" xs={12} md={6} className="mb-3">
            <Form.Label>
              First name <span className="span-input-plan">*</span>{" "}
            </Form.Label>
            <Form.Control
              className="custom-input-formplan"
              type="text"
              placeholder="Your first name"
              maxLength={30}
              minLength={2}
              pattern="^(?=.*[a-zA-Z\u00f1\u00d1])[\w\u00f1\u00d1\u00e1\u00e9\u00ed\u00f3\u00fa\u00c1\u00c9\u00cd\u00d3\u00da\s']+$"
              required
              title="Enter a valid name (only letters and spaces)"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formPlanLastName" xs={12} md={6} className="mb-3">
            <Form.Label>
              Last name <span className="span-input-plan">*</span>{" "}
            </Form.Label>
            <Form.Control
              className="custom-input-formplan"
              type="text"
              placeholder="Your last name"
              maxLength={30}
              minLength={2}
              /* pattern="^[a-zA-ZÀ-ÿ\u00f1\u00d1\s']+$" */
              pattern="^(?=.*[a-zA-Z\u00f1\u00d1])[\w\u00f1\u00d1\u00e1\u00e9\u00ed\u00f3\u00fa\u00c1\u00c9\u00cd\u00d3\u00da\s']+$"
              required
              title="Enter a valid last name (only letters and spaces)"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Row >
          <Form.Group as={Col} controlId="formPlanEmail" xs={12} md={6} className="mb-3">
            <Form.Label>
              Email <span className="span-input-plan">*</span>{" "}
            </Form.Label>
            <Form.Control
              className="custom-input-formplan small-font"
              type="email"
              title="Enter a valid email address (Example@example.com)"
              placeholder="Your email"
              maxLength={50}
              /* pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" */
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formPlanPhone" xs={12} md={6} className="mb-3">
            <Form.Label>
              Phone number <span className="span-input-plan">*</span>{" "}
            </Form.Label>
            <Form.Control
              className="custom-input-formplan"
              type="tel"
              placeholder="Your phone number"
              maxLength={10}
              pattern="[0-9]{10}"
              required
              title="Enter a valid phone number without 0 or 15 (example: XXX XXXXXXX)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formPlanMessage" xs={12} className="mb-3">
            <Form.Label>
              Message <span className="span-input-plan">*</span>{" "}
            </Form.Label>
            <Form.Control
              className="custom-input-formplan"
              as="textarea"
              rows={3}
              placeholder="Your message here"
              maxLength={1500}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Group>
        </Row>

        {/* <Button variant="primary" type="submit">
          Send Message
        </Button> */}
        <input type="hidden" name="planType" value={planType} />

        

        <Row className="justify-content-end">
          <Col xs={12} md={6} className="text-end">
          <Button
          className={`btn-form-plan ${formSubmitted ? 'btn-form-plan-sent' : ''} small-font text-light`}
          variant="btn-form-plan"
          type="submit"
          disabled={formSubmitted}
        >
          {formSubmitted ? "Sending..." : "Send Message"}
        </Button>

          </Col>
        </Row>
      </Form>
    </>
  );
};

export default FormPlan;
