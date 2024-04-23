import { useContext, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { ClassProvider } from "../../context/ClassContex";

import "../../css/ClassBookings/BookingForm.css";

const BookingForm = () => {
  const { classes } = useContext(ClassProvider);

  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return `${formattedDate} ${formattedTime}`;
  };

  const [selectedClass, setSelectedClass] = useState({});
  const [formData, setFormData] = useState({
    instructor: "",
    day: "",
    time: "",
  });

  useEffect(() => {
    // Inicializar el formulario solo si no hay clases seleccionadas
    if (classes.length > 0 && !selectedClass.id) {
      setSelectedClass(classes[0]);
      setFormData({
        instructor: "",
        day: "",
        time: "",
      });
    }
  }, [classes, selectedClass]);
  

  const handleClassChange = (e) => {
    const classId = parseInt(e.target.value);
    const selected = classes.find((c) => c.id === classId);
    console.log("Selected Class:", selected);
    if (selected) {
      setSelectedClass(selected);
      setFormData({
        instructor: selected.teacher || "",
        day: selected.dateAndTime || "",
        time: selected.dateAndTime || "",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
      {c.name} - {c.teacher} - {formatDateTime(c.dateAndTime)}
    </option>
  ))}
</Form.Control>
          </Form.Group>

          <Form.Group controlId="instructor">
            <Form.Label>Instructor</Form.Label>
            <Form.Control
              type="text"
              name="instructor"
              value={formData.instructor}
              onChange={handleChange}
              readOnly
            />
          </Form.Group>

        {/*   <Form.Group controlId="day">
            <Form.Label>Day</Form.Label>
            <Form.Control
              type="text"
              name="day"
              value={formData.day}
              onChange={handleChange}
              readOnly
            />
          </Form.Group> */}

          <Form.Group controlId="time">
            <Form.Label>Day and Time</Form.Label>
            <Form.Control
              type="text"
              name="time"
              value={formatDateTime(formData.time)}
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