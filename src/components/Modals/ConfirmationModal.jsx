/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ConfirmationModal = ({ show, handleClose, handleConfirm, name }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this {name}?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleConfirm}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

ConfirmationModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func.isRequired,
  name: PropTypes.string
};

export default ConfirmationModal;
