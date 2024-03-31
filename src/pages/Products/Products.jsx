import { Container } from 'react-bootstrap';
import NavbarComponent from '../../components/NavbarComponent';

function Products() {
  return (
    <>
      <Container>
        <NavbarComponent />
        <h1 className="title text-light mt-3">ESTAS EN LOS PRODUCTS</h1>
      </Container>
    </>
  );
}
export default Products;
