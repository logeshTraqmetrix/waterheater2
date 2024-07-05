// import React, { useEffect, useState } from 'react';
// import { Table, Dropdown, Modal, Button, Form } from 'react-bootstrap';
// import axios from 'axios';

// const ViewTechnicianDetails = () => {
//   const [data, setData] = useState([]);
//   const [selectedTechnician, setSelectedTechnician] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [editFormData, setEditFormData] = useState({
//     ROWID: '',
//     Technician_Name: '',
//     Technician_Phone: '',
//     Technician_Address: '',
//     Technician_Email: '',
//     Technician_Whatsapp: ''
//   });

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = () => {
//     axios
//       .get('/server/waterheater_1_function/gettechnicians')
//       .then((res) => {
//         console.log(res.data);
//         setData(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const ActionDropdown = ({ technician }) => (
//     <Dropdown>
//       <Dropdown.Toggle variant="primary" id="dropdown-basic">
//       </Dropdown.Toggle>
//       <Dropdown.Menu>
//         <Dropdown.Item onClick={() => handleViewTechnician(technician)}>View</Dropdown.Item>
//         <Dropdown.Item onClick={() => handleEditTechnician(technician)}>Edit</Dropdown.Item>
//         <Dropdown.Item onClick={() => confirmDeleteTechnician(technician)}>Delete</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );

//   const handleViewTechnician = (technician) => {
//     setSelectedTechnician(technician);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setSelectedTechnician(null);
//     setShowModal(false);
//     setShowEditModal(false);
//   };

//   const handleEditTechnician = (technician) => {
//     setSelectedTechnician(technician);
//     setEditFormData({
//       ROWID: technician.ROWID,
//       Technician_Name: technician.Technician_Name,
//       Technician_Phone: technician.Technician_Phone,
//       Technician_Address: technician.Technician_Address,
//       Technician_Email: technician.Technician_Email,
//       Technician_Whatsapp: technician.Technician_Whatsapp
//     });
//     setShowEditModal(true);
//   };

//   const handleEditInputChange = (e) => {
//     setEditFormData({
//       ...editFormData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleEditSubmit = () => {
//     axios
//       .put('/server/waterheater_1_function/updatetechnician', {
//         data: editFormData
//       })
//       .then((res) => {
//         console.log('Technician updated successfully');
//         setShowEditModal(false);
//         fetchData(); // Fetch updated data after edit
//       })
//       .catch((err) => {
//         console.error('Error updating technician', err);
//       });
//   };

//   const confirmDeleteTechnician = (technician) => {
//     const confirmDelete = window.confirm('Are you sure you want to delete this technician?');
//     if (confirmDelete) {
//       let payload ={
//         data:{
//           ROWID: technician.ROWID
//         }
//       }
//       axios
//         .delete('/server/waterheater_1_function/deletetechnician', {
//           data: payload
//         })
//         .then((res) => {
//           console.log('Technician deleted successfully');
//           fetchData(); // Fetch updated data after delete
//         })
//         .catch((err) => {
//           console.error('Error deleting technician', err);
//         });
//     }
//   };

//   return (
//     <div className='container'>
//       <div className="table-responsive">
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Phone</th>
//               <th>Address</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((technician, index) => (
//               <tr key={index}>
//                 <td>{technician.Technician_Name}</td>
//                 <td>{technician.Technician_Phone}</td>
//                 <td>{technician.Technician_Address}</td>
//                 <td>
//                   <ActionDropdown technician={technician} />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>

//       {/* View Technician Modal */}
//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Technician Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedTechnician && (
//             <>
//               <p>Name: {selectedTechnician.Technician_Name}</p>
//               <p>Phone: {selectedTechnician.Technician_Phone}</p>
//               <p>Address: {selectedTechnician.Technician_Address}</p>
//               <p>Email: {selectedTechnician.Technician_Email}</p>
//               <p>WhatsApp: {selectedTechnician.Technician_Whatsapp}</p>
//             </>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       {/* Edit Technician Modal */}
//       <Modal show={showEditModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Technician</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="formTechnicianName">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter name"
//                 name="Technician_Name"
//                 value={editFormData.Technician_Name}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formTechnicianPhone">
//               <Form.Label>Phone</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter phone number"
//                 name="Technician_Phone"
//                 value={editFormData.Technician_Phone}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formTechnicianAddress">
//               <Form.Label>Address</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter address"
//                 name="Technician_Address"
//                 value={editFormData.Technician_Address}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formTechnicianEmail">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter email"
//                 name="Technician_Email"
//                 value={editFormData.Technician_Email}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formTechnicianWhatsapp">
//               <Form.Label>WhatsApp</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter WhatsApp number"
//                 name="Technician_Whatsapp"
//                 value={editFormData.Technician_Whatsapp}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Cancel
//           </Button>
//           <Button variant="primary" onClick={handleEditSubmit}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default ViewTechnicianDetails;






















import React, { useEffect, useState } from 'react';
import { Table, Dropdown, Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import HashLoader from 'react-spinners/HashLoader'; // Import HashLoader for loading indicator
import Swal from 'sweetalert2'; // Import Swal for delete confirmation alert

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
  const [loading, setLoading] = useState(false); // State for loading indicator

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true); // Start loading indicator
    axios
      .get('/server/waterheater_1_function/gettechnicians')
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false); // Stop loading indicator
      });
  };

  const ActionDropdown = ({ technician }) => (
    <Dropdown  drop={'start'}>
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

    if (
      editFormData.Technician_Name === '' ||
      editFormData.Technician_Phone === '' ||
      editFormData.Technician_Address === '' ||
      editFormData.Technician_Email === '' ||
      editFormData.Technician_Whatsapp === ''
    ) {
      Swal.fire('Error!', 'Please fill out all fields.', 'error');
      return;
    }
    
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
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this technician!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('conformed')
        console.log(technician)
        axios
          .delete('/server/waterheater_1_function/deletetechnician', {
            data:{data: { ROWID: technician.ROWID }}
          })
          .then((res) => {
            console.log('Technician deleted successfully');
            fetchData();
            Swal.fire('Deleted!', 'The technician has been deleted.', 'success');
          })
          .catch((err) => {
            console.error('Error deleting technician', err);
            Swal.fire('Error!', 'Failed to delete technician.', 'error');
          });
      }
    });
  };


  return (
    <div className='container'>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '94vh' }}>
          {/* <Spinner animation="border" variant="primary" /> */}
          <HashLoader color="#2080c2" />
        </div>
      ) : data.length === 0 ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '94vh' }}>
          <h1>No Data Added</h1>
        </div>
      ) : (

        <div>
           <h2>Technician Details</h2>
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
        </div>
       )}

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
                required
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
                required
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
                required
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
                required
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
