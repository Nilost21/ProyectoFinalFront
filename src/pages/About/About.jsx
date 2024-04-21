import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import NavbarComponent from '../../components/NavbarComponent';
const About = () => {
  const teamMembers = [
    {
      name: 'Nicolas',
      role: 'Entrenador principal',
      avatarUrl: 'https://img.freepik.com/fotos-premium/atleta-masculino-musculoso-gimnasio-levanta-barra-ilustracion-generativa-ia_118086-8639.jpg',
      skills: [
        { name: 'Entrenamiento de fuerza', level: 95 },
        { name: 'Entrenamiento cardiovascular', level: 63 },
        { name: 'Nutrición deportiva', level: 85 }
      ],
    },
    {
      name: 'Macarena ',
      role: 'Entrenadora principal',
      avatarUrl: 'https://c4.wallpaperflare.com/wallpaper/41/229/291/model-pose-muscle-mass-muscular-toning-wallpaper-preview.jpg',
      skills: [
        { name: 'Entrenamiento de fuerza', level: 65 },
        { name: 'Entrenamiento cardiovascular', level: 80 },
        { name: 'Nutrición deportiva', level: 100 }
      ],
    },
    {
      name: 'Ariana',
      role: 'Entrenadora principal',
      avatarUrl: 'https://st.depositphotos.com/1062035/4171/i/450/depositphotos_41715819-stock-photo-fitness-with-barbell.jpg',
      skills: [
        { name: 'Entrenamiento de fuerza', level: 75 },
        { name: 'Entrenamiento cardiovascular', level: 80 },
        { name: 'Nutrición deportiva', level: 90 }
      ],
    },
    {
      name: 'Ricardo',
      role: 'Entrenador principal',
      avatarUrl: 'https://img.freepik.com/fotos-premium/entrenamiento-gimnasio-culturismo-generado-ia_406939-8412.jpg',
      skills: [
        { name: 'Entrenamiento de fuerza', level: 100 },
        { name: 'Entrenamiento cardiovascular', level: 50 },
        { name: 'Nutrición deportiva', level: 75 }
      ],
    },
  ];

  return (
    <Container fluid className="mt-5">
      <Row className="p-0 bg-home pe-5 pb-5 pb-md-0">
          <NavbarComponent />´{}
        </Row>
      <Row className="p-0 bg-home pe-5 pb-5 pb-md-0">
        <Col className="ms-xl-5 ms-4 d-flex justify-content-center align-items-center" xxl={5} xl={7} lg={8} md={9}>
          <div className="text-center">
            <img src="https://images7.alphacoders.com/692/692042.jpg" alt="Imagen de fondo" className='w-100 h-100' />
            <div>
              <h1 className="text-purple display-1 title">Sobre Nosotros</h1>
              <h5 className="text-white subtitle">Somos un gimnasio comprometido con tu bienestar y salud. Ofrecemos programas de entrenamiento personalizados y asesoramiento nutricional para ayudarte a alcanzar tus objetivos de fitness.</h5>
            </div>
          </div>
        </Col>
      </Row>

      {teamMembers.map((member, index) => (
        <Row key={index} className="mb-5 subtitle text-white justify-content-center align-items-center">
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
              <h4 className="text-white mb-3">Habilidades:</h4>
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
  );
};

export default About;
