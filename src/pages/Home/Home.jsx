import './../../css/Home.css';
import { Container } from 'react-bootstrap';
// import Fonts from '../../utils/Fonts';
import Products from '../Products/Products';

function Home() {
  const name = 'NOMBRE PRODUCTO';
  const price = 15;
  const fn = () => {
    console.log('Ejecuta una función desde props');
  };

  const objectProducts = {
    nameProduct: 'Mancuerna',
    priceProduct: 20,
  };

  return (
    <>
      <Container>
        <header>
          <Products name={name} price={price} fn={fn} object={objectProducts} />
        </header>
      </Container>
    </>
  );
}
export default Home;
