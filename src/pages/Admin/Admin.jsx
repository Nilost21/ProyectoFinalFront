import './../../css/Home.css';
import { useContext, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import NavbarComponent from '../../components/NavbarComponent';
import TableUsers from '../../components/Table/TableUsers';
import TableProducts from '../../components/Table/TableProducts';
import FormProducts from '../../components/Form/FormProducts';
import FormEditUser from '../../components/Form/FormEditUser';
import { UsersProvider } from '../../context/UsersContext';

function Admin() {
  const { getUsers, editUser, deleteUser } = useContext(UsersProvider);

  const [showUserEditModal, setshowUserEditModal] = useState(false);

  const [userIdToEdit, setUserIdToEdit] = useState(null);

  const handleOpenEditUserModal = (userId) => {
    setUserIdToEdit(userId);
    setshowUserEditModal(true);
  };

  const handleCloseEditUserModal = () => {
    setUserIdToEdit(null);
    setshowUserEditModal(false);
  };

  const updateUserList = async () => {
    await getUsers();
  };

  return (
    <>
      <Container fluid>
        <Row className="p-0 pe-5 pb-5 pb-md-0">
          <NavbarComponent />
        </Row>
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
                <TableUsers
                  onEdit={handleOpenEditUserModal}
                  onDelete={deleteUser}
                />
              </Row>
              <Row className="mt-5">
                <TableProducts />
              </Row>
            </Col>
          </Row>
        </Container>
        <FormEditUser
          show={showUserEditModal}
          handleClose={handleCloseEditUserModal}
          userId={userIdToEdit}
          editUser={editUser}
          updateUserList={updateUserList}
        />
        {/* <FormEditProduct /> */}
      </Container>
    </>
  );
}

export default Admin;
