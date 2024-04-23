import { useContext, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { ClassProvider } from "../../context/ClassContex";

import "../../css/ClassBookings/BookingForm.css";

const BookingForm = () => {
  const { classes } = useContext(ClassProvider);
  const [selectedClass, setSelectedClass] = useState({});
  const [formData, setFormData] = useState({
    instructor: "",
    day: "",
    time: "",
  });

  useEffect(() => {
    // Inicializar el formulario con la primera clase de la lista
    if (classes.length > 0) {
      setSelectedClass(classes[0]);
      setFormData({
        instructor: classes[0]?.teacher || "",
        day: classes[0]?.dateAndTime || "",
        time: classes[0]?.dateAndTime || "",
      });
    }
  }, [classes]);

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
                  {c.name} - {c.teacher} - {c.dateAndTime}
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

          <Form.Group controlId="day">
            <Form.Label>Day</Form.Label>
            <Form.Control
              type="text"
              name="day"
              value={formData.day}
              onChange={handleChange}
              readOnly
            />
          </Form.Group>

          <Form.Group controlId="time">
            <Form.Label>Time</Form.Label>
            <Form.Control
              type="text"
              name="time"
              value={formData.time}
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
