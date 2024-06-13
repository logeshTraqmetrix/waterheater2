import React, { useEffect, useState } from 'react';
import { Table, Dropdown, Modal, Button } from 'react-bootstrap';
import axios from 'axios';

const ViewLogs = () => {
  const [data, setData] = useState([]);
  const [selectedLogs, setSelectedLogs] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get('/server/waterheater_1_function/getlogs')
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const ActionDropdown = (logs) => (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleViewLogs(logs)}>View</Dropdown.Item>
        <Dropdown.Item>Edit</Dropdown.Item>
        <Dropdown.Item>Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );

  const handleViewLogs = (logs) => {
    setSelectedLogs(logs);
    console.log(logs)
    setShowModal(true);
  };

  const LogsModal = () => {
    const handleCloseModal = () => {
      setSelectedLogs(null);
      setShowModal(false);
    };

    return (
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Logs Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedLogs && (
            <>
              <p>Product Name: {selectedLogs.logs.Description}</p>

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
              <th>Description</th>
              
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((logs, index) => (
              <tr key={index}>
                <td>{logs.Description}</td>
                <td>
                  <ActionDropdown logs={logs} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <LogsModal />
    </div>
  );
};

export default ViewLogs;