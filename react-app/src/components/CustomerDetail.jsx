import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const CustomerDetail = () => {
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    email: '',
    phone: '',
    whatsapp: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);

    setFormData({
        name: '',
        id: '',
        email: '',
        phone: '',
        whatsapp: '',
        address: ''
      });
  };

  const handleReset = () => {
    setFormData({
      name: '',
      id: '',
      email: '',
      phone: '',
      whatsapp: '',
      address: ''
    });
  };

  return (
    <Container>
  <h2 className="text-center">Customer Details</h2>
  <Form onSubmit={handleSubmit}>
    {/* Name */}
    <Row>
      <Col>
        <Form.Group controlId="formName">
          <Form.Label>Name *</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
      </Col>
    </Row>

    {/* Customer ID */}
    <Row>
      <Col>
        <Form.Group controlId="formId">
          <Form.Label>Customer ID *</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter ID"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
          />
        </Form.Group>
      </Col>
    </Row>

    {/* Email */}
    <Form.Group controlId="formEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control
        type="email"
        placeholder="Enter email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
    </Form.Group>

    {/* Phone */}
    <Row>
      <Col>
        <Form.Group controlId="formPhone">
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

    {/* WhatsApp Number */}
    <Row>
      <Col>
        <Form.Group controlId="formWhatsapp">
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

    {/* Address */}
    <Form.Group controlId="formAddress">
      <Form.Label>Address *</Form.Label>
      <Form.Control
        as="textarea"
        rows={3}
        placeholder="Enter address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        required
      />
    </Form.Group>

    {/* Submit and Reset Buttons */}
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

export default CustomerDetail;
