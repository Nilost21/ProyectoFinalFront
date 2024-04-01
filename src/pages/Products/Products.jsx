/* eslint-disable no-unused-vars */
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ButtonComponent from '../../components/ButtonComponent';
import CardComponent from '../../components/CardComponent';

function Products({ products }) {
  const isEmpty = () => products.length === 0;

  return (
    <>
      <Container>
        <Row className="d-flex justify-content-around mt-3">
          {isEmpty() ? (
            <h2 className="paragraph">No hay productos</h2>
          ) : (
            products.map((product) => {
              const { id, name, price, description } = product;
              const clickProducts = () =>
                console.log(`Hiciste click en el producto ${name}`);

              return (
                <CardComponent
                  key={id}
                  name={name}
                  description={description}
                  func={clickProducts}
                />
              );
            })
          )}
        </Row>
      </Container>
    </>
  );
}

Products.propTypes = {
  products: PropTypes.array,
};
export default Products;
