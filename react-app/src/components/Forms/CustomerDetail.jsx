import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const CustomerDetail = () => {
  const [formData, setFormData] = useState({
    Customer_Name: '',
    Customer_Id: '',
    Customer_Email: '',
    Customer_Phone: '',
    Customer_Whatsapp: '',
    Customer_Address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);

    axios.post('/server/waterheater_1_function/addcustomer',{data:formData})
    .then((response)=>{
      console.log("Record added successfully");
      console.log("Response : "+response);
    })
    .catch((error)=>{
      console.error("Error at add customer from frontend : "+error);
    });

    setFormData({
      Customer_Name: '',
      Customer_Id: '',
      Customer_Email: '',
      Customer_Phone: '',
      Customer_Whatsapp: '',
      Customer_Address: ''
      });
  };

  const handleReset = () => {
    setFormData({
      Customer_Name: '',
      Customer_Id: '',
      Customer_Email: '',
      Customer_Phone: '',
      Customer_Whatsapp: '',
      Customer_Address: ''
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
            name="Customer_Name"
            value={formData.Customer_Name}
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
            name="Customer_Id"
            value={formData.Customer_Id}
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
        name="Customer_Email"
        value={formData.Customer_Email}
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
            name="Customer_Phone"
            value={formData.Customer_Phone}
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
            name="Customer_Whatsapp"
            value={formData.Customer_Whatsapp}
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
        name="Customer_Address"
        value={formData.Customer_Address}
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
