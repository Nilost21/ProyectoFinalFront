import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import CardComponent from '../../components/CardComponent';
import { useContext } from 'react';
import { ProductsProvider } from '../../context/ProductsContext';
import NavbarComponent from '../../components/NavbarComponent';

function Products() {
  const { products } = useContext(ProductsProvider);

  const isEmpty = () => products.length === 0;

  return (
    <>
      <Container fluid className="px-0">
        <NavbarComponent />
        <Container className="px-0">
          <Row className="d-flex flex-row justify-content-around mt-3 ">
            {isEmpty() ? (
              <h2 className="paragraph">No hay productos</h2>
            ) : (
              products.map((product) => {
                const { _id, name, price, description, image } = product;

                return (
                  <Col
                    xs={10}
                    lg={4}
                    md={4}
                    sm={8}
                    key={_id}
                    className="d-flex flex-row justify-content-center"
                  >
                    <CardComponent
                      name={name}
                      product={product}
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
