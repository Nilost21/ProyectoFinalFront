//import { Button, Card, Container, Col, Row, Image } from 'react-bootstrap';
import './../../css/NutritionComponent.css';

const NutritionFood = () => {
  return (
    <>
      <div className="ms-lg-5 ms-md-3 mx-3">
        <img src="https://christworldchannel.family.blog/wp-content/uploads/2020/11/monika-grabkowska-p1aohbit-ey-unsplash.jpg?w=1568"
          className="img-fluid d-block food-image ms-md-5 me-0" alt="Responsive image"></img>
        <div className="text-white ms-md-5 ps-md-2 mt-md-3 mt-3 px-3 pe-md-0">
          <h2 className="text-white mt-md-4 mb-md-3 fs-3 paragraph">Healthy food</h2>
          <p className="text-white-50 custom-text small-font">Proper nutrition provides our body with the complex of vitamins it needs and makes us feel better. In this article, we will show you what to look for.</p>
        </div>
      </div>
    </>
  )
}

export default NutritionFood;
