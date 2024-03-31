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
          <h1 className="title text-light mt-3">ESTAS EN EL HOME</h1>
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
