import React, { useEffect, useState } from 'react';
import { Table, Dropdown, Modal, Button } from 'react-bootstrap';
import axios from 'axios';

const ViewSpares = () => {
  const [data, setData] = useState([]);
  const [selectedSpares, setSelectedSpares] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get('/server/waterheater_1_function/getspares')
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const ActionDropdown = (spares) => (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleViewSpares(spares)}>View</Dropdown.Item>
        <Dropdown.Item>Edit</Dropdown.Item>
        <Dropdown.Item>Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );

  const handleViewSpares = (spares) => {
    setSelectedSpares(spares);
    console.log(spares)
    setShowModal(true);
  };

  const SparesModal = () => {
    const handleCloseModal = () => {
      setSelectedSpares(null);
      setShowModal(false);
    };

    return (
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Spares Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedSpares && (
            <>
              <p>Material_Name: {selectedSpares.spares.Material_Name}</p>
              <p>Warranty: {selectedSpares.spares.Warranty}</p>
              <p>Consumed_Qty: {selectedSpares.spares.Consumed_Qty}</p>
              <p>Price: {selectedSpares.spares.Price}</p>
              <p>Available_Qty : {selectedSpares.spares.Available_Qty}</p>
              <p>Inward_Qty : {selectedSpares.spares.Inward_Qty}</p>

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
              <th>M_Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((spares, index) => (
              <tr key={index}>
                <td>{spares.Material_Name}</td>
                <td>{spares.Price}</td>
                <td>
                  <ActionDropdown spares={spares} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <SparesModal />
    </div>
  );
};

export default ViewSpares;