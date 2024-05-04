/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import { Table, Button, Modal, Pagination } from 'react-bootstrap';
import { UsersProvider } from '../../context/UsersContext';
import './../../css/Tables.css';

function TableUsers() {
  const { users, deleteUser } = useContext(UsersProvider);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(7);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const isEmpty = () => users.length === 0;

  return (
    <>
      <div className="text-star bg-dark text-white rounded-top-4 py-1">
        <h3 className="subtitle ps-3 mt-1 pt-1 my-0 ">Gym Users</h3>
      </div>
      <Table className="mb-0">
        <thead>
          <tr className="subtitle">
            <th>Index</th>
            <th>Id</th>
            <th>Name</th>
            <th>Lastname</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {isEmpty() ? (
            <tr>
              <td colSpan="4">
                <h3 className="paragraph">No users found</h3>
              </td>
              <td>
                <></>
              </td>
            </tr>
          ) : (
            currentItems.map((user, index) => {
              const rowIndex = index + indexOfFirstItem;
              const { _id, name, lastname, phonenumber, email, isAdmin } = user;
              const checkAdmin = isAdmin ? 'Admin' : 'User';
              const adminClass = isAdmin ? 'text-danger' : 'text-secondary';

              return (
                <tr key={_id} className="paragraph fw-bold ">
                  <td className="bg-dark text-light border-0 pt-3">
                    {rowIndex + 1}
                  </td>
                  <td className="bg-dark text-light border-0 pt-3">{_id}</td>
                  <td className="bg-dark text-light border-0 pt-3">{name}</td>
                  <td className="bg-dark text-light border-0 pt-3">
                    {lastname}
                  </td>
                  <td className="bg-dark text-light border-0 pt-3">
                    {phonenumber}
                  </td>
                  <td className="bg-dark text-light border-0 pt-3">{email}</td>
                  <td className={`${adminClass} bg-dark border-0 pt-3`}>
                    {checkAdmin}
                  </td>
                  <td className=" bg-dark text-light border-0">
                    <div className="d-flex flex-row justify-content-around">
                      <Button
                        onClick={() => deleteUser(_id)}
                        className="bg-danger border-0 text-dark"
                        disabled={isAdmin}
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
        {Array.from({ length: Math.ceil(users.length / itemsPerPage) }).map(
          (_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          )
        )}
      </Pagination>
    </>
  );
}
export default TableUsers;
