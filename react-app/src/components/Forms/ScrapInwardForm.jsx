import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const ScrapInwardForm = () => {
  const [formData, setFormData] = useState({
    materialName: '',
    dateReceived: '',
    condition: '',
    qty: '',
    materialImage: null,
    ticketBidirection: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, materialImage: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);

    // Clear form data
    setFormData({
      materialName: '',
      dateReceived: '',
      condition: '',
      qty: '',
      materialImage: null,
      ticketBidirection: ''
    });

    // Reset the form
    e.target.reset();
  };

  const handleReset = () => {
    setFormData({
      materialName: '',
      dateReceived: '',
      condition: '',
      qty: '',
      materialImage: null,
      ticketBidirection: ''
    });
  };

  return (
    <Container>
      <h2 className="text-center">Scrap Inward</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formMaterialName">
          <Form.Label>Material Name *</Form.Label>
          <Form.Control
            as="select"
            name="materialName"
            value={formData.materialName}
            onChange={handleChange}
            required
          >
            <option value="">Select Material</option>
            {/* Add your options here */}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formDateReceived">
          <Form.Label>Date of Received *</Form.Label>
          <Form.Control
            type="date"
            name="dateReceived"
            value={formData.dateReceived}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formCondition">
          <Form.Label>Condition *</Form.Label>
          <Form.Control
            as="select"
            name="condition"
            value={formData.condition}
            onChange={handleChange}
            required
          >
            <option value="">Select Condition</option>
            {/* Add your options here */}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formQty">
          <Form.Label>Qty *</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter quantity"
            name="qty"
            value={formData.qty}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formMaterialImage">
          <Form.Label>Material Image *</Form.Label>
          <Form.Control
            type="file"
            name="materialImage"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formTicketBidirection">
          <Form.Label>Ticket Bidirection *</Form.Label>
          <Form.Control
            as="select"
            name="ticketBidirection"
            value={formData.ticketBidirection}
            onChange={handleChange}
            required
          >
            <option value="">Select Ticket Bidirection</option>
            {/* Add your options here */}
          </Form.Control>
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

export default ScrapInwardForm;
