import React, { useState, useEffect, useRef } from "react";
import { useZxing } from "react-zxing";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Button,
  Box,
  Typography
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const BarcodeScanner = ({ isOpen, onClose, onScan, index }) => { // Added index prop
  
  const [result, setResult] = useState("");
  const [showVideoFeed, setShowVideoFeed] = useState(false);
  const videoRef = useRef(null);

  const { ref, torch } = useZxing({
    onDecodeResult(result) {
      const scannedValue = result.getText();
      setResult(scannedValue);
      setShowVideoFeed(false);
      onScan(scannedValue, index); // Pass both scanned value and index
      onClose(); // Close the modal after successful scan
    },
    paused: !showVideoFeed,
  });

  useEffect(() => {
    if (isOpen) {
      setShowVideoFeed(true);
      setResult("");
    } else {
      setShowVideoFeed(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (videoRef.current) {
      if (showVideoFeed) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
        if (videoRef.current.srcObject) {
          videoRef.current.srcObject.getTracks().forEach(track => track.stop());
        }
      }
    }
  }, [showVideoFeed]);

  const stopScanning = () => {
    setShowVideoFeed(false);
    onClose();
  };

  return (
    <Dialog 
      open={isOpen} 
      onClose={stopScanning}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Barcode Scanner</Typography>
          <IconButton onClick={stopScanning} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box 
          display="flex" 
          flexDirection="column" 
          alignItems="center" 
          gap={2}
          py={2}
        >
          <video
            ref={(el) => {
              ref.current = el;
              videoRef.current = el;
            }}
            style={{
              width: '100%',
              maxWidth: '380px',
              height: '250px',
              border: '2px solid #ccc',
              borderRadius: '8px',
              display: showVideoFeed ? 'block' : 'none',
            }}
          />
          <Button 
            variant="contained" 
            color="secondary" 
            onClick={stopScanning}
            fullWidth
          >
            Stop Scanning
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default BarcodeScanner;