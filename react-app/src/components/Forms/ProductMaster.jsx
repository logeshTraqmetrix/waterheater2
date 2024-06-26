import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import Swal from 'sweetalert2';

const ProductMaster = () => {
  const [formData, setFormData] = useState({
    Product_Name: '',
    Variant: '',
    Warranty_Month: '',
    Warranty_Details: '',
    Remarks: '',
    Image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, Image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);

    try {
      if (formData.Image == null) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please upload images!",
        });
        return;
      }
      const fileObj = new FormData();
      fileObj.append('data', formData.Image);

      const response = await fetch('/server/waterheater_1_function/uploadfile', {
        method: 'POST',
        body: fileObj,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
       var imageId = data[0].id
       

        try {
         let payload = {
          Product_Name: formData.Product_Name,
          Variant: formData.Variant,
          Warranty_Month: formData.Warranty_Month,
          Warranty_Details: formData.Warranty_Details,
          Remarks: formData.Remarks,
          Image: imageId,
         }
          axios.post('/server/waterheater_1_function/addproduct',{data:payload})
            .then((res)=>{
              console.log('response from product posting',res)
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
            })
            .catch((err)=>{
              console.log('error in posting product data',err)
            })
        } catch (error) {
          console.log('error in posting product data',error)
          
        }

      } else {
        const errorData = await response.json();
        console.log(errorData);
        alert('Error. Please try again after some time.');
      }
    } catch (e) {
      console.log(e);
      alert('Error. Please try again after some time.');
    }

    // Clear form data
    setFormData({
      Product_Name: '',
      Variant: '',
      Warranty_Month: '',
      Warranty_Details: '',
      Remarks: '',
      Image: null,
    });

    // Reset the image file input
    e.target.reset();
  };

  const handleReset = () => {
    setFormData({
      Product_Name: '',
      Variant: '',
      Warranty_Month: '',
      Warranty_Details: '',
      Remarks: '',
      Image: null,
    });
  };

  return (
    <Container>
      <h2 className="text-center">Product Master</h2>
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

        <Form.Group controlId="formVariant">
          <Form.Label>Variant</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter variant"
            name="Variant"
            value={formData.Variant}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formImage">
          <Form.Label>Product Image</Form.Label>
          <Form.Control
            type="file"
            name="Image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </Form.Group>

        <Form.Group controlId="formWarrantyMonth">
          <Form.Label>Warranty Month</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter warranty month"
            name="Warranty_Month"
            value={formData.Warranty_Month}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formWarrantyDetails">
          <Form.Label>Warranty Details</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter warranty details"
            name="Warranty_Details"
            value={formData.Warranty_Details}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formRemarks">
          <Form.Label>Remarks</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter remarks"
            name="Remarks"
            value={formData.Remarks}
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

export default ProductMaster;
