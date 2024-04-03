/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Button, Form } from 'react-bootstrap';
import './../../css/Form.css';
import ButtonComponent from '../ButtonComponent';
import { useState, useContext } from 'react';
import { ProductsProvider } from '../../context/ProductsContext';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';

function FormProducts() {
  const { addProduct } = useContext(ProductsProvider);

  const [product, setProduct] = useState({
    id: uuidv4(),
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
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Product Checked',
      showConfirmButton: false,
      timer: 1500,
    });

    setProduct({
      id: uuidv4(),
      name: '',
      price: '',
      description: '',
      image: '',
    });
  };

  return (
    <>
      <div className="text-star bg-dark text-white rounded-top-4 py-1">
        <h3 className="subtitle ps-3 mt-2 pt-1 my-0 ">Form products</h3>
      </div>
      <Form
        onSubmit={handleSubmit}
        className=" gradient-bg text-light rounded-bottom-3 pb-3 px-4 rounded-bottom-4"
      >
        <Form.Group className="mb-1 pt-1">
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
        <Form.Group className="mb-1 pt-1">
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
        <Form.Group className="mb-1 pt-1">
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
        <Form.Group className="mb-3 pt-1">
          <Form.Label className="subtitle fs-5 px-3  rounded-5 mb-2 ps-1">
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
            className="gradient-background border-0 rounded-5  subtitle py-1 mt-1 shadow-on-hover w-100"
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
    </>
  );
}
export default FormProducts;
