{
  /* Esqueleto de form. 
    Se vera en una pagina con informacion para agendar turnos */
}
import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

import "../../css/ClassBookings/BookingForm.css";

const BookingForm = () => {
  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState({});
  const [formData, setFormData] = useState({
    instructor: "",
    day: "",
    time: "",
  });

  useEffect(() => {
    // Aquí debes hacer una llamada al backend para obtener las clases disponibles
    // y actualizar el estado "classes" con los datos recibidos
    // Ejemplo ficticio:
    const fetchedClasses = [
      {
        id: 1,
        name: "Clase 1",
        instructor: "Instructor 1",
        day: "Lunes",
        time: "10:00",
      },
      {
        id: 2,
        name: "Clase 2",
        instructor: "Instructor 2",
        day: "Martes",
        time: "11:00",
      },
      {
        id: 3,
        name: "Clase 3",
        instructor: "Instructor 3",
        day: "Miércoles",
        time: "12:00",
      },
    ];
    setClasses(fetchedClasses);
  }, []);

  const handleClassChange = (e) => {
    const classId = parseInt(e.target.value);
    const selected = classes.find((c) => c.id === classId);
    setSelectedClass(selected);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos al backend para procesar la reserva
    console.log(selectedClass, formData);
  };

  return (
    <>
    <div className="booking-form small-font mb-4 mt-4">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="classSelect">
          <Form.Label>Select a class:</Form.Label>
          <Form.Control as="select" onChange={handleClassChange}>
            <option value="">Seleccione una clase</option>
            {classes.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name} - {c.instructor} - {c.day} - {c.time}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="instructor">
          <Form.Label>Instructor</Form.Label>
          <Form.Control
            type="text"
            name="instructor"
            value={selectedClass.instructor}
            onChange={handleChange}
            readOnly
          />
        </Form.Group>

        <Form.Group controlId="day">
          <Form.Label>Day</Form.Label>
          <Form.Control
            type="text"
            name="day"
            value={selectedClass.day}
            onChange={handleChange}
            readOnly
          />
        </Form.Group>

        <Form.Group controlId="time">
          <Form.Label>Time</Form.Label>
          <Form.Control
            type="text"
            name="time"
            value={selectedClass.time}
            onChange={handleChange}
            readOnly
          />
        </Form.Group>

        <Button variant="booking-form" type="submit" className="mt-3">
          Reserve
        </Button>
      </Form>
      </div>
    </>
  );
};

export default BookingForm;
