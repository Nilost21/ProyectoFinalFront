/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import { UsersProvider } from '../../context/UsersContext';
import { Table, Button } from 'react-bootstrap';

function TableUsers() {
  const { users } = useContext(UsersProvider);

  const isEmpty = () => users.length === 0;

  return (
    <Table className="mb-0">
      <thead>
        <tr className="subtitle">
          <th>Index</th>
          <th>Name</th>
          <th>Email</th>
          <th>Is Admin</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {isEmpty() ? (
          <tr>
            <td colSpan="4">
              <h3 className="paragraph">No se encontraron usuarios</h3>
            </td>
          </tr>
        ) : (
          users.map((user, index) => {
            const { name, email, id, password, isAdmin } = user;
            const checkAdmin = isAdmin ? 'Admin' : 'Normal';
            const adminClass = isAdmin ? 'text-danger' : 'text-secondary';

            return (
              <tr key={id} className="paragraph fw-bold ">
                <td className="bg-dark text-light border-0">{index}</td>
                <td className="bg-dark text-light border-0">{name}</td>
                <td className="bg-dark text-light border-0">{email}</td>
                <td className={`${adminClass} bg-dark border-0`}>
                  {checkAdmin}
                </td>
                <td className="d-flex flex-row justify-content-around bg-dark text-light border-0">
                  <Button className="bg-secondary border-0 text-dark ">
                    Edit
                  </Button>
                  <Button className="bg-danger border-0 text-dark ">
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })
        )}
      </tbody>
    </Table>
  );
}
export default TableUsers;
