// import React, { useEffect, useState, useRef } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import { CloseCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
// import { Upload } from "antd";
// import axios from "axios";
// import SignatureCanvas from "react-signature-canvas";
// import { HashLoader } from 'react-spinners';
// import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';

// const InvoiceForm = ({ ticketId, customerName5, customerAddress, RowId, Dynamic_Status }) => {

//   console.log('dynamic status',Dynamic_Status)

//   const [ticketRowId, setTicketRowId] = useState(RowId)
//   const [ticketNumber, setTicketNumber] = useState(ticketId);
//   const [customerName, setCustomerName] = useState(customerName5);
//   const [invoiceNumber, setInvoiceNumber] = useState(generateAlphanumericID(8));
//   const [invoiceDate, setInvoiceDate] = useState("");
//   const [address, setAddress] = useState(customerAddress);
//   const [sparesData, setSparesData] = useState([]);
//   const [afterServiceFileList, setAfterServiceFileList] = useState([]);
//   const [sparce, setSparce] = useState("");
//   const [fields, setFields] = useState([
//     { uniqueKey: Date.now(), materialName: "", date: "", quantity: "", price: "", rate: "", warranty: "" }
//   ]);
//   const [scrapOption, setScrapOption] = useState("");
//   const [scrapForms, setScrapForms] = useState([{ uniqueKey: Date.now(), material: "", receivedDate: "", qty: 0, condition: "", damagedFileList: [] }]);
//   const [grantTotal, setGrantTotal] = useState(0);
//   const sigCanvas = useRef({});
//   const [signature, setSignature] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();


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

//   function generateAlphanumericID(length) {
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//     return Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
//   }

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
//       updatedFields[index].materialName = value;
//       const selectedMaterial = sparesData.find(data => data.Material_Name === value);
//       updatedFields[index].price = selectedMaterial ? selectedMaterial.Price : "";
//       if (updatedFields[index].quantity && updatedFields[index].price) {
//         updatedFields[index].rate = (updatedFields[index].quantity * updatedFields[index].price).toFixed(2);
//       } else {
//         updatedFields[index].rate = "";
//       }
//     } else {
//       updatedFields[index][name] = value;
//       if (name === "quantity" || name === "price") {
//         const quantity = updatedFields[index].quantity || 0;
//         const price = updatedFields[index].price || 0;
//         updatedFields[index].rate = (quantity * price).toFixed(2);
//       }
//     }

//     if (name === "quantity") {
//       const selectedMaterial = sparesData.find(data => data.Material_Name === updatedFields[index].materialName);
//       const availableQuantity = selectedMaterial ? parseInt(selectedMaterial.Available_Qty, 10) : 0;

//       if (parseInt(value, 10) > availableQuantity) {
//         alert("Insufficient quantity");
//         updatedFields[index].quantity = "";
//         updatedFields[index].rate = "";
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
//     setScrapForms([...scrapForms, { uniqueKey: Date.now(), material: "", receivedDate: "", qty: 0, condition: "", damagedFileList: [] }]);
//   };

//   const removeScrapForm = (uniqueKey) => {
//     setScrapForms(scrapForms.filter(form => form.uniqueKey !== uniqueKey));
//   };

//   useEffect(() => {
//     const total = fields.reduce((accumulator, current) => {
//       if (current.rate) {
//         return accumulator + parseFloat(current.rate);
//       }
//       return accumulator;
//     }, 0);
//     setGrantTotal(total);
//   }, [fields]);

//   const clearSignature = () => {
//     sigCanvas.current.clear();
//     setSignature("");
//   };

//   const dataURLtoBlob = (dataURL) => {
//     const arr = dataURL.split(',');
//     const mime = arr[0].match(/:(.*?);/)[1];
//     const bstr = atob(arr[1]);
//     let n = bstr.length;
//     const u8arr = new Uint8Array(n);
//     while (n--) {
//       u8arr[n] = bstr.charCodeAt(n);
//     }
//     return new Blob([u8arr], { type: mime });
//   };



//   const handlePostData = async () => {

//     const data = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');

//     // Create a blank canvas for comparison
//     const blankCanvas = document.createElement('canvas');
//     blankCanvas.width = sigCanvas.current.getTrimmedCanvas().width;
//     blankCanvas.height = sigCanvas.current.getTrimmedCanvas().height;
//     const blankData = blankCanvas.toDataURL('image/png');


//     if (afterServiceFileList.length === 0) {
//       Swal.fire({
//         position: "top-end",
//         icon: "warning",
//         title: "Please add After Service Image",
//         showConfirmButton: true,
//       });
//       return
//     }

//     // alert for signature
//     if (data === blankData) {
//       alert("Please provide a signature.");
//       return;
//     }



//     const canvas = document.createElement('canvas');
//     const ctx = canvas.getContext('2d');
//     const img = new Image();
//     img.src = data;
//     img.onload = async () => {
//       canvas.width = img.width;
//       canvas.height = img.height;
//       ctx.fillStyle = 'white';
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
//       ctx.drawImage(img, 0, 0);
//       const whiteBackgroundData = canvas.toDataURL('image/png');

//       const signatureBlob = dataURLtoBlob(whiteBackgroundData);

//       //posting signature,aferservoce,mainform,scrap subform with damaged images
//       try {

//         console.log(signatureBlob, afterServiceFileList[0].originFileObj)
//         const formData = new FormData();
//         formData.append('signature', signatureBlob, 'signature.png');
//         formData.append('service', afterServiceFileList[0].originFileObj);



//         const response = await fetch('/server/waterheater_1_function/uploadfile', {
//           method: 'POST',
//           body: formData,
//         });


//         const data = await response.json();

//         console.log(data)

//         if (response.status === 200) {

//           console.log(data);
//           console.log('Signature and afterservice upload successful');

//           //updating afterservice image in ticket table
//           let today = new Date();
//           let formattedDate = today.toISOString().split('T')[0];
//           try {
//             let payload = {
//               ROWID: ticketRowId,
//               After_Service_Image: data[1].id,
//               Status: Dynamic_Status,
//               Closed_Date: formattedDate,
//               Technician_Email: '',
//               Dispatch_Email:''
//             }
//             console.log('payload from invoice', payload)
//             axios.put('/server/waterheater_1_function/updateticket', { data: payload })
//               .then((res) => {
//                 console.log('response from updating ticket', res);
//                 // Optionally refresh data here
//               })
//               .catch((err) => {
//                 console.log('error in updating ticket', err);
//               });
//           } catch (error) {
//             console.log(error)
//           }

//           //posting data in invoice table
//           try {
//             let postInvoicePay = {
//               Ticket_Id: ticketNumber,
//               Customer_Name: customerName,
//               Invoice_Number: invoiceNumber,
//               Invoice_Date: invoiceDate,
//               Address: address,
//               Grand_Total: grantTotal,
//               AfterServiceImage: data[1].id,
//               Spares_SubForm: sparce,
//               Scrap_SubForm: scrapOption,
//               Signature: data[0].id
//             };

//             const invoiceResponse = await axios.post('/server/waterheater_1_function/addinvoice', { data: postInvoicePay });
//             console.log('post payload response', invoiceResponse.data);
//             const invoiceRowId = invoiceResponse.data.ROWID;

//             if (invoiceResponse.status === 200) {


//               if (scrapOption === "yes") {
//                 try {
//                   const formData = new FormData();
//                   scrapForms.forEach((form, index) => {
//                     form.damagedFileList.forEach((file, fileIndex) => {
//                       formData.append(`file${index + 1}_${fileIndex + 1}`, file.originFileObj);
//                     });
//                   });

//                   const scrapResponse = await fetch('/server/waterheater_1_function/uploadfile', {
//                     method: 'POST',
//                     body: formData,
//                   });
//                   if (!scrapResponse.ok) {
//                     throw new Error('Network response was not ok');
//                   }
//                   const scrapData = await scrapResponse.json();
//                   if (scrapResponse.status === 200) {
//                     console.log(scrapData);

//                     const ScrapFormPayload = (scrapForms, scrapData, invoiceRowId) => {
//                       return scrapForms.map((form, index) => ({
//                         Material_Condition: form.condition,
//                         Qty: form.qty.toString(),
//                         Ticket_Lookup: ticketNumber,
//                         Scrap_Image: scrapData[index].id,  // Assuming scrapData contains array of objects with id
//                         Invoice_Id: invoiceRowId,
//                         Material_Name: form.material,
//                         Date_of_Received: form.receivedDate
//                       }));
//                     };

//                     const payload = ScrapFormPayload(scrapForms, scrapData, invoiceRowId);
//                     console.log("ScrapFormPayload", payload);

//                     // Post ScrapFormPayload to the server
//                     try {
//                       await axios.post('/server/waterheater_1_function/addscrap', { data: payload })
//                         .then((res) => {
//                           console.log('response from posting scrap', res)
//                         })
//                         .catch((err) => {
//                           console.log('error in posting scrap form', err)
//                         })

//                     } catch (error) {
//                       console.log('error in posting scrap form', error)
//                     }

//                     console.log('Damaged file uploaded successfully');
//                   } else {
//                     console.log(scrapData);
//                   }
//                 } catch (error) {
//                   console.log('Damaged file upload failed:', error);
//                 }
//               }

//               if (sparce === "yes") {
//                 try {
//                   var sparesChanges = fields.map(field => {
//                     const selectedMaterial = sparesData.find(data => data.Material_Name === field.materialName);
//                     const availableQty = parseInt(selectedMaterial.Available_Qty, 10);
//                     const consumedQty = parseInt(selectedMaterial.Consumed_Qty || 0, 10);

//                     const newConsumedQty = consumedQty + parseInt(field.quantity, 10);
//                     const newAvailableQty = availableQty - parseInt(field.quantity, 10);

//                     return {
//                       ROWID: selectedMaterial.ROWID,
//                       Available_Qty: newAvailableQty.toString(),
//                       Consumed_Qty: newConsumedQty.toString()
//                     };
//                   });

//                   console.log("Spares Changes:", sparesChanges);
//                   try {
//                     axios.put('/server/waterheater_1_function/updatespares', { data: sparesChanges })
//                       .then((res) => {
//                         console.log('update spares data', res)
//                       })
//                       .catch((err) => {
//                         console.log('error in updating spares data', err)
//                       })
//                   } catch (error) {
//                     console.log('error in updating spares data', error)
//                   }

//                   var sparesFormPayload = fields.map(field => {
//                     let payload = {
//                       Parts_and_service: field.materialName,
//                       Warranty: field.warranty,
//                       Warranty_Rate: "",
//                       Rate: "",
//                       Qty: field.quantity,
//                       Invoice_Date: field.date,
//                       Expense_Cost: "",
//                       SubTotal: "",
//                       Invoice_Id: invoiceRowId
//                     };

//                     if (field.warranty === "no") {
//                       payload.Warranty_Rate = "";
//                       payload.Expense_Cost = "";
//                       payload.Rate = field.price;
//                       payload.SubTotal = field.rate;
//                     } else if (field.warranty === "yes") {
//                       payload.Warranty_Rate = field.price;
//                       payload.Expense_Cost = field.rate;
//                       payload.Rate = "";
//                       payload.SubTotal = "";
//                     }

//                     return payload;
//                   });

//                   // console.log("Payloads:", sparesFormPayload);
//                   try {
//                     axios.post('/server/waterheater_1_function/addlistofspare', { data: sparesFormPayload })
//                       .then((res) => {
//                         console.log("responce from listof spares payload", res)
//                         Swal.fire({
//                           position: "top-end",
//                           icon: "success",
//                           title: "Your work has been saved",
//                           showConfirmButton: false,
//                           timer: 1500
//                         });
//                       })
//                       .catch((err) => {
//                         console.log('error from posting list of spares payload', err)
//                       })
//                   } catch (error) {
//                     console.log('error from posting list of spares payload', error)
//                   }

//                 } catch (error) {
//                   // alert('Please enter the Quantity field');
//                   Swal.fire("Please enter the Quantity field");
//                 }
//               }

//               sigCanvas.current.clear();
//               setSignature("");

//               // Reset all the form fields
//               setTicketNumber("");
//               setCustomerName("");
//               setInvoiceNumber("");
//               setInvoiceDate("");
//               setAddress("");
//               setSparce("");
//               setFields([{ uniqueKey: Date.now(), materialName: "", date: "", quantity: "", price: "", rate: "", warranty: "" }]);
//               setScrapOption("");
//               setScrapForms([{ uniqueKey: Date.now(), material: "", receivedDate: "", qty: 0, condition: "", damagedFileList: [] }]);
//               setAfterServiceFileList([]);
//               setGrantTotal(0);



//             }
//           } catch (error) {
//             console.log('Error in posting the invoice payload data:', error);
//           }

//           sigCanvas.current.clear();
//           setSignature("");
//         } else {
//           console.log(data);
//         }

//         navigate('/app/index.html#/home')

//       } catch (error) {
//         console.log('Signature and afterservice upload failed:', error);
//       }

//     };
//   };



//   return (
//     <div className="container">
//       <h1>Invoice Form</h1>
//       {loading ? (
//         <div className="d-flex justify-content-center mt-5">
//           <HashLoader color={'#36D7B7'} loading={loading} size={50} />
//         </div>
//       ) : (
//         <Form>
//           {/* Rest of the form fields */}
//           <Form.Group className="mb-3">
//             <Form.Label>Ticket Id</Form.Label>
//             <Form.Control type="text" value={ticketNumber} readOnly />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Customer Name</Form.Label>
//             <Form.Control type="text" value={customerName} readOnly />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Invoice Number</Form.Label>
//             <Form.Control type="text" value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} readOnly />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Date</Form.Label>
//             <Form.Control type="date" value={invoiceDate} onChange={(e) => setInvoiceDate(e.target.value)} placeholder="Enter Date" />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Customer Address</Form.Label>
//             <Form.Control type="text" value={address} readOnly />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>After Service Image</Form.Label>
//             <Upload
//               action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
//               listType="picture-card"
//               fileList={afterServiceFileList}
//               onChange={onChangeAfterService}
//               customRequest={({ file, onSuccess }) => setTimeout(() => onSuccess("ok"), 0)}
//             >
//               {afterServiceFileList.length === 0 && "+ Upload"}
//             </Upload>
//           </Form.Group>
//           {/* <Form.Group className="mb-3">
//           <Form.Label>Enter Spares Subform</Form.Label>
//           <Form.Control as="select" value={sparce} onChange={(e) => setSparce(e.target.value)}>
//             <option value="">Select an option</option>
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </Form.Control>
//         </Form.Group> */}
//           <Form.Group className="mb-3">
//             <Form.Label><h4>Enter Spares Subform</h4></Form.Label>
//             <div>
//               <Form.Check
//                 type="radio"
//                 label="Yes"
//                 name="sparce"
//                 id="sparceYes"
//                 value="yes"
//                 checked={sparce === "yes"}
//                 onChange={(e) => setSparce(e.target.value)}
//               />
//               <Form.Check
//                 type="radio"
//                 label="No"
//                 name="sparce"
//                 id="sparceNo"
//                 value="no"
//                 checked={sparce === "no"}
//                 onChange={(e) => setSparce(e.target.value)}
//                 defaultChecked
//               />
//             </div>
//           </Form.Group>

//           {sparce === "yes" && (
//             <>
//               <h4>Spares SubForm</h4>
//               {fields.map((field, index) => (
//                 <div key={field.uniqueKey} style={{ marginBottom: "20px" }}>
//                   <Button>
//                     Scan Barcode
//                   </Button>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Material Name</Form.Label>
//                     <Form.Control as="select" name="materialName" value={field.materialName} onChange={(e) => handleChange(index, e)}>
//                       <option value="">Select an option</option>
//                       {sparesData.map((data) => (
//                         <option key={data.Material_Name} value={data.Material_Name}>
//                           {data.Material_Name}
//                         </option>
//                       ))}
//                     </Form.Control>
//                     <Form.Label>Warranty</Form.Label>
//                     <Form.Control as="select" name="warranty" onChange={(e) => handleChange(index, e)}>
//                       <option value="">Select an option</option>
//                       <option value="yes">Yes</option>
//                       <option value="no">No</option>
//                     </Form.Control>
//                     <Form.Label>Date</Form.Label>
//                     <Form.Control type="date" name="date" value={field.date} onChange={(e) => handleChange(index, e)} />
//                     <Form.Label>Quantity</Form.Label>
//                     <Form.Control required type="number" name="quantity" value={field.quantity} onChange={(e) => handleChange(index, e)} placeholder="Enter Quantity" />
//                     <Form.Label>Price</Form.Label>
//                     <Form.Control type="number" name="price" value={field.price} readOnly onChange={(e) => handleChange(index, e)} placeholder="Enter Price" />
//                     <Form.Label>Rate</Form.Label>
//                     <Form.Control type="number" name="rate" value={field.rate} readOnly placeholder="Rate will be calculated" />
//                   </Form.Group>
//                   {fields.length > 1 && (
//                     <Button variant="danger" onClick={() => removeField(field.uniqueKey)}>
//                       <CloseCircleOutlined /> Remove
//                     </Button>
//                   )}
//                 </div>
//               ))}
//               <Button variant="primary" onClick={addField}>
//                 <PlusCircleOutlined /> Add New
//               </Button>
//             </>
//           )}

//           <Form.Group className="mb-3">
//             <Form.Label>Grant Total</Form.Label>
//             <Form.Control type="number" readOnly value={grantTotal} />
//           </Form.Group>
//           {/* 
//         <Form.Group className="mb-3">
//           <Form.Label>Enter Scrap Subform</Form.Label>
//           <Form.Control as="select" value={scrapOption} onChange={(e) => setScrapOption(e.target.value)}>
//             <option value="">Select an option</option>
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </Form.Control>
//         </Form.Group> */}
//           <Form.Group className="mb-3">
//             <Form.Label><h4>Enter Scrap Subform</h4></Form.Label>
//             <div>
//               <Form.Check
//                 type="radio"
//                 label="Yes"
//                 name="scrapOption"
//                 id="scrapYes"
//                 value="yes"
//                 checked={scrapOption === "yes"}
//                 onChange={(e) => setScrapOption(e.target.value)}
//               />
//               <Form.Check
//                 type="radio"
//                 label="No"
//                 name="scrapOption"
//                 id="scrapNo"
//                 value="no"
//                 checked={scrapOption === "no"}
//                 onChange={(e) => setScrapOption(e.target.value)}
//                 defaultChecked
//               />
//             </div>
//           </Form.Group>

//           {scrapOption === "yes" && (
//             <>
//               <h4>Scrap Details</h4>
//               {scrapForms.map((scrapForm, index) => (
//                 <div key={scrapForm.uniqueKey} style={{ marginBottom: "20px" }}>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Material Name</Form.Label>
//                     <Form.Control as="select" value={scrapForm.material} name="material" onChange={(e) => handleScrapChange(index, "material", e.target.value)}>
//                       <option value="">Select an option</option>
//                       {sparesData.map((data) => (
//                         <option key={data.Material_Name} value={data.Material_Name}>
//                           {data.Material_Name}
//                         </option>
//                       ))}
//                     </Form.Control>

//                     <Form.Label>Received Date</Form.Label>
//                     <Form.Control type="date" name="receivedDate" value={scrapForm.receivedDate} onChange={(e) => handleScrapChange(index, "receivedDate", e.target.value)} />
//                     <Form.Label>Quantity</Form.Label>
//                     <Form.Control required type="number" name="qty" value={scrapForm.qty} onChange={(e) => handleScrapChange(index, "qty", e.target.value)} placeholder="Enter Quantity" />
//                     <Form.Label>Condition</Form.Label>
//                     <Form.Control as="select" name="condition" value={scrapForm.condition} onChange={(e) => handleScrapChange(index, "condition", e.target.value)}>
//                       <option value="">Select Condition</option>
//                       <option value="Bad">Bad</option>
//                       <option value="Average">Average</option>
//                       <option value="Good">Good</option>
//                     </Form.Control>
//                     <Form.Label>Ticket ID</Form.Label>
//                     <Form.Control type="text" name="ticket" value={ticketNumber} readOnly />
//                     <Form.Label>Damaged Image</Form.Label>
//                     <Upload
//                       action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
//                       listType="picture-card"
//                       fileList={scrapForm.damagedFileList}
//                       onChange={(info) => onChangeDamaged(index, info)}
//                       customRequest={({ file, onSuccess }) => setTimeout(() => onSuccess("ok"), 0)}
//                     >
//                       {scrapForm.damagedFileList.length === 0 && "+ Upload"}
//                     </Upload>
//                   </Form.Group>
//                   {scrapForms.length > 1 && (
//                     <Button variant="danger" onClick={() => removeScrapForm(scrapForm.uniqueKey)}>
//                       <CloseCircleOutlined /> Remove
//                     </Button>
//                   )}
//                 </div>
//               ))}
//               <Button variant="primary" onClick={addScrapForm}>
//                 <PlusCircleOutlined /> Add New
//               </Button>
//             </>
//           )}



//           {/* Signature Canvas */}
//           <div className="mb-3">
//             <h4>Signature</h4>
//             <div style={{
//               width: '90%',
//               maxWidth: '600px',
//               margin: 'auto',
//               border: '1px solid #ccc',
//               borderRadius: '8px',
//               overflow: 'hidden',
//               height: '200px',
//               position: 'relative' // Ensure relative positioning for absolute children
//             }}>

//               <SignatureCanvas

//                 ref={sigCanvas}
//                 penColor="black"
//                 canvasProps={{
//                   width: 600,
//                   height: 200,
//                   className: 'sigCanvas',
//                   style: { border: '1px solid #ccc', borderRadius: '8px' }
//                 }}
//               />
//             </div>
//             <div className="mt-2">
//               <Button variant="secondary" onClick={clearSignature}>Clear Signature</Button>
//             </div>
//           </div>
//           <Button onClick={handlePostData}>Submit</Button>
//         </Form>
//       )}

//     </div>
//   );
// };

// export default InvoiceForm;


































import React, { useEffect, useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { CloseCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import axios from "axios";
import SignatureCanvas from "react-signature-canvas";
import { HashLoader } from 'react-spinners';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import BarcodeScanner from "./BarcodeScanner";

const InvoiceForm = ({ ticketId, customerName5, customerAddress, RowId, Dynamic_Status }) => {

  console.log('dynamic status', Dynamic_Status)

  const [ticketRowId, setTicketRowId] = useState(RowId)
  const [ticketNumber, setTicketNumber] = useState(ticketId);
  const [customerName, setCustomerName] = useState(customerName5);
  const [invoiceNumber, setInvoiceNumber] = useState(generateAlphanumericID(8));
  const [invoiceDate, setInvoiceDate] = useState("");
  const [address, setAddress] = useState(customerAddress);
  const [sparesData, setSparesData] = useState([]);
  const [afterServiceFileList, setAfterServiceFileList] = useState([]);
  const [sparce, setSparce] = useState("");
  const [fields, setFields] = useState([
    { uniqueKey: Date.now(), materialName: "", date: "", quantity: "", price: "", rate: "", warranty: "" }
  ]);
  const [scrapOption, setScrapOption] = useState("");
  const [scrapForms, setScrapForms] = useState([{ uniqueKey: Date.now(), material: "", receivedDate: "", qty: 0, condition: "", damagedFileList: [] }]);
  const [grantTotal, setGrantTotal] = useState(0);
  const sigCanvas = useRef({});
  const [signature, setSignature] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();



  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const [index2, setIndex2] = useState(0)

  const handleScan = (value, index) => {
    console.log('scanned value', value)
    console.log('index', index)

    // handleChange(index,e,scannedValue)
    handleChange(index, { target: { value, name: 'barcode' } })
  };


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

  function generateAlphanumericID(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    return Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
  }

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


    if (name === 'barcode') {
      console.log('barcodein handle change function', value)

      const selectedMaterial = sparesData.find(data => data.BarCodeValue === value);
      updatedFields[index].materialName = selectedMaterial ? selectedMaterial.Material_Name : "";
      updatedFields[index].price = selectedMaterial ? selectedMaterial.Price : "";
      if (updatedFields[index].quantity && updatedFields[index].price) {
        updatedFields[index].rate = (updatedFields[index].quantity * updatedFields[index].price).toFixed(2);
      } else {
        updatedFields[index].rate = "";
      }
    } else {
      updatedFields[index][name] = value;
      if (name === "quantity" || name === "price") {
        const quantity = updatedFields[index].quantity || 0;
        const price = updatedFields[index].price || 0;
        updatedFields[index].rate = (quantity * price).toFixed(2);
      }
    }




    if (name === "materialName") {
      updatedFields[index].materialName = value;
      const selectedMaterial = sparesData.find(data => data.Material_Name === value);
      updatedFields[index].price = selectedMaterial ? selectedMaterial.Price : "";
      if (updatedFields[index].quantity && updatedFields[index].price) {
        updatedFields[index].rate = (updatedFields[index].quantity * updatedFields[index].price).toFixed(2);
      } else {
        updatedFields[index].rate = "";
      }
    } else {
      updatedFields[index][name] = value;
      if (name === "quantity" || name === "price") {
        const quantity = updatedFields[index].quantity || 0;
        const price = updatedFields[index].price || 0;
        updatedFields[index].rate = (quantity * price).toFixed(2);
      }
    }

    if (name === "quantity") {
      const selectedMaterial = sparesData.find(data => data.Material_Name === updatedFields[index].materialName);
      const availableQuantity = selectedMaterial ? parseInt(selectedMaterial.Available_Qty, 10) : 0;

      if (parseInt(value, 10) > availableQuantity) {
        alert("Insufficient quantity");
        updatedFields[index].quantity = "";
        updatedFields[index].rate = "";
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
    setScrapForms([...scrapForms, { uniqueKey: Date.now(), material: "", receivedDate: "", qty: 0, condition: "", damagedFileList: [] }]);
  };

  const removeScrapForm = (uniqueKey) => {
    setScrapForms(scrapForms.filter(form => form.uniqueKey !== uniqueKey));
  };

  useEffect(() => {
    const total = fields.reduce((accumulator, current) => {
      if (current.rate) {
        return accumulator + parseFloat(current.rate);
      }
      return accumulator;
    }, 0);
    setGrantTotal(total);
  }, [fields]);

  const clearSignature = () => {
    sigCanvas.current.clear();
    setSignature("");
  };

  const dataURLtoBlob = (dataURL) => {
    const arr = dataURL.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  };



  const handlePostData = async () => {

    const data = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');

    // Create a blank canvas for comparison
    const blankCanvas = document.createElement('canvas');
    blankCanvas.width = sigCanvas.current.getTrimmedCanvas().width;
    blankCanvas.height = sigCanvas.current.getTrimmedCanvas().height;
    const blankData = blankCanvas.toDataURL('image/png');


    if (afterServiceFileList.length === 0) {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "Please add After Service Image",
        showConfirmButton: true,
      });
      return
    }

    // alert for signature
    if (data === blankData) {
      alert("Please provide a signature.");
      return;
    }



    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = data;
    img.onload = async () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
      const whiteBackgroundData = canvas.toDataURL('image/png');

      const signatureBlob = dataURLtoBlob(whiteBackgroundData);

      //posting signature,aferservoce,mainform,scrap subform with damaged images
      try {

        console.log(signatureBlob, afterServiceFileList[0].originFileObj)
        const formData = new FormData();
        formData.append('signature', signatureBlob, 'signature.png');
        formData.append('service', afterServiceFileList[0].originFileObj);



        const response = await fetch('/server/waterheater_1_function/uploadfile', {
          method: 'POST',
          body: formData,
        });


        const data = await response.json();

        console.log(data)

        if (response.status === 200) {

          console.log(data);
          console.log('Signature and afterservice upload successful');

          //updating afterservice image in ticket table
          let today = new Date();
          let formattedDate = today.toISOString().split('T')[0];
          try {
            let payload = {
              ROWID: ticketRowId,
              After_Service_Image: data[1].id,
              Status: Dynamic_Status,
              Closed_Date: formattedDate,
              Technician_Email: '',
              Dispatch_Email: ''
            }
            console.log('payload from invoice', payload)
            axios.put('/server/waterheater_1_function/updateticket', { data: payload })
              .then((res) => {
                console.log('response from updating ticket', res);
                // Optionally refresh data here
              })
              .catch((err) => {
                console.log('error in updating ticket', err);
              });
          } catch (error) {
            console.log(error)
          }

          //posting data in invoice table
          try {
            let postInvoicePay = {
              Ticket_Id: ticketNumber,
              Customer_Name: customerName,
              Invoice_Number: invoiceNumber,
              Invoice_Date: invoiceDate,
              Address: address,
              Grand_Total: grantTotal,
              AfterServiceImage: data[1].id,
              Spares_SubForm: sparce === '' ? 'no' : sparce,
              Scrap_SubForm: scrapOption === '' ? 'no' : scrapOption,
              Signature: data[0].id
            };

            const invoiceResponse = await axios.post('/server/waterheater_1_function/addinvoice', { data: postInvoicePay });
            console.log('post payload response', invoiceResponse.data);
            const invoiceRowId = invoiceResponse.data.ROWID;

            if (invoiceResponse.status === 200) {


              if (scrapOption === "yes") {
                try {
                  const formData = new FormData();
                  scrapForms.forEach((form, index) => {
                    form.damagedFileList.forEach((file, fileIndex) => {
                      formData.append(`file${index + 1}_${fileIndex + 1}`, file.originFileObj);
                    });
                  });

                  const scrapResponse = await fetch('/server/waterheater_1_function/uploadfile', {
                    method: 'POST',
                    body: formData,
                  });
                  if (!scrapResponse.ok) {
                    throw new Error('Network response was not ok');
                  }
                  const scrapData = await scrapResponse.json();
                  if (scrapResponse.status === 200) {
                    console.log(scrapData);

                    const ScrapFormPayload = (scrapForms, scrapData, invoiceRowId) => {
                      return scrapForms.map((form, index) => ({
                        Material_Condition: form.condition,
                        Qty: form.qty.toString(),
                        Ticket_Lookup: ticketNumber,
                        Scrap_Image: scrapData[index].id,  // Assuming scrapData contains array of objects with id
                        Invoice_Id: invoiceRowId,
                        Material_Name: form.material,
                        Date_of_Received: form.receivedDate
                      }));
                    };

                    const payload = ScrapFormPayload(scrapForms, scrapData, invoiceRowId);
                    console.log("ScrapFormPayload", payload);

                    // Post ScrapFormPayload to the server
                    try {
                      await axios.post('/server/waterheater_1_function/addscrap', { data: payload })
                        .then((res) => {
                          console.log('response from posting scrap', res)
                        })
                        .catch((err) => {
                          console.log('error in posting scrap form', err)
                        })

                    } catch (error) {
                      console.log('error in posting scrap form', error)
                    }

                    console.log('Damaged file uploaded successfully');
                  } else {
                    console.log(scrapData);
                  }
                } catch (error) {
                  console.log('Damaged file upload failed:', error);
                }
              }

              if (sparce === "yes") {
                try {
                  var sparesChanges = fields.map(field => {
                    const selectedMaterial = sparesData.find(data => data.Material_Name === field.materialName);
                    const availableQty = parseInt(selectedMaterial.Available_Qty, 10);
                    const consumedQty = parseInt(selectedMaterial.Consumed_Qty || 0, 10);

                    const newConsumedQty = consumedQty + parseInt(field.quantity, 10);
                    const newAvailableQty = availableQty - parseInt(field.quantity, 10);

                    return {
                      ROWID: selectedMaterial.ROWID,
                      Available_Qty: newAvailableQty.toString(),
                      Consumed_Qty: newConsumedQty.toString()
                    };
                  });

                  console.log("Spares Changes:", sparesChanges);
                  try {
                    axios.put('/server/waterheater_1_function/updatespares', { data: sparesChanges })
                      .then((res) => {
                        console.log('update spares data', res)
                      })
                      .catch((err) => {
                        console.log('error in updating spares data', err)
                      })
                  } catch (error) {
                    console.log('error in updating spares data', error)
                  }

                  var sparesFormPayload = fields.map(field => {
                    let payload = {
                      Parts_and_service: field.materialName,
                      Warranty: field.warranty,
                      Warranty_Rate: "",
                      Rate: "",
                      Qty: field.quantity,
                      Invoice_Date: field.date,
                      Expense_Cost: "",
                      SubTotal: "",
                      Invoice_Id: invoiceRowId
                    };

                    if (field.warranty === "no") {
                      payload.Warranty_Rate = "";
                      payload.Expense_Cost = "";
                      payload.Rate = field.price;
                      payload.SubTotal = field.rate;
                    } else if (field.warranty === "yes") {
                      payload.Warranty_Rate = field.price;
                      payload.Expense_Cost = field.rate;
                      payload.Rate = "";
                      payload.SubTotal = "";
                    }

                    return payload;
                  });

                  // console.log("Payloads:", sparesFormPayload);
                  try {
                    axios.post('/server/waterheater_1_function/addlistofspare', { data: sparesFormPayload })
                      .then((res) => {
                        console.log("responce from listof spares payload", res)
                        Swal.fire({
                          position: "top-end",
                          icon: "success",
                          title: "Your work has been saved",
                          showConfirmButton: false,
                          timer: 1500
                        });
                      })
                      .catch((err) => {
                        console.log('error from posting list of spares payload', err)
                      })
                  } catch (error) {
                    console.log('error from posting list of spares payload', error)
                  }

                } catch (error) {
                  // alert('Please enter the Quantity field');
                  Swal.fire("Please enter the Quantity field");
                }
              }

              sigCanvas.current.clear();
              setSignature("");

              // Reset all the form fields
              setTicketNumber("");
              setCustomerName("");
              setInvoiceNumber("");
              setInvoiceDate("");
              setAddress("");
              setSparce("");
              setFields([{ uniqueKey: Date.now(), materialName: "", date: "", quantity: "", price: "", rate: "", warranty: "" }]);
              setScrapOption("");
              setScrapForms([{ uniqueKey: Date.now(), material: "", receivedDate: "", qty: 0, condition: "", damagedFileList: [] }]);
              setAfterServiceFileList([]);
              setGrantTotal(0);



            }
          } catch (error) {
            console.log('Error in posting the invoice payload data:', error);
          }

          sigCanvas.current.clear();
          setSignature("");
        } else {
          console.log(data);
        }

        navigate('/app/index.html#/home')

      } catch (error) {
        console.log('Signature and afterservice upload failed:', error);
      }

    };
  };



  return (
    <div className="container">
      <h1>Invoice Form</h1>
      {loading ? (
        <div className="d-flex justify-content-center mt-5">
          <HashLoader color={'#36D7B7'} loading={loading} size={50} />
        </div>
      ) : (
        <Form>
          {/* Rest of the form fields */}
          <Form.Group className="mb-3">
            <Form.Label>Ticket Id</Form.Label>
            <Form.Control type="text" value={ticketNumber} readOnly />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Customer Name</Form.Label>
            <Form.Control type="text" value={customerName} readOnly />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Invoice Number</Form.Label>
            <Form.Control type="text" value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} readOnly />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" value={invoiceDate} onChange={(e) => setInvoiceDate(e.target.value)} placeholder="Enter Date" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Customer Address</Form.Label>
            <Form.Control type="text" value={address} readOnly />
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
          {/* <Form.Group className="mb-3">
          <Form.Label>Enter Spares Subform</Form.Label>
          <Form.Control as="select" value={sparce} onChange={(e) => setSparce(e.target.value)}>
            <option value="">Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Form.Control>
        </Form.Group> */}
          <Form.Group className="mb-3">
            <Form.Label><h4>Enter Spares Subform</h4></Form.Label>
            <div>
              <Form.Check
                type="radio"
                label="Yes"
                name="sparce"
                id="sparceYes"
                value="yes"
                checked={sparce === "yes"}
                onChange={(e) => setSparce(e.target.value)}
              />
              <Form.Check
                type="radio"
                label="No"
                name="sparce"
                id="sparceNo"
                value="no"
                checked={sparce === "no"}
                onChange={(e) => setSparce(e.target.value)}
                defaultChecked
              />
            </div>
          </Form.Group>

          {sparce === "yes" && (
            <>
              <h4>Spares SubForm</h4>
              {fields.map((field, index) => (
                <div key={field.uniqueKey} style={{ marginBottom: "20px" }}>
                  <Button onClick={() => {
                    setIsScannerOpen(true);
                    setIndex2(index);
                  }}>
                    Scan Barcode
                  </Button>

                  <BarcodeScanner
                    isOpen={isScannerOpen}
                    onClose={() => setIsScannerOpen(false)}
                    onScan={handleScan}
                    index={index2} // Pass the index prop
                    name='barcode'
                  />
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
                    <Form.Label>Warranty</Form.Label>
                    <Form.Control as="select" name="warranty" onChange={(e) => handleChange(index, e)}>
                      <option value="">Select an option</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </Form.Control>
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" name="date" value={field.date} onChange={(e) => handleChange(index, e)} />
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control required type="number" name="quantity" value={field.quantity} onChange={(e) => handleChange(index, e)} placeholder="Enter Quantity" />
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" name="price" value={field.price} readOnly onChange={(e) => handleChange(index, e)} placeholder="Enter Price" />
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
          {/* 
        <Form.Group className="mb-3">
          <Form.Label>Enter Scrap Subform</Form.Label>
          <Form.Control as="select" value={scrapOption} onChange={(e) => setScrapOption(e.target.value)}>
            <option value="">Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Form.Control>
        </Form.Group> */}
          <Form.Group className="mb-3">
            <Form.Label><h4>Enter Scrap Subform</h4></Form.Label>
            <div>
              <Form.Check
                type="radio"
                label="Yes"
                name="scrapOption"
                id="scrapYes"
                value="yes"
                checked={scrapOption === "yes"}
                onChange={(e) => setScrapOption(e.target.value)}
              />
              <Form.Check
                type="radio"
                label="No"
                name="scrapOption"
                id="scrapNo"
                value="no"
                checked={scrapOption === "no"}
                onChange={(e) => setScrapOption(e.target.value)}
                defaultChecked
              />
            </div>
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
                    <Form.Control required type="number" name="qty" value={scrapForm.qty} onChange={(e) => handleScrapChange(index, "qty", e.target.value)} placeholder="Enter Quantity" />
                    <Form.Label>Condition</Form.Label>
                    <Form.Control as="select" name="condition" value={scrapForm.condition} onChange={(e) => handleScrapChange(index, "condition", e.target.value)}>
                      <option value="">Select Condition</option>
                      <option value="Bad">Bad</option>
                      <option value="Average">Average</option>
                      <option value="Good">Good</option>
                    </Form.Control>
                    <Form.Label>Ticket ID</Form.Label>
                    <Form.Control type="text" name="ticket" value={ticketNumber} readOnly />
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



          {/* Signature Canvas */}
          <div className="mb-3">
            <h4>Signature</h4>
            <div style={{
              width: '90%',
              maxWidth: '600px',
              margin: 'auto',
              border: '1px solid #ccc',
              borderRadius: '8px',
              overflow: 'hidden',
              height: '200px',
              position: 'relative' // Ensure relative positioning for absolute children
            }}>

              <SignatureCanvas

                ref={sigCanvas}
                penColor="black"
                canvasProps={{
                  width: 600,
                  height: 200,
                  className: 'sigCanvas',
                  style: { border: '1px solid #ccc', borderRadius: '8px' }
                }}
              />
            </div>
            <div className="mt-2">
              <Button variant="secondary" onClick={clearSignature}>Clear Signature</Button>
            </div>
          </div>
          <Button onClick={handlePostData}>Submit</Button>
        </Form>
      )}

    </div>
  );
};

export default InvoiceForm;
