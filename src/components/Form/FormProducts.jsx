import { useState, useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';

import ButtonComponent from '../ButtonComponent';

import { ProductsProvider } from '../../context/ProductsContext';

import './../../css/Form.css';

function FormProducts({ editProducts, handleClose }) {
  const { addProduct, updateProduct } = useContext(ProductsProvider);

  const [product, setProduct] = useState({
    id: editProducts ? editProducts.id : uuidv4(),
    name: editProducts ? editProducts.name : '',
    price: editProducts ? editProducts.price : '',
    description: editProducts ? editProducts.description : '',
    image: editProducts ? editProducts.image : '',
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !product.name ||
      !product.price ||
      !product.description ||
      !product.image
    ) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Please fill in all fields',
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    if (editProducts) {
      updateProduct(product);
      handleClose();
    } else {
      addProduct(product);
    }

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
      <div className="text-star bg-dark shadow-box text-white rounded-top-4 py-1">
        <h3 className="subtitle ps-3 mt-2 pt-1 my-0">Form products</h3>
      </div>
      <Form
        onSubmit={handleSubmit}
        className="gradient-bg shadow-box text-light pb-3 px-4 rounded-bottom-4"
      >
        <Form.Group className="mb-1 pt-1">
          <Form.Label className="subtitle fs-5 px-3 pt-1 rounded-5 mb-2 ps-1">
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
          <Form.Label className="subtitle fs-5 px-3 pt-1 rounded-5 mb-2 ps-1">
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
          <Form.Label className="subtitle fs-5 px-3 pt-1 rounded-5 mb-2 ps-1">
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
          <Form.Label className="subtitle fs-5 px-3 rounded-5 mb-2 ps-1">
            Description
          </Form.Label>
          <Form.Control
            className="paragraph no-resizable"
            type="text"
            as="textarea"
            value={product.description}
            onChange={handleChange}
            name="description"
            placeholder="Enter the product description"
          />
        </Form.Group>

        {editProducts ? (
          <div className="mt-1">
            <Button
              className="gradient-background border-0 rounded-5 subtitle py-1 mt-1 shadow-on-hover w-100"
              type="submit"
            >
              Edit Product{' '}
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
        ) : (
          <div className="mt-1">
            <Button
              className="gradient-background border-0 rounded-5 subtitle py-1 mt-1 shadow-on-hover w-100"
              type="submit"
            >
              Add Product{' '}
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
        )}
      </Form>
    </>
  );
}

FormProducts.propTypes = {
  editProducts: PropTypes.object,
  handleClose: PropTypes.func,
};
export default FormProducts;
