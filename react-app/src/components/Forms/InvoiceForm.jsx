// import React, { useEffect, useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import { CloseCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
// import { Upload } from "antd";
// import axios from "axios";

// const InvoiceForm = () => {
//   const [ticketNumber, setTicketNumber] = useState("");
//   const [customerName, setCustomerName] = useState("");
//   const [invoiceNumber, setInvoiceNumber] = useState("");
//   const [invoiceDate, setInvoiceDate] = useState("");
//   const [address, setAddress] = useState("");
//   const [sparesData, setSparesData] = useState([]);
//   const [afterServiceFileList, setAfterServiceFileList] = useState([]);
//   const [sparce, setSparce] = useState("");
//   const [fields, setFields] = useState([{ uniqueKey: Date.now(), materialName: "", date: "", quantity: "", price: "", rate: "" }]);
//   const [scrapOption, setScrapOption] = useState("");
//   const [scrapForms, setScrapForms] = useState([{ uniqueKey: Date.now(), material: "", receivedDate: "", qty: 0, condition: "", ticket: "", damagedFileList: [] }]);


//   useEffect(() => {
//     axios.get('/server/waterheater_1_function/getspares')
//       .then((res) => {
//         console.log('spares data response', res.data);
//         setSparesData(res.data);
//       })
//       .catch((err) => {
//         console.log('error in getting spares data', err);
//       });
//   }, []);


//   const onChangeAfterService = (info) => {
//     let newFileList = [...info.fileList];
//     if (newFileList.length > 1) {
//       newFileList = [newFileList[newFileList.length - 1]];
//     }
//     setAfterServiceFileList(newFileList);
//   };

//   const onChangeDamaged = (index, info) => {
//     const newScrapForms = [...scrapForms];
//     let newFileList = [...info.fileList];
//     if (newFileList.length > 1) {
//       newFileList = [newFileList[newFileList.length - 1]];
//     }
//     newScrapForms[index].damagedFileList = newFileList;
//     setScrapForms(newScrapForms);
//   };



//   const handleChange = (index, event) => {
//     const { name, value } = event.target;
//     if (name === "materialName") {
//       const selectedMaterial = sparesData.find(data => data.Material_Name === value);
//       const updatedFields = [...fields];
//       updatedFields[index] = {
//         ...updatedFields[index],
//         materialName: value,
//         price: selectedMaterial ? selectedMaterial.Price : "",
//       };
//       setFields(updatedFields);
//     } else {
//       const values = [...fields];
//       values[index][name] = value;

//       // Calculate rate if quantity and price are both present
//       if (name === "quantity" || name === "price") {

//         const quantity = values[index].quantity || 0;
//         const price = values[index].price || 0;
//         values[index].rate = (quantity * price).toFixed(2); // Assuming rate should be formatted to 2 decimal places
//       }

//       setFields(values);
//     }
//   };



//   const addField = () => {
//     setFields([...fields, { uniqueKey: Date.now(), materialName: "", date: "", quantity: "", price: "", rate: "" }]);
//   };

//   const removeField = (uniqueKey) => {
//     setFields(fields.filter(field => field.uniqueKey !== uniqueKey));
//   };

//   const handleScrapChange = (index, fieldName, value) => {
//     const updatedScrapForms = [...scrapForms];
//     updatedScrapForms[index][fieldName] = value;
//     setScrapForms(updatedScrapForms);
//   };

//   const addScrapForm = () => {
//     setScrapForms([...scrapForms, { uniqueKey: Date.now(), material: "", receivedDate: "", qty: 0, condition: "", ticket: "", damagedFileList: [] }]);
//   };

//   const removeScrapForm = (uniqueKey) => {
//     setScrapForms(scrapForms.filter(form => form.uniqueKey !== uniqueKey));
//   };

//   const handlePostData = async () => {
//     const invoicePayload = {
//       ticketNumber,
//       customerName,
//       invoiceNumber,
//       invoiceDate,
//       address,
//       afterServiceFileList: afterServiceFileList.map(file => ({
//         uid: file.uid,
//         name: file.name,
//         status: file.status,
//         url: file.url // if you need to include the URL of the uploaded file
//       })),
//       spares: sparce === "yes" ? fields : [],
//       scrapDetails: scrapOption === "yes" ? scrapForms.map(form => ({
//         ...form,
//         damagedFileList: form.damagedFileList.map(file => ({
//           uid: file.uid,
//           name: file.name,
//           status: file.status,
//           url: file.url // if you need to include the URL of the uploaded file
//         }))
//       })) : []
//     };

//     try {
//       const fileObj = new FormData();
//       fileObj.append('file', afterServiceFileList[0].originFileObj); // Append the single file

//       const response = await fetch('/server/waterheater_1_function/uploadfile', {
//         method: 'POST',
//         body: fileObj,
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       if (response.status === 200) {
//         console.log(data);
//         console.log('afterServiceFileList Upload successful');
//       } else {
//         console.log('afterServiceFileList Upload failed');
//       }
//     } catch (e) {
//       console.error(e);
//       alert('Error. Please try again after sometime.');
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Invoice Form</h1>
//       <Form>
//         <Form.Group className="mb-3">
//           <Form.Label>Ticket Number</Form.Label>
//           <Form.Control type="text" value={ticketNumber} onChange={(e) => setTicketNumber(e.target.value)} placeholder="Enter Ticket Number" />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Customer Name</Form.Label>
//           <Form.Control type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} placeholder="Enter Customer Name" />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Invoice Number</Form.Label>
//           <Form.Control type="text" value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} placeholder="Enter Invoice Number" />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Date</Form.Label>
//           <Form.Control type="date" value={invoiceDate} onChange={(e) => setInvoiceDate(e.target.value)} placeholder="Enter Date" />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Address</Form.Label>
//           <Form.Control type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter Address" />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>After Service Image</Form.Label>
//           <Upload
//             action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
//             listType="picture-card"
//             fileList={afterServiceFileList}
//             onChange={onChangeAfterService}
//             customRequest={({ file, onSuccess }) => setTimeout(() => onSuccess("ok"), 0)}
//           >
//             {afterServiceFileList.length === 0 && "+ Upload"}
//           </Upload>
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Enter Spares Subform</Form.Label>
//           <Form.Control as="select" value={sparce} onChange={(e) => setSparce(e.target.value)}>
//             <option value="">Select an option</option>
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </Form.Control>
//         </Form.Group>

//         {sparce === "yes" && (
//           <>
//             <h4>Spares SubForm</h4>
//             {fields.map((field, index) => (
//               <div key={field.uniqueKey} style={{ marginBottom: "20px" }}>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Material Name</Form.Label>
//                   <Form.Control as="select" value={field.materialName} name="materialName" onChange={(e) => handleChange(index, e)}>
//                     <option value="">Select an option</option>
//                     {sparesData.map((data) => (
//                       <option key={data.Material_Name} value={data.Material_Name}>
//                         {data.Material_Name}
//                       </option>
//                     ))}
//                   </Form.Control>

//                   <Form.Label>Date</Form.Label>
//                   <Form.Control
//                     type="date"
//                     name="date"
//                     value={field.date}
//                     onChange={(e) => handleChange(index, e)}
//                   />
//                   <Form.Label>Quantity</Form.Label>
//                   <Form.Control
//                     type="number"
//                     name="quantity"
//                     value={field.quantity}
//                     onChange={(e) => handleChange(index, e)}
//                     placeholder="Enter Quantity"
//                   />
//                   <Form.Label>Price</Form.Label>
//                   <Form.Control
//                     type="number"
//                     name="price"
//                     value={field.price}
//                     onChange={(e) => handleChange(index, e)}
//                     placeholder="Enter Price"
//                   />
//                   <Form.Label>Rate</Form.Label>
//                   <Form.Control
//                     type="number"
//                     name="rate"
//                     value={field.rate}
//                     readOnly
//                     placeholder="Rate will be calculated"
//                   />
//                 </Form.Group>
//                 {fields.length > 1 && (
//                   <Button variant="danger" onClick={() => removeField(field.uniqueKey)}>
//                     <CloseCircleOutlined /> Remove
//                   </Button>
//                 )}
//               </div>
//             ))}
//             <Button variant="primary" onClick={addField}>
//               <PlusCircleOutlined /> Add New
//             </Button>
//           </>
//         )}

//         <Form.Group className="mb-3">
//           <Form.Label>Enter Scrap Subform</Form.Label>
//           <Form.Control as="select" value={scrapOption} onChange={(e) => setScrapOption(e.target.value)}>
//             <option value="">Select an option</option>
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </Form.Control>
//         </Form.Group>

//         {scrapOption === "yes" && (
//           <>
//             <h4>Scrap Details</h4>
//             {scrapForms.map((scrapForm, index) => (
//               <div key={scrapForm.uniqueKey} style={{ marginBottom: "20px" }}>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Material Name</Form.Label>
//                   <Form.Control
//                     as="select"
//                     value={scrapForm.material}
//                     name="material"
//                     onChange={(e) => handleScrapChange(index, "material", e.target.value)}
//                   >
//                     <option value="">Select an option</option>
//                     {sparesData.map((data) => (
//                       <option key={data.Material_Name} value={data.Material_Name}>
//                         {data.Material_Name}
//                       </option>
//                     ))}
//                   </Form.Control>

//                   <Form.Label>Received Date</Form.Label>
//                   <Form.Control
//                     type="date"
//                     name="receivedDate"
//                     value={scrapForm.receivedDate}
//                     onChange={(e) => handleScrapChange(index, "receivedDate", e.target.value)}
//                   />
//                   <Form.Label>Quantity</Form.Label>
//                   <Form.Control
//                     type="number"
//                     name="qty"
//                     value={scrapForm.qty}
//                     onChange={(e) => handleScrapChange(index, "qty", e.target.value)}
//                     placeholder="Enter Quantity"
//                   />
//                   <Form.Label>Condition</Form.Label>
//                   <Form.Control
//                     as="select"
//                     name="condition"
//                     value={scrapForm.condition}
//                     onChange={(e) => handleScrapChange(index, "condition", e.target.value)}
//                   >
//                     <option value="">Select Condition</option>
//                     <option value="Bad">Bad</option>
//                     <option value="Average">Average</option>
//                     <option value="Good">Good</option>
//                   </Form.Control>
//                   <Form.Label>Ticket ID</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="ticket"
//                     value={scrapForm.ticket}
//                     onChange={(e) => handleScrapChange(index, "ticket", e.target.value)}
//                     placeholder="Enter Ticket ID"
//                   />
//                   <Form.Label>Damaged Image</Form.Label>
//                   <Upload
//                     action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
//                     listType="picture-card"
//                     fileList={scrapForm.damagedFileList}
//                     onChange={(info) => onChangeDamaged(index, info)}
//                     customRequest={({ file, onSuccess }) => setTimeout(() => onSuccess("ok"), 0)}
//                   >
//                     {scrapForm.damagedFileList.length === 0 && "+ Upload"}
//                   </Upload>
//                 </Form.Group>
//                 {scrapForms.length > 1 && (
//                   <Button variant="danger" onClick={() => removeScrapForm(scrapForm.uniqueKey)}>
//                     <CloseCircleOutlined /> Remove
//                   </Button>
//                 )}
//               </div>
//             ))}
//             <Button variant="primary" onClick={addScrapForm}>
//               <PlusCircleOutlined /> Add New
//             </Button>
//           </>
//         )}

//         <Button variant="success" className="float-end" onClick={handlePostData}>
//           Submit
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default InvoiceForm;






// import React, { useEffect, useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import { CloseCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
// import { Upload } from "antd";
// import axios from "axios";

// const InvoiceForm = () => {
//   const [ticketNumber, setTicketNumber] = useState("");
//   const [customerName, setCustomerName] = useState("");
//   const [invoiceNumber, setInvoiceNumber] = useState("");
//   const [invoiceDate, setInvoiceDate] = useState("");
//   const [address, setAddress] = useState("");
//   const [sparesData, setSparesData] = useState([]);
//   const [afterServiceFileList, setAfterServiceFileList] = useState([]);
//   const [sparce, setSparce] = useState("");
//   const [fields, setFields] = useState([{ uniqueKey: Date.now(), materialName: "", date: "", quantity: "", price: "", rate: "" }]);
//   const [scrapOption, setScrapOption] = useState("");
//   const [scrapForms, setScrapForms] = useState([{ uniqueKey: Date.now(), material: "", receivedDate: "", qty: 0, condition: "", ticket: "", damagedFileList: [] }]);

//   useEffect(() => {
//     axios.get('/server/waterheater_1_function/getspares')
//       .then((res) => {
//         console.log('spares data response', res.data);
//         setSparesData(res.data);
//       })
//       .catch((err) => {
//         console.log('error in getting spares data', err);
//       });
//   }, []);

//   const onChangeAfterService = (info) => {
//     let newFileList = [...info.fileList];
//     if (newFileList.length > 1) {
//       newFileList = [newFileList[newFileList.length - 1]];
//     }
//     setAfterServiceFileList(newFileList);
//   };

//   const onChangeDamaged = (index, info) => {
//     const newScrapForms = [...scrapForms];
//     let newFileList = [...info.fileList];
//     if (newFileList.length > 1) {
//       newFileList = [newFileList[newFileList.length - 1]];
//     }
//     newScrapForms[index].damagedFileList = newFileList;
//     setScrapForms(newScrapForms);
//   };

//   const handleChange = (index, event) => {
//     const { name, value } = event.target;
//     const updatedFields = [...fields];
//     const selectedMaterial = sparesData.find(data => data.Material_Name === updatedFields[index].materialName);
//     const availableQuantity = selectedMaterial ? parseInt(selectedMaterial.Available_Qty, 10) : 0;

//     if (name === "materialName") {
//       updatedFields[index].materialName = value;
//       updatedFields[index].price = selectedMaterial ? selectedMaterial.Price : "";
//     } else if (name === "quantity") {
//       if (parseInt(value, 10) > availableQuantity) {
//         alert("Insufficient quantity");
//         updatedFields[index].quantity = "";
//       } else {
//         updatedFields[index].quantity = value;
//         updatedFields[index].rate = (value * updatedFields[index].price).toFixed(2);
//       }
//     } else if (name === "price") {
//       updatedFields[index].price = value;
//       if (updatedFields[index].quantity) {
//         updatedFields[index].rate = (updatedFields[index].quantity * value).toFixed(2);
//       }
//     } else {
//       updatedFields[index][name] = value;
//     }

//     setFields(updatedFields);
//   };

//   const addField = () => {
//     setFields([...fields, { uniqueKey: Date.now(), materialName: "", date: "", quantity: "", price: "", rate: "" }]);
//   };

//   const removeField = (uniqueKey) => {
//     setFields(fields.filter(field => field.uniqueKey !== uniqueKey));
//   };

//   const handleScrapChange = (index, fieldName, value) => {
//     const updatedScrapForms = [...scrapForms];
//     updatedScrapForms[index][fieldName] = value;
//     setScrapForms(updatedScrapForms);
//   };

//   const addScrapForm = () => {
//     setScrapForms([...scrapForms, { uniqueKey: Date.now(), material: "", receivedDate: "", qty: 0, condition: "", ticket: "", damagedFileList: [] }]);
//   };

//   const removeScrapForm = (uniqueKey) => {
//     setScrapForms(scrapForms.filter(form => form.uniqueKey !== uniqueKey));
//   };

//   const handlePostData = async () => {
//     const invoicePayload = {
//       ticketNumber,
//       customerName,
//       invoiceNumber,
//       invoiceDate,
//       address,
//       afterServiceFileList: afterServiceFileList.map(file => ({
//         uid: file.uid,
//         name: file.name,
//         status: file.status,
//         url: file.url // if you need to include the URL of the uploaded file
//       })),
//       spares: sparce === "yes" ? fields : [],
//       scrapDetails: scrapOption === "yes" ? scrapForms.map(form => ({
//         ...form,
//         damagedFileList: form.damagedFileList.map(file => ({
//           uid: file.uid,
//           name: file.name,
//           status: file.status,
//           url: file.url // if you need to include the URL of the uploaded file
//         }))
//       })) : []
//     };

//     try {
//       const fileObj = new FormData();
//       fileObj.append('file', afterServiceFileList[0].originFileObj); // Append the single file

//       const response = await fetch('/server/waterheater_1_function/uploadfile', {
//         method: 'POST',
//         body: fileObj,
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       if (response.status === 200) {
//         console.log(data);
//         console.log('afterServiceFileList Upload successful');
//       } else {
//         console.log('afterServiceFileList Upload failed');
//       }
//     } catch (e) {
//       console.error(e);
//       alert('Error. Please try again after sometime.');
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Invoice Form</h1>
//       <Form>
//         <Form.Group className="mb-3">
//           <Form.Label>Ticket Number</Form.Label>
//           <Form.Control type="text" value={ticketNumber} onChange={(e) => setTicketNumber(e.target.value)} placeholder="Enter Ticket Number" />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Customer Name</Form.Label>
//           <Form.Control type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} placeholder="Enter Customer Name" />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Invoice Number</Form.Label>
//           <Form.Control type="text" value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} placeholder="Enter Invoice Number" />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Date</Form.Label>
//           <Form.Control type="date" value={invoiceDate} onChange={(e) => setInvoiceDate(e.target.value)} placeholder="Enter Date" />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Address</Form.Label>
//           <Form.Control type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter Address" />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>After Service Image</Form.Label>
//           <Upload
//             action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
//             listType="picture-card"
//             fileList={afterServiceFileList}
//             onChange={onChangeAfterService}
//             customRequest={({ file, onSuccess }) => setTimeout(() => onSuccess("ok"), 0)}
//           >
//             {afterServiceFileList.length === 0 && "+ Upload"}
//           </Upload>
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Enter Spares Subform</Form.Label>
//           <Form.Control as="select" value={sparce} onChange={(e) => setSparce(e.target.value)}>
//             <option value="">Select an option</option>
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </Form.Control>
//         </Form.Group>

//         {sparce === "yes" && (
//           <>
//             <h4>Spares SubForm</h4>
//             {fields.map((field, index) => (
//               <div key={field.uniqueKey} style={{ marginBottom: "20px" }}>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Material Name</Form.Label>
//                   <Form.Control as="select" value={field.materialName} name="materialName" onChange={(e) => handleChange(index, e)}>
//                     <option value="">Select an option</option>
//                     {sparesData.map((data) => (
//                       <option key={data.Material_Name} value={data.Material_Name}>
//                         {data.Material_Name}
//                       </option>
//                     ))}
//                   </Form.Control>

//                   <Form.Label>Date</Form.Label>
//                   <Form.Control
//                     type="date"
//                     name="date"
//                     value={field.date}
//                     onChange={(e) => handleChange(index, e)}
//                   />
//                   <Form.Label>Quantity</Form.Label>
//                   <Form.Control
//                     type="number"
//                     name="quantity"
//                     value={field.quantity}
//                     onChange={(e) => handleChange(index, e)}
//                     placeholder="Enter Quantity"
//                   />
//                   <Form.Label>Price</Form.Label>
//                   <Form.Control
//                     type="number"
//                     name="price"
//                     value={field.price}
//                     onChange={(e) => handleChange(index, e)}
//                     placeholder="Enter Price"
//                   />
//                   <Form.Label>Rate</Form.Label>
//                   <Form.Control
//                     type="number"
//                     name="rate"
//                     value={field.rate}
//                     readOnly
//                     placeholder="Rate will be calculated"
//                   />
//                 </Form.Group>
//                 {fields.length > 1 && (
//                   <Button variant="danger" onClick={() => removeField(field.uniqueKey)}>
//                     <CloseCircleOutlined /> Remove
//                   </Button>
//                 )}
//               </div>
//             ))}
//             <Button variant="primary" onClick={addField}>
//               <PlusCircleOutlined /> Add New
//             </Button>
//           </>
//         )}

//         <Form.Group className="mb-3">
//           <Form.Label>Enter Scrap Subform</Form.Label>
//           <Form.Control as="select" value={scrapOption} onChange={(e) => setScrapOption(e.target.value)}>
//             <option value="">Select an option</option>
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </Form.Control>
//         </Form.Group>

//         {scrapOption === "yes" && (
//           <>
//             <h4>Scrap Details</h4>
//             {scrapForms.map((scrapForm, index) => (
//               <div key={scrapForm.uniqueKey} style={{ marginBottom: "20px" }}>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Material Name</Form.Label>
//                   <Form.Control
//                     as="select"
//                     value={scrapForm.material}
//                     name="material"
//                     onChange={(e) => handleScrapChange(index, "material", e.target.value)}
//                   >
//                     <option value="">Select an option</option>
//                     {sparesData.map((data) => (
//                       <option key={data.Material_Name} value={data.Material_Name}>
//                         {data.Material_Name}
//                       </option>
//                     ))}
//                   </Form.Control>

//                   <Form.Label>Received Date</Form.Label>
//                   <Form.Control
//                     type="date"
//                     name="receivedDate"
//                     value={scrapForm.receivedDate}
//                     onChange={(e) => handleScrapChange(index, "receivedDate", e.target.value)}
//                   />
//                   <Form.Label>Quantity</Form.Label>
//                   <Form.Control
//                     type="number"
//                     name="qty"
//                     value={scrapForm.qty}
//                     onChange={(e) => handleScrapChange(index, "qty", e.target.value)}
//                     placeholder="Enter Quantity"
//                   />
//                   <Form.Label>Condition</Form.Label>
//                   <Form.Control
//                     as="select"
//                     name="condition"
//                     value={scrapForm.condition}
//                     onChange={(e) => handleScrapChange(index, "condition", e.target.value)}
//                   >
//                     <option value="">Select Condition</option>
//                     <option value="Bad">Bad</option>
//                     <option value="Average">Average</option>
//                     <option value="Good">Good</option>
//                   </Form.Control>
//                   <Form.Label>Ticket ID</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="ticket"
//                     value={scrapForm.ticket}
//                     onChange={(e) => handleScrapChange(index, "ticket", e.target.value)}
//                     placeholder="Enter Ticket ID"
//                   />
//                   <Form.Label>Damaged Image</Form.Label>
//                   <Upload
//                     action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
//                     listType="picture-card"
//                     fileList={scrapForm.damagedFileList}
//                     onChange={(info) => onChangeDamaged(index, info)}
//                     customRequest={({ file, onSuccess }) => setTimeout(() => onSuccess("ok"), 0)}
//                   >
//                     {scrapForm.damagedFileList.length === 0 && "+ Upload"}
//                   </Upload>
//                 </Form.Group>
//                 {scrapForms.length > 1 && (
//                   <Button variant="danger" onClick={() => removeScrapForm(scrapForm.uniqueKey)}>
//                     <CloseCircleOutlined /> Remove
//                   </Button>
//                 )}
//               </div>
//             ))}
//             <Button variant="primary" onClick={addScrapForm}>
//               <PlusCircleOutlined /> Add New
//             </Button>
//           </>
//         )}

//         <Button variant="success" className="float-end" onClick={handlePostData}>
//           Submit
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default InvoiceForm;








// import React, { useEffect, useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import { CloseCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
// import { Upload } from "antd";
// import axios from "axios";

// const InvoiceForm = () => {
//   const [ticketNumber, setTicketNumber] = useState("");
//   const [customerName, setCustomerName] = useState("");
//   const [invoiceNumber, setInvoiceNumber] = useState("");
//   const [invoiceDate, setInvoiceDate] = useState("");
//   const [address, setAddress] = useState("");
//   const [sparesData, setSparesData] = useState([]);
//   const [afterServiceFileList, setAfterServiceFileList] = useState([]);
//   const [sparce, setSparce] = useState("");
//   const [fields, setFields] = useState([{ uniqueKey: Date.now(), materialName: "", date: "", quantity: "", price: "", rate: "" }]);
//   const [scrapOption, setScrapOption] = useState("");
//   const [scrapForms, setScrapForms] = useState([{ uniqueKey: Date.now(), material: "", receivedDate: "", qty: 0, condition: "", ticket: "", damagedFileList: [] }]);

//   useEffect(() => {
//     axios.get('/server/waterheater_1_function/getspares')
//       .then((res) => {
//         console.log('spares data response', res.data);
//         setSparesData(res.data);
//       })
//       .catch((err) => {
//         console.log('error in getting spares data', err);
//       });
//   }, []);

//   const onChangeAfterService = (info) => {
//     let newFileList = [...info.fileList];
//     if (newFileList.length > 1) {
//       newFileList = [newFileList[newFileList.length - 1]];
//     }
//     setAfterServiceFileList(newFileList);
//   };

//   const onChangeDamaged = (index, info) => {
//     const newScrapForms = [...scrapForms];
//     let newFileList = [...info.fileList];
//     if (newFileList.length > 1) {
//       newFileList = [newFileList[newFileList.length - 1]];
//     }
//     newScrapForms[index].damagedFileList = newFileList;
//     setScrapForms(newScrapForms);
//   };

//   const handleChange = (index, event) => {
//     const { name, value } = event.target;
//     const updatedFields = [...fields];
//     const selectedMaterial = sparesData.find(data => data.Material_Name === updatedFields[index].materialName);
//     const availableQuantity = selectedMaterial ? parseInt(selectedMaterial.Available_Qty, 10) : 0;

//     if (name === "materialName") {
//       updatedFields[index].materialName = value;
//       updatedFields[index].price = selectedMaterial ? selectedMaterial.Price : "";
//     } else if (name === "quantity") {
//       if (parseInt(value, 10) > availableQuantity) {
//         alert("Insufficient quantity");
//         updatedFields[index].quantity = "";
//       } else {
//         updatedFields[index].quantity = value;
//         updatedFields[index].rate = (value * updatedFields[index].price).toFixed(2);
//       }
//     } else if (name === "price") {
//       updatedFields[index].price = value;
//       if (updatedFields[index].quantity) {
//         updatedFields[index].rate = (updatedFields[index].quantity * value).toFixed(2);
//       }
//     } else {
//       updatedFields[index][name] = value;
//     }

//     setFields(updatedFields);
//   };

//   const addField = () => {
//     setFields([...fields, { uniqueKey: Date.now(), materialName: "", date: "", quantity: "", price: "", rate: "" }]);
//   };

//   const removeField = (uniqueKey) => {
//     setFields(fields.filter(field => field.uniqueKey !== uniqueKey));
//   };

//   const handleScrapChange = (index, fieldName, value) => {
//     const updatedScrapForms = [...scrapForms];
//     updatedScrapForms[index][fieldName] = value;
//     setScrapForms(updatedScrapForms);
//   };

//   const addScrapForm = () => {
//     setScrapForms([...scrapForms, { uniqueKey: Date.now(), material: "", receivedDate: "", qty: 0, condition: "", ticket: "", damagedFileList: [] }]);
//   };

//   const removeScrapForm = (uniqueKey) => {
//     setScrapForms(scrapForms.filter(form => form.uniqueKey !== uniqueKey));
//   };

//   const handlePostData = async () => {
//     const invoicePayload = {
//       ticketNumber,
//       customerName,
//       invoiceNumber,
//       invoiceDate,
//       address,
//       afterServiceFileList: afterServiceFileList.map(file => ({
//         uid: file.uid,
//         name: file.name,
//         status: file.status,
//         url: file.url // if you need to include the URL of the uploaded file
//       })),
//       spares: sparce === "yes" ? fields : [],
//       scrapDetails: scrapOption === "yes" ? scrapForms.map(form => ({
//         ...form,
//         damagedFileList: form.damagedFileList.map(file => ({
//           uid: file.uid,
//           name: file.name,
//           status: file.status,
//           url: file.url // if you need to include the URL of the uploaded file
//         }))
//       })) : []
//     };

//     try {
//       const fileObj = new FormData();
//       fileObj.append('file', afterServiceFileList[0].originFileObj); // Append the single file

//       const response = await fetch('/server/waterheater_1_function/uploadfile', {
//         method: 'POST',
//         body: fileObj,
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       if (response.status === 200) {
//         console.log(data);
//         console.log('afterServiceFileList Upload successful');
//       } else {
//         console.log('afterServiceFileList Upload failed');
//       }
//     } catch (e) {
//       console.error(e);
//       alert('Error. Please try again after sometime.');
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Invoice Form</h1>
//       <Form>
//         <Form.Group className="mb-3">
//           <Form.Label>Ticket Number</Form.Label>
//           <Form.Control type="text" value={ticketNumber} onChange={(e) => setTicketNumber(e.target.value)} placeholder="Enter Ticket Number" />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Customer Name</Form.Label>
//           <Form.Control type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} placeholder="Enter Customer Name" />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Invoice Number</Form.Label>
//           <Form.Control type="text" value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} placeholder="Enter Invoice Number" />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Date</Form.Label>
//           <Form.Control type="date" value={invoiceDate} onChange={(e) => setInvoiceDate(e.target.value)} placeholder="Enter Date" />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Address</Form.Label>
//           <Form.Control type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter Address" />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>After Service Image</Form.Label>
//           <Upload
//             action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
//             listType="picture-card"
//             fileList={afterServiceFileList}
//             onChange={onChangeAfterService}
//             customRequest={({ file, onSuccess }) => setTimeout(() => onSuccess("ok"), 0)}
//           >
//             {afterServiceFileList.length === 0 && "+ Upload"}
//           </Upload>
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Enter Spares Subform</Form.Label>
//           <Form.Control as="select" value={sparce} onChange={(e) => setSparce(e.target.value)}>
//             <option value="">Select an option</option>
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </Form.Control>
//         </Form.Group>

//         {sparce === "yes" && (
//           <>
//             <h4>Spares SubForm</h4>
//             {fields.map((field, index) => (
//               <div key={field.uniqueKey} style={{ marginBottom: "20px" }}>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Material Name</Form.Label>
//                   <Form.Control as="select" value={field.materialName} name="materialName" onChange={(e) => handleChange(index, e)}>
//                     <option value="">Select an option</option>
//                     {sparesData.map((data) => (
//                       <option key={data.Material_Name} value={data.Material_Name}>
//                         {data.Material_Name}
//                       </option>
//                     ))}
//                   </Form.Control>

//                   <Form.Label>Date</Form.Label>
//                   <Form.Control type="date" name="date" value={field.date} onChange={(e) => handleChange(index, e)} />
//                   <Form.Label>Quantity</Form.Label>
//                   <Form.Control type="number" name="quantity" value={field.quantity} onChange={(e) => handleChange(index, e)} placeholder="Enter Quantity" />
//                   <Form.Label>Price</Form.Label>
//                   <Form.Control type="number" name="price" value={field.price} onChange={(e) => handleChange(index, e)} placeholder="Enter Price" />
//                   <Form.Label>Rate</Form.Label>
//                   <Form.Control type="number" name="rate" value={field.rate} readOnly placeholder="Rate will be calculated" />
//                 </Form.Group>
//                 {fields.length > 1 && (
//                   <Button variant="danger" onClick={() => removeField(field.uniqueKey)}>
//                     <CloseCircleOutlined /> Remove
//                   </Button>
//                 )}
//               </div>
//             ))}
//             <Button variant="primary" onClick={addField}>
//               <PlusCircleOutlined /> Add New
//             </Button>
//           </>
//         )}

//         <Form.Group className="mb-3">
//           <Form.Label>Enter Scrap Subform</Form.Label>
//           <Form.Control as="select" value={scrapOption} onChange={(e) => setScrapOption(e.target.value)}>
//             <option value="">Select an option</option>
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </Form.Control>
//         </Form.Group>

//         {scrapOption === "yes" && (
//           <>
//             <h4>Scrap Details</h4>
//             {scrapForms.map((scrapForm, index) => (
//               <div key={scrapForm.uniqueKey} style={{ marginBottom: "20px" }}>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Material Name</Form.Label>
//                   <Form.Control as="select" value={scrapForm.material} name="material" onChange={(e) => handleScrapChange(index, "material", e.target.value)}>
//                     <option value="">Select an option</option>
//                     {sparesData.map((data) => (
//                       <option key={data.Material_Name} value={data.Material_Name}>
//                         {data.Material_Name}
//                       </option>
//                     ))}
//                   </Form.Control>

//                   <Form.Label>Received Date</Form.Label>
//                   <Form.Control type="date" name="receivedDate" value={scrapForm.receivedDate} onChange={(e) => handleScrapChange(index, "receivedDate", e.target.value)} />
//                   <Form.Label>Quantity</Form.Label>
//                   <Form.Control type="number" name="qty" value={scrapForm.qty} onChange={(e) => handleScrapChange(index, "qty", e.target.value)} placeholder="Enter Quantity" />
//                   <Form.Label>Condition</Form.Label>
//                   <Form.Control as="select" name="condition" value={scrapForm.condition} onChange={(e) => handleScrapChange(index, "condition", e.target.value)}>
//                     <option value="">Select Condition</option>
//                     <option value="Bad">Bad</option>
//                     <option value="Average">Average</option>
//                     <option value="Good">Good</option>
//                   </Form.Control>
//                   <Form.Label>Ticket ID</Form.Label>
//                   <Form.Control type="text" name="ticket" value={scrapForm.ticket} onChange={(e) => handleScrapChange(index, "ticket", e.target.value)} placeholder="Enter Ticket ID" />
//                   <Form.Label>Damaged Image</Form.Label>
//                   <Upload
//                     action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
//                     listType="picture-card"
//                     fileList={scrapForm.damagedFileList}
//                     onChange={(info) => onChangeDamaged(index, info)}
//                     customRequest={({ file, onSuccess }) => setTimeout(() => onSuccess("ok"), 0)}
//                   >
//                     {scrapForm.damagedFileList.length === 0 && "+ Upload"}
//                   </Upload>
//                 </Form.Group>
//                 {scrapForms.length > 1 && (
//                   <Button variant="danger" onClick={() => removeScrapForm(scrapForm.uniqueKey)}>
//                     <CloseCircleOutlined /> Remove
//                   </Button>
//                 )}
//               </div>
//             ))}
//             <Button variant="primary" onClick={addScrapForm}>
//               <PlusCircleOutlined /> Add New
//             </Button>
//           </>
//         )}

//         <Button variant="success" className="float-end" onClick={handlePostData}>
//           Submit
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default InvoiceForm;











// import React, { useEffect, useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import { CloseCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
// import { Upload } from "antd";
// import axios from "axios";

// const InvoiceForm = () => {
//   const [ticketNumber, setTicketNumber] = useState("");
//   const [customerName, setCustomerName] = useState("");
//   const [invoiceNumber, setInvoiceNumber] = useState("");
//   const [invoiceDate, setInvoiceDate] = useState("");
//   const [address, setAddress] = useState("");
//   const [sparesData, setSparesData] = useState([]);
//   const [afterServiceFileList, setAfterServiceFileList] = useState([]);
//   const [sparce, setSparce] = useState("");
//   const [fields, setFields] = useState([{ uniqueKey: Date.now(), materialName: "", date: "", quantity: "", price: "", rate: "" }]);
//   const [scrapOption, setScrapOption] = useState("");
//   const [scrapForms, setScrapForms] = useState([{ uniqueKey: Date.now(), material: "", receivedDate: "", qty: 0, condition: "", ticket: "", damagedFileList: [] }]);

//   useEffect(() => {
//     axios.get('/server/waterheater_1_function/getspares')
//       .then((res) => {
//         console.log('spares data response', res.data);
//         setSparesData(res.data);
//       })
//       .catch((err) => {
//         console.log('error in getting spares data', err);
//       });
//   }, []);

//   const onChangeAfterService = (info) => {
//     let newFileList = [...info.fileList];
//     if (newFileList.length > 1) {
//       newFileList = [newFileList[newFileList.length - 1]];
//     }
//     setAfterServiceFileList(newFileList);
//   };

//   const onChangeDamaged = (index, info) => {
//     const newScrapForms = [...scrapForms];
//     let newFileList = [...info.fileList];
//     if (newFileList.length > 1) {
//       newFileList = [newFileList[newFileList.length - 1]];
//     }
//     newScrapForms[index].damagedFileList = newFileList;
//     setScrapForms(newScrapForms);
//   };


//   const handleChange = (index, event) => {
//     const { name, value } = event.target;
//     const updatedFields = [...fields];

//     if (name === "materialName") {
//       // Update material name and find corresponding price
//       updatedFields[index].materialName = value;
//       const selectedMaterial = sparesData.find(data => data.Material_Name === value);
//       updatedFields[index].price = selectedMaterial ? selectedMaterial.Price : "";

//       // Clear rate if price changes
//       if (updatedFields[index].quantity && updatedFields[index].price) {
//         updatedFields[index].rate = (updatedFields[index].quantity * updatedFields[index].price).toFixed(2);
//       } else {
//         updatedFields[index].rate = "";
//       }
//     } else {
//       // Update other fields (quantity, price, etc.)
//       updatedFields[index][name] = value;

//       // Calculate rate if both quantity and price are present
//       if (name === "quantity" || name === "price") {
//         const quantity = updatedFields[index].quantity || 0;
//         const price = updatedFields[index].price || 0;
//         updatedFields[index].rate = (quantity * price).toFixed(2);
//       }
//     }

//     // Handle quantity validation against available quantity
//     if (name === "quantity") {
//       const selectedMaterial = sparesData.find(data => data.Material_Name === updatedFields[index].materialName);
//       const availableQuantity = selectedMaterial ? parseInt(selectedMaterial.Available_Qty, 10) : 0;

//       if (parseInt(value, 10) > availableQuantity) {
//         alert("Insufficient quantity");
//         updatedFields[index].quantity = "";
//         updatedFields[index].rate = ""; // Clear rate if quantity is cleared
//       } else {
//         updatedFields[index].quantity = value;
//         const price = updatedFields[index].price || 0;
//         updatedFields[index].rate = (value * price).toFixed(2);
//       }
//     }

//     setFields(updatedFields);
//   };



//   const addField = () => {
//     setFields([...fields, { uniqueKey: Date.now(), materialName: "", date: "", quantity: "", price: "", rate: "" }]);
//   };

//   const removeField = (uniqueKey) => {
//     setFields(fields.filter(field => field.uniqueKey !== uniqueKey));
//   };

//   const handleScrapChange = (index, fieldName, value) => {
//     const updatedScrapForms = [...scrapForms];
//     updatedScrapForms[index][fieldName] = value;
//     setScrapForms(updatedScrapForms);
//   };

//   const addScrapForm = () => {
//     setScrapForms([...scrapForms, { uniqueKey: Date.now(), material: "", receivedDate: "", qty: 0, condition: "", ticket: "", damagedFileList: [] }]);
//   };

//   const removeScrapForm = (uniqueKey) => {
//     setScrapForms(scrapForms.filter(form => form.uniqueKey !== uniqueKey));
//   };

//   const handlePostData = async () => {
//     const invoicePayload = {
//       ticketNumber,
//       customerName,
//       invoiceNumber,
//       invoiceDate,
//       address,
//       afterServiceFileList: afterServiceFileList.map(file => ({
//         uid: file.uid,
//         name: file.name,
//         status: file.status,
//         url: file.url // if you need to include the URL of the uploaded file
//       })),
//       spares: sparce === "yes" ? fields : [],
//       scrapDetails: scrapOption === "yes" ? scrapForms.map(form => ({
//         ...form,
//         damagedFileList: form.damagedFileList.map(file => ({
//           uid: file.uid,
//           name: file.name,
//           status: file.status,
//           url: file.url // if you need to include the URL of the uploaded file
//         }))
//       })) : []
//     };

//     try {
//       const fileObj = new FormData();
//       fileObj.append('file', afterServiceFileList[0].originFileObj); // Append the single file

//       const response = await fetch('/server/waterheater_1_function/uploadfile', {
//         method: 'POST',
//         body: fileObj,
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       if (response.status === 200) {
//         console.log(data);
//         console.log('afterServiceFileList Upload successful');
//       } else {
//         console.log('afterServiceFileList Upload failed');
//       }
//     } catch (e) {
//       console.error(e);
//       alert('Error. Please try again after sometime.');
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Invoice Form</h1>
//       <Form>
//         <Form.Group className="mb-3">
//           <Form.Label>Ticket Number</Form.Label>
//           <Form.Control type="text" value={ticketNumber} onChange={(e) => setTicketNumber(e.target.value)} placeholder="Enter Ticket Number" />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Customer Name</Form.Label>
//           <Form.Control type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} placeholder="Enter Customer Name" />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Invoice Number</Form.Label>
//           <Form.Control type="text" value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} placeholder="Enter Invoice Number" />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Date</Form.Label>
//           <Form.Control type="date" value={invoiceDate} onChange={(e) => setInvoiceDate(e.target.value)} placeholder="Enter Date" />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Address</Form.Label>
//           <Form.Control type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter Address" />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>After Service Image</Form.Label>
//           <Upload
//             action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
//             listType="picture-card"
//             fileList={afterServiceFileList}
//             onChange={onChangeAfterService}
//             customRequest={({ file, onSuccess }) => setTimeout(() => onSuccess("ok"), 0)}
//           >
//             {afterServiceFileList.length === 0 && "+ Upload"}
//           </Upload>
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Enter Spares Subform</Form.Label>
//           <Form.Control as="select" value={sparce} onChange={(e) => setSparce(e.target.value)}>
//             <option value="">Select an option</option>
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </Form.Control>
//         </Form.Group>

//         {sparce === "yes" && (
//           <>
//             <h4>Spares SubForm</h4>
//             {fields.map((field, index) => (
//               <div key={field.uniqueKey} style={{ marginBottom: "20px" }}>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Material Name</Form.Label>
//                   <Form.Control as="select" name="materialName" value={field.materialName} onChange={(e) => handleChange(index, e)}>
//                     <option value="">Select an option</option>
//                     {sparesData.map((data) => (
//                       <option key={data.Material_Name} value={data.Material_Name}>
//                         {data.Material_Name}
//                       </option>
//                     ))}
//                   </Form.Control>

//                   <Form.Label>Date</Form.Label>
//                   <Form.Control type="date" name="date" value={field.date} onChange={(e) => handleChange(index, e)} />
//                   <Form.Label>Quantity</Form.Label>
//                   <Form.Control type="number" name="quantity" value={field.quantity} onChange={(e) => handleChange(index, e)} placeholder="Enter Quantity" />
//                   <Form.Label>Price</Form.Label>
//                   <Form.Control type="number" name="price" value={field.price} onChange={(e) => handleChange(index, e)} placeholder="Enter Price" />
//                   <Form.Label>Rate</Form.Label>
//                   <Form.Control type="number" name="rate" value={field.rate} readOnly placeholder="Rate will be calculated" />
//                 </Form.Group>
//                 {fields.length > 1 && (
//                   <Button variant="danger" onClick={() => removeField(field.uniqueKey)}>
//                     <CloseCircleOutlined /> Remove
//                   </Button>
//                 )}
//               </div>
//             ))}
//             <Button variant="primary" onClick={addField}>
//               <PlusCircleOutlined /> Add New
//             </Button>
//           </>
//         )}

//         <Form.Group className="mb-3">
//           <Form.Label>Grant Total</Form.Label>
//           <Form.Control type="number" placeholder="Total Will Be Calculated" />
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <Form.Label>Enter Scrap Subform</Form.Label>
//           <Form.Control as="select" value={scrapOption} onChange={(e) => setScrapOption(e.target.value)}>
//             <option value="">Select an option</option>
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </Form.Control>
//         </Form.Group>

//         {scrapOption === "yes" && (
//           <>
//             <h4>Scrap Details</h4>
//             {scrapForms.map((scrapForm, index) => (
//               <div key={scrapForm.uniqueKey} style={{ marginBottom: "20px" }}>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Material Name</Form.Label>
//                   <Form.Control as="select" value={scrapForm.material} name="material" onChange={(e) => handleScrapChange(index, "material", e.target.value)}>
//                     <option value="">Select an option</option>
//                     {sparesData.map((data) => (
//                       <option key={data.Material_Name} value={data.Material_Name}>
//                         {data.Material_Name}
//                       </option>
//                     ))}
//                   </Form.Control>

//                   <Form.Label>Received Date</Form.Label>
//                   <Form.Control type="date" name="receivedDate" value={scrapForm.receivedDate} onChange={(e) => handleScrapChange(index, "receivedDate", e.target.value)} />
//                   <Form.Label>Quantity</Form.Label>
//                   <Form.Control type="number" name="qty" value={scrapForm.qty} onChange={(e) => handleScrapChange(index, "qty", e.target.value)} placeholder="Enter Quantity" />
//                   <Form.Label>Condition</Form.Label>
//                   <Form.Control as="select" name="condition" value={scrapForm.condition} onChange={(e) => handleScrapChange(index, "condition", e.target.value)}>
//                     <option value="">Select Condition</option>
//                     <option value="Bad">Bad</option>
//                     <option value="Average">Average</option>
//                     <option value="Good">Good</option>
//                   </Form.Control>
//                   <Form.Label>Ticket ID</Form.Label>
//                   <Form.Control type="text" name="ticket" value={scrapForm.ticket} onChange={(e) => handleScrapChange(index, "ticket", e.target.value)} placeholder="Enter Ticket ID" />
//                   <Form.Label>Damaged Image</Form.Label>
//                   <Upload
//                     action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
//                     listType="picture-card"
//                     fileList={scrapForm.damagedFileList}
//                     onChange={(info) => onChangeDamaged(index, info)}
//                     customRequest={({ file, onSuccess }) => setTimeout(() => onSuccess("ok"), 0)}
//                   >
//                     {scrapForm.damagedFileList.length === 0 && "+ Upload"}
//                   </Upload>
//                 </Form.Group>
//                 {scrapForms.length > 1 && (
//                   <Button variant="danger" onClick={() => removeScrapForm(scrapForm.uniqueKey)}>
//                     <CloseCircleOutlined /> Remove
//                   </Button>
//                 )}
//               </div>
//             ))}
//             <Button variant="primary" onClick={addScrapForm}>
//               <PlusCircleOutlined /> Add New
//             </Button>
//           </>
//         )}

//         <Button variant="success" className="float-end" onClick={handlePostData}>
//           Submit
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default InvoiceForm;











import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { CloseCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import axios from "axios";

const InvoiceForm = () => {
  const [ticketNumber, setTicketNumber] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [address, setAddress] = useState("");
  const [sparesData, setSparesData] = useState([]);
  const [afterServiceFileList, setAfterServiceFileList] = useState([]);
  const [sparce, setSparce] = useState("");
  const [fields, setFields] = useState([{ uniqueKey: Date.now(), materialName: "", date: "", quantity: "", price: "", rate: "" }]);
  const [scrapOption, setScrapOption] = useState("");
  const [scrapForms, setScrapForms] = useState([{ uniqueKey: Date.now(), material: "", receivedDate: "", qty: 0, condition: "", ticket: "", damagedFileList: [] }]);
  const [grantTotal, setGrantTotal] = useState(0);

  useEffect(() => {
    axios.get('/server/waterheater_1_function/getspares')
      .then((res) => {
        console.log('spares data response', res.data);
        setSparesData(res.data);
      })
      .catch((err) => {
        console.log('error in getting spares data', err);
      });
  }, []);

  const onChangeAfterService = (info) => {
    let newFileList = [...info.fileList];
    if (newFileList.length > 1) {
      newFileList = [newFileList[newFileList.length - 1]];
    }
    setAfterServiceFileList(newFileList);
  };

  const onChangeDamaged = (index, info) => {
    const newScrapForms = [...scrapForms];
    let newFileList = [...info.fileList];
    if (newFileList.length > 1) {
      newFileList = [newFileList[newFileList.length - 1]];
    }
    newScrapForms[index].damagedFileList = newFileList;
    setScrapForms(newScrapForms);
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const updatedFields = [...fields];

    if (name === "materialName") {
      // Update material name and find corresponding price
      updatedFields[index].materialName = value;
      const selectedMaterial = sparesData.find(data => data.Material_Name === value);
      updatedFields[index].price = selectedMaterial ? selectedMaterial.Price : "";

      // Clear rate if price changes
      if (updatedFields[index].quantity && updatedFields[index].price) {
        updatedFields[index].rate = (updatedFields[index].quantity * updatedFields[index].price).toFixed(2);
      } else {
        updatedFields[index].rate = "";
      }
    } else {
      // Update other fields (quantity, price, etc.)
      updatedFields[index][name] = value;

      // Calculate rate if both quantity and price are present
      if (name === "quantity" || name === "price") {
        const quantity = updatedFields[index].quantity || 0;
        const price = updatedFields[index].price || 0;
        updatedFields[index].rate = (quantity * price).toFixed(2);
      }
    }

    // Handle quantity validation against available quantity
    if (name === "quantity") {
      const selectedMaterial = sparesData.find(data => data.Material_Name === updatedFields[index].materialName);
      const availableQuantity = selectedMaterial ? parseInt(selectedMaterial.Available_Qty, 10) : 0;

      if (parseInt(value, 10) > availableQuantity) {
        alert("Insufficient quantity");
        updatedFields[index].quantity = "";
        updatedFields[index].rate = ""; // Clear rate if quantity is cleared
      } else {
        updatedFields[index].quantity = value;
        const price = updatedFields[index].price || 0;
        updatedFields[index].rate = (value * price).toFixed(2);
      }
    }

    setFields(updatedFields);
  };

  const addField = () => {
    setFields([...fields, { uniqueKey: Date.now(), materialName: "", date: "", quantity: "", price: "", rate: "" }]);
  };

  const removeField = (uniqueKey) => {
    setFields(fields.filter(field => field.uniqueKey !== uniqueKey));
  };

  const handleScrapChange = (index, fieldName, value) => {
    const updatedScrapForms = [...scrapForms];
    updatedScrapForms[index][fieldName] = value;
    setScrapForms(updatedScrapForms);
  };

  const addScrapForm = () => {
    setScrapForms([...scrapForms, { uniqueKey: Date.now(), material: "", receivedDate: "", qty: 0, condition: "", ticket: "", damagedFileList: [] }]);
  };

  const removeScrapForm = (uniqueKey) => {
    setScrapForms(scrapForms.filter(form => form.uniqueKey !== uniqueKey));
  };

  useEffect(() => {
    // Calculate Grant Total whenever fields change
    const total = fields.reduce((accumulator, current) => {
      if (current.rate) {
        return accumulator + parseFloat(current.rate);
      }
      return accumulator;
    }, 0);
    setGrantTotal(total);
  }, [fields]);

  const handlePostData = async () => {
    const invoicePayload = {
      ticketNumber,
      customerName,
      invoiceNumber,
      invoiceDate,
      address,
      afterServiceFileList: afterServiceFileList.map(file => ({
        uid: file.uid,
        name: file.name,
        status: file.status,
        url: file.url // if you need to include the URL of the uploaded file
      })),
      spares: sparce === "yes" ? fields : [],
      scrapDetails: scrapOption === "yes" ? scrapForms.map(form => ({
        ...form,
        damagedFileList: form.damagedFileList.map(file => ({
          uid: file.uid,
          name: file.name,
          status: file.status,
          url: file.url // if you need to include the URL of the uploaded file
        }))
      })) : []
    };

    try {
      const fileObj = new FormData();
      fileObj.append('file', afterServiceFileList[0].originFileObj); // Append the single file

      const response = await fetch('/server/waterheater_1_function/uploadfile', {
        method: 'POST',
        body: fileObj,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      if (response.status === 200) {
        console.log(data);
        console.log('afterServiceFileList Upload successful');
      } else {
        console.log('afterServiceFileList Upload failed');
      }
    } catch (e) {
      console.error(e);
      alert('Error. Please try again after sometime.');
    }
  };

  return (
    <div className="container">
      <h1>Invoice Form</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Ticket Number</Form.Label>
          <Form.Control type="text" value={ticketNumber} onChange={(e) => setTicketNumber(e.target.value)} placeholder="Enter Ticket Number" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Customer Name</Form.Label>
          <Form.Control type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} placeholder="Enter Customer Name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Invoice Number</Form.Label>
          <Form.Control type="text" value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} placeholder="Enter Invoice Number" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" value={invoiceDate} onChange={(e) => setInvoiceDate(e.target.value)} placeholder="Enter Date" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter Address" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>After Service Image</Form.Label>
          <Upload
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            listType="picture-card"
            fileList={afterServiceFileList}
            onChange={onChangeAfterService}
            customRequest={({ file, onSuccess }) => setTimeout(() => onSuccess("ok"), 0)}
          >
            {afterServiceFileList.length === 0 && "+ Upload"}
          </Upload>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Enter Spares Subform</Form.Label>
          <Form.Control as="select" value={sparce} onChange={(e) => setSparce(e.target.value)}>
            <option value="">Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Form.Control>
        </Form.Group>

        {sparce === "yes" && (
          <>
            <h4>Spares SubForm</h4>
            {fields.map((field, index) => (
              <div key={field.uniqueKey} style={{ marginBottom: "20px" }}>
                <Form.Group className="mb-3">
                  <Form.Label>Material Name</Form.Label>
                  <Form.Control as="select" name="materialName" value={field.materialName} onChange={(e) => handleChange(index, e)}>
                    <option value="">Select an option</option>
                    {sparesData.map((data) => (
                      <option key={data.Material_Name} value={data.Material_Name}>
                        {data.Material_Name}
                      </option>
                    ))}
                  </Form.Control>

                  <Form.Label>Date</Form.Label>
                  <Form.Control type="date" name="date" value={field.date} onChange={(e) => handleChange(index, e)} />
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control type="number" name="quantity" value={field.quantity} onChange={(e) => handleChange(index, e)} placeholder="Enter Quantity" />
                  <Form.Label>Price</Form.Label>
                  <Form.Control type="number" name="price" value={field.price}  readOnly onChange={(e) => handleChange(index, e)} placeholder="Enter Price" />
                  <Form.Label>Rate</Form.Label>
                  <Form.Control type="number" name="rate" value={field.rate} readOnly placeholder="Rate will be calculated" />
                </Form.Group>
                {fields.length > 1 && (
                  <Button variant="danger" onClick={() => removeField(field.uniqueKey)}>
                    <CloseCircleOutlined /> Remove
                  </Button>
                )}
              </div>
            ))}
            <Button variant="primary" onClick={addField}>
              <PlusCircleOutlined /> Add New
            </Button>
          </>
        )}

        <Form.Group className="mb-3">
          <Form.Label>Grant Total</Form.Label>
          <Form.Control type="number" readOnly value={grantTotal} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Enter Scrap Subform</Form.Label>
          <Form.Control as="select" value={scrapOption} onChange={(e) => setScrapOption(e.target.value)}>
            <option value="">Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Form.Control>
        </Form.Group>

        {scrapOption === "yes" && (
          <>
            <h4>Scrap Details</h4>
            {scrapForms.map((scrapForm, index) => (
              <div key={scrapForm.uniqueKey} style={{ marginBottom: "20px" }}>
                <Form.Group className="mb-3">
                  <Form.Label>Material Name</Form.Label>
                  <Form.Control as="select" value={scrapForm.material} name="material" onChange={(e) => handleScrapChange(index, "material", e.target.value)}>
                    <option value="">Select an option</option>
                    {sparesData.map((data) => (
                      <option key={data.Material_Name} value={data.Material_Name}>
                        {data.Material_Name}
                      </option>
                    ))}
                  </Form.Control>

                  <Form.Label>Received Date</Form.Label>
                  <Form.Control type="date" name="receivedDate" value={scrapForm.receivedDate} onChange={(e) => handleScrapChange(index, "receivedDate", e.target.value)} />
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control type="number" name="qty" value={scrapForm.qty} onChange={(e) => handleScrapChange(index, "qty", e.target.value)} placeholder="Enter Quantity" />
                  <Form.Label>Condition</Form.Label>
                  <Form.Control as="select" name="condition" value={scrapForm.condition} onChange={(e) => handleScrapChange(index, "condition", e.target.value)}>
                    <option value="">Select Condition</option>
                    <option value="Bad">Bad</option>
                    <option value="Average">Average</option>
                    <option value="Good">Good</option>
                  </Form.Control>
                  <Form.Label>Ticket ID</Form.Label>
                  <Form.Control type="text" name="ticket" value={scrapForm.ticket} onChange={(e) => handleScrapChange(index, "ticket", e.target.value)} placeholder="Enter Ticket ID" />
                  <Form.Label>Damaged Image</Form.Label>
                  <Upload
                    action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                    listType="picture-card"
                    fileList={scrapForm.damagedFileList}
                    onChange={(info) => onChangeDamaged(index, info)}
                    customRequest={({ file, onSuccess }) => setTimeout(() => onSuccess("ok"), 0)}
                  >
                    {scrapForm.damagedFileList.length === 0 && "+ Upload"}
                  </Upload>
                </Form.Group>
                {scrapForms.length > 1 && (
                  <Button variant="danger" onClick={() => removeScrapForm(scrapForm.uniqueKey)}>
                    <CloseCircleOutlined /> Remove
                  </Button>
                )}
              </div>
            ))}
            <Button variant="primary" onClick={addScrapForm}>
              <PlusCircleOutlined /> Add New
            </Button>
          </>
        )}

        <Button variant="success" className="float-end" onClick={handlePostData}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default InvoiceForm;

