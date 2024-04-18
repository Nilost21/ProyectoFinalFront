import { useContext, useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

import { UsersProvider } from '../../context/UsersContext';
import './../../css/Form.css';

const FormEditUser = ({ show, handleClose, userId, updateUserList }) => {
  const { getUser, editUser } = useContext(UsersProvider);

  const [formData, setFormData] = useState({
    username: '',
    email: ''
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (userId) {
          const user = await getUser(userId);
          console.log("#️⃣ User Id", userId);
          console.log("💁 User ", user);
          setFormData({
            username: user.username,
            email: user.email
          });
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    };
    fetchUser();
  }, [getUser, userId]);

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
      await editUser(userId, formData);
      updateUserList();
      handleClose();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Success!',
        text: 'User edited successfully.',
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
            <Form.Control className="paragraph bg-dark text-white" type="text" name="userId" value={userId || ''} readOnly />
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

FormEditUser.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  userId: PropTypes.string,
  editUser: PropTypes.func,
  updateUserList: PropTypes.func
};

export default FormEditUser;
