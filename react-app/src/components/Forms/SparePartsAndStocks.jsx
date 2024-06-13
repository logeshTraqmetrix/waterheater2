import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const SparePartsAndStocks = () => {
  const [formData, setFormData] = useState({
    Material_Name: '',
    Warranty: '',
    Price : '',
    Available_Qty: '',
    Consumed_Qty: '',
    Inward_Qty: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);

    //Posting the spares to table
    axios.post('/server/waterheater_1_function/addspares',{data:formData})
    .then((response)=>{
      console.log("Record Added Successfully");
      console.log("Response : "+response);
    })
    .catch((err)=>{console.error("Error at added spares from front-end : "+err);})

    // Clear form data
    setFormData({
      Material_Name: '',
      Warranty: '',
      Price : '',
      Available_Qty: '',
      Consumed_Qty: '',
      Inward_Qty: ''
    });

    // Reset the form
    e.target.reset();
  };

  const handleReset = () => {
    setFormData({
      Material_Name: '',
      Warranty: '',
      Price : '',
      Available_Qty: '',
      Consumed_Qty: '',
      Inward_Qty: ''
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
            name="Material_Name"
            value={formData.Material_Name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formWarranty">
          <Form.Label>Warranty</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter warranty"
            name="Warranty"
            value={formData.Warranty}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter price"
            name="Price"
            value={formData.Price}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formAvailableQty">
          <Form.Label>Available Qty</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter available quantity"
            name="Available_Qty"
            value={formData.Available_Qty}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formUsedQtySoFar">
          <Form.Label>Used Qty So Far</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter used quantity so far"
            name="Consumed_Qty"
            value={formData.Consumed_Qty}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formInwardQty">
          <Form.Label>Inward Qty</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter inward quantity"
            name="Inward_Qty"
            value={formData.Inward_Qty}
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
