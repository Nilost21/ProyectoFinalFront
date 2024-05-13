/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import { Table, Button, Modal, Pagination } from 'react-bootstrap';
import { EnrollmentProvider } from '../../context/EnrollmentContext';
import formatDateTime from '../../utils/dateTimeUtils';
import ConfirmationModal from '../Modals/ConfirmationModal';

function AdminDashboard() {
  const { classesForToday, deleteEnrollment } = useContext(EnrollmentProvider);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(7);
  const [showModal, setShowModal] = useState(false);
  const [itemIdToDelete, setItemIdToDelete] = useState(null);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = classesForToday.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const isEmpty = () => classesForToday.length === 0;

  const handleShowModal = (enrollmentId) => {
    setItemIdToDelete(enrollmentId);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleConfirmDelete = () => {
    deleteEnrollment(itemIdToDelete);
    handleCloseModal();
  };

  return (
    <>
      <div className="text-star bg-dark text-white rounded-top-4 py-1">
        <h3 className="subtitle ps-3 mt-1 pt-1 my-0 ">Gym Classes</h3>
      </div>
      <Table className="mb-0">
        <thead>
          <tr className="subtitle">
            <th>Index</th>
            <th>Class Date</th>
            <th>Class ID</th>
            <th>Class Name</th>
            <th>Teacher</th>
            <th>User ID</th>
            <th>UserName</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {isEmpty() ? (
            <tr>
            </tr>
          ) : (
            currentItems.map((c, index) => {
              const rowIndex = index + indexOfFirstItem;
              const { _id, dateAndTime, gymClass, className, teacher, user, userName } = c;

              return (
                <tr key={_id} className="paragraph fw-bold ">
                  <td className="bg-dark text-light border-0 pt-3">{rowIndex + 1}</td>
                  <td className="bg-dark text-light border-0 pt-3">{formatDateTime(dateAndTime)}</td>
                  <td className="bg-dark text-light border-0 pt-3">{gymClass}</td>
                  <td className="bg-dark text-light border-0 pt-3">{className}</td>
                  <td className="bg-dark text-light border-0 pt-3">{teacher}</td>
                  <td className="bg-dark text-light border-0 pt-3">{user}</td>
                  <td className="bg-dark text-light border-0 pt-3">{userName}</td>
                  <td className=" bg-dark text-light border-0">
                    <div className="d-flex flex-row justify-content-around">
                      <Button
                        onClick={() => handleShowModal(_id)}
                        className="bg-danger border-0 text-dark"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-trash3-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                        </svg>
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </Table>

      {/* Pagination */}
      <Pagination className="justify-content-center mt-4 paragraph">
        {Array.from({ length: Math.ceil(classesForToday.length / itemsPerPage) }).map((_, index) => (
          <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
      {/* Modal de confirmación */}
      <ConfirmationModal
        show={showModal}
        handleClose={handleCloseModal}
        handleConfirm={handleConfirmDelete}
        name={"enrollment"}
      />
    </>
  );
}

export default AdminDashboard;


