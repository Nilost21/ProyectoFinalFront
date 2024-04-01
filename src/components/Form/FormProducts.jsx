/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Button, Form } from 'react-bootstrap';
import './../../css/Form.css';
import ButtonComponent from '../ButtonComponent';
import { useState } from 'react';

function FormProducts() {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado');
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="subtitle bg-dark text-light rounded-3 pb-3"
    >
      <Form.Group className="mb-3 pt-3">
        <Form.Label className="gradient-bg px-3 pt-1 rounded-5 mb-2">
          Name
        </Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="Nombre"
          placeholder="Enter the product name"
        />
      </Form.Group>
      <Form.Group className="mb-3 pt-3">
        <Form.Label className="gradient-bg px-3 pt-1 rounded-5 mb-2">
          Price
        </Form.Label>
        <Form.Control
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          name="Precio"
          placeholder="Enter the product price"
        />
      </Form.Group>
      <Form.Group className="mb-3 pt-3">
        <Form.Label className="gradient-bg px-3 pt-1 rounded-5 mb-2">
          Description
        </Form.Label>
        <Form.Control
          type="text"
          as="textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          name="Description"
          placeholder="Enter the product description"
        />
      </Form.Group>
      <div className="mt-1">
        <Button
          className="gradient-background border-0 rounded-5  subtitle py-1 mt-1 shadow-on-hover"
          type="submit"
        >
          Submit{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right-short mt-1 pe-0"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
            />
          </svg>
        </Button>
      </div>
    </Form>
  );
}
export default FormProducts;
