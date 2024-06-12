// import React, { useState } from 'react';
// import { Form, Button, Container, Row, Col } from 'react-bootstrap';

// const ProductMaster = () => {
//   const [formData, setFormData] = useState({
//     productName: '',
//     variant: '',
//     image: null,
//     warrantyMonth: '',
//     warrantyDetails: '',
//     remarks: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setFormData({ ...formData, image: file });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log(formData);

//     // Clear form data
//     setFormData({
//       productName: '',
//       variant: '',
//       image: null,
//       warrantyMonth: '',
//       warrantyDetails: '',
//       remarks: ''
//     });

//     // Reset the image file input
//     e.target.reset();
//   };

//   const handleReset = () => {
//     setFormData({
//       productName: '',
//       variant: '',
//       image: null,
//       warrantyMonth: '',
//       warrantyDetails: '',
//       remarks: ''
//     });
//   };

//   return (
//     <Container>
//       <h2 className="text-center">Product Master</h2>
//       <Form onSubmit={handleSubmit}>
//         <Row>
//           <Col>
//             <Form.Group controlId="formProductName">
//               <Form.Label>Product Name *</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter product name"
//                 name="productName"
//                 value={formData.productName}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>
//           </Col>
//           <Col>
//             <Form.Group controlId="formVariant">
//               <Form.Label>Variant</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter variant"
//                 name="variant"
//                 value={formData.variant}
//                 onChange={handleChange}
//               />
//             </Form.Group>
//           </Col>
//         </Row>
//         <Form.Group controlId="formImage">
//           <Form.Label>Product Image</Form.Label>
//           <Form.Control
//             type="file"
//             name="image"
//             accept="image/*"
//             onChange={handleImageChange}
//           />
//         </Form.Group>
//         <Row>
//           <Col>
//             <Form.Group controlId="formWarrantyMonth">
//               <Form.Label>Warranty Month</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter warranty month"
//                 name="warrantyMonth"
//                 value={formData.warrantyMonth}
//                 onChange={handleChange}
//               />
//             </Form.Group>
//           </Col>
//           <Col>
//             <Form.Group controlId="formWarrantyDetails">
//               <Form.Label>Warranty Details</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter warranty details"
//                 name="warrantyDetails"
//                 value={formData.warrantyDetails}
//                 onChange={handleChange}
//               />
//             </Form.Group>
//           </Col>
//         </Row>
//         <Form.Group controlId="formRemarks">
//           <Form.Label>Remarks</Form.Label>
//           <Form.Control
//             as="textarea"
//             rows={3}
//             placeholder="Enter remarks"
//             name="remarks"
//             value={formData.remarks}
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <div className="text-center mt-2">
//           <Button variant="primary" type="submit">
//             Submit
//           </Button>{' '}
//           <Button variant="secondary" type="button" onClick={handleReset}>
//             Reset
//           </Button>
//         </div>
//       </Form>
//     </Container>
//   );
// };

// export default ProductMaster;





import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const ProductMaster = () => {
  const [formData, setFormData] = useState({
    productName: '',
    variant: '',
    image: null,
    warrantyMonth: '',
    warrantyDetails: '',
    remarks: ''
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

    // Clear form data
    setFormData({
      productName: '',
      variant: '',
      image: null,
      warrantyMonth: '',
      warrantyDetails: '',
      remarks: ''
    });

    // Reset the image file input
    e.target.reset();
  };

  const handleReset = () => {
    setFormData({
      productName: '',
      variant: '',
      image: null,
      warrantyMonth: '',
      warrantyDetails: '',
      remarks: ''
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
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formVariant">
          <Form.Label>Variant</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter variant"
            name="variant"
            value={formData.variant}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formImage">
          <Form.Label>Product Image</Form.Label>
          <Form.Control
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </Form.Group>

        <Form.Group controlId="formWarrantyMonth">
          <Form.Label>Warranty Month</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter warranty month"
            name="warrantyMonth"
            value={formData.warrantyMonth}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formWarrantyDetails">
          <Form.Label>Warranty Details</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter warranty details"
            name="warrantyDetails"
            value={formData.warrantyDetails}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formRemarks">
          <Form.Label>Remarks</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter remarks"
            name="remarks"
            value={formData.remarks}
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
