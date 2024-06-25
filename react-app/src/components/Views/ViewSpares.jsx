// import React, { useEffect, useState } from 'react';
// import { Table, Dropdown, Modal, Button, Form } from 'react-bootstrap';
// import axios from 'axios';

// const ViewSpares = () => {
//   const [data, setData] = useState([]);
//   const [selectedSpares, setSelectedSpares] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [editFormData, setEditFormData] = useState({
//     ROWID: '',
//     Material_Name: '',
//     Warranty: '',
//     Consumed_Qty: '',
//     Price: '',
//     Available_Qty: '',
//     Inward_Qty: ''
//   });

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = () => {
//     axios
//       .get('/server/waterheater_1_function/getspares')
//       .then((res) => {
//         console.log(res.data);
//         setData(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const ActionDropdown = ({ spares }) => (
//     <Dropdown>
//       <Dropdown.Toggle variant="primary" id="dropdown-basic">
//         Actions
//       </Dropdown.Toggle>
//       <Dropdown.Menu>
//         <Dropdown.Item onClick={() => handleViewSpares(spares)}>View</Dropdown.Item>
//         <Dropdown.Item onClick={() => handleEditSpares(spares)}>Edit</Dropdown.Item>
//         <Dropdown.Item onClick={() => confirmDeleteSpares(spares)}>Delete</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );

//   const handleViewSpares = (spares) => {
//     setSelectedSpares(spares);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setSelectedSpares(null);
//     setShowModal(false);
//     setShowEditModal(false);
//   };

//   const handleEditSpares = (spares) => {
//     setSelectedSpares(spares);
//     setEditFormData({
//       ROWID: spares.ROWID,
//       Material_Name: spares.Material_Name,
//       Warranty: spares.Warranty,
//       Consumed_Qty: spares.Consumed_Qty,
//       Price: spares.Price,
//       Available_Qty: spares.Available_Qty,
//       Inward_Qty: spares.Inward_Qty
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
//     console.log('editFormData',editFormData)
//     axios
//       .put('/server/waterheater_1_function/updatespares', {
//         data: [editFormData]
//       })
//       .then((res) => {
//         console.log('Spares updated successfully');
//         setShowEditModal(false);
//         fetchData(); // Fetch updated data after edit
//       })
//       .catch((err) => {
//         console.error('Error updating spares', err);
//       });
//   };

//   const confirmDeleteSpares = (spares) => {
//     const confirmDelete = window.confirm('Are you sure you want to delete this spares?');
//     if (confirmDelete) {
//       let payload = {
//         data: {
//           ROWID: spares.ROWID
//         }
//       };
//       axios
//         .delete('/server/waterheater_1_function/deletespare', {
//           data: payload
//         })
//         .then((res) => {
//           console.log('Spares deleted successfully');
//           fetchData(); // Fetch updated data after delete
//         })
//         .catch((err) => {
//           console.error('Error deleting spares', err);
//         });
//     }
//   };

//   return (
//     <div>
//       <div className="table-responsive">
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>M_Name</th>
//               <th>Price</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((spares, index) => (
//               <tr key={index}>
//                 <td>{spares.Material_Name}</td>
//                 <td>{spares.Price}</td>
//                 <td>
//                   <ActionDropdown spares={spares} />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>

//       {/* View Spares Modal */}
//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Spares Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedSpares && (
//             <>
//               <p>Material_Name: {selectedSpares.Material_Name}</p>
//               <p>Warranty: {selectedSpares.Warranty}</p>
//               <p>Consumed_Qty: {selectedSpares.Consumed_Qty}</p>
//               <p>Price: {selectedSpares.Price}</p>
//               <p>Available_Qty : {selectedSpares.Available_Qty}</p>
//               <p>Inward_Qty : {selectedSpares.Inward_Qty}</p>
//             </>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       {/* Edit Spares Modal */}
//       <Modal show={showEditModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Spares</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="formMaterialName">
//               <Form.Label>Material Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter material name"
//                 name="Material_Name"
//                 value={editFormData.Material_Name}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formWarranty">
//               <Form.Label>Warranty</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter warranty"
//                 name="Warranty"
//                 value={editFormData.Warranty}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formConsumedQty">
//               <Form.Label>Consumed Qty</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter consumed qty"
//                 name="Consumed_Qty"
//                 value={editFormData.Consumed_Qty}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formPrice">
//               <Form.Label>Price</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter price"
//                 name="Price"
//                 value={editFormData.Price}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formAvailableQty">
//               <Form.Label>Available Qty</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter available qty"
//                 name="Available_Qty"
//                 value={editFormData.Available_Qty}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formInwardQty">
//               <Form.Label>Inward Qty</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter inward qty"
//                 name="Inward_Qty"
//                 value={editFormData.Inward_Qty}
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
// export default ViewSpares;





// import React, { useEffect, useState } from 'react';
// import { Table, Dropdown, Modal, Button, Form } from 'react-bootstrap';
// import { Pagination } from 'antd';
// import axios from 'axios';

// const ViewSpares = () => {
//   const [data, setData] = useState([]);
//   const [selectedSpares, setSelectedSpares] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [editFormData, setEditFormData] = useState({
//     ROWID: '',
//     Material_Name: '',
//     Warranty: '',
//     Consumed_Qty: '',
//     Price: '',
//     Available_Qty: '',
//     Inward_Qty: ''
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const [pageSize] = useState(10); // Number of records per page
//   const [totalRecords, setTotalRecords] = useState(0);

//   useEffect(() => {
//     fetchData();
//   }, [currentPage]); // Fetch data when currentPage changes

//   const fetchData = () => {
//     axios
//       .get('/server/waterheater_1_function/allgetspares', {
//         params: { limit: pageSize, offset: (currentPage - 1) * pageSize }
//       })
//       .then((res) => {
//         console.log(res.data);
//         setData(res.data.records);
//         setTotalRecords(res.data.total);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const ActionDropdown = ({ spares }) => (
//     <Dropdown>
//       <Dropdown.Toggle variant="primary" id="dropdown-basic">
//         Actions
//       </Dropdown.Toggle>
//       <Dropdown.Menu>
//         <Dropdown.Item onClick={() => handleViewSpares(spares)}>View</Dropdown.Item>
//         <Dropdown.Item onClick={() => handleEditSpares(spares)}>Edit</Dropdown.Item>
//         <Dropdown.Item onClick={() => confirmDeleteSpares(spares)}>Delete</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );

//   const handleViewSpares = (spares) => {
//     setSelectedSpares(spares);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setSelectedSpares(null);
//     setShowModal(false);
//     setShowEditModal(false);
//   };

//   const handleEditSpares = (spares) => {
//     setSelectedSpares(spares);
//     setEditFormData({
//       ROWID: spares.ROWID,
//       Material_Name: spares.Material_Name,
//       Warranty: spares.Warranty,
//       Consumed_Qty: spares.Consumed_Qty,
//       Price: spares.Price,
//       Available_Qty: spares.Available_Qty,
//       Inward_Qty: spares.Inward_Qty
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
//     console.log('editFormData', editFormData);
//     axios
//       .put('/server/waterheater_1_function/updatespares', {
//         data: [editFormData]
//       })
//       .then((res) => {
//         console.log('Spares updated successfully');
//         setShowEditModal(false);
//         fetchData(); // Fetch updated data after edit
//       })
//       .catch((err) => {
//         console.error('Error updating spares', err);
//       });
//   };

//   const confirmDeleteSpares = (spares) => {
//     const confirmDelete = window.confirm('Are you sure you want to delete this spares?');
//     if (confirmDelete) {
//       let payload = {
//         data: {
//           ROWID: spares.ROWID
//         }
//       };
//       axios
//         .delete('/server/waterheater_1_function/deletespare', {
//           data: payload
//         })
//         .then((res) => {
//           console.log('Spares deleted successfully');
//           fetchData(); // Fetch updated data after delete
//         })
//         .catch((err) => {
//           console.error('Error deleting spares', err);
//         });
//     }
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div>
//       <div className="table-responsive">
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>M_Name</th>
//               <th>Price</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((spares, index) => (
//               <tr key={index}>
//                 <td>{spares.spares_table.Material_Name}</td>
//                 <td>{spares.spares_table.Price}</td>
//                 <td>
//                   <ActionDropdown spares={spares.spares_table} />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>

//       <Pagination
//         current={currentPage}
//         pageSize={pageSize}
//         total={totalRecords}
//         onChange={handlePageChange}
//         showSizeChanger={false}
//       />

//       {/* View Spares Modal */}
//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Spares Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedSpares && (
//             <>
//               <p>Material_Name: {selectedSpares.Material_Name}</p>
//               <p>Warranty: {selectedSpares.Warranty}</p>
//               <p>Consumed_Qty: {selectedSpares.Consumed_Qty}</p>
//               <p>Price: {selectedSpares.Price}</p>
//               <p>Available_Qty: {selectedSpares.Available_Qty}</p>
//               <p>Inward_Qty: {selectedSpares.Inward_Qty}</p>
//             </>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       {/* Edit Spares Modal */}
//       <Modal show={showEditModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Spares</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="formMaterialName">
//               <Form.Label>Material Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter material name"
//                 name="Material_Name"
//                 value={editFormData.Material_Name}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formWarranty">
//               <Form.Label>Warranty</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter warranty"
//                 name="Warranty"
//                 value={editFormData.Warranty}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formConsumedQty">
//               <Form.Label>Consumed Qty</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter consumed qty"
//                 name="Consumed_Qty"
//                 value={editFormData.Consumed_Qty}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formPrice">
//               <Form.Label>Price</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter price"
//                 name="Price"
//                 value={editFormData.Price}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formAvailableQty">
//               <Form.Label>Available Qty</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter available qty"
//                 name="Available_Qty"
//                 value={editFormData.Available_Qty}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formInwardQty">
//               <Form.Label>Inward Qty</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter inward qty"
//                 name="Inward_Qty"
//                 value={editFormData.Inward_Qty}
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

// export default ViewSpares;










import React, { useEffect, useState } from 'react';
import { Table, Dropdown, Modal, Button, Form, DropdownButton } from 'react-bootstrap';
import { Pagination } from 'antd';
import axios from 'axios';
import { FaFilter } from "react-icons/fa6";


const ViewSpares = () => {
  const [data, setData] = useState([]);
  const [selectedSpares, setSelectedSpares] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filterValue, setFilterValue] = useState('');
  const [editFormData, setEditFormData] = useState({
    ROWID: '',
    Material_Name: '',
    Warranty: '',
    Consumed_Qty: '',
    Price: '',
    Available_Qty: '',
    Inward_Qty: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);
  const [totalRecords, setTotalRecords] = useState(0);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = (value = '') => {
    const params = { limit: pageSize, offset: (currentPage - 1) * pageSize };
    let endpoint = '/server/waterheater_1_function/allgetspares';

    if (value) {
      endpoint = '/server/waterheater_1_function/getfilterspates';
      params.search = JSON.stringify({
        table: 'spares_table',
        column: 'Material_Name',
        value
      });
    }

    axios
      .get(endpoint, { params })
      .then((res) => {
        console.log(res.data);
        if (value) {
          setData(res.data);
          setTotalRecords(res.data.length);
        } else {
          setData(res.data.records);
          setTotalRecords(res.data.total);
        }
        setFilterValue('');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFilterSubmit = () => {
    if (filterValue) {
      fetchData(filterValue);
      setShowFilterModal(false);
    }
  };

  // ... (keep the existing ActionDropdown, handleViewSpares, handleCloseModal, handleEditSpares, handleEditInputChange, handleEditSubmit, confirmDeleteSpares, and handlePageChange functions)
  const ActionDropdown = ({ spares }) => (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">

      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleViewSpares(spares)}>View</Dropdown.Item>
        <Dropdown.Item onClick={() => handleEditSpares(spares)}>Edit</Dropdown.Item>
        <Dropdown.Item onClick={() => confirmDeleteSpares(spares)}>Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );

  const handleViewSpares = (spares) => {
    setSelectedSpares(spares);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedSpares(null);
    setShowModal(false);
    setShowEditModal(false);
  };

  const handleEditSpares = (spares) => {
    setSelectedSpares(spares);
    setEditFormData({
      ROWID: spares.ROWID,
      Material_Name: spares.Material_Name,
      Warranty: spares.Warranty,
      Consumed_Qty: spares.Consumed_Qty,
      Price: spares.Price,
      Available_Qty: spares.Available_Qty,
      Inward_Qty: spares.Inward_Qty
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
    console.log('editFormData', editFormData);
    axios
      .put('/server/waterheater_1_function/updatespares', {
        data: [editFormData]
      })
      .then((res) => {
        console.log('Spares updated successfully');
        setShowEditModal(false);
        fetchData(); // Fetch updated data after edit
      })
      .catch((err) => {
        console.error('Error updating spares', err);
      });
  };

  const confirmDeleteSpares = (spares) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this spares?');
    if (confirmDelete) {
      let payload = {
        data: {
          ROWID: spares.ROWID
        }
      };
      axios
        .delete('/server/waterheater_1_function/deletespare', {
          data: payload
        })
        .then((res) => {
          console.log('Spares deleted successfully');
          fetchData(); // Fetch updated data after delete
        })
        .catch((err) => {
          console.error('Error deleting spares', err);
        });
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const FilterDropDown = () => (
    <DropdownButton id="dropdown-basic-button" title={<FaFilter/>}>
      <Dropdown.Item onClick={() => setShowFilterModal(true)}>Material Name</Dropdown.Item>
    </DropdownButton>
  );

  return (
    <div className='container'>
      <div className="d-flex justify-content-end mb-2">
        <FilterDropDown/>
      </div>
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
                <td>{spares.spares_table.Material_Name}</td>
                <td>{spares.spares_table.Price}</td>
                <td>
                  <ActionDropdown spares={spares.spares_table} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className='d-flex justify-content-center ' style={{ margin: '30px' }}>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={totalRecords}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
      {/* Keep existing View and Edit Modals */}

      {/* View Spares Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Spares Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedSpares && (
            <>
              <p>Material_Name: {selectedSpares.Material_Name}</p>
              <p>Warranty: {selectedSpares.Warranty}</p>
              <p>Consumed_Qty: {selectedSpares.Consumed_Qty}</p>
              <p>Price: {selectedSpares.Price}</p>
              <p>Available_Qty: {selectedSpares.Available_Qty}</p>
              <p>Inward_Qty: {selectedSpares.Inward_Qty}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Spares Modal */}
      <Modal show={showEditModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Spares</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formMaterialName">
              <Form.Label>Material Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter material name"
                name="Material_Name"
                value={editFormData.Material_Name}
                onChange={handleEditInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formWarranty">
              <Form.Label>Warranty</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter warranty"
                name="Warranty"
                value={editFormData.Warranty}
                onChange={handleEditInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formConsumedQty">
              <Form.Label>Consumed Qty</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter consumed qty"
                name="Consumed_Qty"
                value={editFormData.Consumed_Qty}
                onChange={handleEditInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter price"
                name="Price"
                value={editFormData.Price}
                onChange={handleEditInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formAvailableQty">
              <Form.Label>Available Qty</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter available qty"
                name="Available_Qty"
                value={editFormData.Available_Qty}
                onChange={handleEditInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formInwardQty">
              <Form.Label>Inward Qty</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter inward qty"
                name="Inward_Qty"
                value={editFormData.Inward_Qty}
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

      {/* Filter Modal */}
      <Modal show={showFilterModal} onHide={() => setShowFilterModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Filter Spares by Material Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formFilterValue">
              <Form.Label>Material Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Material Name"
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowFilterModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleFilterSubmit}>
            Search
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ViewSpares;