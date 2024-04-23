{/* Componente que se mostrara en home */}
{/* Contendra el mapeo de las clases a las cards */}
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import BookingCard from '../../components/ClassBookingsComponents/BookingCard';
import { useContext } from 'react';
import { ClassProvider } from '../../context/ClassContex';

function ClassBookings() {
  const { classes } = useContext(ClassProvider);

  const isEmpty = () => classes.length === 0;

  return (
    <>
        <Container>
          <Row className="d-flex flex-row justify-content-around mt-3 ">
            {isEmpty() ? (
              <h2 className="paragraph">No hay productos</h2>
            ) : (
              classes.map((classes) => {
                const { _id, name, description, teacher, dateAndTime } = classes;

                return (
                  <Col xs={8} lg={2} md={6} sm={8} key={_id}>
                    <BookingCard
                      name={name}
                      description={description}
                      teacher={teacher}
                      dateAndTime={dateAndTime}
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

ClassBookings.propTypes = {
  classes: PropTypes.array,
};

export default ClassBookings;
