import React, { useEffect, useState } from 'react';
import { Table, Dropdown, Modal, Button } from 'react-bootstrap';
import axios from 'axios';

const ViewProblem = () => {
  const [data, setData] = useState([]);
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get('/server/waterheater_1_function/getproblems')
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const ActionDropdown = (problem) => (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleViewProblem(problem)}>View</Dropdown.Item>
        <Dropdown.Item>Edit</Dropdown.Item>
        <Dropdown.Item>Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );

  const handleViewProblem = (problem) => {
    setSelectedProblem(problem);
    console.log(problem)
    setShowModal(true);
  };

  const ProblemModal = () => {
    const handleCloseModal = () => {
      setSelectedProblem(null);
      setShowModal(false);
    };

    return (
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Problem Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProblem && (
            <>
              <p>Product Name: {selectedProblem.problem.Product_Name}</p>
              <p>Product Issue: {selectedProblem.problem.Product_Issue}</p>
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
              <th>Issue</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((problem, index) => (
              <tr key={index}>
                <td>{problem.Product_Name}</td>
                <td>{problem.Product_Issue}</td>
                <td>
                  <ActionDropdown problem={problem} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <ProblemModal />
    </div>
  );
};

export default ViewProblem;