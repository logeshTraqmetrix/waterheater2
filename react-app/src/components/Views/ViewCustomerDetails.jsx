import React, { useEffect, useState } from 'react';
import { Table, Dropdown, Modal, Button } from 'react-bootstrap';
import axios from 'axios';

const ViewCustomerDetails = () => {
  const [data, setData] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get('/server/waterheater_1_function/getcustomers')
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const ActionDropdown = (customer) => (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleViewCustomer(customer)}>View</Dropdown.Item>
        <Dropdown.Item>Edit</Dropdown.Item>
        <Dropdown.Item>Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );

  const handleViewCustomer = (customer) => {
    setSelectedCustomer(customer);
    console.log(customer)
    setShowModal(true);
  };

  const CustomerModal = () => {
    const handleCloseModal = () => {
      setSelectedCustomer(null);
      setShowModal(false);
    };

    return (
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Customer Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCustomer && (
            <>
              <p>Name: {selectedCustomer.customer.Customer_Name}</p>
              <p>Phone: {selectedCustomer.customer.Customer_Phone}</p>
              <p>Address: {selectedCustomer.customer.Customer_Address}</p>
              <p>Email: {selectedCustomer.customer.Customer_Email}</p>
              <p>WhatsApp : {selectedCustomer.customer.Customer_Whatsapp}</p>
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
              <th>Name</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((customer, index) => (
              <tr key={index}>
                <td>{customer.Customer_Name}</td>
                <td>{customer.Customer_Phone}</td>
                <td>{customer.Customer_Address}</td>
                <td>
                  <ActionDropdown customer={customer} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <CustomerModal />
    </div>
  );
};

export default ViewCustomerDetails;