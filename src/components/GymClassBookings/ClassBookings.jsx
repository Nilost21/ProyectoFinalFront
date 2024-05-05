import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import BookingCard from './BookingCard';
import { useContext } from 'react';
import { ClassProvider } from '../../context/ClassContex';

function ClassBookings() {
  const { classes } = useContext(ClassProvider);

  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${formattedDate} ${formattedTime}`;
  };

  const isEmpty = () => classes.length === 0;

  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center mt-3">
          {isEmpty() ? (
            <h2 className="paragraph">Oops! No classes available</h2>
          ) : (
            classes.map((classes) => {
              const { _id, name, description, teacher, dateAndTime } = classes;
              return (
                <Col
                  xs={12}
                  sm={12}
                  md={4}
                  lg={4}
                  xl={3}
                  key={_id}
                  className="d-flex justify-content-center booking-card"
                >
                  <BookingCard
                    id={_id}
                    name={name}
                    description={description}
                    teacher={teacher}
                    dateAndTime={formatDateTime(dateAndTime)}
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
