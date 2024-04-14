import { Card, Button } from 'react-bootstrap';
import '../../css/Card.css';
import '../../css/Home.css';

function CardDiet() {
  return (
    <>
      <Card className="bg-experience  mb-5 rounded-3 border-0 pt-5 pb-4 px-4 shadow-box card-zoom slide-up ">
        <Card.Body className="pt-4">
          <div className="p-0">
            <Button className="gradient-background rounded-5 px-2 py-1 mb-4 border-0 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-basket3-fill mb-1"
                viewBox="0 0 16 16"
              >
                <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z" />
              </svg>
            </Button>
          </div>
          <Card.Title className="text-white paragraph mt-1 mb-3  fs-2">
            Nutritional Diet
          </Card.Title>
          <Card.Text className="text-color-small small-font pe-3">
            You will also get access to a premium account, thanks to which you
            will have access to articles with advice and tips for cooking
          </Card.Text>
          <Button className="bg-transparent border-0 subtitle px-0 ">
            {' '}
            <span className="gradient-hover ">Read More</span>{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="currentColor"
              className="bi bi-arrow-right-circle-fill ms-1 0"
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
export default CardDiet;
