import { Card, Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import '../../css/Card.css';
import '../../css/Home.css';
import InfoCardHome from './InfoCardHome';

function CardDiet() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const subTitle = `In addition to our exceptional personal training services, you'll gain exclusive access to a premium account, elevating your fitness journey to new heights. With this premium account, you'll unlock a treasure trove of invaluable resources aimed at enriching every aspect of your health and well-being. Delve into a curated collection of articles meticulously crafted by nutritionists, fitness experts, and culinary maestros, offering a wealth of advice, insights, and tips to enhance your culinary prowess.

  Explore a diverse range of topics spanning from wholesome recipes and meal prep strategies to nutritional insights tailored to complement your fitness goals. Discover innovative cooking techniques, ingredient substitutions, and dietary recommendations designed to fuel your body optimally, ensuring you achieve peak performance both in and out of the gym.
  
  Moreover, our premium account grants you privileged access to live cooking demonstrations, virtual workshops, and interactive Q&A sessions hosted by renowned chefs and nutritionists. `;

  return (
    <>
      <Card className="bg-experience  mb-5 rounded-3 border-0 pt-5 pb-4 px-4 shadow-box card-zoom ">
        <Card.Body className="pt-1">
          <div className="p-0">
            <Button className="gradient-background rounded-5 px-2 py-1 mb-4 border-0 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="39"
                height="41"
                fill="currentColor"
                className="bi bi-basket3-fill mb-1 p-2"
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
          <Button
            onClick={handleShow}
            className="bg-transparent border-0 subtitle px-0 "
          >
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

      <Modal
        contentClassName="bg-transparent border-0 p-0"
        show={show}
        onHide={handleClose}
      >
        <InfoCardHome
          handleClose={handleClose}
          textTitle={'Nutritional Diet'}
          textSubtitle={subTitle}
        />
      </Modal>
    </>
  );
}
export default CardDiet;
