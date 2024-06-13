import React, { useEffect, useState } from 'react';
import { Table, Dropdown, Modal, Button } from 'react-bootstrap';
import axios from 'axios';

const ViewProduct = () => {
  const [data, setData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get('/server/waterheater_1_function/getproducts')
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const ActionDropdown = (product) => (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleViewProduct(product)}>View</Dropdown.Item>
        <Dropdown.Item>Edit</Dropdown.Item>
        <Dropdown.Item>Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
    console.log(product)
    setShowModal(true);
  };

  const ProductModal = () => {
    const handleCloseModal = () => {
      setSelectedProduct(null);
      setShowModal(false);
    };

    return (
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <>
              <p>Variant: {selectedProduct.product.Variant}</p>
              <p>Remarks: {selectedProduct.product.Remarks}</p>
              <p>Warranty_Month: {selectedProduct.product.Warranty_Month}</p>
              <p>Warranty_Details: {selectedProduct.product.Warranty_Details}</p>
              <p>Product_Name : {selectedProduct.product.Product_Name}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <div>
      <div className="table-responsive">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>P_Name</th>
              <th>PhoVariantne</th>
              <th>W_Detail</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product, index) => (
              <tr key={index}>
                <td>{product.Product_Name}</td>
                <td>{product.Variant}</td>
                <td>{product.Warranty_Details}</td>
                <td>
                  <ActionDropdown product={product} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <ProductModal />
    </div>
  );
};

export default ViewProduct;