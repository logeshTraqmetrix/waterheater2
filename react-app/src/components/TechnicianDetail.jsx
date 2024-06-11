import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const TechnicianDetail = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    address: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);

    // Clear form data
    setFormData({
      name: '',
      email: '',
      phone: '',
      whatsapp: '',
      address: '',
      image: null
    });

    // Reset the image file input
    e.target.reset();
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      whatsapp: '',
      address: '',
      image: null
    });
  };

  return (
    <Container>
      <h2 className="text-center">Technician Details</h2>
      <Form onSubmit={handleSubmit}>
      <Row>
          <Col>
            <Form.Group controlId="formTechnicianName">
              <Form.Label>Technician Name *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter technician name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formTechnicianEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Row>
          <Col>
            <Form.Group controlId="formTechnicianPhone">
              <Form.Label>Phone *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formTechnicianWhatsapp">
              <Form.Label>WhatsApp Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter WhatsApp number"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formTechnicianAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formTechnicianImage">
          <Form.Label>Technician Image</Form.Label>
          <Form.Control
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </Form.Group>
        <div className="text-center mt-2">
          <Button variant="primary" type="submit">
            Submit
          </Button>{' '}
          <Button variant="secondary" type="button" onClick={handleReset}>
            Reset
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default TechnicianDetail;