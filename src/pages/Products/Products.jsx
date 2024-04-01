/* eslint-disable no-unused-vars */
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import CardComponent from '../../components/CardComponent';
import { useContext } from 'react';
import { ProductsProvider } from '../../context/ProductsContext';

function Products() {
  const { products } = useContext(ProductsProvider);

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
                <Col xs={12} lg={3} md={4} sm={6} key={id}>
                  <CardComponent
                    name={name}
                    description={description}
                    func={clickProducts}
                    price={price}
                  />
                </Col>
              );
            })
          )}
        </Row>
      </Container>
    </>
  );
}

// Products.propTypes = {
//   products: PropTypes.array,
// };
export default Products;
