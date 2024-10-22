import React, { useState } from 'react';
import { Modal, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import Swal from 'sweetalert2';
import axios from 'axios';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  maxHeight: '90vh',
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
};

const imageModalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  maxHeight: '90vh',
  overflowY: 'auto',
};

const ScrapModalInTicket = ({ open, handleClose, data }) => {
  const [imageModal, setImageModal] = useState({ show: false, src: '' });
  const [imageLoadingIndex, setImageLoadingIndex] = useState(null); // Track the index of the loading button

  const handleViewImage = (id, fileName, index) => {
    if (id === null) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No File Added',
      });
      return;
    }

    setImageLoadingIndex(index); // Set the loading index to the clicked button
    axios
      .get(`/server/waterheater_1_function/viewfile/${id}`, {
        responseType: 'blob',
        params: { fileName },
      })
      .then((response) => {
        const url = URL.createObjectURL(new Blob([response.data]));
        setImageModal({ show: true, src: url });
      })
      .catch((error) => {
        console.error('Error fetching the image:', error);
      })
      .finally(() => {
        setImageLoadingIndex(null); // Reset the loading index after image is fetched
      });
  };

  const ImageModal = () => {
    const handleCloseImageModal = () => {
      setImageModal({ show: false, src: '' });
    };

    return (
      <Modal open={imageModal.show} onClose={handleCloseImageModal}>
        <Box sx={imageModalStyle}>
          <Typography variant="h6" gutterBottom>
            Scrap Image
          </Typography>
          <img src={imageModal.src} alt="Ticket Image" style={{ width: '100%' }} />
          <Box display="flex" justifyContent="flex-end" paddingTop="10px">
            <Button onClick={handleCloseImageModal} variant="contained" color="error">
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    );
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose} aria-labelledby="scrap-modal-title" aria-describedby="scrap-modal-description">
        <Box sx={modalStyle}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" component="h2" gutterBottom>
              Scrap Material Details
            </Typography>
          </Box>
          {true ? (
            <Typography variant="body1" color="textSecondary" align="center" sx={{ mt: 2 }}>
              No Scrap Data Available
            </Typography>
          ) : (
            <TableContainer component={Paper} sx={{ mt: 2 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Material Name</TableCell>
                    <TableCell>Condition</TableCell>
                    <TableCell>Qty</TableCell>
                    <TableCell>Invoice ID</TableCell>
                    <TableCell>Date of Received</TableCell>
                    <TableCell>Scrap Image</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row, index) => (
                    <TableRow key={row.ROWID}>
                      <TableCell>{row.Material_Name}</TableCell>
                      <TableCell>{row.Material_Condition}</TableCell>
                      <TableCell>{row.Qty}</TableCell>
                      <TableCell>{row.Invoice_Id}</TableCell>
                      <TableCell>{row.Date_of_Received}</TableCell>
                      <TableCell>
                        <Button
                          onClick={() => handleViewImage(row.Scrap_Image, 'scrapimage.jpg', index)}
                          variant="contained"
                          color="success"
                          disabled={imageLoadingIndex === index} // Disable the button while it's loading
                        >
                          {imageLoadingIndex === index ? 'Fetching...' : 'View Image'}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
          <Box display="flex" justifyContent="space-between" alignItems="center" paddingTop="10px">
            <Box></Box>
            <Button onClick={handleClose} variant="contained" color="warning">
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
      <ImageModal />
    </div>
  );
};

export default ScrapModalInTicket;
