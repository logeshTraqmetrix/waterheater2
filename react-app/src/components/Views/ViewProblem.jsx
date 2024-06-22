// import React, { useEffect, useState } from 'react';
// import { Table, Dropdown, Modal, Button } from 'react-bootstrap';
// import axios from 'axios';

// const ViewProblem = () => {
//   const [data, setData] = useState([]);
//   const [selectedProblem, setSelectedProblem] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     axios
//       .get('/server/waterheater_1_function/getproblems')
//       .then((res) => {
//         console.log(res.data);
//         setData(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   const ActionDropdown = (problem) => (
//     <Dropdown>
//       <Dropdown.Toggle variant="primary" id="dropdown-basic">
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//         <Dropdown.Item onClick={() => handleViewProblem(problem)}>View</Dropdown.Item>
//         <Dropdown.Item>Edit</Dropdown.Item>
//         <Dropdown.Item>Delete</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );

//   const handleViewProblem = (problem) => {
//     setSelectedProblem(problem);
//     console.log(problem)
//     setShowModal(true);
//   };

//   const ProblemModal = () => {
//     const handleCloseModal = () => {
//       setSelectedProblem(null);
//       setShowModal(false);
//     };

//     return (
//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Problem Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedProblem && (
//             <>
//               <p>Product Name: {selectedProblem.problem.Product_Name}</p>
//               <p>Product Issue: {selectedProblem.problem.Product_Issue}</p>
//             </>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     );
//   };

//   return (
//     <div>
//       <div className="table-responsive">
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Issue</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((problem, index) => (
//               <tr key={index}>
//                 <td>{problem.Product_Name}</td>
//                 <td>{problem.Product_Issue}</td>
//                 <td>
//                   <ActionDropdown problem={problem} />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>
//       <ProblemModal />
//     </div>
//   );
// };

// export default ViewProblem;





import React, { useEffect, useState } from 'react';
import { Table, Dropdown, Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const ViewProblem = () => {
  const [data, setData] = useState([]);
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editFormData, setEditFormData] = useState({
    ROWID: '',
    Product_Name: '',
    Product_Issue: ''
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('/server/waterheater_1_function/getproblems')
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const ActionDropdown = ({ problem }) => (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Actions
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleViewProblem(problem)}>View</Dropdown.Item>
        <Dropdown.Item onClick={() => handleEditProblem(problem)}>Edit</Dropdown.Item>
        <Dropdown.Item onClick={() => confirmDeleteProblem(problem)}>Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );

  const handleViewProblem = (problem) => {
    setSelectedProblem(problem);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProblem(null);
    setShowModal(false);
    setShowEditModal(false);
  };

  const handleEditProblem = (problem) => {
    setSelectedProblem(problem);
    setEditFormData({
      ROWID: problem.ROWID,
      Product_Name: problem.Product_Name,
      Product_Issue: problem.Product_Issue
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
      .put('/server/waterheater_1_function/updateproblem', {
        data: editFormData
      })
      .then((res) => {
        console.log('Problem updated successfully');
        setShowEditModal(false);
        fetchData(); // Fetch updated data after edit
      })
      .catch((err) => {
        console.error('Error updating problem', err);
      });
  };

  const confirmDeleteProblem = (problem) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this problem?');
    if (confirmDelete) {
      let payload = {
        data: {
          ROWID: problem.ROWID
        }
      };
      axios
        .delete('/server/waterheater_1_function/deleteproblem', {
          data: payload
        })
        .then((res) => {
          console.log('Problem deleted successfully');
          fetchData(); // Fetch updated data after delete
        })
        .catch((err) => {
          console.error('Error deleting problem', err);
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

      {/* View Problem Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Problem Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProblem && (
            <>
              <p>Product Name: {selectedProblem.Product_Name}</p>
              <p>Product Issue: {selectedProblem.Product_Issue}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Problem Modal */}
      <Modal show={showEditModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Problem</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formProductName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="Product_Name"
                value={editFormData.Product_Name}
                onChange={handleEditInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formProductIssue">
              <Form.Label>Issue</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter issue"
                name="Product_Issue"
                value={editFormData.Product_Issue}
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

export default ViewProblem;
