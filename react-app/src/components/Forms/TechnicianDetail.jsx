import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const TechnicianDetail = () => {
  const [formData, setFormData] = useState({
    Technician_Name: '',
    Technician_Email: '',
    Technician_Phone: '',
    Technician_Whatsapp: '',
    Technician_Address: '',
    Technician_Image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);

    //Here need to upload image then post the data with image id "waiting for upload code".

    //Posting data to table
    axios.post('/server/waterheater_1_function/addtechnician',{data:formData})
    .then((response)=>{
     console.log("Technician Added Successfully.");
     console.log("Response : " + response);
     })
    .catch((err)=>{
       console.error("Error Adding techinician from front-end : "+ err);
      })

    // Clear form data
    setFormData({
    Technician_Name: '',
    Technician_Email: '',
    Technician_Phone: '',
    Technician_Whatsapp: '',
    Technician_Address: '',
    Technician_Image: null
    });


    // Reset the image file input
    e.target.reset();
  };

  const handleReset = () => {
    setFormData({
    Technician_Name: '',
    Technician_Email: '',
    Technician_Phone: '',
    Technician_Whatsapp: '',
    Technician_Address: '',
    Technician_Image: null
    });
  };

  return (
    <Container>
      <h2 className="text-center">Technician Details</h2>
      <Form onSubmit={handleSubmit}>
      <Row>
          <Col>
            <Form.Group controlId="formTechnicianName">
              <Form.Label>Technician Name *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter technician name"
                name="Technician_Name"
                value={formData.Technician_Name}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formTechnicianEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="Technician_Email"
            value={formData.Technician_Email}
            onChange={handleChange}
          />
        </Form.Group>
        <Row>
          <Col>
            <Form.Group controlId="formTechnicianPhone">
              <Form.Label>Phone *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone"
                name="Technician_Phone"
                value={formData.Technician_Phone}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formTechnicianWhatsapp">
              <Form.Label>WhatsApp Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter WhatsApp number"
                name="Technician_Whatsapp"
                value={formData.Technician_Whatsapp}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formTechnicianAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter address"
            name="Technician_Address"
            value={formData.Technician_Address}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formTechnicianImage">
          <Form.Label>Technician Image</Form.Label>
          <Form.Control
            type="file"
            name="Technician_Image"
            accept="image/*"
            onChange={handleImageChange}
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

export default TechnicianDetail;