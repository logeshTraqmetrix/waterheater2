import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const ProblemStatement = () => {
  const [formData, setFormData] = useState({
    productName: '',
    productIssue: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);

    // Clear form data
    setFormData({
      productName: '',
      productIssue: ''
    });

    // Reset the form
    e.target.reset();
  };

  const handleReset = () => {
    setFormData({
      productName: '',
      productIssue: ''
    });
  };

  return (
    <Container>
      <h2 className="text-center">Problem Statement</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formProductName">
          <Form.Label>Product Name *</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product name"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formProductIssue">
          <Form.Label>Product Issue</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter product issue"
            name="productIssue"
            value={formData.productIssue}
            onChange={handleChange}
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

export default ProblemStatement;
