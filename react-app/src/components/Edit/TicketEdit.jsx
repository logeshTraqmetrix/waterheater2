import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Button,
  Modal,
  FormControl,
  Select,
  MenuItem,
  Grid,
  Divider,
  Container
} from '@mui/material';
import { Edit } from '@mui/icons-material';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const DetailRow = ({ label, value }) => (
  <Box sx={{ py: 0.75 }}>
    <Typography component="span" fontWeight="600" color="text.secondary" fontSize="14px">
      {label}:
    </Typography>{' '}
    <Typography component="span" fontSize="14px">
      {value || 'Not provided'}
    </Typography>
  </Box>
);

const TicketDetails = ({ ticketData }) => {
  const [openModal, setOpenModal] = useState(false);
  const [status, setStatus] = useState(ticketData.Status);

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
    // Add your API call here to update the status
    console.log('New status:', event.target.value);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <Container maxWidth="lg">
      <Paper elevation={3} sx={{ p: 3, m: 2, position: 'relative' }}>
        {/* Header with Status Edit Button */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Box>
            <Typography variant="h5" gutterBottom>
              Ticket Details: <Typography component="span" variant="h5" color="primary">{ticketData.Ticket_Id}</Typography>
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              Last updated: {ticketData.MODIFIEDTIME}
            </Typography>
          </Box>
          <Button
            variant="contained"
            startIcon={<Edit />}
            onClick={() => setOpenModal(true)}
            size="small"
            sx={{ height: 'fit-content' }}
          >
            Edit Status
          </Button>
        </Box>

        <Grid container spacing={4}>
          {/* Left Column */}
          <Grid item xs={12} md={6}>
            {/* Ticket Information */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom color="primary" fontSize="16px">
                Ticket Information
              </Typography>
              <DetailRow label="Status" value={status} />
              <DetailRow label="Created Time" value={ticketData.CREATEDTIME} />
              <DetailRow label="Ticket Date" value={ticketData.Ticket_Date} />
            </Box>

            {/* Customer Information */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom color="primary" fontSize="16px">
                Customer Information
              </Typography>
              <DetailRow label="Name" value={ticketData.Customer_Name} />
              <DetailRow label="Email" value={ticketData.Customer_Email} />
              <DetailRow label="Phone" value={ticketData.Customer_Phone} />
              <DetailRow label="WhatsApp" value={ticketData.Customer_Whatsapp} />
              <DetailRow label="Address" value={ticketData.Customer_Address} />
              <DetailRow label="Area" value={ticketData.Area_In_Address} />
            </Box>

            {/* Product Information */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom color="primary" fontSize="16px">
                Product Information
              </Typography>
              <DetailRow label="Product Name" value={ticketData.Product_Name} />
              <DetailRow label="Serial Number" value={ticketData.Serial_Number} />
              <DetailRow label="Year of Purchase" value={ticketData.Year_of_Purchase} />
              <DetailRow label="Warranty Available" value={ticketData.Warranty_Available} />
              <DetailRow label="Product Issue" value={ticketData.Product_Issue} />
            </Box>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={6}>
            {/* Technician Information */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom color="primary" fontSize="16px">
                Technician Information
              </Typography>
              <DetailRow label="Technician Name" value={ticketData.Technician_Name} />
              <DetailRow label="Technician Email" value={ticketData.Technician_Email} />
              <DetailRow label="Scheduled Date" value={ticketData.Scheduled_Date} />
              <DetailRow label="Attended Date Time" value={ticketData.Attended_Date_Time} />
            </Box>

            {/* Service Information */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom color="primary" fontSize="16px">
                Service Information
              </Typography>
              <DetailRow label="Dispatch Date" value={ticketData.Dispatch_Date} />
              <DetailRow label="Dispatch Person" value={ticketData.Dispatch_Person} />
              <DetailRow label="Dispatch Email" value={ticketData.Dispatch_Email} />
              <DetailRow label="Closed Date" value={ticketData.Closed_Date} />
            </Box>


             {/* Images Information */}
             <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom color="primary" fontSize="16px">
                Images 
              </Typography>
              <DetailRow label="Issue Image" value={ticketData.Issue_Image} />
              <DetailRow label="After Service Image" value={ticketData.After_Service_Image} />
              <DetailRow label="Warranty Image" value={ticketData.Warranty_Image} />
              <DetailRow label="Invoice File" value={ticketData.Invoice_File} />
            </Box>

            {/* Additional Information */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom color="primary" fontSize="16px">
                Additional Information
              </Typography>
              <DetailRow label="Comments" value={ticketData.Comments} />
              <DetailRow label="Customer Feedback" value={ticketData.Customer_Feedback} />
              <DetailRow label="Spares Details" value={ticketData.Spares_Details} />
              <DetailRow label="Scrap Details" value={ticketData.Scrap_Details} />
            </Box>

           
          </Grid>
        </Grid>

        {/* Status Edit Modal */}
        <Modal
          open={openModal}
          onClose={handleClose}
          aria-labelledby="status-modal-title"
        >
          <Box sx={modalStyle}>
            <Typography id="status-modal-title" variant="h6" component="h2" gutterBottom>
              Update Ticket Status
            </Typography>
            <FormControl fullWidth sx={{ mt: 2 }}>
              <Select
                value={status}
                onChange={handleStatusChange}
                displayEmpty
                size="small"
              >
                <MenuItem value="Created Ticket">Created Ticket</MenuItem>
                <MenuItem value="Technician Assigned">Technician Assigned</MenuItem>
                <MenuItem value="Closed">Closed</MenuItem>
              </Select>
            </FormControl>
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
              <Button onClick={handleClose} variant="outlined" size="small">
                Cancel
              </Button>
              <Button onClick={handleClose} variant="contained" color="primary" size="small">
                Save
              </Button>
            </Box>
          </Box>
        </Modal>
      </Paper>
    </Container>
  );
};

export default TicketDetails;