import React, { useEffect, useState } from 'react';
import { Table, Dropdown, Modal, Button } from 'react-bootstrap';
import axios from 'axios';

const ViewTechnicianDetails = () => {
  const [data, setData] = useState([]);
  const [selectedTechnician, setSelectedTechnician] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get('/server/waterheater_1_function/gettechnicians')
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const ActionDropdown = (technician) => (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleViewTechnician(technician)}>View</Dropdown.Item>
        <Dropdown.Item>Edit</Dropdown.Item>
        <Dropdown.Item>Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );

  const handleViewTechnician = (technician) => {
    setSelectedTechnician(technician);
    console.log(technician)
    setShowModal(true);
  };

  const TechnicianModal = () => {
    const handleCloseModal = () => {
      setSelectedTechnician(null);
      setShowModal(false);
    };

    return (
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Technician Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedTechnician && (
            <>
              <p>Name: {selectedTechnician.technician.Technician_Name}</p>
              <p>Phone: {selectedTechnician.technician.Technician_Phone}</p>
              <p>Address: {selectedTechnician.technician.Technician_Address}</p>
              <p>Email: {selectedTechnician.technician.Technician_Email}</p>
              <p>WhatsApp : {selectedTechnician.technician.Technician_Whatsapp}</p>
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
      <TechnicianModal />
    </div>
  );
};

export default ViewTechnicianDetails;