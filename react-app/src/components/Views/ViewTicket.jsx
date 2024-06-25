// import React, { useEffect, useState } from 'react';
// import { Table, Dropdown, Modal, Button, Form } from 'react-bootstrap';
// import axios from 'axios';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import { FaFilter } from "react-icons/fa6";

// const ViewTicket = () => {
//   const [data, setData] = useState([]);
//   const [selectedTicket, setSelectedTicket] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [showAssignModal, setShowAssignModal] = useState(false);
//   const [technicians, setTechnicians] = useState([]);
//   const [selectedTechnician, setSelectedTechnician] = useState('');
//   const [scheduledDate, setScheduledDate] = useState('');
//   const [modalType, setModalType] = useState('');
//   const [imageModal, setImageModal] = useState({ show: false, src: '' });
//   const [selectedTechnicianEmail, setSelectedTechnicianEmail] = useState('');


//   useEffect(() => {
//     fetchData('Created Ticket'); // Initial fetch with 'Created Ticket' filter
//     fetchTechnicians(); // Fetch technicians data
//   }, []); // Empty dependency array ensures this effect runs only once

//   const fetchData = (status = '') => {
//     axios.get(`/server/waterheater_1_function/getfilterticket?search=${encodeURIComponent(JSON.stringify({
//       table: 'ticket_table',
//       column: 'Status',
//       value: status
//     }))}`)
//       .then((res) => {
//         console.log(res.data);
//         setData(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const fetchTechnicians = () => {
//     axios.get('/server/waterheater_1_function/gettechnicians')
//       .then((res) => {
//         console.log('Technician data:', res.data);
//         setTechnicians(res.data);
//       })
//       .catch((err) => {
//         console.log('Error in getting technician data:', err);
//       });
//   };

//   const FilterDropDown = () => {
//     const handleFilterSelect = (status) => {
//       fetchData(status);
//     };

//     return (
//       <DropdownButton id="dropdown-basic-button" title={<FaFilter/>}>
//         <Dropdown.Item onClick={() => handleFilterSelect('Created Ticket')}>Created Ticket</Dropdown.Item>
//         <Dropdown.Item onClick={() => handleFilterSelect('Technician Assigned')}>Technician Assigned</Dropdown.Item>
//         <Dropdown.Item onClick={() => handleFilterSelect('On Progress')}>On Progress</Dropdown.Item>
//         <Dropdown.Item onClick={() => handleFilterSelect('Moved to Inhouse')}>Moved to Inhouse</Dropdown.Item>
//         <Dropdown.Item onClick={() => handleFilterSelect('Ready for Dispatch')}>Ready for Dispatch</Dropdown.Item>
//         <Dropdown.Item onClick={() => handleFilterSelect('Assigned for Dispatch')}>Assigned for Dispatch</Dropdown.Item>
//       </DropdownButton>
//     );
//   };

//   const handleAssignTechnician = (ticket) => {
//     setSelectedTicket(ticket);
//     setModalType('technician');
//     setShowAssignModal(true);
//   };

//   const handleAssignDispatch = (ticket) => {
//     setSelectedTicket(ticket);
//     setModalType('dispatch');
//     setShowAssignModal(true);
//   };

//   const handleCloseAssignModal = () => {
//     setShowAssignModal(false);
//     setSelectedTechnician('');
//     setScheduledDate('');
//   };



//   const handleAssignTicket = () => {
//     let payload;
//     if (modalType === 'technician') {
//       payload = {
//         ROWID: selectedTicket.ROWID,
//         Technician_Name: selectedTechnician,
//         Scheduled_Date: scheduledDate,
//         Status: 'Technician Assigned',
//         Technician_Email: selectedTechnicianEmail // Include selected technician's email
//       };
//     } else if (modalType === 'dispatch') {
//       payload = {
//         ROWID: selectedTicket.ROWID,
//         Dispatch_Person: selectedTechnician,
//         Dispatch_Date: scheduledDate,
//         Status: 'Assigned for Dispatch',
//         Dispatch_Email: selectedTechnicianEmail // Include selected technician's email
//       };
//     }
  
//     axios.put('/server/waterheater_1_function/updateticket', { data: payload })
//       .then((res) => {
//         console.log('response from updating ticket', res);
//         // Optionally refresh data here
//       })
//       .catch((err) => {
//         console.log('error in updating ticket', err);
//       });
  
//     // Close the modal after handling assignment
//     handleCloseAssignModal();
//   };
  


//   const ActionDropdown = ({ ticket }) => {
//     const { Status } = ticket;

//     const isTechnicianButtonEnabled = Status === 'Created Ticket';
//     const isDispatchButtonEnabled = Status === 'Ready for Dispatch';

//     return (
//       <Dropdown>
//         <Dropdown.Toggle variant="primary" id="dropdown-basic"></Dropdown.Toggle>
//         <Dropdown.Menu>
//           <Dropdown.Item onClick={() => handleViewTicket(ticket)}>View</Dropdown.Item>
//           <Dropdown.Item onClick={() => handleAssignTechnician(ticket)} disabled={!isTechnicianButtonEnabled}>Assign Technician</Dropdown.Item>
//           <Dropdown.Item onClick={() => handleAssignDispatch(ticket)} disabled={!isDispatchButtonEnabled}>Assign Dispatch</Dropdown.Item>
//         </Dropdown.Menu>
//       </Dropdown>
//     );
//   };




//   const handleViewTicket = (ticket) => {
//     setSelectedTicket(ticket);
//     setShowModal(true);
//   };

//   const handleViewImage = (id, fileName) => {
//     axios.get(`/server/waterheater_1_function/viewfile/${id}`, {
//       responseType: 'blob', // Important to handle the file response
//       params: { fileName }
//     }).then(response => {
//       const url = URL.createObjectURL(new Blob([response.data]));
//       setImageModal({ show: true, src: url });
//     }).catch(error => {
//       console.error('Error fetching the image:', error);
//     });
//   };

//   const TicketModal = () => {
//     const handleCloseModal = () => {
//       setShowModal(false);
//       setSelectedTicket(null);
//     };

//     return (
//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Ticket Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedTicket && (
//             <>
//               <p>Customer Name: {selectedTicket.Customer_Name}</p>
//               <p>Scheduled Date: {selectedTicket.Scheduled_Date}</p>
//               <p>Dispatch Date: {selectedTicket.Dispatch_Date}</p>
//               <p>Date of Purchase: {selectedTicket.Date_of_Purchase}</p>
//               <p>Year of Purchase: {selectedTicket.Year_of_Purchase}</p>
//               <p>Dispatch Person: {selectedTicket.Dispatch_Person}</p>
//               <p>Serial Number: {selectedTicket.Serial_Number}</p>
//               <p>Ticket Id: {selectedTicket.Ticket_Id}</p>
//               <p>Technician Name: {selectedTicket.Technician_Name}</p>
//               <p>Ticket Date: {selectedTicket.Ticket_Date}</p>
//               <p>Status: {selectedTicket.Status}</p>
//               <p>Customer Feedback: {selectedTicket.Customer_Feedback}</p>
//               <p>Customer Phone: {selectedTicket.Customer_Phone}</p>
//               <p>Warranty Year: {selectedTicket.Warranty_Year}</p>
//               <p>Comments: {selectedTicket.Comments}</p>
//               <p>Product Name: {selectedTicket.Product_Name}</p>
//               <p>Customer Email: {selectedTicket.Customer_Email}</p>
//               <p>Customer Whatsapp: {selectedTicket.Customer_Whatsapp}</p>
//               <p>Attended Date Time: {selectedTicket.Attended_Date_Time}</p>
//               <p>Warranty Available: {selectedTicket.Warranty_Available}</p>
//               <p>Customer Address: {selectedTicket.Customer_Address}</p>
//               <p>Product Issue: {selectedTicket.Product_Issue}</p>
//               <p>Area In Address: {selectedTicket.Area_In_Address}</p>
//               <p>Location: {selectedTicket.Location}</p>
//               <p>Scrap Details: {selectedTicket.Scrap_Details}</p>
//               <p>Issue Image:<Button variant="secondary" onClick={() => handleViewImage(selectedTicket.Issue_Image, 'issue.jpg')}>View Image</Button> </p>
//               <p>After Service Image:<Button variant="secondary" onClick={() => handleViewImage(selectedTicket.After_Service_Image, 'after_service.jpg')}>View Image</Button>  </p>
//               <p>Warranty Image: <Button variant="secondary" onClick={() => handleViewImage(selectedTicket.Warranty_Image, 'warranty.jpg')}>View Image</Button> </p>
//               <p>Invoice File: <Button variant="secondary" onClick={() => handleViewImage(selectedTicket.Invoice_File, 'invoice.jpg')}>View Image</Button> </p>
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

//   const ImageModal = () => {
//     const handleCloseImageModal = () => {
//       setImageModal({ show: false, src: '' });
//     };

//     return (
//       <Modal show={imageModal.show} onHide={handleCloseImageModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Image</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <img src={imageModal.src} alt="Ticket Image" style={{ width: '100%' }} />
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseImageModal}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     );
//   };

//   return (
//     <div className='container'>
//      <div className="d-flex justify-content-end mb-2">
//         <FilterDropDown />
//       </div>
//       <div className="table-responsive">
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>T_Id</th>
//               <th>P_Name</th>
//               <th>War</th>
//               <th>Status</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((ticket, index) => (
//               <tr key={index}>
//                 <td>{ticket.ticket_table.Ticket_Id}</td>
//                 <td>{ticket.ticket_table.Product_Name}</td>
//                 <td>{ticket.ticket_table.Warranty_Year}</td>
//                 <td>{ticket.ticket_table.Status}</td>
//                 <td>
//                   <ActionDropdown ticket={ticket.ticket_table} />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>

//       {/* Modal for assigning technician or dispatch */}
//       <Modal show={showAssignModal} onHide={handleCloseAssignModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>{modalType === 'technician' ? 'Assign Technician' : 'Assign Dispatch'}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="ticketId">
//               <Form.Label>Ticket Id</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={selectedTicket ? selectedTicket.Ticket_Id : ''}
//                 readOnly
//               />
//             </Form.Group>
//             <Form.Group controlId="technicianSelect">
//               <Form.Label>{modalType === 'technician' ? 'Select Technician' : 'Select Dispatch Person'}</Form.Label>
          
//               <Form.Control
//                 as="select"
//                 value={selectedTechnician}
//                 onChange={(e) => {
//                   const selectedTech = technicians.find(tech => tech.Technician_Name === e.target.value);
//                   setSelectedTechnician(e.target.value);
//                   setSelectedTechnicianEmail(selectedTech ? selectedTech.Technician_Email : '');
//                 }}
//                 style={{ maxWidth: '100%', width: '100%' }} // Adjust width as needed
//               >
//                 <option value="">{modalType === 'technician' ? 'Select Technician...' : 'Select Dispatch Person...'}</option>
//                 {technicians.map((technician, index) => (
//                   <option key={index} value={technician.Technician_Name}>
//                     {technician.Technician_Name}
//                   </option>
//                 ))}
//               </Form.Control>

//             </Form.Group>
//             <Form.Group controlId="scheduledDate">
//               <Form.Label>Scheduled Date</Form.Label>
//               <Form.Control
//                 type="date"
//                 value={scheduledDate}
//                 onChange={(e) => setScheduledDate(e.target.value)}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseAssignModal}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleAssignTicket}>
//             Assign
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       {/* Modal for ticket details */}
//       <TicketModal />
//       {/* Modal for viewing images */}
//       <ImageModal />
//     </div>
//   );
// };

// export default ViewTicket;







// import React, { useEffect, useState } from 'react';
// import { Table, Dropdown, Modal, Button, Form, Spinner } from 'react-bootstrap';
// import axios from 'axios';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import { FaFilter } from "react-icons/fa";

// const ViewTicket = () => {
//   const [data, setData] = useState([]);
//   const [selectedTicket, setSelectedTicket] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [showAssignModal, setShowAssignModal] = useState(false);
//   const [technicians, setTechnicians] = useState([]);
//   const [selectedTechnician, setSelectedTechnician] = useState('');
//   const [scheduledDate, setScheduledDate] = useState('');
//   const [modalType, setModalType] = useState('');
//   const [imageModal, setImageModal] = useState({ show: false, src: '' });
//   const [selectedTechnicianEmail, setSelectedTechnicianEmail] = useState('');
//   const [loading, setLoading] = useState(false); // State to manage loading state

//   useEffect(() => {
//     fetchData('Created Ticket'); // Initial fetch with 'Created Ticket' filter
//     fetchTechnicians(); // Fetch technicians data
//   }, []); // Empty dependency array ensures this effect runs only once

//   const fetchData = (status = '') => {
//     setLoading(true); // Start loading
//     axios.get(`/server/waterheater_1_function/getfilterticket?search=${encodeURIComponent(JSON.stringify({
//       table: 'ticket_table',
//       column: 'Status',
//       value: status
//     }))}`)
//       .then((res) => {
//         console.log(res.data);
//         setData(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//       .finally(() => {
//         setLoading(false); // Stop loading after fetch completes
//       });
//   };

//   const fetchTechnicians = () => {
//     axios.get('/server/waterheater_1_function/gettechnicians')
//       .then((res) => {
//         console.log('Technician data:', res.data);
//         setTechnicians(res.data);
//       })
//       .catch((err) => {
//         console.log('Error in getting technician data:', err);
//       });
//   };

//   const FilterDropDown = () => {
//     const handleFilterSelect = (status) => {
//       fetchData(status);
//     };

//     return (
//       <DropdownButton id="dropdown-basic-button" title={<FaFilter/>}>
//         <Dropdown.Item onClick={() => handleFilterSelect('Created Ticket')}>Created Ticket</Dropdown.Item>
//         <Dropdown.Item onClick={() => handleFilterSelect('Technician Assigned')}>Technician Assigned</Dropdown.Item>
//         <Dropdown.Item onClick={() => handleFilterSelect('On Progress')}>On Progress</Dropdown.Item>
//         <Dropdown.Item onClick={() => handleFilterSelect('Moved to Inhouse')}>Moved to Inhouse</Dropdown.Item>
//         <Dropdown.Item onClick={() => handleFilterSelect('Ready for Dispatch')}>Ready for Dispatch</Dropdown.Item>
//         <Dropdown.Item onClick={() => handleFilterSelect('Assigned for Dispatch')}>Assigned for Dispatch</Dropdown.Item>
//       </DropdownButton>
//     );
//   };

//   const handleAssignTechnician = (ticket) => {
//     setSelectedTicket(ticket);
//     setModalType('technician');
//     setShowAssignModal(true);
//   };

//   const handleAssignDispatch = (ticket) => {
//     setSelectedTicket(ticket);
//     setModalType('dispatch');
//     setShowAssignModal(true);
//   };

//   const handleCloseAssignModal = () => {
//     setShowAssignModal(false);
//     setSelectedTechnician('');
//     setScheduledDate('');
//   };

//   const handleAssignTicket = () => {
//     let payload;
//     if (modalType === 'technician') {
//       payload = {
//         ROWID: selectedTicket.ROWID,
//         Technician_Name: selectedTechnician,
//         Scheduled_Date: scheduledDate,
//         Status: 'Technician Assigned',
//         Technician_Email: selectedTechnicianEmail // Include selected technician's email
//       };
//     } else if (modalType === 'dispatch') {
//       payload = {
//         ROWID: selectedTicket.ROWID,
//         Dispatch_Person: selectedTechnician,
//         Dispatch_Date: scheduledDate,
//         Status: 'Assigned for Dispatch',
//         Dispatch_Email: selectedTechnicianEmail // Include selected technician's email
//       };
//     }
  
//     axios.put('/server/waterheater_1_function/updateticket', { data: payload })
//       .then((res) => {
//         console.log('response from updating ticket', res);
//         // Optionally refresh data here
//       })
//       .catch((err) => {
//         console.log('error in updating ticket', err);
//       });
  
//     // Close the modal after handling assignment
//     handleCloseAssignModal();
//   };

//   const ActionDropdown = ({ ticket }) => {
//     const { Status } = ticket;

//     const isTechnicianButtonEnabled = Status === 'Created Ticket';
//     const isDispatchButtonEnabled = Status === 'Ready for Dispatch';

//     return (
//       <Dropdown>
//         <Dropdown.Toggle variant="primary" id="dropdown-basic"></Dropdown.Toggle>
//         <Dropdown.Menu>
//           <Dropdown.Item onClick={() => handleViewTicket(ticket)}>View</Dropdown.Item>
//           <Dropdown.Item onClick={() => handleAssignTechnician(ticket)} disabled={!isTechnicianButtonEnabled}>Assign Technician</Dropdown.Item>
//           <Dropdown.Item onClick={() => handleAssignDispatch(ticket)} disabled={!isDispatchButtonEnabled}>Assign Dispatch</Dropdown.Item>
//         </Dropdown.Menu>
//       </Dropdown>
//     );
//   };

//   const handleViewTicket = (ticket) => {
//     setSelectedTicket(ticket);
//     setShowModal(true);
//   };

//   const handleViewImage = (id, fileName) => {
//     axios.get(`/server/waterheater_1_function/viewfile/${id}`, {
//       responseType: 'blob', // Important to handle the file response
//       params: { fileName }
//     }).then(response => {
//       const url = URL.createObjectURL(new Blob([response.data]));
//       setImageModal({ show: true, src: url });
//     }).catch(error => {
//       console.error('Error fetching the image:', error);
//     });
//   };

//   const TicketModal = () => {
//     const handleCloseModal = () => {
//       setShowModal(false);
//       setSelectedTicket(null);
//     };

//     return (
//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Ticket Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedTicket && (
//             <>
//               <p>Customer Name: {selectedTicket.Customer_Name}</p>
//               <p>Scheduled Date: {selectedTicket.Scheduled_Date}</p>
//               <p>Dispatch Date: {selectedTicket.Dispatch_Date}</p>
//               <p>Date of Purchase: {selectedTicket.Date_of_Purchase}</p>
//               <p>Year of Purchase: {selectedTicket.Year_of_Purchase}</p>
//               <p>Dispatch Person: {selectedTicket.Dispatch_Person}</p>
//               <p>Serial Number: {selectedTicket.Serial_Number}</p>
//               <p>Ticket Id: {selectedTicket.Ticket_Id}</p>
//               <p>Technician Name: {selectedTicket.Technician_Name}</p>
//               <p>Ticket Date: {selectedTicket.Ticket_Date}</p>
//               <p>Status: {selectedTicket.Status}</p>
//               <p>Customer Feedback: {selectedTicket.Customer_Feedback}</p>
//               <p>Customer Phone: {selectedTicket.Customer_Phone}</p>
//               <p>Warranty Year: {selectedTicket.Warranty_Year}</p>
//               <p>Comments: {selectedTicket.Comments}</p>
//               <p>Product Name: {selectedTicket.Product_Name}</p>
//               <p>Customer Email: {selectedTicket.Customer_Email}</p>
//               <p>Customer Whatsapp: {selectedTicket.Customer_Whatsapp}</p>
//               <p>Attended Date Time: {selectedTicket.Attended_Date_Time}</p>
//               <p>Warranty Available: {selectedTicket.Warranty_Available}</p>
//               <p>Customer Address: {selectedTicket.Customer_Address}</p>
//               <p>Product Issue: {selectedTicket.Product_Issue}</p>
//               <p>Area In Address: {selectedTicket.Area_In_Address}</p>
//               <p>Location: {selectedTicket.Location}</p>
//               <p>Scrap Details: {selectedTicket.Scrap_Details}</p>
//               <p>Issue Image:<Button variant="secondary" onClick={() => handleViewImage(selectedTicket.Issue_Image, 'issue.jpg')}>View Image</Button> </p>
//               <p>After Service Image:<Button variant="secondary" onClick={() => handleViewImage(selectedTicket.After_Service_Image, 'after_service.jpg')}>View Image</Button>  </p>
//               <p>Warranty Image: <Button variant="secondary" onClick={() => handleViewImage(selectedTicket.Warranty_Image, 'warranty.jpg')}>View Image</Button> </p>
//               <p>Invoice File: <Button variant="secondary" onClick={() => handleViewImage(selectedTicket.Invoice_File, 'invoice.jpg')}>View Image</Button> </p>
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

//   const ImageModal = () => {
//     const handleCloseImageModal = () => {
//       setImageModal({ show: false, src: '' });
//     };

//     return (
//       <Modal show={imageModal.show} onHide={handleCloseImageModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Image</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <img src={imageModal.src} alt="Ticket Image" style={{ width: '100%' }} />
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseImageModal}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     );
//   };

//   return (
//     <div className='container'>
//       <div className="d-flex justify-content-end mb-2">
//         <FilterDropDown />
//       </div>
      
//       {loading ? (
//         <div className="d-flex justify-content-center align-items-center" style={{ height: '94vh' }}>
//           {/* <Spinner animation="border" variant="primary" /> */}
//           <HashLoader color="#2080c2" />
//         </div>
//       ) : data.length === 0 ? (
//         <div className="d-flex justify-content-center align-items-center" style={{ height: '94vh' }}>
//           <h1>No Data Added</h1>
//         </div>
//       ) : (
//         <div className="table-responsive">
//           <Table striped bordered hover>
//             <thead>
//               <tr>
//                 <th>T_Id</th>
//                 <th>P_Name</th>
//                 <th>War</th>
//                 <th>Status</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((ticket, index) => (
//                 <tr key={index}>
//                   <td>{ticket.ticket_table.Ticket_Id}</td>
//                   <td>{ticket.ticket_table.Product_Name}</td>
//                   <td>{ticket.ticket_table.Warranty_Year}</td>
//                   <td>{ticket.ticket_table.Status}</td>
//                   <td>
//                     <ActionDropdown ticket={ticket.ticket_table} />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </div>
//       )}

//       {/* Modal for assigning technician or dispatch */}
//       <Modal show={showAssignModal} onHide={handleCloseAssignModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>{modalType === 'technician' ? 'Assign Technician' : 'Assign Dispatch'}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="ticketId">
//               <Form.Label>Ticket Id</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={selectedTicket ? selectedTicket.Ticket_Id : ''}
//                 readOnly
//               />
//             </Form.Group>
//             <Form.Group controlId="technicianSelect">
//               <Form.Label>{modalType === 'technician' ? 'Select Technician' : 'Select Dispatch Person'}</Form.Label>
//               <Form.Control
//                 as="select"
//                 value={selectedTechnician}
//                 onChange={(e) => {
//                   const selectedTech = technicians.find(tech => tech.Technician_Name === e.target.value);
//                   setSelectedTechnician(e.target.value);
//                   setSelectedTechnicianEmail(selectedTech ? selectedTech.Technician_Email : '');
//                 }}
//                 style={{ maxWidth: '100%', width: '100%' }} // Adjust width as needed
//               >
//                 <option value="">{modalType === 'technician' ? 'Select Technician...' : 'Select Dispatch Person...'}</option>
//                 {technicians.map((technician, index) => (
//                   <option key={index} value={technician.Technician_Name}>
//                     {technician.Technician_Name}
//                   </option>
//                 ))}
//               </Form.Control>
//             </Form.Group>
//             <Form.Group controlId="scheduledDate">
//               <Form.Label>Scheduled Date</Form.Label>
//               <Form.Control
//                 type="date"
//                 value={scheduledDate}
//                 onChange={(e) => setScheduledDate(e.target.value)}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseAssignModal}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleAssignTicket}>
//             Assign
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       {/* Modal for ticket details */}
//       <TicketModal />
//       {/* Modal for viewing images */}
//       <ImageModal />
//     </div>
//   );
// };

// export default ViewTicket;








import React, { useEffect, useState } from 'react';
import { Table, Dropdown, Modal, Button, Form, Spinner } from 'react-bootstrap';
import axios from 'axios';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FaFilter } from "react-icons/fa";
import HashLoader from 'react-spinners/HashLoader';
import Swal from 'sweetalert2'

const ViewTicket = () => {
  const [data, setData] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [technicians, setTechnicians] = useState([]);
  const [selectedTechnician, setSelectedTechnician] = useState('');
  const [scheduledDate, setScheduledDate] = useState('');
  const [modalType, setModalType] = useState('');
  const [imageModal, setImageModal] = useState({ show: false, src: '' });
  const [selectedTechnicianEmail, setSelectedTechnicianEmail] = useState('');
  const [loading, setLoading] = useState(false); // State to manage loading state
  const [imageLoading, setImageLoading] = useState(false); // State to manage image loading state

  useEffect(() => {
    fetchData('Created Ticket'); // Initial fetch with 'Created Ticket' filter
    fetchTechnicians(); // Fetch technicians data
  }, []); // Empty dependency array ensures this effect runs only once

  const fetchData = (status = '') => {
    setLoading(true); // Start loading
    axios.get(`/server/waterheater_1_function/getfilterticket?search=${encodeURIComponent(JSON.stringify({
      table: 'ticket_table',
      column: 'Status',
      value: status
    }))}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false); // Stop loading after fetch completes
      });
  };

  const fetchTechnicians = () => {
    axios.get('/server/waterheater_1_function/gettechnicians')
      .then((res) => {
        console.log('Technician data:', res.data);
        setTechnicians(res.data);
      })
      .catch((err) => {
        console.log('Error in getting technician data:', err);
      });
  };

  const FilterDropDown = () => {
    const handleFilterSelect = (status) => {
      fetchData(status);
    };

    return (
      <DropdownButton id="dropdown-basic-button" title={<FaFilter/>}>
        <Dropdown.Item onClick={() => handleFilterSelect('Created Ticket')}>Created Ticket</Dropdown.Item>
        <Dropdown.Item onClick={() => handleFilterSelect('Technician Assigned')}>Technician Assigned</Dropdown.Item>
        <Dropdown.Item onClick={() => handleFilterSelect('On Progress')}>On Progress</Dropdown.Item>
        <Dropdown.Item onClick={() => handleFilterSelect('Moved to Inhouse')}>Moved to Inhouse</Dropdown.Item>
        <Dropdown.Item onClick={() => handleFilterSelect('Ready for Dispatch')}>Ready for Dispatch</Dropdown.Item>
        <Dropdown.Item onClick={() => handleFilterSelect('Assigned for Dispatch')}>Assigned for Dispatch</Dropdown.Item>
        <Dropdown.Item onClick={() => handleFilterSelect('Closed')}>Closed</Dropdown.Item>
      </DropdownButton>
    );
  };

  const handleAssignTechnician = (ticket) => {
    setSelectedTicket(ticket);
    setModalType('technician');
    setShowAssignModal(true);
  };

  const handleAssignDispatch = (ticket) => {
    setSelectedTicket(ticket);
    setModalType('dispatch');
    setShowAssignModal(true);
  };

  const handleCloseAssignModal = () => {
    setShowAssignModal(false);
    setSelectedTechnician('');
    setScheduledDate('');
  };

  const handleAssignTicket = () => {
    let payload;
    if (modalType === 'technician') {
      payload = {
        ROWID: selectedTicket.ROWID,
        Technician_Name: selectedTechnician,
        Scheduled_Date: scheduledDate,
        Status: 'Technician Assigned',
        Technician_Email: selectedTechnicianEmail // Include selected technician's email
      };
    } else if (modalType === 'dispatch') {
      payload = {
        ROWID: selectedTicket.ROWID,
        Dispatch_Person: selectedTechnician,
        Dispatch_Date: scheduledDate,
        Status: 'Assigned for Dispatch',
        Dispatch_Email: selectedTechnicianEmail // Include selected technician's email
      };
    }
  
    axios.put('/server/waterheater_1_function/updateticket', { data: payload })
      .then((res) => {
        console.log('response from updating ticket', res);
        // Optionally refresh data here
      })
      .catch((err) => {
        console.log('error in updating ticket', err);
      });
  
    // Close the modal after handling assignment
    handleCloseAssignModal();
  };

  const ActionDropdown = ({ ticket }) => {
    const { Status } = ticket;

    const isTechnicianButtonEnabled = Status === 'Created Ticket';
    const isDispatchButtonEnabled = Status === 'Ready for Dispatch';

    return (
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic"></Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleViewTicket(ticket)}>View</Dropdown.Item>
          <Dropdown.Item onClick={() => handleAssignTechnician(ticket)} disabled={!isTechnicianButtonEnabled}>Assign Technician</Dropdown.Item>
          <Dropdown.Item onClick={() => handleAssignDispatch(ticket)} disabled={!isDispatchButtonEnabled}>Assign Dispatch</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  const handleViewTicket = (ticket) => {
    setSelectedTicket(ticket);
    setShowModal(true);
  };

  const handleViewImage = (id, fileName) => {
    // setImageLoading(true); // Start image loading
    if (id === null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No File Added",
      });
      return
    }
 
    axios.get(`/server/waterheater_1_function/viewfile/${id}`, {
      responseType: 'blob', // Important to handle the file response
      params: { fileName }
    }).then(response => {
      const url = URL.createObjectURL(new Blob([response.data]));
      setImageModal({ show: true, src: url });
    }).catch(error => {
      console.error('Error fetching the image:', error);
    }).finally(() => {
      // setImageLoading(false); // Stop image loading after fetch completes (success or error)
    });
  };

  const TicketModal = () => {
    const handleCloseModal = () => {
      setShowModal(false);
      setSelectedTicket(null);
    };

    return (
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Ticket Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedTicket && (
            <>
              <p>Customer Name: {selectedTicket.Customer_Name}</p>
              <p>Scheduled Date: {selectedTicket.Scheduled_Date}</p>
              <p>Dispatch Date: {selectedTicket.Dispatch_Date}</p>
              <p>Date of Purchase: {selectedTicket.Date_of_Purchase}</p>
              <p>Year of Purchase: {selectedTicket.Year_of_Purchase}</p>
              <p>Dispatch Person: {selectedTicket.Dispatch_Person}</p>
              <p>Serial Number: {selectedTicket.Serial_Number}</p>
              <p>Ticket Id: {selectedTicket.Ticket_Id}</p>
              <p>Technician Name: {selectedTicket.Technician_Name}</p>
              <p>Ticket Date: {selectedTicket.Ticket_Date}</p>
              <p>Status: {selectedTicket.Status}</p>
              <p>Customer Feedback: {selectedTicket.Customer_Feedback}</p>
              <p>Customer Phone: {selectedTicket.Customer_Phone}</p>
              <p>Warranty Year: {selectedTicket.Warranty_Year}</p>
              <p>Comments: {selectedTicket.Comments}</p>
              <p>Product Name: {selectedTicket.Product_Name}</p>
              <p>Customer Email: {selectedTicket.Customer_Email}</p>
              <p>Customer Whatsapp: {selectedTicket.Customer_Whatsapp}</p>
              <p>Attended Date Time: {selectedTicket.Attended_Date_Time}</p>
              <p>Warranty Available: {selectedTicket.Warranty_Available}</p>
              <p>Customer Address: {selectedTicket.Customer_Address}</p>
              <p>Product Issue: {selectedTicket.Product_Issue}</p>
              <p>Area In Address: {selectedTicket.Area_In_Address}</p>
              <p>Location: {selectedTicket.Location}</p>
              <p>Scrap Details: {selectedTicket.Scrap_Details}</p>
              <p>Issue Image:<Button variant="secondary" onClick={() => handleViewImage(selectedTicket.Issue_Image, 'issue.jpg')}>View Image</Button> </p>
              <p>After Service Image:<Button variant="secondary" onClick={() => handleViewImage(selectedTicket.After_Service_Image, 'after_service.jpg')}>View Image</Button>  </p>
              <p>Warranty Image: <Button variant="secondary" onClick={() => handleViewImage(selectedTicket.Warranty_Image, 'warranty.jpg')}>View Image</Button> </p>
              <p>Invoice File: <Button variant="secondary" onClick={() => handleViewImage(selectedTicket.Invoice_File, 'invoice.jpg')}>View Image</Button> </p>
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

  const ImageModal = () => {
    const handleCloseImageModal = () => {
      setImageModal({ show: false, src: '' });
    };

    return (
      <Modal show={imageModal.show} onHide={handleCloseImageModal}>
        <Modal.Header closeButton>
          <Modal.Title>Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {imageLoading ? (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
              <HashLoader color="#2080c2" />
            </div>
          ) : (
            <img src={imageModal.src} alt="Ticket Image" style={{ width: '100%' }} />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseImageModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <div className='container'>
      <div className="d-flex justify-content-end mb-2">
        <FilterDropDown />
      </div>
      
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
        <div className="table-responsive">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>T_Id</th>
                <th>P_Name</th>
                <th>War</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((ticket, index) => (
                <tr key={index}>
                  <td>{ticket.ticket_table.Ticket_Id}</td>
                  <td>{ticket.ticket_table.Product_Name}</td>
                  <td>{ticket.ticket_table.Warranty_Year}</td>
                  <td>{ticket.ticket_table.Status}</td>
                  <td>
                    <ActionDropdown ticket={ticket.ticket_table} />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}

      {/* Modal for assigning technician or dispatch */}
      <Modal show={showAssignModal} onHide={handleCloseAssignModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalType === 'technician' ? 'Assign Technician' : 'Assign Dispatch'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="ticketId">
              <Form.Label>Ticket Id</Form.Label>
              <Form.Control
                type="text"
                value={selectedTicket ? selectedTicket.Ticket_Id : ''}
                readOnly
              />
            </Form.Group>
            <Form.Group controlId="technicianSelect">
              <Form.Label>{modalType === 'technician' ? 'Select Technician' : 'Select Dispatch Person'}</Form.Label>
              <Form.Control
                as="select"
                value={selectedTechnician}
                onChange={(e) => {
                  const selectedTech = technicians.find(tech => tech.Technician_Name === e.target.value);
                  setSelectedTechnician(e.target.value);
                  setSelectedTechnicianEmail(selectedTech ? selectedTech.Technician_Email : '');
                }}
                style={{ maxWidth: '100%', width: '100%' }} // Adjust width as needed
              >
                <option value="">{modalType === 'technician' ? 'Select Technician...' : 'Select Dispatch Person...'}</option>
                {technicians.map((technician, index) => (
                  <option key={index} value={technician.Technician_Name}>
                    {technician.Technician_Name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="scheduledDate">
              <Form.Label>Scheduled Date</Form.Label>
              <Form.Control
                type="date"
                value={scheduledDate}
                onChange={(e) => setScheduledDate(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAssignModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAssignTicket}>
            Assign
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for ticket details */}
      <TicketModal />
      {/* Modal for viewing images */}
      <ImageModal />
    </div>
  );
};

export default ViewTicket;
