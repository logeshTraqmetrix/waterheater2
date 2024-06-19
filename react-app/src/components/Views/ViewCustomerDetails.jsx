import React, { useEffect, useState } from 'react';
import { Table, Dropdown, Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const ViewCustomerDetails = () => {
  const [data, setData] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editFormData, setEditFormData] = useState({
    ROWID: '',
    Customer_Name: '',
    Customer_Phone: '',
    Customer_Address: '',
    Customer_Email: '',
    Customer_Whatsapp: ''
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('/server/waterheater_1_function/getcustomers')
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const ActionDropdown = ({ customer }) => (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleViewCustomer(customer)}>View</Dropdown.Item>
        <Dropdown.Item onClick={() => handleEditCustomer(customer)}>Edit</Dropdown.Item>
        <Dropdown.Item onClick={() => confirmDeleteCustomer(customer)}>Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );

  const handleViewCustomer = (customer) => {
    setSelectedCustomer(customer);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedCustomer(null);
    setShowModal(false);
    setShowEditModal(false);
  };

  const handleEditCustomer = (customer) => {
    setSelectedCustomer(customer);
    setEditFormData({
      ROWID: customer.ROWID,
      Customer_Name: customer.Customer_Name,
      Customer_Phone: customer.Customer_Phone,
      Customer_Address: customer.Customer_Address,
      Customer_Email: customer.Customer_Email,
      Customer_Whatsapp: customer.Customer_Whatsapp
    });
    setShowEditModal(true);
  };

  const handleEditInputChange = (e) => {
    setEditFormData({
      ...editFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleEditSubmit = () => {
    axios
      .put('/server/waterheater_1_function/updatecustomer', {
        data: editFormData
      })
      .then((res) => {
        console.log('Customer updated successfully');
        setShowEditModal(false);
        fetchData(); // Fetch updated data after edit
      })
      .catch((err) => {
        console.error('Error updating customer', err);
      });
  };

  const confirmDeleteCustomer = (customer) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this customer?');
    if (confirmDelete) {
      let payload ={
        data:{
          ROWID: customer.ROWID
        }
      }
      axios
        .delete('/server/waterheater_1_function/deletecustomer', {
          data: payload
        })
        .then((res) => {
          console.log('Customer deleted successfully');
          fetchData(); // Fetch updated data after delete
        })
        .catch((err) => {
          console.error('Error deleting customer', err);
        });
    }
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

      {/* View Customer Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Customer Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCustomer && (
            <>
              <p>Name: {selectedCustomer.Customer_Name}</p>
              <p>Phone: {selectedCustomer.Customer_Phone}</p>
              <p>Address: {selectedCustomer.Customer_Address}</p>
              <p>Email: {selectedCustomer.Customer_Email}</p>
              <p>WhatsApp: {selectedCustomer.Customer_Whatsapp}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Customer Modal */}
      <Modal show={showEditModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formCustomerName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="Customer_Name"
                value={editFormData.Customer_Name}
                onChange={handleEditInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formCustomerPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                name="Customer_Phone"
                value={editFormData.Customer_Phone}
                onChange={handleEditInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formCustomerAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                name="Customer_Address"
                value={editFormData.Customer_Address}
                onChange={handleEditInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formCustomerEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="Customer_Email"
                value={editFormData.Customer_Email}
                onChange={handleEditInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formCustomerWhatsapp">
              <Form.Label>WhatsApp</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter WhatsApp number"
                name="Customer_Whatsapp"
                value={editFormData.Customer_Whatsapp}
                onChange={handleEditInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleEditSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ViewCustomerDetails;
