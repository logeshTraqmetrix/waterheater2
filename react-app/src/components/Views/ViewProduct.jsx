// import React, { useEffect, useState } from 'react';
// import { Table, Dropdown, Modal, Button } from 'react-bootstrap';
// import axios from 'axios';

// const ViewProduct = () => {
//   const [data, setData] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     axios
//       .get('/server/waterheater_1_function/getproducts')
//       .then((res) => {
//         console.log(res.data);
//         setData(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   const ActionDropdown = (product) => (
//     <Dropdown>
//       <Dropdown.Toggle variant="primary" id="dropdown-basic">
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//         <Dropdown.Item onClick={() => handleViewProduct(product)}>View</Dropdown.Item>
//         <Dropdown.Item>Edit</Dropdown.Item>
//         <Dropdown.Item>Delete</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );

//   const handleViewProduct = (product) => {
//     setSelectedProduct(product);
//     console.log(product)
//     setShowModal(true);
//   };

//   const ProductModal = () => {
//     const handleCloseModal = () => {
//       setSelectedProduct(null);
//       setShowModal(false);
//     };

//     return (
//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Product Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedProduct && (
//             <>
//               <p>Variant: {selectedProduct.product.Variant}</p>
//               <p>Remarks: {selectedProduct.product.Remarks}</p>
//               <p>Warranty_Month: {selectedProduct.product.Warranty_Month}</p>
//               <p>Warranty_Details: {selectedProduct.product.Warranty_Details}</p>
//               <p>Product_Name : {selectedProduct.product.Product_Name}</p>
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
//               <th>P_Name</th>
//               <th>PhoVariantne</th>
//               <th>W_Detail</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((product, index) => (
//               <tr key={index}>
//                 <td>{product.Product_Name}</td>
//                 <td>{product.Variant}</td>
//                 <td>{product.Warranty_Details}</td>
//                 <td>
//                   <ActionDropdown product={product} />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>
//       <ProductModal />
//     </div>
//   );
// };

// export default ViewProduct;






// import React, { useEffect, useState } from 'react';
// import { Table, Dropdown, Modal, Button, Form, DropdownButton } from 'react-bootstrap';
// import axios from 'axios';
// import { FaFilter } from "react-icons/fa6";

// const ViewProduct = () => {
//   const [data, setData] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [showFilterModal, setShowFilterModal] = useState(false);
//   const [filterValue, setFilterValue] = useState('');

//   useEffect(() => {
//     fetchData();
//   }, []);


//   const fetchData = (value = '') => {
//   let endpoint = '/server/waterheater_1_function/getproducts';
//   let params = {};

//   if (value) {
//     endpoint = '/server/waterheater_1_function/getfilterproduct';
//     params.search = JSON.stringify({
//       table: 'product_table',
//       column: 'Product_Name',
//       value
//     });
//   }

//   axios
//     .get(endpoint, { params })
//     .then((res) => {
//       console.log(res.data);
//       if (value) {
//         const processedData = res.data.map(item => item.product_table);
//         setData(processedData);
//         // setData(res.data); // Set data for filtered results
//       } else {
//         setData(res.data); // Set data for unfiltered results
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

//   const handleFilterSubmit = () => {
//     if (filterValue) {
//       fetchData(filterValue);
//       setShowFilterModal(false);
//     }
//   };

//   const ActionDropdown = (product) => (
//     <Dropdown>
//       <Dropdown.Toggle variant="primary" id="dropdown-basic">

//       </Dropdown.Toggle>
//       <Dropdown.Menu>
//         <Dropdown.Item onClick={() => handleViewProduct(product)}>View</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );

//   const handleViewProduct = (product) => {
//     setSelectedProduct(product.product);
//     setShowModal(true);
//     console.log(product.product)
//   };

//   const FilterDropDown = () => (
//     <DropdownButton id="dropdown-basic-button" title={<FaFilter/>}>
//       <Dropdown.Item onClick={() => setShowFilterModal(true)}>Product Name</Dropdown.Item>
//     </DropdownButton>
//   );

//   const ProductModal = () => {
//     const handleCloseModal = () => {
//       setSelectedProduct(null);
//       setShowModal(false);
//     };

//     return (
//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Product Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedProduct && (
//             <>
//               <p>Variant: {selectedProduct.Variant}</p>
//               <p>Remarks: {selectedProduct.Remarks}</p>
//               <p>Warranty_Month: {selectedProduct.Warranty_Month}</p>
//               <p>Warranty_Details: {selectedProduct.Warranty_Details}</p>
//               <p>Product_Name: {selectedProduct.Product_Name}</p>
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

//      <div className="d-flex justify-content-end mb-2">
//         <FilterDropDown />
//       </div>
//       <div className="table-responsive">
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>Product Name</th>
//               <th>Variant</th>
//               <th>Warranty Details</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((product, index) => (
//               <tr key={index}>
//                 <td>{product.Product_Name}</td>
//                 <td>{product.Variant}</td>
//                 <td>{product.Warranty_Details}</td>
//                 <td>
//                   <ActionDropdown product={product} />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>
//       <ProductModal />

//       {/* Filter Modal */}
//       <Modal show={showFilterModal} onHide={() => setShowFilterModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Filter Products by Product Name</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="formFilterValue">
//               <Form.Label>Product Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter Product Name"
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

// export default ViewProduct;






// import React, { useEffect, useState } from 'react';
// import { Table, Dropdown, Modal, Button, Form, DropdownButton } from 'react-bootstrap';
// import axios from 'axios';
// import { FaFilter } from "react-icons/fa6";

// const ViewProduct = () => {
//   const [data, setData] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [showFilterModal, setShowFilterModal] = useState(false);
//   const [filterValue, setFilterValue] = useState('');
//   const [editFormData, setEditFormData] = useState({
//     ROWID: '',
//     Product_Name: '',
//     Variant: '',
//     Remarks: '',
//     Warranty_Month: '',
//     Warranty_Details: ''
//   });

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = (value = '') => {
//     let endpoint = '/server/waterheater_1_function/getproducts';
//     let params = {};

//     if (value) {
//       endpoint = '/server/waterheater_1_function/getfilterproduct';
//       params.search = JSON.stringify({
//         table: 'product_table',
//         column: 'Product_Name',
//         value
//       });
//     }

//     axios
//       .get(endpoint, { params })
//       .then((res) => {
//         console.log(res.data);
//         if (value) {
//           const processedData = res.data.map(item => item.product_table);
//           setData(processedData);
//         } else {
//           setData(res.data);
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const handleFilterSubmit = () => {
//     if (filterValue) {
//       fetchData(filterValue);
//       setShowFilterModal(false);
//     }
//   };

//   const ActionDropdown = ({ product }) => (
//     <Dropdown>
//       <Dropdown.Toggle variant="primary" id="dropdown-basic">
//       </Dropdown.Toggle>
//       <Dropdown.Menu>
//         <Dropdown.Item onClick={() => handleViewProduct(product)}>View</Dropdown.Item>
//         <Dropdown.Item onClick={() => handleEditProduct(product)}>Edit</Dropdown.Item>
//         <Dropdown.Item onClick={() => confirmDeleteProduct(product)}>Delete</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );

//   const handleViewProduct = (product) => {
//     setSelectedProduct(product);
//     setShowModal(true);
//   };

//   const handleEditProduct = (product) => {
//     setSelectedProduct(product);
//     setEditFormData({
//       ROWID: product.ROWID,
//       Product_Name: product.Product_Name,
//       Variant: product.Variant,
//       Remarks: product.Remarks,
//       Warranty_Month: product.Warranty_Month,
//       Warranty_Details: product.Warranty_Details
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
//     console.log('editFormData', editFormData);
//     axios
//       .put('/server/waterheater_1_function/updateproduct', {
//         data: editFormData
//       })
//       .then((res) => {
//         console.log('Product updated successfully');
//         setShowEditModal(false);
//         fetchData();
//       })
//       .catch((err) => {
//         console.error('Error updating product', err);
//       });
//   };

//   const confirmDeleteProduct = (product) => {
//     const confirmDelete = window.confirm('Are you sure you want to delete this product?');
//     if (confirmDelete) {
//       let payload = {
//         data: {
//           ROWID: product.ROWID
//         }
//       };
//       console.log(payload)
//       axios
//         .delete('/server/waterheater_1_function/deleteproduct', {
//           data: payload
//         })
//         .then((res) => {
//           console.log('Product deleted successfully');
//           fetchData();
//         })
//         .catch((err) => {
//           console.error('Error deleting product', err);
//         });
//     }
//   };

//   const FilterDropDown = () => (
//     <DropdownButton id="dropdown-basic-button" title={<FaFilter/>}>
//       <Dropdown.Item onClick={() => setShowFilterModal(true)}>Product Name</Dropdown.Item>
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
//               <th>Product Name</th>
//               <th>Variant</th>
//               <th>Warranty Details</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((product, index) => (
//               <tr key={index}>
//                 <td>{product.Product_Name}</td>
//                 <td>{product.Variant}</td>
//                 <td>{product.Warranty_Details}</td>
//                 <td>
//                   <ActionDropdown product={product} />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>

//       {/* View Product Modal */}
//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Product Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedProduct && (
//             <>
//               <p>Variant: {selectedProduct.Variant}</p>
//               <p>Remarks: {selectedProduct.Remarks}</p>
//               <p>Warranty_Month: {selectedProduct.Warranty_Month}</p>
//               <p>Warranty_Details: {selectedProduct.Warranty_Details}</p>
//               <p>Product_Name: {selectedProduct.Product_Name}</p>
//             </>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       {/* Edit Product Modal */}
//       <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Product</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="formProductName">
//               <Form.Label>Product Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="Product_Name"
//                 value={editFormData.Product_Name}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formVariant">
//               <Form.Label>Variant</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="Variant"
//                 value={editFormData.Variant}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formRemarks">
//               <Form.Label>Remarks</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="Remarks"
//                 value={editFormData.Remarks}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formWarrantyMonth">
//               <Form.Label>Warranty Month</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="Warranty_Month"
//                 value={editFormData.Warranty_Month}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formWarrantyDetails">
//               <Form.Label>Warranty Details</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="Warranty_Details"
//                 value={editFormData.Warranty_Details}
//                 onChange={handleEditInputChange}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowEditModal(false)}>
//             Cancel
//           </Button>
//           <Button variant="primary" onClick={handleEditSubmit}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       {/* Filter Modal */}
//       <Modal show={showFilterModal} onHide={() => setShowFilterModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Filter Products by Product Name</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="formFilterValue">
//               <Form.Label>Product Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter Product Name"
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

// export default ViewProduct;






import React, { useEffect, useState } from 'react';
import { Table, Dropdown, Modal, Button, Form, DropdownButton } from 'react-bootstrap';
import axios from 'axios';
import { FaFilter } from "react-icons/fa6";
import HashLoader from 'react-spinners/HashLoader';
import Swal from 'sweetalert2';

const ViewProduct = () => {
  const [data, setData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filterValue, setFilterValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [removeFilter,setRemoveFilter] = useState('')
  const [editFormData, setEditFormData] = useState({
    ROWID: '',
    Product_Name: '',
    Variant: '',
    Remarks: '',
    Warranty_Month: '',
    Warranty_Details: ''
  });

  useEffect(() => {
    fetchData();
  }, [removeFilter]);

  const fetchData = (value = '') => {
    setLoading(true);
    let endpoint = '/server/waterheater_1_function/getproducts';
    let params = {};

    if (value) {
      endpoint = '/server/waterheater_1_function/getfilterproduct';
      params.search = JSON.stringify({
        table: 'product_table',
        column: 'Product_Name',
        value
      });
    }

    axios
      .get(endpoint, { params })
      .then((res) => {
        console.log(res.data);
        if (value) {
          const processedData = res.data.map(item => item.product_table);
          setData(processedData);
        } else {
          setData(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleFilterSubmit = () => {
    if (filterValue) {
      fetchData(filterValue);
      setShowFilterModal(false);
    }
  };

  const ActionDropdown = ({ product }) => (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleViewProduct(product)}>View</Dropdown.Item>
        <Dropdown.Item onClick={() => handleEditProduct(product)}>Edit</Dropdown.Item>
        <Dropdown.Item onClick={() => confirmDeleteProduct(product)}>Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setEditFormData({
      ROWID: product.ROWID,
      Product_Name: product.Product_Name,
      Variant: product.Variant,
      Remarks: product.Remarks,
      Warranty_Month: product.Warranty_Month,
      Warranty_Details: product.Warranty_Details
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
    if (
      editFormData.Product_Name === '' ||
      editFormData.Variant === '' ||
      editFormData.Remarks === '' ||
      editFormData.Warranty_Month === '' ||
      editFormData.Warranty_Details === ''
    ) {
      Swal.fire('Error!', 'Please fill out all fields.', 'error');
      return;
    }
    
    console.log('editFormData', editFormData);
    axios
      .put('/server/waterheater_1_function/updateproduct', {
        data: editFormData
      })
      .then((res) => {
        console.log('Product updated successfully');
        setShowEditModal(false);
        fetchData();
      })
      .catch((err) => {
        console.error('Error updating product', err);
      });
  };

  const confirmDeleteProduct = (product) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        let payload = {
          data: {
            ROWID: product.ROWID
          }
        };
        axios
          .delete('/server/waterheater_1_function/deleteproduct', {
            data: payload
          })
          .then((res) => {
            Swal.fire(
              'Deleted!',
              'The product has been deleted.',
              'success'
            );
            fetchData();
          })
          .catch((err) => {
            console.error('Error deleting product', err);
            Swal.fire(
              'Error!',
              'Failed to delete the product.',
              'error'
            );
          });
      }
    });
  };

  const FilterDropDown = () => (
    <DropdownButton id="dropdown-basic-button" title={<FaFilter />}>
      <Dropdown.Item onClick={() => setShowFilterModal(true)}>Product Name</Dropdown.Item>
      <Dropdown.Item onClick={() => setRemoveFilter()}>Remove Filter</Dropdown.Item>
    </DropdownButton>
  );

  return (
    <div className='container'>

      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '94vh' }}>
          <HashLoader color="#2080c2" />
        </div>
      ) : data.length === 0 ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '94vh' }}>
          <h1>No Data Added</h1>
        </div>
      ) : (
        <div>
          <h2>Product View</h2>
          <div className="d-flex justify-content-end mb-2">
          <FilterDropDown />
        </div>
          <div className="table-responsive">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Variant</th>
                  <th>Warranty Details</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((product, index) => (
                  <tr key={index}>
                    <td>{product.Product_Name}</td>
                    <td>{product.Variant}</td>
                    <td>{product.Warranty_Details}</td>
                    <td>
                      <ActionDropdown product={product} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div></div>
      )}

      {/* View Product Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <>
              <p>Variant: {selectedProduct.Variant}</p>
              <p>Remarks: {selectedProduct.Remarks}</p>
              <p>Warranty_Month: {selectedProduct.Warranty_Month}</p>
              <p>Warranty_Details: {selectedProduct.Warranty_Details}</p>
              <p>Product_Name: {selectedProduct.Product_Name}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Product Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formProductName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="Product_Name"
                value={editFormData.Product_Name}
                onChange={handleEditInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formVariant">
              <Form.Label>Variant</Form.Label>
              <Form.Control
                type="text"
                name="Variant"
                value={editFormData.Variant}
                onChange={handleEditInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formRemarks">
              <Form.Label>Remarks</Form.Label>
              <Form.Control
                type="text"
                name="Remarks"
                value={editFormData.Remarks}
                onChange={handleEditInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formWarrantyMonth">
              <Form.Label>Warranty Month</Form.Label>
              <Form.Control
                type="text"
                name="Warranty_Month"
                value={editFormData.Warranty_Month}
                onChange={handleEditInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formWarrantyDetails">
              <Form.Label>Warranty Details</Form.Label>
              <Form.Control
                type="text"
                name="Warranty_Details"
                value={editFormData.Warranty_Details}
                onChange={handleEditInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleEditSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Filter Modal */}
      <Modal show={showFilterModal} onHide={() => setShowFilterModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Filter Products by Product Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formFilterValue">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Product Name"
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

export default ViewProduct;