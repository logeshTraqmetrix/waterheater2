import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const ProblemStatement = () => {
  const [formData, setFormData] = useState({
    Product_Name: '',
    Product_Issue: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);

    //Posting problem statement data to table
    axios.post('/server/waterheater_1_function/addproblem',{data:formData})
    .then((response)=>{
      console.log("Record Added Successfully");
      console.log("Response : "+response);
    })
    .catch((err)=>{
      console.log("Error at adding problem statement from front-end : "+err);
    })

    // Clear form data
    setFormData({
    Product_Name: '',
    Product_Issue: ''
    });

    // Reset the form
    e.target.reset();
  };

  const handleReset = () => {
    setFormData({
    Product_Name: '',
    Product_Issue: ''
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
            name="Product_Name"
            value={formData.Product_Name}
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
            name="Product_Issue"
            value={formData.Product_Issue}
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
