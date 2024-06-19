import React, { useEffect, useState } from 'react';
import { Table, Dropdown, Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

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

  useEffect(() => {
    // Fetching ticket data
    axios
      .get('/server/waterheater_1_function/getalltickets')
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // Fetching technicians data
    axios
      .get('/server/waterheater_1_function/gettechnicians')
      .then((res) => {
        console.log('Technician data:', res.data);
        setTechnicians(res.data);
      })
      .catch((err) => {
        console.log('Error in getting technician data:', err);
      });
  }, []);

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
      };
    } else if (modalType === 'dispatch') {
      payload = {
        ROWID: selectedTicket.ROWID,
        Dispatch_Person: selectedTechnician,
        Dispatch_Date: scheduledDate,
        Status: 'Assigned Dispatch',
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

  const ActionDropdown = ({ ticket }) => (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic"></Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleViewTicket(ticket)}>View</Dropdown.Item>
        <Dropdown.Item onClick={() => handleAssignTechnician(ticket)}>Assign Technician</Dropdown.Item>
        <Dropdown.Item onClick={() => handleAssignDispatch(ticket)}>Assign Dispatch</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );

  const handleViewTicket = (ticket) => {
    setSelectedTicket(ticket);
    setShowModal(true);
  };

  const handleViewImage = (id, fileName) => {
    axios.get(`/server/waterheater_1_function/viewfile/${id}`, {
      responseType: 'blob', // Important to handle the file response
      params: { fileName }
    }).then(response => {
      const url = URL.createObjectURL(new Blob([response.data]));
      setImageModal({ show: true, src: url });
    }).catch(error => {
      console.error('Error fetching the image:', error);
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
    <div>
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
                <td>{ticket.Ticket_Id}</td>
                <td>{ticket.Product_Name}</td>
                <td>{ticket.Warranty_Year}</td>
                <td>{ticket.Status}</td>
                <td>
                  <ActionDropdown ticket={ticket} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

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
                onChange={(e) => setSelectedTechnician(e.target.value)}
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
