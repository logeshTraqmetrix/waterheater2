// import React, { useEffect, useState } from 'react';
// import { Table, Dropdown, Modal, Button } from 'react-bootstrap';
// import axios from 'axios';
// import InvoiceForm from '../Forms/InvoiceForm';

// const DispatchView = ({roleEmail}) => {
//   const [data, setData] = useState([]);
//   const [selectedTicket, setSelectedTicket] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [imageModal, setImageModal] = useState({ show: false, src: '' });
//   const [showInvoiceForm, setShowInvoiceForm] = useState(false);

//   const email = roleEmail;

//   useEffect(() => {
//     fetchData(email);
//   }, []);

//   const fetchData = (email) => {
//     axios.get(`/server/waterheater_1_function/getfilterticket?search=${encodeURIComponent(JSON.stringify({
//       table: 'ticket_table',
//       column: 'Dispatch_Email',
//       value: email
//     }))}`)
//       .then((res) => {
//         console.log(res.data);
//         setData(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };


//   const toggleInvoiceForm = (ticket = null) => {
//     setSelectedTicket(ticket);
//     setShowInvoiceForm(!showInvoiceForm);
//   };

//   const handleViewTicket = (ticket) => {
//     setSelectedTicket(ticket);
//     setShowModal(true);
//   };

//   const handleViewImage = (id, fileName) => {
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

//     // ... (rest of the ImageModal component remains unchanged)
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
//       {!showInvoiceForm ? (
//         <>
//           <div className="table-responsive">
//             <Table striped bordered hover>
//               <thead>
//                 <tr>
//                   <th>T_Id</th>
//                   <th>P_Name</th>
//                   <th>Phone</th>
//                   <th>S_date</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {data.map((ticket, index) => (
//                   <tr key={index}>
//                     <td>{ticket.ticket_table.Ticket_Id}</td>
//                     <td>{ticket.ticket_table.Product_Name}</td>
//                     <td>{ticket.ticket_table.Customer_Phone}</td>
//                     <td>{ticket.ticket_table.Scheduled_Date}</td>
//                     <td>
//                       <Dropdown>
//                         <Dropdown.Toggle variant="primary" id="dropdown-basic"></Dropdown.Toggle>
//                         <Dropdown.Menu>
//                           <Dropdown.Item onClick={() => handleViewTicket(ticket.ticket_table)}>View</Dropdown.Item>
//                           <Dropdown.Item onClick={() => toggleInvoiceForm(ticket.ticket_table)}>Add Invoice</Dropdown.Item>
//                         </Dropdown.Menu>
//                       </Dropdown>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           </div>
//           <TicketModal />
//           <ImageModal />
//         </>
//       ) : 

//       (
//         <div>
//           <button onClick={() => toggleInvoiceForm()}>Back</button>
//           <InvoiceForm 
//             ticketId={selectedTicket?.Ticket_Id}
//             customerName5={selectedTicket?.Customer_Name}
//             customerAddress={selectedTicket?.Customer_Address}
//             RowId={selectedTicket?.ROWID}
//           />
//         </div>
//       )
//       }

//     </div>
//   );
// };

// export default DispatchView;







import React, { useEffect, useState } from 'react';
import { Table, Dropdown, Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import { HashLoader } from 'react-spinners';
import Swal from 'sweetalert2';
import InvoiceForm from '../Forms/InvoiceForm';

const DispatchView = ({ roleEmail }) => {
  const [data, setData] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [imageModal, setImageModal] = useState({ show: false, src: '' });
  const [showInvoiceForm, setShowInvoiceForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const email = roleEmail;

  useEffect(() => {
    fetchData(email);
  }, [email]);

  const fetchData = (email) => {
    setLoading(true);
    axios.get(`/server/waterheater_1_function/getfilterticket?search=${encodeURIComponent(JSON.stringify({
      table: 'ticket_table',
      column: 'Dispatch_Email',
      value: email
    }))}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
        Swal.fire('Error', 'Failed to fetch data', 'error');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const toggleInvoiceForm = (ticket = null) => {
    setSelectedTicket(ticket);
    setShowInvoiceForm(!showInvoiceForm);
  };

  const handleViewTicket = (ticket) => {
    setSelectedTicket(ticket);
    setShowModal(true);
  };

  const handleViewImage = (id, fileName) => {
    axios.get(`/server/waterheater_1_function/viewfile/${id}`, {
      responseType: 'blob',
      params: { fileName }
    }).then(response => {
      const url = URL.createObjectURL(new Blob([response.data]));
      setImageModal({ show: true, src: url });
    }).catch(error => {
      console.error('Error fetching the image:', error);
      Swal.fire('Error', 'Failed to load image', 'error');
    });
  };

  const handleSubmitInvoice = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Swal.fire('Data Added Successfully', '', 'success').then(() => {
        setShowInvoiceForm(false);
        setSelectedTicket(null);
        window.location.href = '/home';
      });
    }, 1500);
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
              <p>Issue Image: <Button variant="secondary" onClick={() => handleViewImage(selectedTicket.Issue_Image, 'issue.jpg')}>View Image</Button></p>
              <p>After Service Image: <Button variant="secondary" onClick={() => handleViewImage(selectedTicket.After_Service_Image, 'after_service.jpg')}>View Image</Button></p>
              <p>Warranty Image: <Button variant="secondary" onClick={() => handleViewImage(selectedTicket.Warranty_Image, 'warranty.jpg')}>View Image</Button></p>
              <p>Invoice File: <Button variant="secondary" onClick={() => handleViewImage(selectedTicket.Invoice_File, 'invoice.jpg')}>View Image</Button></p>
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
          <img src={imageModal.src} alt="Ticket Image" style={{ width: '100%' }} />
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
      <h2>Dispatch View</h2>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '84vh' }}>
          <HashLoader color="#2080c2" />
        </div>
      ) : !showInvoiceForm ? (
        <>
          {data.length > 0 ? (
           <div>
            <h2>Dispatch View</h2>
           <div className="table-responsive">
           <Table striped bordered hover>
             <thead>
               <tr>
                 <th>T_Id</th>
                 <th>P_Name</th>
                 <th>Phone</th>
                 <th>S_date</th>
                 <th>Action</th>
               </tr>
             </thead>
             <tbody>
               {data.map((ticket, index) => (
                 <tr key={index}>
                   <td>{ticket.ticket_table.Ticket_Id}</td>
                   <td>{ticket.ticket_table.Product_Name}</td>
                   <td>{ticket.ticket_table.Customer_Phone}</td>
                   <td>{ticket.ticket_table.Scheduled_Date}</td>
                   <td>
                     <Dropdown  drop={'start'}>
                       <Dropdown.Toggle variant="primary" id="dropdown-basic"></Dropdown.Toggle>
                       <Dropdown.Menu>
                         <Dropdown.Item onClick={() => handleViewTicket(ticket.ticket_table)}>View</Dropdown.Item>
                         <Dropdown.Item onClick={() => toggleInvoiceForm(ticket.ticket_table)}>Add Invoice</Dropdown.Item>
                       </Dropdown.Menu>
                     </Dropdown>
                   </td>
                 </tr>
               ))}
             </tbody>
           </Table>
         </div>
           </div>
          ) : (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '84vh' }}>
              <h1>No Data Added</h1>
            </div>
          )}
          <TicketModal />
          <ImageModal />
        </>
      ) : (
        <div>
          <Button variant="secondary" onClick={() => setShowInvoiceForm(false)} className="mb-3">
            Back
          </Button>
          <InvoiceForm
            ticketId={selectedTicket?.Ticket_Id}
            customerName={selectedTicket?.Customer_Name}
            customerAddress={selectedTicket?.Customer_Address}
            RowId={selectedTicket?.ROWID}
            onSubmit={handleSubmitInvoice}
          />
        </div>
      )}
    </div>
  );
};

export default DispatchView;