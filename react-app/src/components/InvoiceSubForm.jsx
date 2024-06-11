import React, { useState } from 'react';
import { Form, Button, Container} from 'react-bootstrap';

const InvoiceSubForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    partsService: '',
    warranty: '',
    qty: '',
    rate: '',
    subTotal: '',
    warrantyRate: '',
    expenseCost: ''
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
      date: '',
      partsService: '',
      warranty: '',
      qty: '',
      rate: '',
      subTotal: '',
      warrantyRate: '',
      expenseCost: ''
    });

    // Reset the form
    e.target.reset();
  };

  const handleReset = () => {
    setFormData({
      date: '',
      partsService: '',
      warranty: '',
      qty: '',
      rate: '',
      subTotal: '',
      warrantyRate: '',
      expenseCost: ''
    });
  };

  return (
    <Container>
      <h2 className="text-center">Invoice Subform</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formDate">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </Form.Group>
        
        <Form.Group controlId="formPartsService">
          <Form.Label>Parts / Service</Form.Label>
          <Form.Control
            as="select"
            name="partsService"
            value={formData.partsService}
            onChange={handleChange}
          >
            <option value="">Select</option>
            {/* Add dropdown options here */}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formWarranty">
          <Form.Label>Warranty</Form.Label>
          <Form.Control
            as="select"
            name="warranty"
            value={formData.warranty}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formQty">
          <Form.Label>Qty</Form.Label>
          <Form.Control
            type="number"
            name="qty"
            value={formData.qty}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formRate">
          <Form.Label>Rate</Form.Label>
          <Form.Control
            type="number"
            name="rate"
            value={formData.rate}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formSubTotal">
          <Form.Label>Sub Total</Form.Label>
          <Form.Control
            type="number"
            name="subTotal"
            value={formData.subTotal}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formWarrantyRate">
          <Form.Label>Warranty Rate</Form.Label>
          <Form.Control
            type="number"
            name="warrantyRate"
            value={formData.warrantyRate}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formExpenseCost">
          <Form.Label>Expense Cost</Form.Label>
          <Form.Control
            type="number"
            name="expenseCost"
            value={formData.expenseCost}
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

export default InvoiceSubForm;