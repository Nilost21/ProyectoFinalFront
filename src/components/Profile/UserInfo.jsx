import { Card } from 'react-bootstrap';
import ButtonComponent from '../ButtonComponent';

const UserInfo = () => {
  return (
    <>
      <Card className="text-light rounded-4 border-0 mb-5 card-info h-75 w-75">
        <Card.Body className="card-bg shadow-box rounded-2 border-0">
          <Card.Title className="subtitle mt-1">{ }</Card.Title>
          <Card.Text className="paragraph ">{ }</Card.Text>
          <div className="d-flex justify-content-around">
            <ButtonComponent
              text="Go somewhere"
            />
            <Card.Text className="subtitle fs-2  me-1">Algo</Card.Text>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default UserInfo
