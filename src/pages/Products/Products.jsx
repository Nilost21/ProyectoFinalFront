import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import CardComponent from '../../components/CardComponent';
import { useContext, useEffect } from 'react';
import { ProductsProvider } from '../../context/ProductsContext';
import NavbarComponent from '../../components/NavbarComponent';

function Products() {
  const { products, getProducts } = useContext(ProductsProvider);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const isEmpty = () => products.length === 0;

  return (
    <>
      <Container fluid>
        <NavbarComponent />
        <Container>
          <Row className="d-flex flex-row justify-content-around mt-3 ">
            {isEmpty() ? (
              <h2 className="paragraph">No hay productos</h2>
            ) : (
              products.map((product) => {
                const { id, name, price, description, image } = product;

                return (
                  <Col xs={8} lg={2} md={6} sm={8} key={id}>
                    <CardComponent
                      name={name}
                      description={description}
                      price={price}
                      image={image}
                    />
                  </Col>
                );
              })
            )}
          </Row>
        </Container>
      </Container>
    </>
  );
}

Products.propTypes = {
  products: PropTypes.array,
};

export default Products;
