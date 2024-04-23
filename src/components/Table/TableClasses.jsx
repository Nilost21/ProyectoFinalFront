/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';
import { ClassProvider } from '../../context/ClassContex';
import FormNewClass from '../Form/FormNewClass';

function TableClasses() {
  const { classes, deleteClass } = useContext(ClassProvider);
  const [show, setShow] = useState(false);
  const [editClasses, setEditClasses] = useState(null);

  const handleClose = () => setShow(false);

  const handleEdit = (c) => {
    setEditClasses(c);
    setShow(true);
  };

  const isEmpty = () => classes.length === 0;

  return (
    <>
      <div className="text-star bg-dark text-white rounded-top-4 py-1">
        <h3 className="subtitle ps-3 mt-1 pt-1 my-0 ">Gym Classes</h3>
      </div>
      <Table className="mb-0">
        <thead>
          <tr className="subtitle">
            <th>Index</th>
            <th className="pe-5">Name</th>
            <th>Description</th>
            <th>Teacher</th>
            <th>Date and time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {isEmpty() ? (
            <tr>
              <td colSpan="4">
                <h3 className="paragraph">No classes found</h3>
              </td>
            </tr>
          ) : (
            classes.map((c, index) => {
              const { _id, name, description, teacher, dateAndTime } = c;

              return (
                <tr key={_id} className="paragraph fw-bold ">
                  <td className="bg-dark text-light border-0 pt-3">{index}</td>
                  <td className="bg-dark text-light border-0 pt-3">{name}</td>
                  <td className="bg-dark text-light border-0 pt-3">{description}</td>
                  <td className="bg-dark text-light border-0 pt-3">{teacher}</td>
                  <td className="bg-dark text-light border-0 pt-3">{dateAndTime}</td>
                  <td className=" bg-dark text-light border-0">
                    <div className="d-flex flex-row justify-content-around">
                      <Button
                        onClick={() => handleEdit(c)}
                        className="bg-secondary border-0 text-dark me-3"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-pen-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001" />
                        </svg>
                      </Button>
                      <Button
                        onClick={() => deleteClass(_id)}
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

      <div className="rounded-5 p-0">
        <Modal
          show={show}
          onHide={handleClose}
          className="rounded-5 p-0"
          contentClassName="bg-transparent p-0 border-0"
        >
          <Modal.Body className="bg-transparent rounded-5 border-0 p-0 ">
            <FormNewClass
              editClasses={editClasses}
              handleClose={handleClose}
            />
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}
export default TableClasses;
