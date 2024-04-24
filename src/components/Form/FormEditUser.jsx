/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Button, Form } from 'react-bootstrap';
import './../../css/Form.css';
import { useState, useContext } from 'react';
import { UsersProvider } from '../../context/UsersContext';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';

function FormEditUser({ updateUser, handleClose }) {
  const { createUser, editUser } = useContext(UsersProvider);

  const [users, setUsers] = useState({
    id: updateUser ? updateUser._id : uuidv4(),
    name: updateUser ? updateUser.name : '',
    lastname: updateUser ? updateUser.lastname : '',
    phonenumber: updateUser ? updateUser.phonenumber : '',
    email: updateUser ? updateUser.email : '',
  });

  const handleChange = (e) => {
    setUsers({
      ...users,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (updateUser) {
      editUser(users);
      handleClose();
    } else {
      createUser(users);
    }

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'User Checked',
      showConfirmButton: false,
      timer: 1500,
    });

    setUsers({
      id: uuidv4(),
      name: '',
      lastname: '',
      phonenumber: '',
      email: '',
    });
  };

  return (
    <>
      <div className="text-star bg-dark shadow-box text-white rounded-top-4 py-1">
        <h3 className="subtitle ps-3 mt-2 pt-1 my-0 ">Gym user</h3>
      </div>
      <Form
        onSubmit={handleSubmit}
        className=" gradient-bg shadow-box text-light rounded-bottom-3 pb-3 px-4 rounded-bottom-4"
      >
        <Form.Group className="mb-1 pt-1">
          <Form.Label className=" subtitle fs-5 px-3 pt-1 rounded-5 mb-2 ps-1">
            Name
          </Form.Label>
          <Form.Control
            className="paragraph"
            type="text"
            value={users.name}
            onChange={handleChange}
            name="name"
            placeholder="Enter the user name"
          />
        </Form.Group>

        <Form.Group className="mb-1 pt-1">
          <Form.Label className=" subtitle fs-5 px-3 pt-1 rounded-5 mb-2 ps-1">
            Lastname
          </Form.Label>
          <Form.Control
            className="paragraph"
            type="text"
            value={users.lastname}
            onChange={handleChange}
            name="lastname"
            placeholder="Enter the user lastname"
          />
        </Form.Group>

        <Form.Group className="mb-1 pt-1">
          <Form.Label className=" subtitle fs-5 px-3 pt-1 rounded-5 mb-2 ps-1">
            Phone number
          </Form.Label>
          <Form.Control
            className="paragraph"
            type="text"
            value={users.phonenumber}
            onChange={handleChange}
            name="phonenumber"
            placeholder="Enter the user phone"
          />
        </Form.Group>

        <Form.Group className="mb-1 pt-1">
          <Form.Label className=" subtitle fs-5 px-3 pt-1 rounded-5 mb-2 ps-1">
            Email
          </Form.Label>
          <Form.Control
            className="paragraph"
            type="email"
            value={users.email}
            onChange={handleChange}
            name="email"
            placeholder="Enter the user email"
          />
        </Form.Group>

        {updateUser ? (
          <div className="mt-1">
            <Button
              className="gradient-background border-0 rounded-5 subtitle py-1 mt-3 shadow-on-hover w-100"
              type="submit"
            >
              Edit User{' '}
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
              className="gradient-background border-0 rounded-5 subtitle py-1 mt-3 shadow-on-hover w-100"
              type="submit"
            >
              Add User{' '}
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

FormEditUser.propTypes = {
  updateUser: PropTypes.object,
  handleClose: PropTypes.func,
};
export default FormEditUser;
