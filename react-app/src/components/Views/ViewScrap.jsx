// import React, { useEffect, useState } from 'react';
// import { Table, Dropdown, Modal, Button } from 'react-bootstrap';
// import axios from 'axios';

// const ViewScrap = () => {
//   const [data, setData] = useState([]);
//   const [selectedScrap, setSelectedScrap] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     axios
//       .get('/server/waterheater_1_function/getscraps')
//       .then((res) => {
//         console.log(res.data);
//         setData(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   const ActionDropdown = (scrap) => (
//     <Dropdown>
//       <Dropdown.Toggle variant="primary" id="dropdown-basic">
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//         <Dropdown.Item onClick={() => handleViewScrap(scrap)}>View</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );

//   const handleViewScrap = (scrap) => {
//     setSelectedScrap(scrap);
//     console.log(scrap)
//     setShowModal(true);
//   };

//   const ScrapModal = () => {
//     const handleCloseModal = () => {
//       setSelectedScrap(null);
//       setShowModal(false);
//     };

//     return (
//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Scrap Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedScrap && (
//             <>
//               <p>Material_Name: {selectedScrap.scrap.Material_Name}</p>
//               <p>Date_of_Received: {selectedScrap.scrap.Date_of_Received}</p>
//               <p>Material_Condition: {selectedScrap.scrap.Material_Condition}</p>
//               <p>Qty: {selectedScrap.scrap.Qty}</p>
//               <p>Ticket_Lookup : {selectedScrap.scrap.Ticket_Lookup}</p>
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
//               <th>M_Name</th>
//               <th>Qty</th>
//               <th>Condition</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((scrap, index) => (
//               <tr key={index}>
//                 <td>{scrap.Material_Name}</td>
//                 <td>{scrap.Qty}</td>
//                 <td>{scrap.Material_Condition}</td>
//                 <td>
//                   <ActionDropdown scrap={scrap} />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>
//       <ScrapModal />
//     </div>
//   );
// };

// export default ViewScrap;





import React, { useEffect, useState } from 'react';
import { Table, Dropdown, Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import HashLoader from "react-spinners/HashLoader";

const ViewScrap = () => {
  const [data, setData] = useState([]);
  const [selectedScrap, setSelectedScrap] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get('/server/waterheater_1_function/getscraps')
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

  const ActionDropdown = (scrap) => (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleViewScrap(scrap)}>View</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );

  const handleViewScrap = (scrap) => {
    setSelectedScrap(scrap);
    console.log(scrap)
    setShowModal(true);
  };

  const ScrapModal = () => {
    const handleCloseModal = () => {
      setSelectedScrap(null);
      setShowModal(false);
    };

    return (
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Scrap Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedScrap && (
            <>
              <p>Material_Name: {selectedScrap.scrap.Material_Name}</p>
              <p>Date_of_Received: {selectedScrap.scrap.Date_of_Received}</p>
              <p>Material_Condition: {selectedScrap.scrap.Material_Condition}</p>
              <p>Qty: {selectedScrap.scrap.Qty}</p>
              <p>Ticket_Lookup : {selectedScrap.scrap.Ticket_Lookup}</p>
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
        <div>
          <h2>Scrap View</h2>
        <div className="table-responsive">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>M_Name</th>
                <th>Qty</th>
                <th>Condition</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((scrap, index) => (
                <tr key={index}>
                  <td>{scrap.Material_Name}</td>
                  <td>{scrap.Qty}</td>
                  <td>{scrap.Material_Condition}</td>
                  <td>
                    <ActionDropdown scrap={scrap} />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        </div>
      )}
      <ScrapModal />
    </div>
  );
};

export default ViewScrap;