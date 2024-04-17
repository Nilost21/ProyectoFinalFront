import { Card, Button } from 'react-bootstrap';
import '../../css/Card.css';
import '../../css/Home.css';

function CardTrainer() {
  return (
    <>
      <Card className="bg-transparent mb-5 rounded-3 border-card pt-5 pb-4 px-4 shadow-box card-zoom">
        <Card.Body className="pt-1">
          <div className="p-0">
            <Button className="gradient-background rounded-5 px-2 py-1 mb-4 border-0 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="39"
                height="41"
                fill="currentColor"
                className="bi bi-person-heart mb-1 p-2"
                viewBox="0 0 16 16"
              >
                <path d="M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4m13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276Z" />
              </svg>
            </Button>
          </div>
          <Card.Title className="text-white paragraph mt-1 mb-3  fs-2">
            Coach Trainer
          </Card.Title>
          <Card.Text className="text-color-small small-font pe-3">
            Our personal trainers are available for you, you can send an inquiry
            at any time or call your trainer. Use the price list and choose the
            right plan for you
          </Card.Text>
          <Button className="bg-transparent border-0 subtitle px-0">
            {' '}
            <span className="gradient-hover">Read More</span>{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="currentColor"
              className="bi bi-arrow-right-circle-fill ms-1"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
            </svg>
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
export default CardTrainer;
