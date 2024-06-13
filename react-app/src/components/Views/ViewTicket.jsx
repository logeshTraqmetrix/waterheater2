import React, { useEffect, useState } from 'react';
import { Table, Dropdown, Modal, Button } from 'react-bootstrap';
import axios from 'axios';

const ViewTicket = () => {
  const [data, setData] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get('/server/waterheater_1_function/getalltickets')
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const ActionDropdown = (ticket) => (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleViewTicket(ticket)}>View</Dropdown.Item>
        <Dropdown.Item>Edit</Dropdown.Item>
        <Dropdown.Item>Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );

  const handleViewTicket = (ticket) => {
    setSelectedTicket(ticket);
    console.log(ticket)
    setShowModal(true);
  };

  const TicketModal = () => {
    const handleCloseModal = () => {
      setSelectedTicket(null);
      setShowModal(false);
    };

    return (
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Ticket Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedTicket && (
            <>
              <p>Customer Name: {selectedTicket.ticket.Customer_Name}</p>
              <p>Scheduled_Date: {selectedTicket.ticket.Scheduled_Date}</p>
              <p>Dispatch_Date: {selectedTicket.ticket.Dispatch_Date}</p>
              <p>Date_of_Purchase: {selectedTicket.ticket.Date_of_Purchase}</p>
              <p>Year_of_Purchase: {selectedTicket.ticket.Year_of_Purchase}</p>
              <p>Dispatch_Person: {selectedTicket.ticket.Dispatch_Person}</p>
              <p>Serial_Number: {selectedTicket.ticket.Serial_Number}</p>
              <p>Ticket_Id: {selectedTicket.ticket.Ticket_Id}</p>
              <p>Technician_Name: {selectedTicket.ticket.Technician_Name}</p>
              <p>Ticket_Date: {selectedTicket.ticket.Ticket_Date}</p>
              <p>Status: {selectedTicket.ticket.Status}</p>
              <p>Customer_Feedback: {selectedTicket.ticket.Customer_Feedback}</p>
              <p>Customer_Phone: {selectedTicket.ticket.Customer_Phone}</p>
              <p>Warranty_Year: {selectedTicket.ticket.Warranty_Year}</p>
              <p>Comments: {selectedTicket.ticket.Comments}</p>
              <p>Product_Name: {selectedTicket.ticket.Product_Name}</p>
              <p>Customer_Email: {selectedTicket.ticket.Customer_Email}</p>
              <p>Customer_Whatsapp: {selectedTicket.ticket.Customer_Whatsapp}</p>
              <p>Attended_Date_Time: {selectedTicket.ticket.Attended_Date_Time}</p>
              <p>Warranty_Available: {selectedTicket.ticket.Warranty_Available}</p>
              <p>Customer_Address: {selectedTicket.ticket.Customer_Address}</p>
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
      <TicketModal />
    </div>
  );
};

export default ViewTicket;