// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const InvoiceEdit = ({ invoiceData }) => {
//     const invoiceData2 = invoiceData
//     console.log('invoice data',invoiceData2)
//     const [listOfSpares, setListOfSpares] = useState([])
//     const [scrapData, setScrapData] = useState([])

//     useEffect(() => {
//         if (invoiceData2.Scrap_SubForm === 'yes') {
//             axios.get(`/server/waterheater_1_function/getfilterticket?search=${encodeURIComponent(JSON.stringify({
//                 table: 'scrap_table',
//                 column: 'Invoice_Id',
//                 value: invoiceData.ROWID
//             }))}`)
//                 .then((response) => {
//                     console.log('response from scrapData', response.data)
//                     setScrapData(response.data)
//                 }).catch((error) => {
//                     console.log('error in getting scrap data', error)
//                 })
//         }

//         if (invoiceData2.Spares_SubForm === 'yes') {
//             axios.get(`/server/waterheater_1_function/getfilterticket?search=${encodeURIComponent(JSON.stringify({
//                 table: 'list_of_spares',
//                 column: 'Invoice_Id',
//                 value: invoiceData.ROWID
//             }))}`)
//                 .then((response) => {
//                     console.log('response from list_of_spares', response.data)
//                     setListOfSpares(response.data)
//                 }).catch((error) => {
//                     console.log('error in getting list_of_spares data', error)
//                 })
//         }
//     }, [])
//     return (
//         <div>InvoiceEdit</div>
//     )
// }

// export default InvoiceEdit













// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Grid, Box, Button, Modal } from '@mui/material'
// import Swal from 'sweetalert2'

// const InvoiceEdit = ({ invoiceData }) => {
//     const invoiceData2 = invoiceData
//     const [listOfSpares, setListOfSpares] = useState([])
//     const [scrapData, setScrapData] = useState([])
//     const [loading, setLoading] = useState(false)
//     const [imageModal, setImageModal] = useState({ show: false, src: '' });


//     useEffect(() => {
//         if (invoiceData2.Scrap_SubForm === 'yes') {
//             axios.get(`/server/waterheater_1_function/getfilterticket?search=${encodeURIComponent(JSON.stringify({
//                 table: 'scrap_table',
//                 column: 'Invoice_Id',
//                 value: invoiceData.ROWID
//             }))}`)
//                 .then((response) => {
//                     console.log('scrap response', response.data)
//                     setScrapData(response.data)
//                 }).catch((error) => {
//                     console.error('Error fetching scrap data', error)
//                 })
//         }

//         if (invoiceData2.Spares_SubForm === 'yes') {
//             axios.get(`/server/waterheater_1_function/getfilterticket?search=${encodeURIComponent(JSON.stringify({
//                 table: 'list_of_spares',
//                 column: 'Invoice_Id',
//                 value: invoiceData.ROWID
//             }))}`)
//                 .then((response) => {
//                     console.log('list of spares response', response.data)
//                     setListOfSpares(response.data)
//                 }).catch((error) => {
//                     console.error('Error fetching list of spares data', error)
//                 })
//         }
//     }, [])


//     const handleViewImage = (id, fileName) => {
//         console.log('scrap image id', id)
//         //setLoading(true)
//         if (id === null) {
//             Swal.fire({
//                 icon: "error",
//                 title: "Oops...",
//                 text: "No File Added",
//             });
//             return
//         }

//         axios.get(`/server/waterheater_1_function/viewfile/${id}`, {
//             responseType: 'blob', // Important to handle the file response
//             params: { fileName }
//         }).then(response => {
//             const url = URL.createObjectURL(new Blob([response.data]));
//             setImageModal({ show: true, src: url });
//         }).catch(error => {
//             console.error('Error fetching the image:', error);
//         }).finally(() => {
//             //setLoading(false)
//         });
//     }



//     const ImageModal = () => {
//         const handleCloseImageModal = () => {
//             setImageModal({ show: false, src: '' });
//         };

//         return (
//             <Modal show={imageModal.show} onHide={handleCloseImageModal}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Image</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>

//                     <img src={imageModal.src} alt="Ticket Image" style={{ width: '100%' }} />

//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleCloseImageModal}>
//                         Close
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         );
//     };

//     return (
//         <Box sx={{ padding: 4 }}>
//             <Card>
//                 <CardContent>
//                     <Typography variant="h5" gutterBottom>
//                         Invoice Details
//                     </Typography>
//                     <Grid container spacing={2}>
//                         <Grid item xs={6}>
//                             <Typography variant="subtitle1">Customer Name: {invoiceData2.Customer_Name}</Typography>
//                             <Typography variant="subtitle1">Invoice Number: {invoiceData2.Invoice_Number}</Typography>
//                             <Typography variant="subtitle1">Address: {invoiceData2.Address}</Typography>
//                         </Grid>
//                         <Grid item xs={6}>
//                             <Typography variant="subtitle1">Invoice Date: {invoiceData2.Invoice_Date}</Typography>
//                             <Typography variant="subtitle1">Ticket ID: {invoiceData2.Ticket_Id}</Typography>
//                             <Typography variant="subtitle1">Grand Total: {invoiceData2.Grand_Total}</Typography>
//                         </Grid>
//                     </Grid>
//                 </CardContent>
//             </Card>

//             {listOfSpares.length > 0 && (
//                 <Card sx={{ marginTop: 4 }}>
//                     <CardContent>
//                         <Typography variant="h6" gutterBottom>
//                             List of Spares
//                         </Typography>
//                         <TableContainer>
//                             <Table>
//                                 <TableHead>
//                                     <TableRow>
//                                         <TableCell>Part & Service</TableCell>
//                                         <TableCell>Quantity</TableCell>
//                                         <TableCell>Warranty</TableCell>
//                                         <TableCell>Warranty Rate</TableCell>
//                                         <TableCell>Expense Cost</TableCell>
//                                         <TableCell>Rate</TableCell>
//                                         <TableCell>SubTotal</TableCell>
//                                     </TableRow>
//                                 </TableHead>
//                                 <TableBody>
//                                     {listOfSpares.map((item, index) => (
//                                         <TableRow key={index}>
//                                             <TableCell>{item.list_of_spares.Parts_and_service}</TableCell>
//                                             <TableCell>{item.list_of_spares.Qty}</TableCell>
//                                             <TableCell>{item.list_of_spares.Warranty || 'N/A'}</TableCell>
//                                             <TableCell>{item.list_of_spares.Warranty_Rate || 'N/A'}</TableCell>
//                                             <TableCell>{item.list_of_spares.Expense_Cost || 'N/A'}</TableCell>
//                                             <TableCell>{item.list_of_spares.Rate || 'N/A'}</TableCell>
//                                             <TableCell>{item.list_of_spares.SubTotal || 'N/A'}</TableCell>
//                                         </TableRow>
//                                     ))}
//                                 </TableBody>
//                             </Table>
//                         </TableContainer>
//                     </CardContent>
//                 </Card>
//             )}

//             {scrapData.length > 0 && (
//                 <Card sx={{ marginTop: 4 }}>
//                     <CardContent>
//                         <Typography variant="h6" gutterBottom>
//                             Scrap Data
//                         </Typography>
//                         <TableContainer>
//                             <Table>
//                                 <TableHead>
//                                     <TableRow>
//                                         <TableCell>Material Name</TableCell>
//                                         <TableCell>Condition</TableCell>
//                                         <TableCell>Quantity</TableCell>
//                                         <TableCell>Date Received</TableCell>
//                                         <TableCell>Scrap Image</TableCell>
//                                     </TableRow>
//                                 </TableHead>
//                                 <TableBody>
//                                     {scrapData.map((item, index) => (
//                                         <TableRow key={index}>
//                                             <TableCell>{item.scrap_table.Material_Name}</TableCell>
//                                             <TableCell>{item.scrap_table.Material_Condition}</TableCell>
//                                             <TableCell>{item.scrap_table.Qty}</TableCell>
//                                             <TableCell>{item.scrap_table.Date_of_Received}</TableCell>
//                                             <TableCell>
//                                                 <Button variant='primary' onClick={() => { handleViewImage(item.scrap_table.Scrap_Image, 'scrapImage.jpg') }}>View Image</Button>
//                                             </TableCell>
//                                         </TableRow>
//                                     ))}
//                                 </TableBody>
//                             </Table>
//                         </TableContainer>
//                     </CardContent>
//                 </Card>
//             )}
//             <ImageModal />
//         </Box>
//     )
// }

// export default InvoiceEdit























// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Grid, Box, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
// import Swal from 'sweetalert2'

// const InvoiceEdit = ({ invoiceData }) => {
//     const invoiceData2 = invoiceData
//     const [listOfSpares, setListOfSpares] = useState([])
//     const [scrapData, setScrapData] = useState([])
//     const [loading, setLoading] = useState(false)
//     const [imageModal, setImageModal] = useState({ show: false, src: '' });

//     useEffect(() => {
//         if (invoiceData2.Scrap_SubForm === 'yes') {
//             axios.get(`/server/waterheater_1_function/getfilterticket?search=${encodeURIComponent(JSON.stringify({
//                 table: 'scrap_table',
//                 column: 'Invoice_Id',
//                 value: invoiceData2.ROWID
//             }))}`)
//                 .then((response) => {
//                     console.log('scrap response', response.data)
//                     setScrapData(response.data)
//                 }).catch((error) => {
//                     console.error('Error fetching scrap data', error)
//                 })
//         }

//         if (invoiceData2.Spares_SubForm === 'yes') {
//             axios.get(`/server/waterheater_1_function/getfilterticket?search=${encodeURIComponent(JSON.stringify({
//                 table: 'list_of_spares',
//                 column: 'Invoice_Id',
//                 value: invoiceData2.ROWID
//             }))}`)
//                 .then((response) => {
//                     console.log('list of spares response', response.data)
//                     setListOfSpares(response.data)
//                 }).catch((error) => {
//                     console.error('Error fetching list of spares data', error)
//                 })
//         }
//     }, [invoiceData2])


//     const handleViewImage = (id, fileName) => {
//         setLoading(true)
//         console.log('scrap image id', id)
//         if (id === null) {
//             Swal.fire({
//                 icon: "error",
//                 title: "Oops...",
//                 text: "No File Added",
//             });
//             return
//         }

//         axios.get(`/server/waterheater_1_function/viewfile/${id}`, {
//             responseType: 'blob', // Important to handle the file response
//             params: { fileName }
//         }).then(response => {
//             const url = URL.createObjectURL(new Blob([response.data]));
//             setImageModal({ show: true, src: url });
//         }).catch(error => {
//             console.error('Error fetching the image:', error);
//         });
//         setLoading(false)
//     }

//     const ImageModal = () => {
//         const handleCloseImageModal = () => {
//             setImageModal({ show: false, src: '' });
//         };

//         return (
//             <Dialog open={imageModal.show} onClose={handleCloseImageModal} fullWidth maxWidth="md">
//                 <DialogTitle>Image</DialogTitle>
//                 <DialogContent>
//                     <img src={imageModal.src} alt="Ticket Image" style={{ width: '100%' }} />
//                 </DialogContent>
//                 <DialogActions>
//                     <Button variant="outlined" onClick={handleCloseImageModal}>
//                         Close
//                     </Button>
//                 </DialogActions>
//             </Dialog>
//         );
//     };


//     const handleEditInvoice = (data)=>{

//     }


//     const InvoiceEditModal = (invoiceData)=>{
//         return(
//             <div>

//             </div>
//         )
//     }

//     InvoiceEditModal(invoiceData2)

//     return (
//         <Box sx={{ padding: 4 }}>
//             <Card>
//                 <CardContent>
//                     <div className='d-flex justify-content-between'>
//                         <Typography variant="h5" gutterBottom>
//                             Invoice Details
//                         </Typography>
//                         <Button variant='contained' color="primary" onClick={(e)=>handleEditInvoice()}>
//                             Edit Invoice
//                         </Button>
//                     </div>
//                     <Grid container spacing={2}>
//                         <Grid item xs={6}>
//                             <Typography variant="subtitle1">Customer Name: {invoiceData2.Customer_Name}</Typography>
//                             <Typography variant="subtitle1">Invoice Number: {invoiceData2.Invoice_Number}</Typography>
//                             <Typography variant="subtitle1">Address: {invoiceData2.Address}</Typography>
//                         </Grid>
//                         <Grid item xs={6}>
//                             <Typography variant="subtitle1">Invoice Date: {invoiceData2.Invoice_Date}</Typography>
//                             <Typography variant="subtitle1">Ticket ID: {invoiceData2.Ticket_Id}</Typography>
//                             <Typography variant="subtitle1">Grand Total: {invoiceData2.Grand_Total}</Typography>
//                         </Grid>
//                     </Grid>
//                 </CardContent>
//             </Card>

//             {listOfSpares.length > 0 && (
//                 <Card sx={{ marginTop: 4 }}>
//                     <CardContent>
//                         <Typography variant="h6" gutterBottom>
//                             List of Spares
//                         </Typography>
//                         <TableContainer>
//                             <Table>
//                                 <TableHead>
//                                     <TableRow>
//                                         <TableCell>Part & Service</TableCell>
//                                         <TableCell>Quantity</TableCell>
//                                         <TableCell>Warranty</TableCell>
//                                         <TableCell>Warranty Rate</TableCell>
//                                         <TableCell>Expense Cost</TableCell>
//                                         <TableCell>Rate</TableCell>
//                                         <TableCell>SubTotal</TableCell>
//                                     </TableRow>
//                                 </TableHead>
//                                 <TableBody>
//                                     {listOfSpares.map((item, index) => (
//                                         <TableRow key={index}>
//                                             <TableCell>{item.list_of_spares.Parts_and_service}</TableCell>
//                                             <TableCell>{item.list_of_spares.Qty}</TableCell>
//                                             <TableCell>{item.list_of_spares.Warranty || 'N/A'}</TableCell>
//                                             <TableCell>{item.list_of_spares.Warranty_Rate || 'N/A'}</TableCell>
//                                             <TableCell>{item.list_of_spares.Expense_Cost || 'N/A'}</TableCell>
//                                             <TableCell>{item.list_of_spares.Rate || 'N/A'}</TableCell>
//                                             <TableCell>{item.list_of_spares.SubTotal || 'N/A'}</TableCell>
//                                         </TableRow>
//                                     ))}
//                                 </TableBody>
//                             </Table>
//                         </TableContainer>
//                     </CardContent>
//                 </Card>
//             )}

//             {scrapData.length > 0 && (
//                 <Card sx={{ marginTop: 4 }}>
//                     <CardContent>
//                         <Typography variant="h6" gutterBottom>
//                             Scrap Data
//                         </Typography>
//                         <TableContainer>
//                             <Table>
//                                 <TableHead>
//                                     <TableRow>
//                                         <TableCell>Material Name</TableCell>
//                                         <TableCell>Condition</TableCell>
//                                         <TableCell>Quantity</TableCell>
//                                         <TableCell>Date Received</TableCell>
//                                         <TableCell>Scrap Image</TableCell>
//                                     </TableRow>
//                                 </TableHead>
//                                 <TableBody>
//                                     {scrapData.map((item, index) => (
//                                         <TableRow key={index}>
//                                             <TableCell>{item.scrap_table.Material_Name}</TableCell>
//                                             <TableCell>{item.scrap_table.Material_Condition}</TableCell>
//                                             <TableCell>{item.scrap_table.Qty}</TableCell>
//                                             <TableCell>{item.scrap_table.Date_of_Received}</TableCell>
//                                             <TableCell>
//                                                 <Button variant='contained' color="primary" onClick={() => { handleViewImage(item.scrap_table.Scrap_Image, 'scrapImage.jpg') }}>
//                                                     {loading ? 'Fetching...' : 'View Image'}
//                                                 </Button>
//                                             </TableCell>
//                                         </TableRow>
//                                     ))}
//                                 </TableBody>
//                             </Table>
//                         </TableContainer>
//                     </CardContent>
//                 </Card>
//             )}
//             <ImageModal />
//         </Box>
//     )
// }

// export default InvoiceEdit


















import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Grid, Box, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material'
import Swal from 'sweetalert2'

const InvoiceEdit = ({ invoiceData }) => {
    console.log('invoice data', invoiceData)
    const invoiceData2 = invoiceData
    const [listOfSpares, setListOfSpares] = useState([])
    const [scrapData, setScrapData] = useState([])
    const [loading, setLoading] = useState({
        afterServiceImage: false,
        signature: false,
        scrapImage: false
    })
    const [imageModal, setImageModal] = useState({ show: false, src: '' });
    const [openEditModal, setOpenEditModal] = useState(false);
    const [updatedInvoice, setUpdatedInvoice] = useState({
        Customer_Name: invoiceData2.Customer_Name,
        Invoice_Number: invoiceData2.Invoice_Number,
        Address: invoiceData2.Address,
        Invoice_Date: invoiceData2.Invoice_Date,
        Grand_Total: invoiceData2.Grand_Total
    });

    const [invoicePdfData, setInvoicePdfData] = useState({})

    useEffect(() => {
        if (invoiceData2.Scrap_SubForm === 'yes') {
            axios.get(`/server/waterheater_1_function/getfilterticket?search=${encodeURIComponent(JSON.stringify({
                table: 'scrap_table',
                column: 'Invoice_Id',
                value: invoiceData2.ROWID
            }))}`)
                .then((response) => {
                    console.log('scrap response', response.data)
                    setScrapData(response.data)
                }).catch((error) => {
                    console.error('Error fetching scrap data', error)
                })
        }

        if (invoiceData2.Spares_SubForm === 'yes') {
            axios.get(`/server/waterheater_1_function/getfilterticket?search=${encodeURIComponent(JSON.stringify({
                table: 'list_of_spares',
                column: 'Invoice_Id',
                value: invoiceData2.ROWID
            }))}`)
                .then((response) => {
                    console.log('list of spares response', response.data)
                    setListOfSpares(response.data)
                }).catch((error) => {
                    console.error('Error fetching list of spares data', error)
                })
        }
    }, [invoiceData2])


    const handleViewImage = (id, fileName) => {
        if (fileName === 'AfterServiceImage.jpg') {
            setLoading((item) => ({
                ...item,
                afterServiceImage: true
            }))
        } else if (fileName === 'Signature.jpg') {
            setLoading((item) => ({
                ...item,
                signature: true
            }))
        } else if (fileName === 'scrapImage.jpg') {
            setLoading((item) => ({
                ...item,
                scrapImage: true
            }))
        }
        console.log('scrap image id', id)
        if (id === null) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "No File Added",
            });
            return
        }

        axios.get(`/server/waterheater_1_function/viewfile/${id}`, {
            responseType: 'blob', // Important to handle the file response
            params: { fileName }
        }).then(response => {
            const url = URL.createObjectURL(new Blob([response.data]));
            setImageModal({ show: true, src: url });
        }).catch(error => {
            console.error('Error fetching the image:', error);
        }).finally(() => {
            setLoading({
                afterServiceImage: false,
                signature: false,
                scrapImage: false
            })
        })
    }

    const ImageModal = () => {
        const handleCloseImageModal = () => {
            setImageModal({ show: false, src: '' });
        };

        return (
            <Dialog open={imageModal.show} onClose={handleCloseImageModal} fullWidth maxWidth="md">
                <DialogTitle>Image</DialogTitle>
                <DialogContent>
                    <img src={imageModal.src} alt="Ticket Image" style={{ width: '100%' }} />
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" onClick={handleCloseImageModal}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        );
    };

    // const handleEditInvoice = () => {
    //     setOpenEditModal(true);
    // }

    const handleCloseEditModal = () => {
        setOpenEditModal(false);
    }

    const handleInvoiceChange = (e) => {
        const { name, value } = e.target;
        setUpdatedInvoice(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSaveChanges = () => {
        console.log("Updated Invoice Data:", updatedInvoice);
        handleCloseEditModal();
    }


    const generateInvoicePdf = () => {

        let parts = listOfSpares.map((data) => ({
            Name: data.list_of_spares.Parts_and_service,
            Rate: data.list_of_spares.Rate,
            Qty: data.list_of_spares.Qty,
            Sub_Total: data.list_of_spares.SubTotal,
        }))

        // let grantTotal = parts.reduce((variable, iter) => {

        //     variable += parseInt(iter.Sub_Total)
        //     console.log('variable', variable)
        // }, 0)

        let grantTotal2 = parts.filter((data) => data.Sub_Total != null && data.Sub_Total !='').reduce((variable, iter) => {

            variable += parseInt(iter.Sub_Total)
            console.log('variable', variable)
        }, 0)

        console.log('grant total', grantTotal2)

        let payload = {
            Invoice_No: invoiceData2.Invoice_Number,
            Date: invoiceData2.Invoice_Date,
            Customer_Name: invoiceData2.Customer_Name,
            Ticket_Id: invoiceData2.Ticket_Id,
            Area_In_Address: '',
            Address: invoiceData2.Address,
            Phone: '',
            Parts: parts,
            Grant_Total: grantTotal2,
            Total_In_Words: ''
        }

        console.log('pdf payload', payload)
    }

    return (
        <Box sx={{ padding: 4 }}>
            <Card>
                <CardContent>
                    <div className='d-flex justify-content-between'>
                        <Typography variant="h5" gutterBottom>
                            Invoice Details
                        </Typography>
                        {/* <Button variant='contained' color="primary" onClick={handleEditInvoice}>
                            Edit Invoice
                        </Button> */}
                        <Button variant='contained' color="primary" onClick={generateInvoicePdf}>
                            Generate Invoice
                        </Button>
                    </div>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography variant="subtitle1">Customer Name: {invoiceData2.Customer_Name}</Typography>
                            <Typography variant="subtitle1">Invoice Number: {invoiceData2.Invoice_Number}</Typography>
                            <Typography variant="subtitle1">Address: {invoiceData2.Address}</Typography>
                            <Typography variant="subtitle1">Spares Data: {invoiceData2.Spares_SubForm}</Typography>
                            <Typography variant="subtitle1">After Service Image: <Button variant='contained' color="primary" onClick={() => { handleViewImage(invoiceData2.AfterServiceImage, 'AfterServiceImage.jpg') }}>
                                {loading.afterServiceImage ? 'Fetching...' : 'View Image'}
                            </Button>
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="subtitle1">Invoice Date: {invoiceData2.Invoice_Date}</Typography>
                            <Typography variant="subtitle1">Ticket ID: {invoiceData2.Ticket_Id}</Typography>
                            <Typography variant="subtitle1">Grand Total: {invoiceData2.Grand_Total}</Typography>
                            <Typography variant="subtitle1">Scrap Data: {invoiceData2.Scrap_SubForm}</Typography>
                            <Typography variant="subtitle1">Signature: <Button variant='contained' color="primary" onClick={() => { handleViewImage(invoiceData2.Signature, 'Signature.jpg') }}>
                                {loading.signature ? 'Fetching...' : 'View Image'}
                            </Button>
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            {listOfSpares.length > 0 && (
                <Card sx={{ marginTop: 4 }}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            List of Spares
                        </Typography>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Part & Service</TableCell>
                                        <TableCell>Quantity</TableCell>
                                        <TableCell>Warranty</TableCell>
                                        <TableCell>Warranty Rate</TableCell>
                                        <TableCell>Expense Cost</TableCell>
                                        <TableCell>Rate</TableCell>
                                        <TableCell>SubTotal</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {listOfSpares.map((item, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{item.list_of_spares.Parts_and_service}</TableCell>
                                            <TableCell>{item.list_of_spares.Qty}</TableCell>
                                            <TableCell>{item.list_of_spares.Warranty || 'N/A'}</TableCell>
                                            <TableCell>{item.list_of_spares.Warranty_Rate || 'N/A'}</TableCell>
                                            <TableCell>{item.list_of_spares.Expense_Cost || 'N/A'}</TableCell>
                                            <TableCell>{item.list_of_spares.Rate || 'N/A'}</TableCell>
                                            <TableCell>{item.list_of_spares.SubTotal || 'N/A'}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>
                </Card>
            )}

            {scrapData.length > 0 && (
                <Card sx={{ marginTop: 4 }}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Scrap Data
                        </Typography>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Material Name</TableCell>
                                        <TableCell>Condition</TableCell>
                                        <TableCell>Quantity</TableCell>
                                        <TableCell>Date Received</TableCell>
                                        <TableCell>Scrap Image</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {scrapData.map((item, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{item.scrap_table.Material_Name}</TableCell>
                                            <TableCell>{item.scrap_table.Material_Condition}</TableCell>
                                            <TableCell>{item.scrap_table.Qty}</TableCell>
                                            <TableCell>{item.scrap_table.Date_of_Received}</TableCell>
                                            <TableCell>
                                                <Button variant='contained' color="primary" onClick={() => { handleViewImage(item.scrap_table.Scrap_Image, 'scrapImage.jpg') }}>
                                                    {loading.scrapImage ? 'Fetching...' : 'View Image'}
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>
                </Card>
            )}

            {/* Edit Invoice Modal */}
            <Dialog open={openEditModal} onClose={handleCloseEditModal} fullWidth maxWidth="sm">
                <DialogTitle>Edit Invoice</DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid marginTop={2} item xs={12}>
                            <TextField
                                label="Customer Name"
                                name="Customer_Name"
                                fullWidth
                                value={updatedInvoice.Customer_Name}
                                onChange={handleInvoiceChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Invoice Number"
                                name="Invoice_Number"
                                fullWidth
                                value={updatedInvoice.Invoice_Number}
                                onChange={handleInvoiceChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Address"
                                name="Address"
                                fullWidth
                                value={updatedInvoice.Address}
                                onChange={handleInvoiceChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Invoice Date"
                                name="Invoice_Date"
                                fullWidth
                                value={updatedInvoice.Invoice_Date}
                                onChange={handleInvoiceChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Grand Total"
                                name="Grand_Total"
                                fullWidth
                                value={updatedInvoice.Grand_Total}
                                onChange={handleInvoiceChange}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseEditModal}>Cancel</Button>
                    <Button onClick={handleSaveChanges} variant="contained" color="primary">Save Changes</Button>
                </DialogActions>
            </Dialog>

            {/* Image Modal */}
            <ImageModal />
        </Box>
    )
}

export default InvoiceEdit;
