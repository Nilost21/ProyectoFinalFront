import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import NavbarComponent from '../../components/NavbarComponent';
import FooterComponent from '../../components/FooterComponent';
import '../../css/Footer/Footer.css';
import coverAbout from '../../assets/img/About/cover-about.png';
import '../../css/About/About.css';
const About = () => {
  const teamMembers = [
    {
      name: 'Nicolas',
      role: 'Head Coach',
      avatarUrl: 'https://img.freepik.com/fotos-premium/atleta-masculino-musculoso-gimnasio-levanta-barra-ilustracion-generativa-ia_118086-8639.jpg',
      skills: [
        { name: 'Strength Training', level: 95 },
        { name: 'Cardiovascular Training', level: 63 },
        { name: 'Sports Nutrition', level: 85 }
      ],
    },
    {
      name: 'Macarena ',
      role: 'Head Coach',
      avatarUrl: 'https://c4.wallpaperflare.com/wallpaper/41/229/291/model-pose-muscle-mass-muscular-toning-wallpaper-preview.jpg',
      skills: [
        { name: 'Strength Training', level: 65 },
        { name: 'Cardiovascular Training', level: 80 },
        { name: 'Sports Nutrition', level: 100 }
      ],
    },
    {
      name: 'Ariana',
      role: 'Head Coach',
      avatarUrl: 'https://st.depositphotos.com/1062035/4171/i/450/depositphotos_41715819-stock-photo-fitness-with-barbell.jpg',
      skills: [
        { name: 'Strength Training', level: 75 },
        { name: 'Cardiovascular Training', level: 80 },
        { name: 'Sports Nutrition', level: 90 }
      ],
    },
    {
      name: 'Ricardo',
      role: 'Head Coach',
      avatarUrl: 'https://img.freepik.com/fotos-premium/entrenamiento-gimnasio-culturismo-generado-ia_406939-8412.jpg',
      skills: [
        { name: 'Strength Training', level: 100 },
        { name: 'Cardiovascular Training', level: 50 },
        { name: 'Sports Nutrition', level: 75 }
      ],
    },
  ];

  return (
    <>
          <Container fluid>
        <NavbarComponent />
      </Container>
      <header>
        <div
          className="cover-section-about"
          style={{
            backgroundImage: `url(${coverAbout})`,
            position: "relative",
          }}
        >
          <div className="cover-overlay-about"></div>

          <div
            className="cover-content-about"
            style={{ width: "1080px" }}
          >
            <h1 className="mb-2 mb-md-5 mt-2 display-1 title">About Us</h1>
            <h4 className="me-2 ms-2 mt-1 subtitle">
            We are a gym committed to your well-being and health. We offer personalized training programs and nutritional advice to help you achieve your fitness goals.
            </h4>
          </div>
        </div>
      </header>

    
    <Container fluid >
      {teamMembers.map((member, index) => (
        <Row key={index} className="mb-5 subtitle text-white justify-content-center align-items-center mt-5">
          <Col md={5} className="text-center">
            <div className="d-flex justify-content-center align-items-center">
              <Card className="text-center animate_animated animate_fadeIn custom-bg-purple" style={{border: "none"}}>
                <Card.Img variant="top" src={member.avatarUrl} className="w-100" />
              </Card>
            </div>
          </Col>

          <Col md={6}>
            <div>
              <h1 className="text-purple display-2">{member.name}</h1>
              <h5 className="text-white">{member.role}</h5>
              <h4 className="text-white mb-3">Skills:</h4>
              {member.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <p className="text-white h5">{skill.name}</p>
                  <div className="progress">
                    <div className="progress-bar bg-success" role="progressbar" style={{ width: `${skill.level}%` }} aria-valuenow={skill.level} aria-valuemin="0" aria-valuemax="100">{skill.level}% </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="d-flex justify-content-between mt-3">
              <a href="link_de_instagram" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} /></a>
              <a href="link_de_facebook" target="_blank" rel="noopener noreferrer"><FaFacebook size={30} /></a>
              <a href="link_de_linkedin" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>
              <a href="link_de_github" target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a>
            </div>
          </Col>
        </Row>
      ))}
    </Container>
    <Container
    fluid
    className="d-flex flex-row justify-content-around mt-5  border-footer bg-footer"
  >
    <FooterComponent />
  </Container>
    
    </>

  );
};

export default About;
