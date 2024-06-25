import React, { useEffect, useState } from 'react';
import { Table, Dropdown, Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const ViewTechnicianDetails = () => {
  const [data, setData] = useState([]);
  const [selectedTechnician, setSelectedTechnician] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editFormData, setEditFormData] = useState({
    ROWID: '',
    Technician_Name: '',
    Technician_Phone: '',
    Technician_Address: '',
    Technician_Email: '',
    Technician_Whatsapp: ''
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('/server/waterheater_1_function/gettechnicians')
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const ActionDropdown = ({ technician }) => (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleViewTechnician(technician)}>View</Dropdown.Item>
        <Dropdown.Item onClick={() => handleEditTechnician(technician)}>Edit</Dropdown.Item>
        <Dropdown.Item onClick={() => confirmDeleteTechnician(technician)}>Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );

  const handleViewTechnician = (technician) => {
    setSelectedTechnician(technician);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedTechnician(null);
    setShowModal(false);
    setShowEditModal(false);
  };

  const handleEditTechnician = (technician) => {
    setSelectedTechnician(technician);
    setEditFormData({
      ROWID: technician.ROWID,
      Technician_Name: technician.Technician_Name,
      Technician_Phone: technician.Technician_Phone,
      Technician_Address: technician.Technician_Address,
      Technician_Email: technician.Technician_Email,
      Technician_Whatsapp: technician.Technician_Whatsapp
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
      .put('/server/waterheater_1_function/updatetechnician', {
        data: editFormData
      })
      .then((res) => {
        console.log('Technician updated successfully');
        setShowEditModal(false);
        fetchData(); // Fetch updated data after edit
      })
      .catch((err) => {
        console.error('Error updating technician', err);
      });
  };

  const confirmDeleteTechnician = (technician) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this technician?');
    if (confirmDelete) {
      let payload ={
        data:{
          ROWID: technician.ROWID
        }
      }
      axios
        .delete('/server/waterheater_1_function/deletetechnician', {
          data: payload
        })
        .then((res) => {
          console.log('Technician deleted successfully');
          fetchData(); // Fetch updated data after delete
        })
        .catch((err) => {
          console.error('Error deleting technician', err);
        });
    }
  };

  return (
    <div className='container'>
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
            {data.map((technician, index) => (
              <tr key={index}>
                <td>{technician.Technician_Name}</td>
                <td>{technician.Technician_Phone}</td>
                <td>{technician.Technician_Address}</td>
                <td>
                  <ActionDropdown technician={technician} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* View Technician Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Technician Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedTechnician && (
            <>
              <p>Name: {selectedTechnician.Technician_Name}</p>
              <p>Phone: {selectedTechnician.Technician_Phone}</p>
              <p>Address: {selectedTechnician.Technician_Address}</p>
              <p>Email: {selectedTechnician.Technician_Email}</p>
              <p>WhatsApp: {selectedTechnician.Technician_Whatsapp}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Technician Modal */}
      <Modal show={showEditModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Technician</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTechnicianName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="Technician_Name"
                value={editFormData.Technician_Name}
                onChange={handleEditInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formTechnicianPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                name="Technician_Phone"
                value={editFormData.Technician_Phone}
                onChange={handleEditInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formTechnicianAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                name="Technician_Address"
                value={editFormData.Technician_Address}
                onChange={handleEditInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formTechnicianEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="Technician_Email"
                value={editFormData.Technician_Email}
                onChange={handleEditInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formTechnicianWhatsapp">
              <Form.Label>WhatsApp</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter WhatsApp number"
                name="Technician_Whatsapp"
                value={editFormData.Technician_Whatsapp}
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

export default ViewTechnicianDetails;
