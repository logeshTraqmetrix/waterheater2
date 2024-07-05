// import React, { useEffect, useState } from 'react';
// import { Table, Dropdown, Modal, Button, Form, Spinner } from 'react-bootstrap';
// import axios from 'axios';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import { FaFilter } from "react-icons/fa";
// import HashLoader from 'react-spinners/HashLoader';
// import Swal from 'sweetalert2'

// const ViewClosedTicket = () => {
//   const [data, setData] = useState([]);
//   const [selectedTicket, setSelectedTicket] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [scheduledDate, setScheduledDate] = useState('');
//   const [modalType, setModalType] = useState('');
//   const [imageModal, setImageModal] = useState({ show: false, src: '' });
//   const [loading, setLoading] = useState(false); // State to manage loading state
//   const [imageLoading, setImageLoading] = useState(false); // State to manage image loading state

//   useEffect(() => {
//     fetchData('Closed'); 
//   }, []);

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
//         setLoading(false); 
//       });
//   };

 




//   const ActionDropdown = ({ ticket }) => {
//     const { Status } = ticket;

//     return (
//       <Dropdown>
//         <Dropdown.Toggle variant="primary" id="dropdown-basic"></Dropdown.Toggle>
//         <Dropdown.Menu>
//           <Dropdown.Item onClick={() => handleViewTicket(ticket)}>View</Dropdown.Item>
//         </Dropdown.Menu>
//       </Dropdown>
//     );
//   };

//   const handleViewTicket = (ticket) => {
//     setSelectedTicket(ticket);
//     setShowModal(true);
//   };

//   const handleViewImage = (id, fileName) => {
//     // setImageLoading(true); // Start image loading
//     if (id === null) {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "No File Added",
//       });
//       return
//     }
 
//     axios.get(`/server/waterheater_1_function/viewfile/${id}`, {
//       responseType: 'blob', // Important to handle the file response
//       params: { fileName }
//     }).then(response => {
//       const url = URL.createObjectURL(new Blob([response.data]));
//       setImageModal({ show: true, src: url });
//     }).catch(error => {
//       console.error('Error fetching the image:', error);
//     }).finally(() => {
//       // setImageLoading(false); // Stop image loading after fetch completes (success or error)
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
//           {imageLoading ? (
//             <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
//               <HashLoader color="#2080c2" />
//             </div>
//           ) : (
//             <img src={imageModal.src} alt="Ticket Image" style={{ width: '100%' }} />
//           )}
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
//        <div>
//          <h2>Closed Ticket View</h2>
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
//        </div>
//       )}

//       {/* Modal for ticket details */}
//       <TicketModal />
//       {/* Modal for viewing images */}
//       <ImageModal />
//     </div>
//   );
// };

// export default ViewClosedTicket;












// import React, { useEffect, useState } from 'react';
// import { Table, Dropdown, Modal, Button, Form, DropdownButton } from 'react-bootstrap';
// import { Pagination } from 'antd';
// import axios from 'axios';
// import { FaFilter } from "react-icons/fa6";
// import HashLoader from 'react-spinners/HashLoader';
// import Swal from 'sweetalert2'

// const ViewClosedTicket = () => {
//   const [data, setData] = useState([]);
//   const [selectedTicket, setSelectedTicket] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [imageModal, setImageModal] = useState({ show: false, src: '' });
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [pageSize] = useState(10);
//   const [totalRecords, setTotalRecords] = useState(0);
//   const [showFilterModal, setShowFilterModal] = useState(false);
//   const [filterValue, setFilterValue] = useState('');
//   const [removeFilter, setRemoveFilter] = useState('');

//   useEffect(() => {
//     fetchData();
//   }, [currentPage, removeFilter]);

//   const fetchData = (ticketId = '') => {
//     setLoading(true);
//     const params = { 
//       limit: pageSize, 
//       offset: (currentPage - 1) * pageSize,
//       status: 'Closed'
//     };

//     let endpoint = '/server/waterheater_1_function/getalltickets';

//     if (ticketId) {
//       endpoint = '/server/waterheater_1_function/getfilterticket';
//       params.search = JSON.stringify({
//         table: 'ticket_table',
//         column: 'Ticket_Id',
//         value: ticketId
//       });
//     }

//     axios.get(endpoint, { params })
//       .then((res) => {
//         if (ticketId) {
//           setData(res.data);
//           setTotalRecords(res.data.length);
//         } else {
//           setData(res.data.records);
//           setTotalRecords(res.data.total);
//         }
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
//     fetchData(filterValue);
//     setShowFilterModal(false);
//   };

//   const handleViewTicket = (ticket) => {
//     setSelectedTicket(ticket);
//     setShowModal(true);
//   };

//   const handleViewImage = (id, fileName) => {
//     if (id === null) {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "No File Added",
//       });
//       return;
//     }
 
//     axios.get(`/server/waterheater_1_function/viewfile/${id}`, {
//       responseType: 'blob',
//       params: { fileName }
//     }).then(response => {
//       const url = URL.createObjectURL(new Blob([response.data]));
//       setImageModal({ show: true, src: url });
//     }).catch(error => {
//       console.error('Error fetching the image:', error);
//     });
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const FilterDropDown = () => (
//     <DropdownButton id="dropdown-basic-button" title={<FaFilter />}>
//       <Dropdown.Item onClick={() => setShowFilterModal(true)}>Ticket ID</Dropdown.Item>
//       <Dropdown.Item onClick={() => { setRemoveFilter(Date.now()); fetchData(); }}>Remove Filter</Dropdown.Item>
//     </DropdownButton>
//   );

//   const ActionDropdown = ({ ticket }) => (
//     <Dropdown>
//       <Dropdown.Toggle variant="primary" id="dropdown-basic"></Dropdown.Toggle>
//       <Dropdown.Menu>
//         <Dropdown.Item onClick={() => handleViewTicket(ticket)}>View</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );

//   const TicketModal = () => {
//     const handleCloseModal = () => {
//         setShowModal(false);
//         setSelectedTicket(null);
//       };
  
//       return (
//         <Modal show={showModal} onHide={handleCloseModal}>
//           <Modal.Header closeButton>
//             <Modal.Title>Ticket Details</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             {selectedTicket && (
//               <>
//                 <p>Customer Name: {selectedTicket.Customer_Name}</p>
//                 <p>Scheduled Date: {selectedTicket.Scheduled_Date}</p>
//                 <p>Dispatch Date: {selectedTicket.Dispatch_Date}</p>
//                 <p>Date of Purchase: {selectedTicket.Date_of_Purchase}</p>
//                 <p>Year of Purchase: {selectedTicket.Year_of_Purchase}</p>
//                 <p>Dispatch Person: {selectedTicket.Dispatch_Person}</p>
//                 <p>Serial Number: {selectedTicket.Serial_Number}</p>
//                 <p>Ticket Id: {selectedTicket.Ticket_Id}</p>
//                 <p>Technician Name: {selectedTicket.Technician_Name}</p>
//                 <p>Ticket Date: {selectedTicket.Ticket_Date}</p>
//                 <p>Status: {selectedTicket.Status}</p>
//                 <p>Customer Feedback: {selectedTicket.Customer_Feedback}</p>
//                 <p>Customer Phone: {selectedTicket.Customer_Phone}</p>
//                 <p>Warranty Year: {selectedTicket.Warranty_Year}</p>
//                 <p>Comments: {selectedTicket.Comments}</p>
//                 <p>Product Name: {selectedTicket.Product_Name}</p>
//                 <p>Customer Email: {selectedTicket.Customer_Email}</p>
//                 <p>Customer Whatsapp: {selectedTicket.Customer_Whatsapp}</p>
//                 <p>Attended Date Time: {selectedTicket.Attended_Date_Time}</p>
//                 <p>Warranty Available: {selectedTicket.Warranty_Available}</p>
//                 <p>Customer Address: {selectedTicket.Customer_Address}</p>
//                 <p>Product Issue: {selectedTicket.Product_Issue}</p>
//                 <p>Area In Address: {selectedTicket.Area_In_Address}</p>
//                 <p>Location: {selectedTicket.Location}</p>
//                 <p>Scrap Details: {selectedTicket.Scrap_Details}</p>
//                 <p>Issue Image:<Button variant="secondary" onClick={() => handleViewImage(selectedTicket.Issue_Image, 'issue.jpg')}>View Image</Button> </p>
//                 <p>After Service Image:<Button variant="secondary" onClick={() => handleViewImage(selectedTicket.After_Service_Image, 'after_service.jpg')}>View Image</Button>  </p>
//                 <p>Warranty Image: <Button variant="secondary" onClick={() => handleViewImage(selectedTicket.Warranty_Image, 'warranty.jpg')}>View Image</Button> </p>
//                 <p>Invoice File: <Button variant="secondary" onClick={() => handleViewImage(selectedTicket.Invoice_File, 'invoice.jpg')}>View Image</Button> </p>
//               </>
//             )}
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleCloseModal}>
//               Close
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       );
//   };

//   const ImageModal = () => {
//     const handleCloseImageModal = () => {
//         setImageModal({ show: false, src: '' });
//       };
  
//       return (
//         <Modal show={imageModal.show} onHide={handleCloseImageModal}>
//           <Modal.Header closeButton>
//             <Modal.Title>Image</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             {imageLoading ? (
//               <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
//                 <HashLoader color="#2080c2" />
//               </div>
//             ) : (
//               <img src={imageModal.src} alt="Ticket Image" style={{ width: '100%' }} />
//             )}
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleCloseImageModal}>
//               Close
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       );
//   };

//   return (
//     <div className='container'>
//       <h2>Closed Ticket View</h2>
//       <div className="d-flex justify-content-end mb-2">
//         <FilterDropDown />
//       </div>
      
//       {loading ? (
//         <div className="d-flex justify-content-center align-items-center" style={{ height: '94vh' }}>
//           <HashLoader color="#2080c2" />
//         </div>
//       ) : data.length === 0 ? (
//         <div className="d-flex justify-content-center align-items-center" style={{ height: '94vh' }}>
//           <h1>No Data Added</h1>
//         </div>
//       ) : (
//         <>
//           <div className="table-responsive">
//             <Table striped bordered hover>
//               <thead>
//                 <tr>
//                   <th>T_Id</th>
//                   <th>P_Name</th>
//                   <th>War</th>
//                   <th>Status</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {data.map((ticket, index) => (
//                   <tr key={index}>
//                     <td>{ticket.ticket_table.Ticket_Id}</td>
//                     <td>{ticket.ticket_table.Product_Name}</td>
//                     <td>{ticket.ticket_table.Warranty_Year}</td>
//                     <td>{ticket.ticket_table.Status}</td>
//                     <td>
//                       <ActionDropdown ticket={ticket.ticket_table} />
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           </div>

//           <div className='d-flex justify-content-center' style={{ margin: '30px' }}>
//             <Pagination
//               current={currentPage}
//               pageSize={pageSize}
//               total={totalRecords}
//               onChange={handlePageChange}
//               showSizeChanger={false}
//             />
//           </div>
//         </>
//       )}

//       <TicketModal />
//       <ImageModal />

//       <Modal show={showFilterModal} onHide={() => setShowFilterModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Filter by Ticket ID</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="formFilterValue">
//               <Form.Label>Ticket ID</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter Ticket ID"
//                 value={filterValue}
//                 onChange={(e) => setFilterValue(e.target.value)}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowFilterModal(false)}>
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

// export default ViewClosedTicket;









import React, { useEffect, useState } from 'react';
import { Table, Dropdown, Modal, Button, Form, DropdownButton } from 'react-bootstrap';
import { Pagination } from 'antd';
import axios from 'axios';
import { FaFilter } from "react-icons/fa6";
import HashLoader from 'react-spinners/HashLoader';
import Swal from 'sweetalert2'

const ViewClosedTicket = () => {
  const [data, setData] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [imageModal, setImageModal] = useState({ show: false, src: '' });
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);
  const [totalRecords, setTotalRecords] = useState(0);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filterValue, setFilterValue] = useState('');
  const [removeFilter, setRemoveFilter] = useState('');

  useEffect(() => {
    fetchData();
  }, [currentPage, removeFilter]);

  const fetchData = (ticketId = '') => {
    setLoading(true);
    const params = { 
      limit: pageSize, 
      offset: (currentPage - 1) * pageSize,
      status: 'Closed'
    };

    let endpoint = '/server/waterheater_1_function/getallclosedtickets';

    if (ticketId) {
      endpoint = '/server/waterheater_1_function/getfilterclosedticket';
      params.search = JSON.stringify({
        table: 'ticket_table',
        column: 'Ticket_Id',
        value: ticketId
      });
    }

    axios.get(endpoint, { params })
      .then((res) => {
        if (ticketId) {
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
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleFilterSubmit = () => {
    fetchData(filterValue);
    setShowFilterModal(false);
    setFilterValue('')
  };

  const handleViewTicket = (ticket) => {
    setSelectedTicket(ticket);
    setShowModal(true);
  };

  const handleViewImage = (id, fileName) => {
    if (id === null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No File Added",
      });
      return;
    }
 
    setImageLoading(true);
    axios.get(`/server/waterheater_1_function/viewfile/${id}`, {
      responseType: 'blob',
      params: { fileName }
    }).then(response => {
      const url = URL.createObjectURL(new Blob([response.data]));
      setImageModal({ show: true, src: url });
    }).catch(error => {
      console.error('Error fetching the image:', error);
    }).finally(() => {
      setImageLoading(false);
    });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const FilterDropDown = () => (
    <DropdownButton id="dropdown-basic-button" title={<FaFilter />}>
      <Dropdown.Item onClick={() => setShowFilterModal(true)}>Ticket ID</Dropdown.Item>
      <Dropdown.Item onClick={() => { setRemoveFilter(Date.now()); fetchData(); }}>Remove Filter</Dropdown.Item>
    </DropdownButton>
  );

  const ActionDropdown = ({ ticket }) => (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic"></Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleViewTicket(ticket)}>View</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );

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
      <h2>Closed Ticket View</h2>
      <div className="d-flex justify-content-end mb-2">
        <FilterDropDown />
      </div>
      
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

          <div className='d-flex justify-content-center' style={{ margin: '30px' }}>
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={totalRecords}
              onChange={handlePageChange}
              showSizeChanger={false}
            />
          </div>
        </>
      )}

      <TicketModal />
      <ImageModal />

      <Modal show={showFilterModal} onHide={() => setShowFilterModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Filter by Ticket ID</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formFilterValue">
              <Form.Label>Ticket ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Ticket ID"
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {
            setShowFilterModal(false)
            setFilterValue('')
          }}>
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

export default ViewClosedTicket;