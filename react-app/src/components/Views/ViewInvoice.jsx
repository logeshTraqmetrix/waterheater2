import React, { useEffect, useState } from 'react';
import { Table, Dropdown, Modal, Button } from 'react-bootstrap';
import axios from 'axios';

const ViewInvoice = () => {
  const [data, setData] = useState([]);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get('/server/waterheater_1_function/getinvoices')
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const ActionDropdown = (invoice) => (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleViewInvoice(invoice)}>View</Dropdown.Item>
        <Dropdown.Item>Edit</Dropdown.Item>
        <Dropdown.Item>Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );

  const handleViewInvoice = (invoice) => {
    setSelectedInvoice(invoice);
    console.log(invoice)
    setShowModal(true);
  };

  const InvoiceModal = () => {
    const handleCloseModal = () => {
      setSelectedInvoice(null);
      setShowModal(false);
    };

    return (
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Invoice Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedInvoice && (
            <>
              <p>Invoice_Number: {selectedInvoice.invoice.Invoice_Number}</p>
              <p>Customer_Name: {selectedInvoice.invoice.Customer_Name}</p>
              <p>Ticket_Id: {selectedInvoice.invoice.Ticket_Id}</p>
              <p>Address: {selectedInvoice.invoice.Address}</p>
              <p>Grand_Total : {selectedInvoice.invoice.Grand_Total}</p>
              <p>Date : {selectedInvoice.invoice.CREATEDTIME}</p>

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
              <th>I_No</th>
              <th>Tkt_Id</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((invoice, index) => (
              <tr key={index}>
                <td>{invoice.Invoice_Number}</td>
                <td>{invoice.Ticket_Id}</td>
                <td>{invoice.CREATEDTIME}</td>
                <td>
                  <ActionDropdown invoice={invoice} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <InvoiceModal />
    </div>
  );
};

export default ViewInvoice;