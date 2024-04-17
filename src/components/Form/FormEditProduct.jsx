import { useContext, useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

import { ProductsProvider } from '../../context/ProductsContext';
import './../../css/Form.css';

function FormEditProduct({ show, handleClose, productId, updateProductList }) {
  const { getProduct, editProduct } = useContext(ProductsProvider);

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image: ''
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (productId) {
          const product = await getProduct(productId);
          console.log("#️⃣ Product Id", productId);
          console.log("💁 Product ", product);
          setFormData({
            name: product.name,
            price: product.price,
            description: product.description,
            image: product.image
          });
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    };
    fetchProduct();
  }, [getProduct, productId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Actualiza el campo correspondiente solo si el valor es diferente al valor actual
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value !== prevFormData[name] ? value : prevFormData[name]
    }));
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      await editProduct(productId, formData);
      updateProductList();
      handleClose();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Success!',
        text: 'Product edited successfully.',
        timer: 2000,
        showConfirmButton: false
      });
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} contentClassName="bg-transparent border-0 p-0" centered>
      <Modal.Header className="text-star bg-dark shadow-box text-white rounded-top-4 py-1 border-0" closeButton>
        <Modal.Title className="subtitle ps-3 mt-2 pt-1 my-0">Edit user</Modal.Title>
      </Modal.Header>
      <Modal.Body className="gradient-bg shadow-box text-light pb-3 px-4  rounded-bottom-4">
        <Form>
          <Form.Group controlId="formBasicUserId">
            <Form.Label className="subtitle fs-5 px-3 pt-1 rounded-5 mb-2 ps-1">User ID</Form.Label>
            <Form.Control className="paragraph bg-dark text-white" type="text" name="userId" value={productId || ''} readOnly />
          </Form.Group>

          <Form.Group controlId="formBasicUsername">
            <Form.Label className="subtitle fs-5 px-3 pt-1 rounded-5 mb-2 ps-1">Username</Form.Label>
            <Form.Control className="paragraph" type="text" name="username" value={formData.username} onChange={handleInputChange} placeholder="Enter an username" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label className="subtitle fs-5 px-3 pt-1 rounded-5 mb-2 ps-1">Email</Form.Label>
            <Form.Control className="paragraph" type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter an email" />
          </Form.Group>

          <Button className="gradient-background border-0 rounded-5 subtitle py-1 mt-4 shadow-on-hover w-25" onClick={handleClose}>
            Close
          </Button>
          <Button className="gradient-background border-0 rounded-5 subtitle py-1 mt-4 shadow-on-hover w-25" onClick={handleEdit}>
            Edit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

FormEditProduct.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  productId: PropTypes.string,
  editProducts: PropTypes.object,
  updateProductList: PropTypes.func
};
export default FormEditProduct;
