/* eslint-disable no-unused-vars */
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ButtonComponent from '../../components/ButtonComponent';

function Products({ name, price, fn, object }) {
  const { nameProduct, priceProduct } = object;

  return (
    <>
      <Container>
        <h1 className="title text-light mt-3">
          {name} con el precio {price}
        </h1>
        <ButtonComponent text={'Enviar'}></ButtonComponent>

        <p className="paragraph text-light mt-3">
          Nombre del producto: <span>{nameProduct}</span>
        </p>
        <p className="paragraph text-light">
          Precio: $<span>{priceProduct}</span>
        </p>
      </Container>
    </>
  );
}

Products.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  fn: PropTypes.func.isRequired,
  object: PropTypes.object.isRequired,
};
export default Products;
