import { Card } from 'react-bootstrap';
import ButtonComponent from '../ButtonComponent';
import PropTypes from 'prop-types';

import './../../css/Profile/Profile.css';

const UserPicture = ({ name, lastname, avatar }) => {
  return (
    <>
      <Card className="rounded-4 border-0 mb-5 me-0 d-flex h-50 w-50">
        <Card.Body className="card-bg shadow-box rounded-2 border-0">
          <div className="p-2 border-dark">
            <Card.Img
              variant="top"
              src={`${avatar}`}
              className="rounded-5 mb-2 p-5 border-dark"
            />
          </div>
          <Card.Title className="subtitle mt-1 text-center">{name}</Card.Title>
          <Card.Text className="paragraph text-center">{lastname}</Card.Text>
          <div className="d-flex justify-content-around">
            <ButtonComponent
              text="Go somewhere"
            />
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

UserPicture.propTypes = {
  name: PropTypes.string,
  lastname: PropTypes.string,
  avatar: PropTypes.string,
};

export default UserPicture
