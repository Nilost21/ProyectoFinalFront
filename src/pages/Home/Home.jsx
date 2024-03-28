import './../../css/Home.css';
import { Container } from 'react-bootstrap';
import Navbar from '../../components/Navbar';

function Home() {
  return (
    <>
      <Container>
        <header>
          <Navbar />
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
