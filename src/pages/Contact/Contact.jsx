import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import NavbarComponent from '../../components/NavbarComponent';
import FooterComponent from '../../components/FooterComponent';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = ['name', 'number', 'email', 'message'];
    const newErrors = {};
    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required';
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      alert('Please fill out all required fields');
      return;
    }

    alert('Message sent successfully!');
  };

  return (
    <>
      <Container fluid>
        <NavbarComponent />
      </Container>
      <Container className="mt-5">
        <div className="bg-dark rounded p-4">
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
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formNumber">
                  <Form.Label>Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your number"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    isInvalid={!!errors.number}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.number}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
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
                    isInvalid={!!errors.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="text-center mb-5">
                  <Button
                    className="gradient-background border-0 rounded-5 subtitle py-1 shadow-on-hover p-5 w-50"
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </Col>
            <Col md={6}>
              <iframe
                className="mt-5"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3086.067125684634!2d-74.00661678422334!3d40.712752211503445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2590da5d6b151%3A0x87b5538cc156204!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1635861049117!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Col>
          </Row>
        </div>
      </Container>
      <Container
        fluid
        className="d-flex flex-row justify-content-around mt-5 border-footer bg-footer"
      >
        <FooterComponent />
      </Container>
    </>
  );
};
export default Contact;
