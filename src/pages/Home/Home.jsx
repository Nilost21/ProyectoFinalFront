import './../../css/Home.css';
import { Container } from 'react-bootstrap';
import NavbarComponent from '../../components/NavbarComponent';
import Fonts from '../../utils/Fonts';

function Home() {
  return (
    <>
      <Container>
        <header>
          <NavbarComponent />
          <Fonts />
        </header>
      </Container>
      <Container>
        <main>
          <section></section>
          <section></section>
        </main>
      </Container>
      <Container>
        <footer></footer>
      </Container>
    </>
  );
}
export default Home;
