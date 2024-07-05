// import React, { useEffect, useState } from 'react';
// import { Table, Dropdown, Modal, Button, Form } from 'react-bootstrap';
// import axios from 'axios';

// const ViewCustomerDetails = () => {
//   const [data, setData] = useState([]);
//   const [selectedCustomer, setSelectedCustomer] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [editFormData, setEditFormData] = useState({
//     ROWID: '',
//     Customer_Name: '',
//     Customer_Phone: '',
//     Customer_Address: '',
//     Customer_Email: '',
//     Customer_Whatsapp: ''
//   });

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = () => {
//     axios
//       .get('/server/waterheater_1_function/getallcustomer')
//       .then((res) => {
//         console.log(res.data);
//         setData(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const ActionDropdown = ({ customer }) => (
//     <Dropdown>
//       <Dropdown.Toggle variant="primary" id="dropdown-basic">
//       </Dropdown.Toggle>
//       <Dropdown.Menu>
//         <Dropdown.Item onClick={() => handleViewCustomer(customer)}>View</Dropdown.Item>
//         <Dropdown.Item onClick={() => handleEditCustomer(customer)}>Edit</Dropdown.Item>
//         <Dropdown.Item onClick={() => confirmDeleteCustomer(customer)}>Delete</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );

//   const handleViewCustomer = (customer) => {
//     setSelectedCustomer(customer);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setSelectedCustomer(null);
//     setShowModal(false);
//     setShowEditModal(false);
//   };

//   const handleEditCustomer = (customer) => {
//     setSelectedCustomer(customer);
//     setEditFormData({
//       ROWID: customer.ROWID,
//       Customer_Name: customer.Customer_Name,
//       Customer_Phone: customer.Customer_Phone,
//       Customer_Address: customer.Customer_Address,
//       Customer_Email: customer.Customer_Email,
//       Customer_Whatsapp: customer.Customer_Whatsapp
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
//       .put('/server/waterheater_1_function/updatecustomer', {
//         data: editFormData
//       })
//       .then((res) => {
//         console.log('Customer updated successfully');
//         setShowEditModal(false);
//         fetchData(); // Fetch updated data after edit
//       })
//       .catch((err) => {
//         console.error('Error updating customer', err);
//       });
//   };

//   const confirmDeleteCustomer = (customer) => {
//     const confirmDelete = window.confirm('Are you sure you want to delete this customer?');
//     if (confirmDelete) {
//       let payload ={
//         data:{
//           ROWID: customer.ROWID
//         }
//       }
//       axios
//         .delete('/server/waterheater_1_function/deletecustomer', {
//           data: payload
//         })
//         .then((res) => {
//           console.log('Customer deleted successfully');
//           fetchData(); // Fetch updated data after delete
//         })
//         .catch((err) => {
//           console.error('Error deleting customer', err);
//         });
//     }
//   };

//   return (
//     <div>
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
//             {data.map((customer, index) => (
//               <tr key={index}>
//                 <td>{customer.customer_details.Customer_Name}</td>
//                 <td>{customer.customer_details.Customer_Phone}</td>
//                 <td>{customer.customer_details.Customer_Address}</td>
//                 <td>
//                   <ActionDropdown customer={customer.customer_details} />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>

//       {/* View Customer Modal */}
//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Customer Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedCustomer && (
//             <>
//               <p>Name: {selectedCustomer.Customer_Name}</p>
//               <p>Phone: {selectedCustomer.Customer_Phone}</p>
//               <p>Address: {selectedCustomer.Customer_Address}</p>
//               <p>Email: {selectedCustomer.Customer_Email}</p>
//               <p>WhatsApp: {selectedCustomer.Customer_Whatsapp}</p>
//             </>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       {/* Edit Customer Modal */}
//       <Modal show={showEditModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Customer</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="formCustomerName">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter name"
//                 name="Customer_Name"
//                 value={editFormData.Customer_Name}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formCustomerPhone">
//               <Form.Label>Phone</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter phone number"
//                 name="Customer_Phone"
//                 value={editFormData.Customer_Phone}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formCustomerAddress">
//               <Form.Label>Address</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter address"
//                 name="Customer_Address"
//                 value={editFormData.Customer_Address}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formCustomerEmail">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter email"
//                 name="Customer_Email"
//                 value={editFormData.Customer_Email}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formCustomerWhatsapp">
//               <Form.Label>WhatsApp</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter WhatsApp number"
//                 name="Customer_Whatsapp"
//                 value={editFormData.Customer_Whatsapp}
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

// export default ViewCustomerDetails;


//=======================without pagination =======================================




// testing1 

// import React, { useEffect, useState } from 'react';
// import { Table, Dropdown, Modal, Button, Form } from 'react-bootstrap';
// import axios from 'axios';

// const ViewCustomerDetails = () => {
//   const [data, setData] = useState([]);
//   const [selectedCustomer, setSelectedCustomer] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [editFormData, setEditFormData] = useState({
//     ROWID: '',
//     Customer_Name: '',
//     Customer_Phone: '',
//     Customer_Address: '',
//     Customer_Email: '',
//     Customer_Whatsapp: ''
//   });
//   const [limit] = useState(10); // Number of records per page
//   const [offset, setOffset] = useState(0); // Current offset

//   useEffect(() => {
//     fetchData();
//   }, [offset]); // Fetch data when offset changes

//   const fetchData = () => {
//     axios
//       .get('/server/waterheater_1_function/getallcustomer', {
//         params: { limit, offset }
//       })
//       .then((res) => {
//         console.log(res.data);
//         setData(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const ActionDropdown = ({ customer }) => (
//     <Dropdown>
//       <Dropdown.Toggle variant="primary" id="dropdown-basic">
//         Actions
//       </Dropdown.Toggle>
//       <Dropdown.Menu>
//         <Dropdown.Item onClick={() => handleViewCustomer(customer)}>View</Dropdown.Item>
//         <Dropdown.Item onClick={() => handleEditCustomer(customer)}>Edit</Dropdown.Item>
//         <Dropdown.Item onClick={() => confirmDeleteCustomer(customer)}>Delete</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );

//   const handleViewCustomer = (customer) => {
//     setSelectedCustomer(customer);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setSelectedCustomer(null);
//     setShowModal(false);
//     setShowEditModal(false);
//   };

//   const handleEditCustomer = (customer) => {
//     setSelectedCustomer(customer);
//     setEditFormData({
//       ROWID: customer.ROWID,
//       Customer_Name: customer.Customer_Name,
//       Customer_Phone: customer.Customer_Phone,
//       Customer_Address: customer.Customer_Address,
//       Customer_Email: customer.Customer_Email,
//       Customer_Whatsapp: customer.Customer_Whatsapp
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
//       .put('/server/waterheater_1_function/updatecustomer', {
//         data: editFormData
//       })
//       .then((res) => {
//         console.log('Customer updated successfully');
//         setShowEditModal(false);
//         fetchData(); // Fetch updated data after edit
//       })
//       .catch((err) => {
//         console.error('Error updating customer', err);
//       });
//   };

//   const confirmDeleteCustomer = (customer) => {
//     const confirmDelete = window.confirm('Are you sure you want to delete this customer?');
//     if (confirmDelete) {
//       let payload = {
//         data: {
//           ROWID: customer.ROWID
//         }
//       };
//       axios
//         .delete('/server/waterheater_1_function/deletecustomer', {
//           data: payload
//         })
//         .then((res) => {
//           console.log('Customer deleted successfully');
//           fetchData(); // Fetch updated data after delete
//         })
//         .catch((err) => {
//           console.error('Error deleting customer', err);
//         });
//     }
//   };

//   const handleNextPage = () => {
//     setOffset(offset + limit);
//   };

//   const handlePreviousPage = () => {
//     if (offset >= limit) {
//       setOffset(offset - limit);
//     }
//   };

//   return (
//     <div>
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
//             {data.map((customer, index) => (
//               <tr key={index}>
//                 <td>{customer.customer_details.Customer_Name}</td>
//                 <td>{customer.customer_details.Customer_Phone}</td>
//                 <td>{customer.customer_details.Customer_Address}</td>
//                 <td>
//                   <ActionDropdown customer={customer.customer_details} />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>

//       <div className="pagination">
//         <Button onClick={handlePreviousPage} disabled={offset === 0}>
//           Previous
//         </Button>
//         <Button onClick={handleNextPage}>
//           Next
//         </Button>
//       </div>

//       {/* View Customer Modal */}
//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Customer Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedCustomer && (
//             <>
//               <p>Name: {selectedCustomer.Customer_Name}</p>
//               <p>Phone: {selectedCustomer.Customer_Phone}</p>
//               <p>Address: {selectedCustomer.Customer_Address}</p>
//               <p>Email: {selectedCustomer.Customer_Email}</p>
//               <p>WhatsApp: {selectedCustomer.Customer_Whatsapp}</p>
//             </>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       {/* Edit Customer Modal */}
//       <Modal show={showEditModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Customer</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="formCustomerName">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter name"
//                 name="Customer_Name"
//                 value={editFormData.Customer_Name}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formCustomerPhone">
//               <Form.Label>Phone</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter phone number"
//                 name="Customer_Phone"
//                 value={editFormData.Customer_Phone}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formCustomerAddress">
//               <Form.Label>Address</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter address"
//                 name="Customer_Address"
//                 value={editFormData.Customer_Address}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formCustomerEmail">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter email"
//                 name="Customer_Email"
//                 value={editFormData.Customer_Email}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formCustomerWhatsapp">
//               <Form.Label>WhatsApp</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter WhatsApp number"
//                 name="Customer_Whatsapp"
//                 value={editFormData.Customer_Whatsapp}
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

// export default ViewCustomerDetails


//================================================================================


//testing3


// import React, { useEffect, useState } from 'react';
// import { Table, Dropdown, Modal, Button, Form } from 'react-bootstrap';
// import { Pagination } from 'antd';
// import axios from 'axios';

// const ViewCustomerDetails = () => {
//   const [data, setData] = useState([]);
//   const [selectedCustomer, setSelectedCustomer] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [editFormData, setEditFormData] = useState({
//     ROWID: '',
//     Customer_Name: '',
//     Customer_Phone: '',
//     Customer_Address: '',
//     Customer_Email: '',
//     Customer_Whatsapp: ''
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const [pageSize] = useState(10); // Number of records per page
//   const [totalRecords, setTotalRecords] = useState(0);

//   useEffect(() => {
//     fetchTotalCount();
//     fetchData();
//   }, [currentPage]); // Fetch data when currentPage changes

//   const fetchTotalCount = () => {
//     axios
//       .get('/server/waterheater_1_function/getCustomerCount')
//       .then((res) => {
//         setTotalRecords(res.data.total);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const fetchData = () => {
//     axios
//       .get('/server/waterheater_1_function/getPaginatedCustomers', {
//         params: { limit: pageSize, offset: (currentPage - 1) * pageSize }
//       })
//       .then((res) => {
//         setData(res.data.records);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const ActionDropdown = ({ customer }) => (
//     <Dropdown>
//       <Dropdown.Toggle variant="primary" id="dropdown-basic">
//         Actions
//       </Dropdown.Toggle>
//       <Dropdown.Menu>
//         <Dropdown.Item onClick={() => handleViewCustomer(customer)}>View</Dropdown.Item>
//         <Dropdown.Item onClick={() => handleEditCustomer(customer)}>Edit</Dropdown.Item>
//         <Dropdown.Item onClick={() => confirmDeleteCustomer(customer)}>Delete</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );

//   const handleViewCustomer = (customer) => {
//     setSelectedCustomer(customer);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setSelectedCustomer(null);
//     setShowModal(false);
//     setShowEditModal(false);
//   };

//   const handleEditCustomer = (customer) => {
//     setSelectedCustomer(customer);
//     setEditFormData({
//       ROWID: customer.ROWID,
//       Customer_Name: customer.Customer_Name,
//       Customer_Phone: customer.Customer_Phone,
//       Customer_Address: customer.Customer_Address,
//       Customer_Email: customer.Customer_Email,
//       Customer_Whatsapp: customer.Customer_Whatsapp
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
//       .put('/server/waterheater_1_function/updatecustomer', {
//         data: editFormData
//       })
//       .then((res) => {
//         console.log('Customer updated successfully');
//         setShowEditModal(false);
//         fetchData(); // Fetch updated data after edit
//       })
//       .catch((err) => {
//         console.error('Error updating customer', err);
//       });
//   };

//   const confirmDeleteCustomer = (customer) => {
//     const confirmDelete = window.confirm('Are you sure you want to delete this customer?');
//     if (confirmDelete) {
//       let payload = {
//         data: {
//           ROWID: customer.ROWID
//         }
//       };
//       axios
//         .delete('/server/waterheater_1_function/deletecustomer', {
//           data: payload
//         })
//         .then((res) => {
//           console.log('Customer deleted successfully');
//           fetchData(); // Fetch updated data after delete
//         })
//         .catch((err) => {
//           console.error('Error deleting customer', err);
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
//               <th>Name</th>
//               <th>Phone</th>
//               <th>Address</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((customer, index) => (
//               <tr key={index}>
//                 <td>{customer.customer_details.Customer_Name}</td>
//                 <td>{customer.customer_details.Customer_Phone}</td>
//                 <td>{customer.customer_details.Customer_Address}</td>
//                 <td>
//                   <ActionDropdown customer={customer.customer_details} />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>

//       <Pagination
//         current={currentPage}
//         // pageSize={pageSize}
//         total={totalRecords}
//         onChange={handlePageChange}
//       />

//       {/* View Customer Modal */}
//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Customer Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedCustomer && (
//             <>
//               <p>Name: {selectedCustomer.Customer_Name}</p>
//               <p>Phone: {selectedCustomer.Customer_Phone}</p>
//               <p>Address: {selectedCustomer.Customer_Address}</p>
//               <p>Email: {selectedCustomer.Customer_Email}</p>
//               <p>WhatsApp: {selectedCustomer.Customer_Whatsapp}</p>
//             </>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       {/* Edit Customer Modal */}
//       <Modal show={showEditModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Customer</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="formCustomerName">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter name"
//                 name="Customer_Name"
//                 value={editFormData.Customer_Name}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formCustomerPhone">
//               <Form.Label>Phone</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter phone number"
//                 name="Customer_Phone"
//                 value={editFormData.Customer_Phone}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formCustomerAddress">
//               <Form.Label>Address</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter address"
//                 name="Customer_Address"
//                 value={editFormData.Customer_Address}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formCustomerEmail">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter email"
//                 name="Customer_Email"
//                 value={editFormData.Customer_Email}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formCustomerWhatsapp">
//               <Form.Label>WhatsApp</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter WhatsApp number"
//                 name="Customer_Whatsapp"
//                 value={editFormData.Customer_Whatsapp}
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

// export default ViewCustomerDetails;












// import React, { useEffect, useState } from 'react';
// import { Table, Dropdown, Modal, Button, Form } from 'react-bootstrap';
// import { Pagination } from 'antd';
// import axios from 'axios';

// const ViewCustomerDetails = () => {
//   const [data, setData] = useState([]);
//   const [selectedCustomer, setSelectedCustomer] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [editFormData, setEditFormData] = useState({
//     ROWID: '',
//     Customer_Name: '',
//     Customer_Phone: '',
//     Customer_Address: '',
//     Customer_Email: '',
//     Customer_Whatsapp: ''
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const [pageSize] = useState(10); // Number of records per page
//   const [totalRecords, setTotalRecords] = useState(0);

//   useEffect(() => {
//     fetchData();
//   }, [currentPage]); // Fetch data when currentPage changes

//   const fetchData = () => {
//     axios
//       .get('/server/waterheater_1_function/getallcustomer', {
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

//   const ActionDropdown = ({ customer }) => (
//     <Dropdown>
//       <Dropdown.Toggle variant="primary" id="dropdown-basic">
//         Actions
//       </Dropdown.Toggle>
//       <Dropdown.Menu>
//         <Dropdown.Item onClick={() => handleViewCustomer(customer)}>View</Dropdown.Item>
//         <Dropdown.Item onClick={() => handleEditCustomer(customer)}>Edit</Dropdown.Item>
//         <Dropdown.Item onClick={() => confirmDeleteCustomer(customer)}>Delete</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );

//   const handleViewCustomer = (customer) => {
//     setSelectedCustomer(customer);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setSelectedCustomer(null);
//     setShowModal(false);
//     setShowEditModal(false);
//   };

//   const handleEditCustomer = (customer) => {
//     setSelectedCustomer(customer);
//     setEditFormData({
//       ROWID: customer.ROWID,
//       Customer_Name: customer.Customer_Name,
//       Customer_Phone: customer.Customer_Phone,
//       Customer_Address: customer.Customer_Address,
//       Customer_Email: customer.Customer_Email,
//       Customer_Whatsapp: customer.Customer_Whatsapp
//     });
//     setShowEditModal(true);
//   };

//   const FilterDropDown = () => {


//     return (
//       <DropdownButton id="dropdown-basic-button" title="Filter">
//         <Dropdown.Item >Name</Dropdown.Item>
//         <Dropdown.Item >Phone Number</Dropdown.Item>
//       </DropdownButton>
//     );
//   };

//   const handleEditInputChange = (e) => {
//     setEditFormData({
//       ...editFormData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleEditSubmit = () => {
//     axios
//       .put('/server/waterheater_1_function/updatecustomer', {
//         data: editFormData
//       })
//       .then((res) => {
//         console.log('Customer updated successfully');
//         setShowEditModal(false);
//         fetchData(); // Fetch updated data after edit
//       })
//       .catch((err) => {
//         console.error('Error updating customer', err);
//       });
//   };

//   const confirmDeleteCustomer = (customer) => {
//     const confirmDelete = window.confirm('Are you sure you want to delete this customer?');
//     if (confirmDelete) {
//       let payload = {
//         data: {
//           ROWID: customer.ROWID
//         }
//       };
//       axios
//         .delete('/server/waterheater_1_function/deletecustomer', {
//           data: payload
//         })
//         .then((res) => {
//           console.log('Customer deleted successfully');
//           fetchData(); // Fetch updated data after delete
//         })
//         .catch((err) => {
//           console.error('Error deleting customer', err);
//         });
//     }
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div>
//         <FilterDropDown />
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
//             {data.map((customer, index) => (
//               <tr key={index}>
//                 <td>{customer.customer_details.Customer_Name}</td>
//                 <td>{customer.customer_details.Customer_Phone}</td>
//                 <td>{customer.customer_details.Customer_Address}</td>
//                 <td>
//                   <ActionDropdown customer={customer.customer_details} />
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

//       {/* View Customer Modal */}
//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Customer Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedCustomer && (
//             <>
//               <p>Name: {selectedCustomer.Customer_Name}</p>
//               <p>Phone: {selectedCustomer.Customer_Phone}</p>
//               <p>Address: {selectedCustomer.Customer_Address}</p>
//               <p>Email: {selectedCustomer.Customer_Email}</p>
//               <p>WhatsApp: {selectedCustomer.Customer_Whatsapp}</p>
//             </>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       {/* Edit Customer Modal */}
//       <Modal show={showEditModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Customer</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="formCustomerName">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter name"
//                 name="Customer_Name"
//                 value={editFormData.Customer_Name}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formCustomerPhone">
//               <Form.Label>Phone</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter phone number"
//                 name="Customer_Phone"
//                 value={editFormData.Customer_Phone}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formCustomerAddress">
//               <Form.Label>Address</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter address"
//                 name="Customer_Address"
//                 value={editFormData.Customer_Address}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formCustomerEmail">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter email"
//                 name="Customer_Email"
//                 value={editFormData.Customer_Email}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formCustomerWhatsapp">
//               <Form.Label>WhatsApp</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter WhatsApp number"
//                 name="Customer_Whatsapp"
//                 value={editFormData.Customer_Whatsapp}
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

// export default ViewCustomerDetails;







// import React, { useEffect, useState } from 'react';
// import { Table, Dropdown, Modal, Button, Form, DropdownButton } from 'react-bootstrap';
// import { Pagination } from 'antd';
// import axios from 'axios';

// const ViewCustomerDetails = () => {
//   const [data, setData] = useState([]);
//   const [selectedCustomer, setSelectedCustomer] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [showFilterModal, setShowFilterModal] = useState(false);
//   const [filterColumn, setFilterColumn] = useState('');
//   const [filterValue, setFilterValue] = useState('');
//   const [editFormData, setEditFormData] = useState({
//     ROWID: '',
//     Customer_Name: '',
//     Customer_Phone: '',
//     Customer_Address: '',
//     Customer_Email: '',
//     Customer_Whatsapp: ''
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const [pageSize] = useState(10); // Number of records per page
//   const [totalRecords, setTotalRecords] = useState(0);

//   useEffect(() => {
//     fetchData();
//   }, [currentPage]); // Fetch data when currentPage changes

//   const fetchData = (column = '', value = '') => {
//     const params = { limit: pageSize, offset: (currentPage - 1) * pageSize };
//     if (column && value) {
//       params.search = JSON.stringify({
//         table: 'customer_details',
//         column,
//         value
//       });
//     }
//     axios
//       .get('/server/waterheater_1_function/getallcustomer', { params })
//       .then((res) => {
//         console.log(res.data);
//         setData(res.data.records);
//         setTotalRecords(res.data.total);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const handleFilterSubmit = () => {
//     fetchData(filterColumn, filterValue);
//     setShowFilterModal(false);
//   };

//   const ActionDropdown = ({ customer }) => (
//     <Dropdown>
//       <Dropdown.Toggle variant="primary" id="dropdown-basic">
//         Actions
//       </Dropdown.Toggle>
//       <Dropdown.Menu>
//         <Dropdown.Item onClick={() => handleViewCustomer(customer)}>View</Dropdown.Item>
//         <Dropdown.Item onClick={() => handleEditCustomer(customer)}>Edit</Dropdown.Item>
//         <Dropdown.Item onClick={() => confirmDeleteCustomer(customer)}>Delete</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );

//   const handleViewCustomer = (customer) => {
//     setSelectedCustomer(customer);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setSelectedCustomer(null);
//     setShowModal(false);
//     setShowEditModal(false);
//     setShowFilterModal(false);
//   };

//   const handleEditCustomer = (customer) => {
//     setSelectedCustomer(customer);
//     setEditFormData({
//       ROWID: customer.ROWID,
//       Customer_Name: customer.Customer_Name,
//       Customer_Phone: customer.Customer_Phone,
//       Customer_Address: customer.Customer_Address,
//       Customer_Email: customer.Customer_Email,
//       Customer_Whatsapp: customer.Customer_Whatsapp
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
//       .put('/server/waterheater_1_function/updatecustomer', {
//         data: editFormData
//       })
//       .then((res) => {
//         console.log('Customer updated successfully');
//         setShowEditModal(false);
//         fetchData(); // Fetch updated data after edit
//       })
//       .catch((err) => {
//         console.error('Error updating customer', err);
//       });
//   };

//   const confirmDeleteCustomer = (customer) => {
//     const confirmDelete = window.confirm('Are you sure you want to delete this customer?');
//     if (confirmDelete) {
//       let payload = {
//         data: {
//           ROWID: customer.ROWID
//         }
//       };
//       axios
//         .delete('/server/waterheater_1_function/deletecustomer', {
//           data: payload
//         })
//         .then((res) => {
//           console.log('Customer deleted successfully');
//           fetchData(); // Fetch updated data after delete
//         })
//         .catch((err) => {
//           console.error('Error deleting customer', err);
//         });
//     }
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const FilterDropDown = () => (
//     <DropdownButton id="dropdown-basic-button" title="Filter">
//       <Dropdown.Item onClick={() => { setFilterColumn('Customer_Name'); setShowFilterModal(true); }}>Name</Dropdown.Item>
//       <Dropdown.Item onClick={() => { setFilterColumn('Customer_Phone'); setShowFilterModal(true); }}>Phone Number</Dropdown.Item>
//     </DropdownButton>
//   );

//   return (
//     <div>
//       <FilterDropDown />
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
//             {data.map((customer, index) => (
//               <tr key={index}>
//                 <td>{customer.customer_details.Customer_Name}</td>
//                 <td>{customer.customer_details.Customer_Phone}</td>
//                 <td>{customer.customer_details.Customer_Address}</td>
//                 <td>
//                   <ActionDropdown customer={customer.customer_details} />
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

//       {/* View Customer Modal */}
//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Customer Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedCustomer && (
//             <>
//               <p>Name: {selectedCustomer.Customer_Name}</p>
//               <p>Phone: {selectedCustomer.Customer_Phone}</p>
//               <p>Address: {selectedCustomer.Customer_Address}</p>
//               <p>Email: {selectedCustomer.Customer_Email}</p>
//               <p>WhatsApp: {selectedCustomer.Customer_Whatsapp}</p>
//             </>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       {/* Edit Customer Modal */}
//       <Modal show={showEditModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Customer</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="formCustomerName">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter name"
//                 name="Customer_Name"
//                 value={editFormData.Customer_Name}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formCustomerPhone">
//               <Form.Label>Phone</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter phone number"
//                 name="Customer_Phone"
//                 value={editFormData.Customer_Phone}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formCustomerAddress">
//               <Form.Label>Address</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter address"
//                 name="Customer_Address"
//                 value={editFormData.Customer_Address}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formCustomerEmail">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter email"
//                 name="Customer_Email"
//                 value={editFormData.Customer_Email}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formCustomerWhatsapp">
//               <Form.Label>WhatsApp</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter WhatsApp number"
//                 name="Customer_Whatsapp"
//                 value={editFormData.Customer_Whatsapp}
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

//       {/* Filter Modal */}
//       <Modal show={showFilterModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Filter Customer by {filterColumn === 'Customer_Name' ? 'Name' : 'Phone Number'}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="formFilterValue">
//               <Form.Label>{filterColumn === 'Customer_Name' ? 'Name' : 'Phone Number'}</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder={`Enter ${filterColumn === 'Customer_Name' ? 'name' : 'phone number'}`}
//                 value={filterValue}
//                 onChange={(e) => setFilterValue(e.target.value)}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Cancel
//           </Button>
//           <Button variant="primary" onClick={handleFilterSubmit}>
//             Search
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default ViewCustomerDetails;





//without spinner

// import React, { useEffect, useState } from 'react';
// import { Table, Dropdown, Modal, Button, Form, DropdownButton } from 'react-bootstrap';
// import { Pagination } from 'antd';
// import axios from 'axios';
// import { FaFilter } from "react-icons/fa6";
// import '../../App.css'

// const ViewCustomerDetails = () => {
//   const [data, setData] = useState([]);
//   const [selectedCustomer, setSelectedCustomer] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [showFilterModal, setShowFilterModal] = useState(false);
//   const [filterColumn, setFilterColumn] = useState('');
//   const [filterValue, setFilterValue] = useState('');
//   const [editFormData, setEditFormData] = useState({
//     ROWID: '',
//     Customer_Name: '',
//     Customer_Phone: '',
//     Customer_Address: '',
//     Customer_Email: '',
//     Customer_Whatsapp: ''
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const [pageSize] = useState(10); // Number of records per page
//   const [totalRecords, setTotalRecords] = useState(0);

//   useEffect(() => {
//     fetchData();
//   }, [currentPage]); // Fetch data when currentPage changes



//   const fetchData = (column = '', value = '') => {
//     const params = { limit: pageSize, offset: (currentPage - 1) * pageSize };
//     let endpoint = '/server/waterheater_1_function/getallcustomer'; // Default endpoint

//     if (column && value) {
//       endpoint = '/server/waterheater_1_function/getfiltercustomer'; // Use filter endpoint if column and value are provided
//       params.search = JSON.stringify({
//         table: 'customer_details', // Corrected table name
//         column,
//         value
//       });
//     }

//     axios
//       .get(endpoint, { params })
//       .then((res) => {
//         console.log(res.data);
//         if (column && value) {
//           setData(res.data); // Set data directly if filtered
//           setTotalRecords(res.data.length); // Update total records based on filtered data length
//         } else {
//           setData(res.data.records); // Set data from records if not filtered
//           setTotalRecords(res.data.total); // Set total records count
//         }
//         // Clear filter values after successful search
//         setFilterColumn('');
//         setFilterValue('');
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };


//   const handleFilterSubmit = () => {
//     fetchData(filterColumn, filterValue);
//     setShowFilterModal(false);
//   };

//   const ActionDropdown = ({ customer }) => (
//     <Dropdown>
//       <Dropdown.Toggle variant="primary" id="dropdown-basic">

//       </Dropdown.Toggle>
//       <Dropdown.Menu>
//         <Dropdown.Item onClick={() => handleViewCustomer(customer)}>View</Dropdown.Item>
//         <Dropdown.Item onClick={() => handleEditCustomer(customer)}>Edit</Dropdown.Item>
//         <Dropdown.Item onClick={() => confirmDeleteCustomer(customer)}>Delete</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );

//   const handleViewCustomer = (customer) => {
//     setSelectedCustomer(customer);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setSelectedCustomer(null);
//     setShowModal(false);
//     setShowEditModal(false);
//     setShowFilterModal(false);
//   };

//   const handleEditCustomer = (customer) => {
//     setSelectedCustomer(customer);
//     setEditFormData({
//       ROWID: customer.ROWID,
//       Customer_Name: customer.Customer_Name,
//       Customer_Phone: customer.Customer_Phone,
//       Customer_Address: customer.Customer_Address,
//       Customer_Email: customer.Customer_Email,
//       Customer_Whatsapp: customer.Customer_Whatsapp
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
//       .put('/server/waterheater_1_function/updatecustomer', {
//         data: editFormData
//       })
//       .then((res) => {
//         console.log('Customer updated successfully');
//         setShowEditModal(false);
//         fetchData(); // Fetch updated data after edit
//       })
//       .catch((err) => {
//         console.error('Error updating customer', err);
//       });
//   };

//   const confirmDeleteCustomer = (customer) => {
//     const confirmDelete = window.confirm('Are you sure you want to delete this customer?');
//     if (confirmDelete) {
//       let payload = {
//         data: {
//           ROWID: customer.ROWID
//         }
//       };
//       axios
//         .delete('/server/waterheater_1_function/deletecustomer', {
//           data: payload
//         })
//         .then((res) => {
//           console.log('Customer deleted successfully');
//           fetchData(); // Fetch updated data after delete
//         })
//         .catch((err) => {
//           console.error('Error deleting customer', err);
//         });
//     }
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const FilterDropDown = () => (
//     <DropdownButton id="dropdown-basic-button" title={<FaFilter />}>
//       <Dropdown.Item onClick={() => { setFilterColumn('Customer_Name'); setShowFilterModal(true); }}>Name</Dropdown.Item>
//       <Dropdown.Item onClick={() => { setFilterColumn('Customer_Phone'); setShowFilterModal(true); }}>Phone Number</Dropdown.Item>
//     </DropdownButton>
//   );

  

//   return (
//     <div className='container'>
    
//       <div className="d-flex justify-content-end mb-2">
//         <FilterDropDown />
//       </div>

//       <div className="table-responsive">
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Phone</th>
//               <th>Address</th>
//               {/* <th>Email</th> */}
//               <th className="hide-on-mobile">Email</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((customer, index) => (
//               <tr key={index}>
//                 <td>{customer.customer_details.Customer_Name}</td>
//                 <td>{customer.customer_details.Customer_Phone}</td>
//                 <td>{customer.customer_details.Customer_Address}</td>
//                 {/* <td>{customer.customer_details.Customer_Email}</td> */}
//                 <td className="hide-on-mobile">{customer.customer_details.Customer_Email}</td>
//                 <td>
//                   <ActionDropdown customer={customer.customer_details} />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>

//      <div className='d-flex justify-content-center ' style={{ margin: '30px' }}>
//      <Pagination
//         current={currentPage}
//         pageSize={pageSize}
//         total={totalRecords}
//         onChange={handlePageChange}
//         showSizeChanger={false}
//       />
//      </div>

//       {/* View Customer Modal */}
//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Customer Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedCustomer && (
//             <>
//               <p>Name: {selectedCustomer.Customer_Name}</p>
//               <p>Phone: {selectedCustomer.Customer_Phone}</p>
//               <p>Address: {selectedCustomer.Customer_Address}</p>
//               <p>Email: {selectedCustomer.Customer_Email}</p>
//               <p>WhatsApp: {selectedCustomer.Customer_Whatsapp}</p>
//             </>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       {/* Edit Customer Modal */}
//       <Modal show={showEditModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Customer</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="formCustomerName">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter name"
//                 name="Customer_Name"
//                 value={editFormData.Customer_Name}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formCustomerPhone">
//               <Form.Label>Phone</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter phone number"
//                 name="Customer_Phone"
//                 value={editFormData.Customer_Phone}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formCustomerAddress">
//               <Form.Label>Address</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter address"
//                 name="Customer_Address"
//                 value={editFormData.Customer_Address}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formCustomerEmail">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter email"
//                 name="Customer_Email"
//                 value={editFormData.Customer_Email}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formCustomerWhatsapp">
//               <Form.Label>WhatsApp</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter WhatsApp number"
//                 name="Customer_Whatsapp"
//                 value={editFormData.Customer_Whatsapp}
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

//       {/* Filter Modal */}
//       <Modal show={showFilterModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Filter Customer by {filterColumn === 'Customer_Name' ? 'Name' : 'Phone Number'}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="formFilterValue">
//               <Form.Label>{filterColumn === 'Customer_Name' ? 'Name' : 'Phone Number'}</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder={`Enter ${filterColumn === 'Customer_Name' ? 'name' : 'phone number'}`}
//                 value={filterValue}
//                 onChange={(e) => setFilterValue(e.target.value)}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Cancel
//           </Button>
//           <Button variant="primary" onClick={handleFilterSubmit}>
//             Search
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default ViewCustomerDetails;










// import React, { useEffect, useState } from 'react';
// import { Table, Dropdown, Modal, Button, Form, DropdownButton } from 'react-bootstrap';
// import { Pagination } from 'antd';
// import axios from 'axios';
// import { FaFilter } from "react-icons/fa6";
// import HashLoader from 'react-spinners/HashLoader';
// import '../../App.css';

// const ViewCustomerDetails = () => {
//   const [data, setData] = useState([]);
//   const [selectedCustomer, setSelectedCustomer] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [showFilterModal, setShowFilterModal] = useState(false);
//   const [filterColumn, setFilterColumn] = useState('');
//   const [filterValue, setFilterValue] = useState('');
//   const [editFormData, setEditFormData] = useState({
//     ROWID: '',
//     Customer_Name: '',
//     Customer_Phone: '',
//     Customer_Address: '',
//     Customer_Email: '',
//     Customer_Whatsapp: ''
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const [pageSize] = useState(10); // Number of records per page
//   const [totalRecords, setTotalRecords] = useState(0);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchData();
//   }, [currentPage]); // Fetch data when currentPage changes

//   const fetchData = (column = '', value = '') => {
//     setLoading(true);
//     const params = { limit: pageSize, offset: (currentPage - 1) * pageSize };
//     let endpoint = '/server/waterheater_1_function/getallcustomer'; // Default endpoint

//     if (column && value) {
//       endpoint = '/server/waterheater_1_function/getfiltercustomer'; // Use filter endpoint if column and value are provided
//       params.search = JSON.stringify({
//         table: 'customer_details', // Corrected table name
//         column,
//         value
//       });
//     }

//     axios
//       .get(endpoint, { params })
//       .then((res) => {
//         console.log(res.data);
//         if (column && value) {
//           setData(res.data); // Set data directly if filtered
//           setTotalRecords(res.data.length); // Update total records based on filtered data length
//         } else {
//           setData(res.data.records); // Set data from records if not filtered
//           setTotalRecords(res.data.total); // Set total records count
//         }
//         // Clear filter values after successful search
//         setFilterColumn('');
//         setFilterValue('');
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   const handleFilterSubmit = () => {
//     fetchData(filterColumn, filterValue);
//     setShowFilterModal(false);
//   };

//   const ActionDropdown = ({ customer }) => (
//     <Dropdown>
//       <Dropdown.Toggle variant="primary" id="dropdown-basic">
//       </Dropdown.Toggle>
//       <Dropdown.Menu>
//         <Dropdown.Item onClick={() => handleViewCustomer(customer)}>View</Dropdown.Item>
//         <Dropdown.Item onClick={() => handleEditCustomer(customer)}>Edit</Dropdown.Item>
//         <Dropdown.Item onClick={() => confirmDeleteCustomer(customer)}>Delete</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );

//   const handleViewCustomer = (customer) => {
//     setSelectedCustomer(customer);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setSelectedCustomer(null);
//     setShowModal(false);
//     setShowEditModal(false);
//     setShowFilterModal(false);
//   };

//   const handleEditCustomer = (customer) => {
//     setSelectedCustomer(customer);
//     setEditFormData({
//       ROWID: customer.ROWID,
//       Customer_Name: customer.Customer_Name,
//       Customer_Phone: customer.Customer_Phone,
//       Customer_Address: customer.Customer_Address,
//       Customer_Email: customer.Customer_Email,
//       Customer_Whatsapp: customer.Customer_Whatsapp
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
//     setLoading(true);
//     axios
//       .put('/server/waterheater_1_function/updatecustomer', {
//         data: editFormData
//       })
//       .then((res) => {
//         console.log('Customer updated successfully');
//         setShowEditModal(false);
//         fetchData(); // Fetch updated data after edit
//       })
//       .catch((err) => {
//         console.error('Error updating customer', err);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   const confirmDeleteCustomer = (customer) => {
//     const confirmDelete = window.confirm('Are you sure you want to delete this customer?');
//     if (confirmDelete) {
//       setLoading(true);
//       let payload = {
//         data: {
//           ROWID: customer.ROWID
//         }
//       };
//       axios
//         .delete('/server/waterheater_1_function/deletecustomer', {
//           data: payload
//         })
//         .then((res) => {
//           console.log('Customer deleted successfully');
//           fetchData(); // Fetch updated data after delete
//         })
//         .catch((err) => {
//           console.error('Error deleting customer', err);
//         })
//         .finally(() => {
//           setLoading(false);
//         });
//     }
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const FilterDropDown = () => (
//     <DropdownButton id="dropdown-basic-button" title={<FaFilter />}>
//       <Dropdown.Item onClick={() => { setFilterColumn('Customer_Name'); setShowFilterModal(true); }}>Name</Dropdown.Item>
//       <Dropdown.Item onClick={() => { setFilterColumn('Customer_Phone'); setShowFilterModal(true); }}>Phone Number</Dropdown.Item>
//     </DropdownButton>
//   );

//   return (
//     <div className='container'>
//       {loading ? (
//         <div className="d-flex justify-content-center align-items-center" style={{ height: '94vh' }}>
//           <HashLoader color="#2080c2" />
//         </div>
//       ) : (
//         <>
//           <div className="d-flex justify-content-end mb-2">
//             <FilterDropDown />
//           </div>

//           <div className="table-responsive">
//             <Table striped bordered hover>
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th>Phone</th>
//                   <th>Address</th>
//                   <th className="hide-on-mobile">Email</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {data.map((customer, index) => (
//                   <tr key={index}>
//                     <td>{customer.customer_details.Customer_Name}</td>
//                     <td>{customer.customer_details.Customer_Phone}</td>
//                     <td>{customer.customer_details.Customer_Address}</td>
//                     <td className="hide-on-mobile">{customer.customer_details.Customer_Email}</td>
//                     <td>
//                       <ActionDropdown customer={customer.customer_details} />
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           </div>

//           <div className='d-flex justify-content-center ' style={{ margin: '30px' }}>
//             <Pagination
//               current={currentPage}
//               pageSize={pageSize}
//               total={totalRecords}
//               onChange={handlePageChange}
//               showSizeChanger={false}
//             />
//           </div>

//           {/* View Customer Modal */}
//           <Modal show={showModal} onHide={handleCloseModal}>
//             <Modal.Header closeButton>
//               <Modal.Title>Customer Details</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               {selectedCustomer && (
//                 <>
//                   <p>Name: {selectedCustomer.Customer_Name}</p>
//                   <p>Phone: {selectedCustomer.Customer_Phone}</p>
//                   <p>Address: {selectedCustomer.Customer_Address}</p>
//                   <p>Email: {selectedCustomer.Customer_Email}</p>
//                   <p>WhatsApp: {selectedCustomer.Customer_Whatsapp}</p>
//                 </>
//               )}
//             </Modal.Body>
//             <Modal.Footer>
//               <Button variant="secondary" onClick={handleCloseModal}>
//                 Close
//               </Button>
//             </Modal.Footer>
//           </Modal>

//           {/* Edit Customer Modal */}
//           <Modal show={showEditModal} onHide={handleCloseModal}>
//             <Modal.Header closeButton>
//               <Modal.Title>Edit Customer</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <Form>
//                 <Form.Group controlId="formCustomerName">
//                   <Form.Label>Name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter name"
//                     name="Customer_Name"
//                     value={editFormData.Customer_Name}
//                     onChange={handleEditInputChange}
//                   />
//                 </Form.Group>
//                 <Form.Group controlId="formCustomerPhone">
//                   <Form.Label>Phone</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter phone number"
//                     name="Customer_Phone"
//                     value={editFormData.Customer_Phone}
//                     onChange={handleEditInputChange}
//                   />
//                 </Form.Group>
//                 <Form.Group controlId="formCustomerAddress">
//                   <Form.Label>Address</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter address"
//                     name="Customer_Address"
//                     value={editFormData.Customer_Address}
//                     onChange={handleEditInputChange}
//                   />
//                 </Form.Group>
//                 <Form.Group controlId="formCustomerEmail">
//                   <Form.Label>Email</Form.Label>
//                   <Form.Control
//                     type="email"
//                     placeholder="Enter email"
//                     name="Customer_Email"
//                     value={editFormData.Customer_Email}
//                     onChange={handleEditInputChange}
//                   />
//                 </Form.Group>
//                 <Form.Group controlId="formCustomerWhatsapp">
//                   <Form.Label>WhatsApp</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter WhatsApp number"
//                     name="Customer_Whatsapp"
//                     value={editFormData.Customer_Whatsapp}
//                     onChange={handleEditInputChange}
//                   />
//                 </Form.Group>
//               </Form>
//             </Modal.Body>
//             <Modal.Footer>
//               <Button variant="secondary" onClick={handleCloseModal}>
//                 Cancel
//               </Button>
//               <Button variant="primary" onClick={handleEditSubmit}>
//                 Save Changes
//               </Button>
//             </Modal.Footer>
//           </Modal>

//           {/* Filter Modal */}
//           <Modal show={showFilterModal} onHide={handleCloseModal}>
//             <Modal.Header closeButton>
//               <Modal.Title>Filter Customer by {filterColumn === 'Customer_Name' ? 'Name' : 'Phone Number'}</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <Form>
//                 <Form.Group controlId="formFilterValue">
//                   <Form.Label>{filterColumn === 'Customer_Name' ? 'Name' : 'Phone Number'}</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder={`Enter ${filterColumn === 'Customer_Name' ? 'name' : 'phone number'}`}
//                     value={filterValue}
//                     onChange={(e) => setFilterValue(e.target.value)}
//                   />
//                 </Form.Group>
//               </Form>
//             </Modal.Body>
//             <Modal.Footer>
//               <Button variant="secondary" onClick={handleCloseModal}>
//                 Cancel
//               </Button>
//               <Button variant="primary" onClick={handleFilterSubmit}>
//                 Search
//               </Button>
//             </Modal.Footer>
//           </Modal>
//         </>
//       )}
//     </div>
//   );
// };

// export default ViewCustomerDetails;









import React, { useEffect, useState } from 'react';
import { Table, Dropdown, Modal, Button, Form, DropdownButton } from 'react-bootstrap';
import { Pagination } from 'antd';
import axios from 'axios';
import { FaFilter } from "react-icons/fa6";
import HashLoader from 'react-spinners/HashLoader';
import '../../App.css'
import Swal from 'sweetalert2';

const ViewCustomerDetails = () => {
  const [data, setData] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filterColumn, setFilterColumn] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [editFormData, setEditFormData] = useState({
    ROWID: '',
    Customer_Name: '',
    Customer_Phone: '',
    Customer_Address: '',
    Customer_Email: '',
    Customer_Whatsapp: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10); // Number of records per page
  const [totalRecords, setTotalRecords] = useState(0);
  const [loading, setLoading] = useState(true);
  const [removeFilter,setRemoveFilter] = useState('')

  useEffect(() => {
    fetchData();
  }, [currentPage,removeFilter]); // Fetch data when currentPage changes

  const fetchData = (column = '', value = '') => {
    setLoading(true); // Show spinner while fetching data
    const params = { limit: pageSize, offset: (currentPage - 1) * pageSize };
    let endpoint = '/server/waterheater_1_function/getallcustomer'; // Default endpoint

    if (column && value) {
      endpoint = '/server/waterheater_1_function/getfiltercustomer'; // Use filter endpoint if column and value are provided
      params.search = JSON.stringify({
        table: 'customer_details', // Corrected table name
        column,
        value
      });
    }

    axios
      .get(endpoint, { params })
      .then((res) => {
        console.log(res.data);
        if (column && value) {
          setData(res.data); // Set data directly if filtered
          setTotalRecords(res.data.length); // Update total records based on filtered data length
        } else {
          setData(res.data.records); // Set data from records if not filtered
          setTotalRecords(res.data.total); // Set total records count
        }
        // Clear filter values after successful search
        setFilterColumn('');
        setFilterValue('');
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false); // Hide spinner after fetching data
      });
  };

  const handleFilterSubmit = () => {
    fetchData(filterColumn, filterValue);
    setShowFilterModal(false);
  };

  const ActionDropdown = ({ customer }) => (
    <Dropdown drop={'start'}>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
      </Dropdown.Toggle>
      <Dropdown.Menu >
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
    setShowFilterModal(false);
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
    setLoading(true); // Show spinner while updating data
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
      })
      .finally(() => {
        setLoading(false); // Hide spinner after updating data
      });
  };

  const confirmDeleteCustomer = (customer) => {
    // const confirmDelete = window.confirm('Are you sure you want to delete this customer?');

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
        setLoading(true); // Show spinner while deleting data
        let payload = {
          data: {
            ROWID: customer.ROWID
          }
        };
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
          })
          .finally(() => {
            setLoading(false); // Hide spinner after deleting data
          });
      }
    });

   
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const FilterDropDown = () => (
    <DropdownButton id="dropdown-basic-button" title={<FaFilter />}>
      <Dropdown.Item onClick={() => { setFilterColumn('Customer_Name'); setShowFilterModal(true); }}>Name</Dropdown.Item>
      <Dropdown.Item onClick={() => { setFilterColumn('Customer_Phone'); setShowFilterModal(true); }}>Phone Number</Dropdown.Item>
      <Dropdown.Item onClick={()=>{setRemoveFilter()}}>Remove Filter</Dropdown.Item>
    </DropdownButton>
  );

  return (  
    <div className='container' >
      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '94vh' }}>
          <HashLoader color="#2080c2" />
        </div>
      ) : data.length === 0 ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '94vh' }}>
          <h1>No Data Added</h1>
        </div>
      ) : (
        <>
        <h2>Customer Details</h2>
          <div className="d-flex justify-content-end mb-2">
            <FilterDropDown />
          </div>

          <div className="table-responsive"  >
            <Table striped bordered hover >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th className="hide-on-mobile">Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((customer, index) => (
                  <tr key={index}>
                    <td>{customer.customer_details.Customer_Name}</td>
                    <td>{customer.customer_details.Customer_Phone}</td>
                    <td>{customer.customer_details.Customer_Address}</td>
                    <td className="hide-on-mobile">{customer.customer_details.Customer_Email}</td>
                    <td>
                      <ActionDropdown customer={customer.customer_details} />
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

          {/* Filter Modal */}
          <Modal show={showFilterModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Filter Customer by {filterColumn === 'Customer_Name' ? 'Name' : 'Phone Number'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="formFilterValue">
                  <Form.Label>{filterColumn === 'Customer_Name' ? 'Name' : 'Phone Number'}</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={`Enter ${filterColumn === 'Customer_Name' ? 'name' : 'phone number'}`}
                    value={filterValue}
                    onChange={(e) => setFilterValue(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleFilterSubmit}>
                Search
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </div>
  );
};

export default ViewCustomerDetails;
