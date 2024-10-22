

import React, { useEffect, useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import SignatureCanvas from "react-signature-canvas";
import { HashLoader } from 'react-spinners';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const DispatchSignature = ({ ticketData }) => {

    // console.log('ticket data in getting signature tab', ticketData)

    const sigCanvas = useRef({});
    const [signature, setSignature] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [invoiceData, setInvoiceDate] = useState([])


    useEffect(() => {
        axios.get(`/server/waterheater_1_function/getfilterticket?search=${encodeURIComponent(JSON.stringify({
            table: 'invoice_table',
            column: 'Ticket_Id',
            value: ticketData.Ticket_Id
        }))}`)
            .then((response) => {
                console.log('response from invoice with ticket id', response.data)
                setInvoiceDate(response.data)

                if (response.data[0].invoice_table.Spares_SubForm != 'no') {
                    axios.get(`/server/waterheater_1_function/getfilterticket?search=${encodeURIComponent(JSON.stringify({
                        table: 'list_of_spares',
                        column: 'Invoice_Id',
                        value: response.data[0].invoice_table.ROWID
                    }))}`).then((res) => {
                        console.log('respnse from list of spares', res.data)
                    }).catch((err) => {
                        console.log('error in fetching list of spares', err)
                    })
                } else {
                    console.log('no data in Spares');
                }

                if (response.data[0].invoice_table.Scrap_SubForm != 'no') {
                    axios.get(`/server/waterheater_1_function/getfilterticket?search=${encodeURIComponent(JSON.stringify({
                        table: 'scrap_table',
                        column: 'Invoice_Id',
                        value: response.data[0].invoice_table.ROWID
                    }))}`).then((res) => {
                        console.log('respnse from scrap', res.data)
                    }).catch((err) => {
                        console.log('error in fetching scrap', err)
                    })
                } else {
                    console.log('no data in Scrap_SubForm');
                }
            })
            .catch((error)=>{
                console.log('error in fetching invoice data',error)
            })
    }, [])


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


        // alert for signature
        if (data === blankData) {
            Swal.fire({
                position: "top-end",
                icon: "warning",
                title: "Please add Signature",
                showConfirmButton: true,
            });
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

                console.log(signatureBlob)
                const formData = new FormData();
                formData.append('signature', signatureBlob, 'signature.png');

                const response = await fetch('/server/waterheater_1_function/uploadfile', {
                    method: 'POST',
                    body: formData,
                });


                const data = await response.json();

                console.log(data)

                if (response.status === 200) {

                    console.log('Signature  upload successful');

                    //updating afterservice image in ticket table
                    let today = new Date();
                    let formattedDate = today.toISOString().split('T')[0];
                    try {
                        let payload = {
                            ROWID: ticketData.ROWID,
                            Status: 'Closed',
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

                    try {
                        let payload = {
                            ROWID: invoiceData[0].invoice_table.ROWID ,
                            Signature: data[0].id
                        }
                        console.log('payload from invoice', payload)
                        axios.put('/server/waterheater_1_function/updateinvoice', { data: payload })
                            .then((res) => {
                                console.log('response from updating invoice', res);
                                // Optionally refresh data here
                            })
                            .catch((err) => {
                                console.log('error in updating invoice', err);
                            });
                    } catch (error) {
                        console.log(error)
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

            {loading ? (
                <div className="d-flex justify-content-center mt-5">
                    <HashLoader color={'#36D7B7'} loading={loading} size={50} />
                </div>
            ) : (
                <Form>
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

export default DispatchSignature;
