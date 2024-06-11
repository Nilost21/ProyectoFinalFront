import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import './../../css/NutritionComponent.css';
import InfoCardHome from '../Cards/InfoCardHome';

const NutritionBtn = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const subTitle = `Dear Users. We want to inform you that our website will undergo scheduled maintenance to enhance user experience and perform critical infrastructure updates.
  We appreciate your understanding and patience as we work to improve our service. Our goal is to provide you with a more robust and efficient platform, and these updates are a crucial step toward that goal.

If you have any questions or need assistance, please do not hesitate to contact our support team at [support email] or [support phone number].

Thank you for your continued support.

Sincerely,`;

  return (
    <>
      <button
        type="button"
        className="rounded-5 subtitle py-2 my-3 ps-5 pe-3 shadow-on-hover btn btn-primary mybtn"
        onClick={handleShow}
      >
        Check all blog
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-right ms-4 mt-1"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
          ></path>
        </svg>
      </button>

      <Modal
        contentClassName="bg-transparent border-0 p-0"
        show={show}
        onHide={handleClose}
      >
        <InfoCardHome
          handleClose={handleClose}
          textTitle={'Blog in maintenance...'}
          textSubtitle={subTitle}
        />
      </Modal>
    </>
  );
};

export default NutritionBtn;
