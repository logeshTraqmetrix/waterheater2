import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    rating: '',
    comments: ''
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
      rating: '',
      comments: ''
    });

    // Reset the form
    e.target.reset();
  };

  const handleReset = () => {
    setFormData({
      rating: '',
      comments: ''
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
              name="rating"
              value="good"
              checked={formData.rating === 'good'}
              onChange={handleChange}
              required
            />
            <Form.Check
              inline
              type="radio"
              label="Average"
              name="rating"
              value="average"
              checked={formData.rating === 'average'}
              onChange={handleChange}
              required
            />
            <Form.Check
              inline
              type="radio"
              label="Bad"
              name="rating"
              value="bad"
              checked={formData.rating === 'bad'}
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
            name="comments"
            value={formData.comments}
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
