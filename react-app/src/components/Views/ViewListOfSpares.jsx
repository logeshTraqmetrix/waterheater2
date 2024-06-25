// import React, { useEffect, useState } from 'react';
// import { Table, Dropdown, Modal, Button } from 'react-bootstrap';
// import axios from 'axios';

// const ViewListOfSpares = () => {
//   const [data, setData] = useState([]);
//   const [selectedListOfSpares, setSelectedListOfSpares] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     axios
//       .get('/server/waterheater_1_function/getlistofspares')
//       .then((res) => {
//         console.log(res.data);
//         setData(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   const ActionDropdown = (listOfSpares) => (
//     <Dropdown>
//       <Dropdown.Toggle variant="primary" id="dropdown-basic">
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//         <Dropdown.Item onClick={() => handleViewListOfSpares(listOfSpares)}>View</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );

//   const handleViewListOfSpares = (listOfSpares) => {
//     setSelectedListOfSpares(listOfSpares);
//     console.log(listOfSpares)
//     setShowModal(true);
//   };

//   const ListOfSparesModal = () => {
//     const handleCloseModal = () => {
//       setSelectedListOfSpares(null);
//       setShowModal(false);
//     };

//     return (
//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>ListOfSpares Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedListOfSpares && (
//             <>
//               <p>Parts_and_service: {selectedListOfSpares.listOfSpares.Parts_and_service}</p>
//               <p>Warranty: {selectedListOfSpares.listOfSpares.Warranty}</p>
//               <p>Warranty_Rate: {selectedListOfSpares.listOfSpares.Warranty_Rate}</p>
//               <p>Rate: {selectedListOfSpares.listOfSpares.Rate}</p>
//               <p>Qty : {selectedListOfSpares.listOfSpares.Qty}</p>
//               <p>Invoice_Date : {selectedListOfSpares.listOfSpares.Invoice_Date}</p>
//               <p>Expense_Cost : {selectedListOfSpares.listOfSpares.Expense_Cost}</p>
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
//     <div className='container'>
//       <div className="table-responsive">
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>P & S</th>
//               <th>Qty</th>
//               <th>Rate</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((listOfSpares, index) => (
//               <tr key={index}>
//                 <td>{listOfSpares.Parts_and_service}</td>
//                 <td>{listOfSpares.Qty}</td>
//                 <td>{listOfSpares.Rate}</td>
//                 <td>
//                   <ActionDropdown listOfSpares={listOfSpares} />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>
//       <ListOfSparesModal />
//     </div>
//   );
// };

// export default ViewListOfSpares;






import React, { useEffect, useState } from 'react';
import { Table, Dropdown, Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import HashLoader from "react-spinners/HashLoader";

const ViewListOfSpares = () => {
  const [data, setData] = useState([]);
  const [selectedListOfSpares, setSelectedListOfSpares] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get('/server/waterheater_1_function/getlistofspares')
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const ActionDropdown = (listOfSpares) => (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleViewListOfSpares(listOfSpares)}>View</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );

  const handleViewListOfSpares = (listOfSpares) => {
    setSelectedListOfSpares(listOfSpares);
    console.log(listOfSpares)
    setShowModal(true);
  };

  const ListOfSparesModal = () => {
    const handleCloseModal = () => {
      setSelectedListOfSpares(null);
      setShowModal(false);
    };

    return (
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>ListOfSpares Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedListOfSpares && (
            <>
              <p>Parts_and_service: {selectedListOfSpares.listOfSpares.Parts_and_service}</p>
              <p>Warranty: {selectedListOfSpares.listOfSpares.Warranty}</p>
              <p>Warranty_Rate: {selectedListOfSpares.listOfSpares.Warranty_Rate}</p>
              <p>Rate: {selectedListOfSpares.listOfSpares.Rate}</p>
              <p>Qty : {selectedListOfSpares.listOfSpares.Qty}</p>
              <p>Invoice_Date : {selectedListOfSpares.listOfSpares.Invoice_Date}</p>
              <p>Expense_Cost : {selectedListOfSpares.listOfSpares.Expense_Cost}</p>
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
        <div className="table-responsive">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>P & S</th>
                <th>Qty</th>
                <th>Rate</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((listOfSpares, index) => (
                <tr key={index}>
                  <td>{listOfSpares.Parts_and_service}</td>
                  <td>{listOfSpares.Qty}</td>
                  <td>{listOfSpares.Rate}</td>
                  <td>
                    <ActionDropdown listOfSpares={listOfSpares} />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
      <ListOfSparesModal />
    </div>
  );
};

export default ViewListOfSpares;