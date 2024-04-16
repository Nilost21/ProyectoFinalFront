import { useContext, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import TableUsers from '../../components/Table/TableUsers';
import TableProducts from '../../components/Table/TableProducts';
import FormProducts from '../../components/Form/FormProducts';
import FormEditUser from '../../components/Form/FormEditUser';
import { UsersProvider } from '../../context/UsersContext';


function Admin() {
  const { getUsers, editUser, deleteUser } = useContext(UsersProvider);

  const [showEditModal, setShowEditModal] = useState(false);
  const [userIdToEdit, setUserIdToEdit] = useState(null);

  const handleOpenEditModal = (userId) => {
    setUserIdToEdit(userId);
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setUserIdToEdit(null);
    setShowEditModal(false);
  };

  const updateUserList = async () => {
    await getUsers(); // Actualiza la lista de usuarios después de editar
  };

  return (
    <>
      <h1 className="title ms-5 ps-3 mt-3 text-center">Admin management</h1>
      <Container>
        <Row className="d-flex flex-row justify-content-between px-xs-3">
          <Col xl={3} xs={12}>
            <Row>
              <FormProducts />
            </Row>
          </Col>
          <Col xl={8}>
            <Row>
              <TableUsers onEdit={handleOpenEditModal} onDelete={deleteUser} />
            </Row>
            <Row className="mt-5">
              <TableProducts />
            </Row>
          </Col>
        </Row>
      </Container>
      <FormEditUser show={showEditModal} handleClose={handleCloseEditModal} userId={userIdToEdit} editUser={editUser} updateUserList={updateUserList} />
    </>
  );
}
export default Admin;
