import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const SparePartsAndStocks = () => {
  const [formData, setFormData] = useState({
    materialName: '',
    warranty: '',
    price: '',
    availableQty: '',
    usedQtySoFar: '',
    inwardQty: ''
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
      materialName: '',
      warranty: '',
      price: '',
      availableQty: '',
      usedQtySoFar: '',
      inwardQty: ''
    });

    // Reset the form
    e.target.reset();
  };

  const handleReset = () => {
    setFormData({
      materialName: '',
      warranty: '',
      price: '',
      availableQty: '',
      usedQtySoFar: '',
      inwardQty: ''
    });
  };

  return (
    <Container>
      <h2 className="text-center">Spare Parts & Manage Stocks</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formMaterialName">
          <Form.Label>Material Name *</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter material name"
            name="materialName"
            value={formData.materialName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formWarranty">
          <Form.Label>Warranty</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter warranty"
            name="warranty"
            value={formData.warranty}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter price"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formAvailableQty">
          <Form.Label>Available Qty</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter available quantity"
            name="availableQty"
            value={formData.availableQty}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formUsedQtySoFar">
          <Form.Label>Used Qty So Far</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter used quantity so far"
            name="usedQtySoFar"
            value={formData.usedQtySoFar}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formInwardQty">
          <Form.Label>Inward Qty</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter inward quantity"
            name="inwardQty"
            value={formData.inwardQty}
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

export default SparePartsAndStocks;
