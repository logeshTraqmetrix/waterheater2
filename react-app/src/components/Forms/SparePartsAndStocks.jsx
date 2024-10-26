import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import Swal from 'sweetalert2';

const SparePartsAndStocks = () => {
    const [formData, setFormData] = useState({
        Material_Name: '',
        Warranty: '',
        Price: '',
        BarCodeValue: '',
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
        axios.post('/server/waterheater_1_function/addspares', { data: [formData] })
            .then((response) => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log("Record Added Successfully");
                console.log("Response : ", response);
            })
            .catch((err) => { console.error("Error at added spares from front-end : " , err); })

        // Clear form data
        setFormData({
            Material_Name: '',
            Warranty: '',
            Price: '',
            BarCodeValue: '',
            
        });

        // Reset the form
        e.target.reset();
    };

    const handleReset = () => {
        setFormData({
            Material_Name: '',
            Warranty: '',
            Price: '',
            BarCodeValue: '',
            
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
                        type="number"
                        placeholder="Enter price"
                        name="Price"
                        value={formData.Price}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="formAvailableQty">
                    <Form.Label>Barcode Value</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Barcode Value"
                        name="BarCodeValue"
                        value={formData.BarCodeValue}
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
