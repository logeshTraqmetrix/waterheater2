// import React, { useEffect, useState } from 'react';
// import { Table, Dropdown, Modal, Button } from 'react-bootstrap';
// import axios from 'axios';

// const ViewInvoice = () => {
//   const [data, setData] = useState([]);
//   const [selectedInvoice, setSelectedInvoice] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     axios
//       .get('/server/waterheater_1_function/getinvoices')
//       .then((res) => {
//         console.log(res.data);
//         setData(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   const ActionDropdown = (invoice) => (
//     <Dropdown>
//       <Dropdown.Toggle variant="primary" id="dropdown-basic">
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//         <Dropdown.Item onClick={() => handleViewInvoice(invoice)}>View</Dropdown.Item>
//         <Dropdown.Item>Edit</Dropdown.Item>
//         <Dropdown.Item>Delete</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );

//   const handleViewInvoice = (invoice) => {
//     setSelectedInvoice(invoice);
//     console.log(invoice)
//     setShowModal(true);
//   };

//   const InvoiceModal = () => {
//     const handleCloseModal = () => {
//       setSelectedInvoice(null);
//       setShowModal(false);
//     };

//     return (
//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Invoice Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedInvoice && (
//             <>
//               <p>Invoice_Number: {selectedInvoice.invoice.Invoice_Number}</p>
//               <p>Customer_Name: {selectedInvoice.invoice.Customer_Name}</p>
//               <p>Ticket_Id: {selectedInvoice.invoice.Ticket_Id}</p>
//               <p>Address: {selectedInvoice.invoice.Address}</p>
//               <p>Grand_Total : {selectedInvoice.invoice.Grand_Total}</p>
//               <p>Date : {selectedInvoice.invoice.CREATEDTIME}</p>

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
//               <th>I_No</th>
//               <th>Tkt_Id</th>
//               <th>Date</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((invoice, index) => (
//               <tr key={index}>
//                 <td>{invoice.Invoice_Number}</td>
//                 <td>{invoice.Ticket_Id}</td>
//                 <td>{invoice.CREATEDTIME}</td>
//                 <td>
//                   <ActionDropdown invoice={invoice} />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>
//       <InvoiceModal />
//     </div>
//   );
// };

// export default ViewInvoice;







// import React, { useEffect, useState } from 'react';
// import { Table, Dropdown, Modal, Button } from 'react-bootstrap';
// import { Pagination } from 'antd';
// import axios from 'axios';

// const ViewInvoice = () => {
//   const [data, setData] = useState([]);
//   const [selectedInvoice, setSelectedInvoice] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [pageSize] = useState(10); // Number of records per page
//   const [totalRecords, setTotalRecords] = useState(0);

//   useEffect(() => {
//     fetchData();
//   }, [currentPage]); // Fetch data when currentPage changes

//   const fetchData = () => {
//     axios
//       .get('/server/waterheater_1_function/allgetinvoices', {
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

//   const ActionDropdown = (invoice) => (
//     <Dropdown>
//       <Dropdown.Toggle variant="primary" id="dropdown-basic">
//         Actions
//       </Dropdown.Toggle>
//       <Dropdown.Menu>
//         <Dropdown.Item onClick={() => handleViewInvoice(invoice)}>View</Dropdown.Item>
//         <Dropdown.Item>Edit</Dropdown.Item>
//         <Dropdown.Item>Delete</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );

//   const handleViewInvoice = (invoice) => {
//     setSelectedInvoice(invoice);
//     console.log(invoice);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setSelectedInvoice(null);
//     setShowModal(false);
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const InvoiceModal = () => (
//     <Modal show={showModal} onHide={handleCloseModal}>
//       <Modal.Header closeButton>
//         <Modal.Title>Invoice Details</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         {selectedInvoice && (
//           <>
//             <p>Invoice_Number: {selectedInvoice.invoice.Invoice_Number}</p>
//             <p>Customer_Name: {selectedInvoice.invoice.Customer_Name}</p>
//             <p>Ticket_Id: {selectedInvoice.invoice.Ticket_Id}</p>
//             <p>Address: {selectedInvoice.invoice.Address}</p>
//             <p>Grand_Total : {selectedInvoice.invoice.Grand_Total}</p>
//             <p>Date : {selectedInvoice.invoice.CREATEDTIME}</p>
//           </>
//         )}
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={handleCloseModal}>
//           Close
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );

//   return (
//     <div>
//       <div className="table-responsive">
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>I_No</th>
//               <th>Tkt_Id</th>
//               <th>Date</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((invoice, index) => (
//               <tr key={index}>
//                 <td>{invoice.invoice_table.Invoice_Number}</td>
//                 <td>{invoice.invoice_table.Ticket_Id}</td>
//                 <td>{invoice.invoice_table.CREATEDTIME}</td>
//                 <td>
//                   <ActionDropdown invoice={invoice.invoice_table} />
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

//       <InvoiceModal />
//     </div>
//   );
// };

// export default ViewInvoice;





// import React, { useEffect, useState } from 'react';
// import { Table, Dropdown, Modal, Button, Form, DropdownButton } from 'react-bootstrap';
// import { Pagination } from 'antd';
// import axios from 'axios';
// import { FaFilter } from "react-icons/fa6";

// const ViewInvoice = () => {
//   const [data, setData] = useState([]);
//   const [selectedInvoice, setSelectedInvoice] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [showFilterModal, setShowFilterModal] = useState(false);
//   const [filterColumn, setFilterColumn] = useState('');
//   const [filterValue, setFilterValue] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [pageSize] = useState(10); // Number of records per page
//   const [totalRecords, setTotalRecords] = useState(0);

//   useEffect(() => {
//     fetchData();
//   }, [currentPage]); // Fetch data when currentPage changes

//   const fetchData = (column = '', value = '') => {
//     const params = { limit: pageSize, offset: (currentPage - 1) * pageSize };
//     let endpoint = '/server/waterheater_1_function/allgetinvoices'; // Default endpoint

//     if (column && value) {
//       endpoint = '/server/waterheater_1_function/getfilterinvoice'; // Use filter endpoint if column and value are provided
//       params.search = JSON.stringify({
//         table: 'invoice_table', // Corrected table name
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
//     if (filterColumn && filterValue) {
//       fetchData(filterColumn, filterValue);
//       setShowFilterModal(false);
//     }
//   };

//   const ActionDropdown = (invoice) => (
//     <Dropdown>
//       <Dropdown.Toggle variant="primary" id="dropdown-basic">

//       </Dropdown.Toggle>
//       <Dropdown.Menu>
//         <Dropdown.Item onClick={() => handleViewInvoice(invoice)}>View</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );

//   const handleViewInvoice = (invoice) => {
//     setSelectedInvoice(invoice.invoice);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setSelectedInvoice(null);
//     setShowModal(false);
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const FilterDropDown = () => (
//     <DropdownButton id="dropdown-basic-button" title={<FaFilter/>}>
//       <Dropdown.Item onClick={() => { setFilterColumn('Ticket_Id'); setShowFilterModal(true); }}>Ticket ID</Dropdown.Item>
//       <Dropdown.Item onClick={() => { setFilterColumn('Invoice_Number'); setShowFilterModal(true); }}>Invoice Number</Dropdown.Item>
//     </DropdownButton>
//   );

//   const InvoiceModal = () => (
//     <Modal show={showModal} onHide={handleCloseModal}>
//       <Modal.Header closeButton>
//         <Modal.Title>Invoice Details</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         {selectedInvoice && (
//           <>
//             <p>Invoice Number: {selectedInvoice.Invoice_Number}</p>
//             <p>Customer Name: {selectedInvoice.Customer_Name}</p>
//             <p>Ticket ID: {selectedInvoice.Ticket_Id}</p>
//             <p>Address: {selectedInvoice.Address}</p>
//             <p>Grand Total: {selectedInvoice.Grand_Total}</p>
//             <p>Date: {selectedInvoice.CREATEDTIME}</p>
//           </>
//         )}
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={handleCloseModal}>
//           Close
//         </Button>
//       </Modal.Footer>
//     </Modal>
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
//               <th>Invoice Number</th>
//               <th>Ticket ID</th>
//               <th>Date</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((invoice, index) => (
//               <tr key={index}>
//                 <td>{invoice.invoice_table.Invoice_Number}</td>
//                 <td>{invoice.invoice_table.Ticket_Id}</td>
//                 <td>{invoice.invoice_table.CREATEDTIME}</td>
//                 <td>
//                   <ActionDropdown invoice={invoice.invoice_table} />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>

//       <div className='d-flex justify-content-center ' style={{ margin: '30px' }}>
//      <Pagination
//         current={currentPage}
//         pageSize={pageSize}
//         total={totalRecords}
//         onChange={handlePageChange}
//         showSizeChanger={false}
//       />
//      </div>
//       <InvoiceModal />

//       {/* Filter Modal */}
//       <Modal show={showFilterModal} onHide={() => setShowFilterModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Filter Invoices by {filterColumn === 'Ticket_Id' ? 'Ticket ID' : 'Invoice Number'}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="formFilterValue">
//               <Form.Label>{filterColumn === 'Ticket_Id' ? 'Ticket ID' : 'Invoice Number'}</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder={`Enter ${filterColumn === 'Ticket_Id' ? 'Ticket ID' : 'Invoice Number'}`}
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

// export default ViewInvoice;















import React, { useEffect, useState } from 'react';
import { Table, Dropdown, Modal, Button, Form, DropdownButton } from 'react-bootstrap';
import { Pagination } from 'antd';
import axios from 'axios';
import { FaFilter } from "react-icons/fa6";
import HashLoader from "react-spinners/HashLoader";

const ViewInvoice = () => {
  const [data, setData] = useState([]);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filterColumn, setFilterColumn] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);
  const [totalRecords, setTotalRecords] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = (column = '', value = '') => {
    setLoading(true);
    const params = { limit: pageSize, offset: (currentPage - 1) * pageSize };
    let endpoint = '/server/waterheater_1_function/allgetinvoices';

    if (column && value) {
      endpoint = '/server/waterheater_1_function/getfilterinvoice';
      params.search = JSON.stringify({
        table: 'invoice_table',
        column,
        value
      });
    }

    axios
      .get(endpoint, { params })
      .then((res) => {
        console.log(res.data);
        if (column && value) {
          setData(res.data);
          setTotalRecords(res.data.length);
        } else {
          setData(res.data.records);
          setTotalRecords(res.data.total);
        }
        setFilterColumn('');
        setFilterValue('');
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // ... (rest of the code remains the same)
  const handleFilterSubmit = () => {
    if (filterColumn && filterValue) {
      fetchData(filterColumn, filterValue);
      setShowFilterModal(false);
    }
  };

  const ActionDropdown = (invoice) => (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">

      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleViewInvoice(invoice)}>View</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );

  const handleViewInvoice = (invoice) => {
    setSelectedInvoice(invoice.invoice);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedInvoice(null);
    setShowModal(false);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const FilterDropDown = () => (
    <DropdownButton id="dropdown-basic-button" title={<FaFilter/>}>
      <Dropdown.Item onClick={() => { setFilterColumn('Ticket_Id'); setShowFilterModal(true); }}>Ticket ID</Dropdown.Item>
      <Dropdown.Item onClick={() => { setFilterColumn('Invoice_Number'); setShowFilterModal(true); }}>Invoice Number</Dropdown.Item>
    </DropdownButton>
  );

  const InvoiceModal = () => (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Invoice Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {selectedInvoice && (
          <>
            <p>Invoice Number: {selectedInvoice.Invoice_Number}</p>
            <p>Customer Name: {selectedInvoice.Customer_Name}</p>
            <p>Ticket ID: {selectedInvoice.Ticket_Id}</p>
            <p>Address: {selectedInvoice.Address}</p>
            <p>Grand Total: {selectedInvoice.Grand_Total}</p>
            <p>Date: {selectedInvoice.CREATEDTIME}</p>
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

  return (
    <div className='container'>
      
      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '400px' }}>
          <HashLoader color="#36D7B7" />
        </div>
      ) : data.length === 0 ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '400px' }}>
          <h3>No Data Added</h3>
        </div>
      ) : (
        <div>
          <div className="d-flex justify-content-end mb-2">
        <FilterDropDown />
      </div>
        <div className="table-responsive">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Invoice Number</th>
                <th>Ticket ID</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((invoice, index) => (
                <tr key={index}>
                  <td>{invoice.invoice_table.Invoice_Number}</td>
                  <td>{invoice.invoice_table.Ticket_Id}</td>
                  <td>{invoice.invoice_table.CREATEDTIME}</td>
                  <td>
                    <ActionDropdown invoice={invoice.invoice_table} />
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
        </div>
      )}

      
      <InvoiceModal />

      {/* Filter Modal */}
      <Modal show={showFilterModal} onHide={() => setShowFilterModal(false)}>
        {/* ... (Modal content remains the same) */}
        <Modal.Header closeButton>
          <Modal.Title>Filter Invoices by {filterColumn === 'Ticket_Id' ? 'Ticket ID' : 'Invoice Number'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formFilterValue">
              <Form.Label>{filterColumn === 'Ticket_Id' ? 'Ticket ID' : 'Invoice Number'}</Form.Label>
              <Form.Control
                type="text"
                placeholder={`Enter ${filterColumn === 'Ticket_Id' ? 'Ticket ID' : 'Invoice Number'}`}
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

export default ViewInvoice;