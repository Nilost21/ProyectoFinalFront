import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;
    let errorMessage = '';

    switch (name) {
      case 'name':
        newValue = value.replace(/[^a-zA-Z\s]/g, '');
        newValue = newValue.substring(0, 70);
        break;
      case 'number':
        newValue = value.replace(/\D/g, '');
        newValue = newValue.substring(0, 15);
        break;
      case 'email':
        break;
      case 'message':
        newValue = value.substring(0, 500);
        break;
      default:
        break;
    }

    setFormData({ ...formData, [name]: newValue });

    if (errorMessage) {
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = ['name', 'number', 'email', 'message'];
    const missingFields = requiredFields.filter(field => !formData[field]);

    if (missingFields.length > 0) {
      toast.error(`Please fill out ${missingFields.join(', ')} fields`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    toast.success('Message sent successfully!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <Container className="mt-2">
      <ToastContainer />
      <div className='bg-dark rounded p-4'>
        <Row className="justify-content-start">
          <Col md={6}>
            <h1 className="title text-center text-white">Contact Us</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formNumber">
                <Form.Label>Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Enter your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Form.Group>

              <div className="text-center mb-5">
                <Button className="gradient-background border-0 rounded-5 subtitle py-1 shadow-on-hover p-5 w-50"  type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
          <Col md={6}>
            <div className="mt-5">
            <iframe
                title="Rolling Code Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6869.302065123971!2d-65.21289969989847!3d-26.808762841019536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9422312559b5467d%3A0x4c808b9e79602863!2sRolling%20Code%20-%20Desarrollo%20Web%20y%20M%C3%B3vil!5e0!3m2!1sen!2sar!4v1649193152814!5m2!1sen!2sar"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Contact;
