/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Button, Form } from 'react-bootstrap';
import './../../css/Form.css';
import ButtonComponent from '../ButtonComponent';
import { useState, useContext } from 'react';
import { ProductsProvider } from '../../context/ProductsContext';

function FormProducts() {
  const { addProduct } = useContext(ProductsProvider);

  const [product, setProduct] = useState({
    id: '',
    name: '',
    price: '',
    description: '',
    image: '',
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className=" bg-dark text-light rounded-3 pb-3 px-4 rounded-4"
    >
      <Form.Group className="mb-3 pt-3">
        <Form.Label className=" subtitle fs-5 px-3 pt-1 rounded-5 mb-2  ps-1">
          Name
        </Form.Label>
        <Form.Control
          className="paragraph"
          type="text"
          value={product.name}
          onChange={handleChange}
          name="name"
          placeholder="Enter the product name"
        />
      </Form.Group>
      <Form.Group className="mb-3 pt-3">
        <Form.Label className=" subtitle fs-5 px-3 pt-1 rounded-5 mb-2 ps-1">
          Price
        </Form.Label>
        <Form.Control
          className="paragraph"
          type="number"
          value={product.price}
          onChange={handleChange}
          name="price"
          placeholder="Enter the product price"
        />
      </Form.Group>
      <Form.Group className="mb-3 pt-3">
        <Form.Label className=" subtitle fs-5 px-3 pt-1 rounded-5 mb-2  ps-1">
          IMAGE
        </Form.Label>
        <Form.Control
          className="paragraph"
          type="text"
          value={product.image}
          onChange={handleChange}
          name="image"
          placeholder="Enter the product image"
        />
      </Form.Group>
      <Form.Group className="mb-3 pt-3">
        <Form.Label className="subtitle fs-5 px-3 pt-1 rounded-5 mb-2 ps-1">
          Description
        </Form.Label>
        <Form.Control
          className="paragraph"
          type="text"
          as="textarea"
          value={product.description}
          onChange={handleChange}
          name="description"
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
