import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Swal from 'sweetalert2';

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
    setFormData({ ...formData, Technician_Image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Upload image first
    const imageData = new FormData();
    imageData.append('technicianImage', formData.Technician_Image);

    try {
      const imageResponse = await axios.post('/server/waterheater_1_function/uploadfile', imageData);
      const imageId = imageResponse.data[0].id; // Assuming your API returns an ID
      console.log('image responce',imageResponse)
      if (imageResponse.status === 200) {
        // Post technician data with image ID
        const technicianData = {
          Technician_Name: formData.Technician_Name,
          Technician_Email: formData.Technician_Email,
          Technician_Phone: formData.Technician_Phone,
          Technician_Whatsapp: formData.Technician_Whatsapp,
          Technician_Address: formData.Technician_Address,
          Technician_Image: imageId // Use the uploaded image ID here
        };

        axios.post('/server/waterheater_1_function/addtechnician', { data: technicianData })
          .then((response) => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            });
            console.log("Technician Added Successfully.");
            console.log("Response : " , response);
          })
          .catch((err) => {
            console.error("Error Adding technician from front-end : " + err);
          });

        // Clear form data
        setFormData({
          Technician_Name: '',
          Technician_Email: '',
          Technician_Phone: '',
          Technician_Whatsapp: '',
          Technician_Address: '',
          Technician_Image: null
        });

        // Reset the image file input (optional, depending on your UI requirement)
        e.target.reset();
      }

    } catch (error) {
      console.error("Error uploading image:", error);
    }
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
                type="number"
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
                type="number"
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
