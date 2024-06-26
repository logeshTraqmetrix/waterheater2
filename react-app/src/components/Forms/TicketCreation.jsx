import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Upload } from 'antd';
import axios from 'axios';
import Swal from 'sweetalert2';

const TicketCreation = () => {

   function generateAlphanumericID(length) {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      return Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
   }

   const initialFormValues = {
      Customer_Name: '',
      Date_of_Purchase: '',
      Year_of_Purchase: '',
      Serial_Number: '',
      Ticket_Id: generateAlphanumericID(8),
      Ticket_Date: '',
      Customer_Phone: '',
      Warranty_Year: '',
      Product_Name: '',
      Customer_Email: '',
      Customer_Whatsapp: '',
      Warranty_Image: null,
      Warranty_Available: '',
      Customer_Address: '',
      Area_In_Address: '',
      Product_Issue: '',
      Issue_Image: null
   };

   const [formValues, setFormValues] = useState(initialFormValues);
   const [fileList, setFileList] = useState([]);
   const [customerIssueFileList, setCustomerIssueFileList] = useState([]);
   const [warrantyAvailable, setWarrantyAvailable] = useState("");

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormValues({
         ...formValues,
         [name]: value
      });
   };

   const handleWarrantyChange = (e) => {
      const selectedWarranty = e.target.value;
      setFormValues({
         ...formValues,
         Warranty_Available: selectedWarranty
      });
      setWarrantyAvailable(selectedWarranty.toLowerCase());
   };

   const onChange = ({ fileList: newFileList }) => {
      setFileList(newFileList.slice(-1));
      setFormValues({ ...formValues, Warranty_Image: newFileList.slice(-1)[0] });
   };

   const onCustomerIssueChange = ({ fileList: newFileList }) => {
      setCustomerIssueFileList(newFileList.slice(-1));
      setFormValues({ ...formValues, Issue_Image: newFileList.slice(-1)[0] });
   };

   const customRequest = async ({ file, onSuccess }) => {
      setTimeout(() => {
         const updatedFile = { ...file, status: 'done' };
         onSuccess(updatedFile);
      }, 500);
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(formValues);

      if (warrantyAvailable === 'yes') {
         try {
            console.log(formValues.Warranty_Image,formValues.Issue_Image)

            if (formValues.Warranty_Image == null || formValues.Issue_Image == null) {
               Swal.fire({
                 icon: "error",
                 title: "Oops...",
                 text: "Please upload images!",
               });
               return;
             }
             
            const formData = new FormData();
            formData.append('warrantyImage', formValues.Warranty_Image.originFileObj);
            formData.append('issueImage', formValues.Issue_Image.originFileObj);

            const response = await fetch('/server/waterheater_1_function/uploadfile', {
               method: 'POST',
               body: formData,
            });

            if (!response.ok) {
               throw new Error('Network response was not ok');
            }

            const data = await response.json();
            if (response.status === 200) {
               console.log(data);
               console.log('warranty and issue image upload successful');
               try {
                  const payload = {
                     Customer_Name: formValues.Customer_Name,
                     Date_of_Purchase: formValues.Date_of_Purchase,
                     Year_of_Purchase: formValues.Year_of_Purchase,
                     Serial_Number: formValues.Serial_Number,
                     Ticket_Id: formValues.Ticket_Id,
                     Ticket_Date: formValues.Ticket_Date,
                     Customer_Phone: formValues.Customer_Phone,
                     Warranty_Year: formValues.Warranty_Year,
                     Product_Name: formValues.Product_Name,
                     Customer_Email: formValues.Customer_Email,
                     Customer_Whatsapp: formValues.Customer_Whatsapp,
                     Warranty_Image: data[0].id,
                     Warranty_Available: formValues.Warranty_Available,
                     Customer_Address: formValues.Customer_Address,
                     Area_In_Address: formValues.Area_In_Address,
                     Product_Issue: formValues.Product_Issue,
                     Issue_Image: data[1].id,
                     Status: 'Created Ticket'
                  }

                  console.log('payload', payload)

                  axios.post('/server/waterheater_1_function/addticket', { data: payload })
                     .then((res) => {
                        console.log('ticket data response', res)
                        Swal.fire({
                           position: "top-end",
                           icon: "success",
                           title: "Your work has been saved",
                           showConfirmButton: false,
                           timer: 1500
                        });
                     })
                     .catch((err) => {
                        console.log('error in posting ticket data', err)
                     })
               } catch (error) {
                  console.log('error in posting ticket data', error)
               }
            }
         } catch (error) {
            console.log('warranty and issue image failed:', error);
         }
      } else {
         try {
            const formData = new FormData();
            console.log(formValues.Issue_Image)
            if (formValues.Issue_Image === null) {
               Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "please Upload image",
                }) 
                return
            }

            formData.append('issueImage', formValues.Issue_Image.originFileObj);

            const response = await fetch('/server/waterheater_1_function/uploadfile', {
               method: 'POST',
               body: formData,
            });

            if (!response.ok) {
               throw new Error('Network response was not ok');
            }

            const data = await response.json();
            if (response.status === 200) {
               console.log(data);
               console.log('warranty and issue image upload successful');
               try {
                  const payload = {
                     Customer_Name: formValues.Customer_Name,
                     Year_of_Purchase: formValues.Year_of_Purchase,
                     Serial_Number: formValues.Serial_Number,
                     Ticket_Id: formValues.Ticket_Id,
                     Ticket_Date: formValues.Ticket_Date,
                     Customer_Phone: formValues.Customer_Phone,
                     Product_Name: formValues.Product_Name,
                     Customer_Email: formValues.Customer_Email,
                     Customer_Whatsapp: formValues.Customer_Whatsapp,
                     Warranty_Available: formValues.Warranty_Available,
                     Customer_Address: formValues.Customer_Address,
                     Area_In_Address: formValues.Area_In_Address,
                     Product_Issue: formValues.Product_Issue,
                     Issue_Image: data[0].id,
                     Status: 'Created Ticket'
                  }

                  console.log('payload', payload)

                  axios.post('/server/waterheater_1_function/addticket', { data: payload })
                     .then((res) => {
                        Swal.fire({
                           position: "top-end",
                           icon: "success",
                           title: "Your work has been saved",
                           showConfirmButton: false,
                           timer: 1500
                        });
                        console.log('ticket data response', res)

                     })
                     .catch((err) => {
                        console.log('error in posting ticket data', err)
                     })
               } catch (error) {
                  console.log('error in posting ticket data', error)
               }
            }
         } catch (error) {
            console.log('warranty and issue image failed:', error);
         }
      }

      setFormValues(initialFormValues);
      setFileList([]);
      setCustomerIssueFileList([]);
      setWarrantyAvailable("");
   };

   return (
      // <div className='container'>
      //    <h1>Ticket Creation Form</h1>
      //    <Form onSubmit={handleSubmit}>
      //    <Form.Group className="mb-3" controlId="formGroupTicketId">
      //          <Form.Label>Ticket ID</Form.Label>
      //          <Form.Control type="text" name="Ticket_Id" value={formValues.Ticket_Id} readOnly required />
      //       </Form.Group>
      //       <Form.Group className="mb-3" controlId="formGroupTicketDate">
      //          <Form.Label>Ticket Date</Form.Label>
      //          <Form.Control type="date" name="Ticket_Date" value={formValues.Ticket_Date} onChange={handleInputChange} />
      //       </Form.Group>
      //       <Form.Group className="mb-3" controlId="formGroupCustomerPhone">
      //          <Form.Label>Phone Number</Form.Label>
      //          <Form.Control type="text" name="Customer_Phone" placeholder="Enter Phone Number" value={formValues.Customer_Phone} onChange={handleInputChange} />
      //       </Form.Group>
      //       <Form.Group className="mb-3" controlId="formGroupCustomerName">
      //          <Form.Label>Customer Name</Form.Label>
      //          <Form.Control type="text" name="Customer_Name" placeholder="Enter Customer Name" value={formValues.Customer_Name} onChange={handleInputChange} />
      //       </Form.Group>
      //       <Form.Group className="mb-3" controlId="formGroupCustomerEmail">
      //          <Form.Label>Email Address</Form.Label>
      //          <Form.Control type="email" name="Customer_Email" placeholder="Enter Email Address" value={formValues.Customer_Email} onChange={handleInputChange} />
      //       </Form.Group>
      //       <Form.Group className="mb-3" controlId="formGroupCustomerWhatsapp">
      //          <Form.Label>WhatsApp Number</Form.Label>
      //          <Form.Control type="text" name="Customer_Whatsapp" placeholder="Enter WhatsApp Number" value={formValues.Customer_Whatsapp} onChange={handleInputChange} />
      //       </Form.Group>
      //       <Form.Group className="mb-3" controlId="formGroupCustomerAddress">
      //          <Form.Label>Address</Form.Label>
      //          <Form.Control type="text" name="Customer_Address" placeholder="Enter Address" value={formValues.Customer_Address} onChange={handleInputChange} />
      //       </Form.Group>
      //       <Form.Group className="mb-3" controlId="formGroupAreaInAddress">
      //          <Form.Label>Area in Address</Form.Label>
      //          <Form.Control type="text" name="Area_In_Address" placeholder="Enter Area in Address" value={formValues.Area_In_Address} onChange={handleInputChange} />
      //       </Form.Group>
      //       <Form.Group className="mb-3" controlId="formGroupProductName">
      //          <Form.Label>Product</Form.Label>
      //          <Form.Control type="text" name="Product_Name" placeholder="Enter Product" value={formValues.Product_Name} onChange={handleInputChange} />
      //       </Form.Group>
      //       <Form.Group className="mb-3" controlId="formGroupSerialNumber">
      //          <Form.Label>Serial Number</Form.Label>
      //          <Form.Control type="text" name="Serial_Number" placeholder="Enter Serial Number" value={formValues.Serial_Number} onChange={handleInputChange} />
      //       </Form.Group>
      //       <Form.Group className="mb-3" controlId="formGroupYearOfPurchase">
      //          <Form.Label>Year of Purchase</Form.Label>
      //          <Form.Control type="date" name="Year_of_Purchase" value={formValues.Year_of_Purchase} onChange={handleInputChange} />
      //       </Form.Group>
      //       <Form.Group className="mb-3" controlId="formGroupWarrantyAvailable">
      //          <Form.Label>Warranty Available</Form.Label>
      //          <Form.Control as="select" name="Warranty_Available" value={formValues.Warranty_Available} onChange={handleWarrantyChange}>
      //             <option value="">Select</option>
      //             <option value="Yes">Yes</option>
      //             <option value="No">No</option>
      //          </Form.Control>
      //       </Form.Group>
      //       {warrantyAvailable === "yes" && (
      //          <div>
      //             <Form.Group className="mb-3" controlId="formGroupWarrantyYear">
      //                <Form.Label>Warranty Year</Form.Label>
      //                <Form.Control type="date" name="Warranty_Year" value={formValues.Warranty_Year} onChange={handleInputChange} />
      //             </Form.Group>
      //             <Form.Label>Warranty Image</Form.Label>
      //             <Upload
      //                action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
      //                listType="picture-card"
      //                fileList={fileList}
      //                onChange={onChange}
      //                customRequest={customRequest}
      //             >
      //                {fileList.length < 1 && '+ Upload'}
      //             </Upload>
      //             <Form.Group className="mb-3" controlId="formGroupDateOfPurchase">
      //                <Form.Label>Date of Purchase</Form.Label>
      //                <Form.Control type="date" name="Date_of_Purchase" value={formValues.Date_of_Purchase} onChange={handleInputChange} />
      //             </Form.Group>
      //          </div>
      //       )}


      //       <Form.Group className="mb-3" controlId="formGroupProductIssue">
      //          <Form.Label>Product Issue</Form.Label>
      //          <Form.Control type="text" name="Product_Issue" placeholder="Enter Product Issue" value={formValues.Product_Issue} onChange={handleInputChange} />
      //       </Form.Group>
      //       <Form.Label>Issue Image</Form.Label>
      //       <Upload
      //          action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
      //          listType="picture-card"
      //          fileList={customerIssueFileList}
      //          onChange={onCustomerIssueChange}
      //          customRequest={customRequest}
      //       >
      //          {customerIssueFileList.length < 1 && '+ Upload'}
      //       </Upload>
      //       <Button variant="primary" className='mt-3 mb-3' type="submit">Submit</Button>
      //    </Form>
      // </div>
      <div className='container'>
         <h1>Ticket Creation Form</h1>
         <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupTicketId">
               <Form.Label>Ticket ID</Form.Label>
               <Form.Control type="text" name="Ticket_Id" value={formValues.Ticket_Id} readOnly required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupTicketDate">
               <Form.Label>Ticket Date</Form.Label>
               <Form.Control type="date" name="Ticket_Date" value={formValues.Ticket_Date} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupCustomerPhone">
               <Form.Label>Phone Number</Form.Label>
               <Form.Control type="text" name="Customer_Phone" placeholder="Enter Phone Number" value={formValues.Customer_Phone} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupCustomerName">
               <Form.Label>Customer Name</Form.Label>
               <Form.Control type="text" name="Customer_Name" placeholder="Enter Customer Name" value={formValues.Customer_Name} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupCustomerEmail">
               <Form.Label>Email Address</Form.Label>
               <Form.Control type="email" name="Customer_Email" placeholder="Enter Email Address" value={formValues.Customer_Email} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupCustomerWhatsapp">
               <Form.Label>WhatsApp Number</Form.Label>
               <Form.Control type="text" name="Customer_Whatsapp" placeholder="Enter WhatsApp Number" value={formValues.Customer_Whatsapp} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupCustomerAddress">
               <Form.Label>Address</Form.Label>
               <Form.Control type="text" name="Customer_Address" placeholder="Enter Address" value={formValues.Customer_Address} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupAreaInAddress">
               <Form.Label>Area in Address</Form.Label>
               <Form.Control type="text" name="Area_In_Address" placeholder="Enter Area in Address" value={formValues.Area_In_Address} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupProductName">
               <Form.Label>Product</Form.Label>
               <Form.Control type="text" name="Product_Name" placeholder="Enter Product" value={formValues.Product_Name} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupSerialNumber">
               <Form.Label>Serial Number</Form.Label>
               <Form.Control type="text" name="Serial_Number" placeholder="Enter Serial Number" value={formValues.Serial_Number} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupYearOfPurchase">
               <Form.Label>Year of Purchase</Form.Label>
               <Form.Control type="date" name="Year_of_Purchase" value={formValues.Year_of_Purchase} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupWarrantyAvailable">
               <Form.Label>Warranty Available</Form.Label>
               <Form.Control as="select" name="Warranty_Available" value={formValues.Warranty_Available} onChange={handleWarrantyChange} required>
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
               </Form.Control>
            </Form.Group>
            {warrantyAvailable === "yes" && (
               <div>
                  <Form.Group className="mb-3" controlId="formGroupWarrantyYear">
                     <Form.Label>Warranty Year</Form.Label>
                     <Form.Control type="date" name="Warranty_Year" value={formValues.Warranty_Year} onChange={handleInputChange} required />
                  </Form.Group>
                  <Form.Label>Warranty Image</Form.Label>
                  {/* Upload component code */}
                  <Upload
                     action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                     listType="picture-card"
                     fileList={fileList}
                     onChange={onChange}
                     customRequest={customRequest}
                  >
                     {fileList.length < 1 && '+ Upload'}
                  </Upload>
                  <Form.Group className="mb-3" controlId="formGroupDateOfPurchase">
                     <Form.Label>Date of Purchase</Form.Label>
                     <Form.Control type="date" name="Date_of_Purchase" value={formValues.Date_of_Purchase} onChange={handleInputChange} required />
                  </Form.Group>
               </div>
            )}

            <Form.Group className="mb-3" controlId="formGroupProductIssue">
               <Form.Label>Product Issue</Form.Label>
               <Form.Control type="text" name="Product_Issue" placeholder="Enter Product Issue" value={formValues.Product_Issue} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Label>Issue Image</Form.Label>
            {/* Upload component code */}
            <Upload
               action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
               listType="picture-card"
               fileList={customerIssueFileList}
               onChange={onCustomerIssueChange}
               customRequest={customRequest}
            >
               {customerIssueFileList.length < 1 && '+ Upload'}
            </Upload>
            <Button variant="primary" className='mt-3 mb-3' type="submit">Submit</Button>
         </Form>
      </div>

   )
}

export default TicketCreation;
