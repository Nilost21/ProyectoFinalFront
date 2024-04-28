import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import CardComponent from '../../components/CardComponent';
import { useContext } from 'react';
import { ProductsProvider } from '../../context/ProductsContext';
import NavbarComponent from '../../components/NavbarComponent';
import FooterComponent from '../../components/FooterComponent';

import '../../css/Products.css';
function Products() {
  const { products } = useContext(ProductsProvider);

  const isEmpty = () => products.length === 0;

  return (
    <>
      <Container fluid>
        <Row className="p-0 bg-products pe-md-5 pb-5 pb-md-0">
          <NavbarComponent />
          <Container className="px-5" data-aos="fade-up">
            <Row className="d-flex flex-row justify-content-center mt-3  ">
              {isEmpty() ? (
                <h2 className="paragraph">No hay productos</h2>
              ) : (
                products.map((product) => {
                  const { _id, name, price, description, image } = product;

                  return (
                    <Col
                      xs={10}
                      lg={3}
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
        </Row>
      </Container>
      <Container
        fluid
        className="d-flex flex-row justify-content-around  border-footer bg-footer"
      >
        <FooterComponent />
      </Container>
    </>
  );
}

Products.propTypes = {
  products: PropTypes.array,
};

export default Products;
