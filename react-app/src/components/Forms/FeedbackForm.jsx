import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    Rate_Us: '',
    Comments: '',
    Ticket_Lookup: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);

    //Posting feed back data to table
    axios.post('/server/waterheater_1_function/addfeedback',{data:formData})
    .then((response)=>{
      console.log("Record Added Succesfully");
      console.log("Response : "+JSON.stringify(response));
    })
    .catch((err)=>{console.error("Error While posting feed back data from front-end : "+err);});

    // Clear form data
    setFormData({
    Rate_Us: '',
    Comments: ''
    });

    // Reset the form
    e.target.reset();
  };

  const handleReset = () => {
    setFormData({
    Rate_Us: '',
    Comments: ''
    });
  };

  return (
    <Container>
      <h2 className="text-center">Feedback Form</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formRating">
          <Form.Label>Rate Us *</Form.Label>
          <div>
            <Form.Check
              inline
              type="radio"
              label="Good"
              name="Rate_Us"
              value="good"
              checked={formData.Rate_Us === 'good'}
              onChange={handleChange}
              required
            />
            <Form.Check
              inline
              type="radio"
              label="Average"
              name="Rate_Us"
              value="average"
              checked={formData.Rate_Us === 'average'}
              onChange={handleChange}
              required
            />
            <Form.Check
              inline
              type="radio"
              label="Bad"
              name="Rate_Us"
              value="bad"
              checked={formData.Rate_Us === 'bad'}
              onChange={handleChange}
              required
            />
          </div>
        </Form.Group>

        <Form.Group controlId="formComments">
          <Form.Label>Comments</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your comments"
            name="Comments"
            value={formData.Comments}
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

export default FeedbackForm;
