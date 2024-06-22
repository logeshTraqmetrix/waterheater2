import React, { useEffect, useState } from 'react';
import { Table, Dropdown, Modal, Button } from 'react-bootstrap';
import axios from 'axios';

const ViewFeedback = () => {
  const [data, setData] = useState([]);
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get('/server/waterheater_1_function/getfeedbacks')
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const ActionDropdown = (feedback) => (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic"></Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleViewFeedback(feedback)}>
          View
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleDeleteFeedback(feedback)}>
          Delete
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );

  const handleViewFeedback = (feedback) => {
    setSelectedFeedback(feedback);
    console.log(feedback);
    setShowModal(true);
  };

 
  const handleDeleteFeedback = (feedback) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this feedback?"
    );
  
    if (confirmDelete) {
      const payload = {
        data: {
          ROWID: feedback.feedback.ROWID,
        },
      };
      console.log(payload)
  
      axios
        .delete("/server/waterheater_1_function/deletefeedback", {data:payload})
        .then((res) => {
          console.log(res.data);
          // Remove the deleted feedback from the data array
          setData(data.filter((item) => item.ROWID !== feedback.feedback.ROWID));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const FeedbackModal = () => {
    const handleCloseModal = () => {
      setSelectedFeedback(null);
      setShowModal(false);
    };

    return (
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Feedback Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedFeedback && (
            <>
              <p>Rating: {selectedFeedback.feedback.Rate_Us}</p>
              <p>Comments: {selectedFeedback.feedback.Comments}</p>
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
              <th>Rating</th>
              <th>Comments</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((feedback, index) => (
              <tr key={index}>
                <td>{feedback.Rate_Us}</td>
                <td>{feedback.Comments}</td>
                <td>
                  <ActionDropdown feedback={feedback} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <FeedbackModal />
    </div>
  );
};

export default ViewFeedback;