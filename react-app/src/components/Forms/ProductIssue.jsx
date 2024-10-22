// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const ProductIssue = () => {
//     const [productData, setProductData] = useState([])

//     // useEffect(() => {
//     //     axios.get('/server/waterheater_1_function/getproducts')
//     //         .then((response) => {
//     //             console.log('response from product', response.data)
//     //             setProductData(response.data)
//     //         })
//     //         .catch((error) => {
//     //             console.log('error in fetching products', error)
//     //         })
//     // }, [])
//     return (
//         <div>

//         </div>
//     )
// }

// export default ProductIssue





// import React, { useState } from 'react';
// import { QrReader } from 'react-qr-reader'; // Adjusted import statement

// const BarcodeScanner = () => {
//   const [data, setData] = useState('No result');
//   const [showScanner, setShowScanner] = useState(false);

//   const handleScan = (data) => {
//     if (data) {
//       setData(data);
//       setShowScanner(false); // Hide the scanner after reading
//     }
//   };

//   const handleError = (err) => {
//     console.error(err);
//   };

//   const toggleScanner = () => {
//     setShowScanner(!showScanner);
//   };

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <h1>Barcode Scanner</h1>
//       <button onClick={toggleScanner}>
//         {showScanner ? 'Close Scanner' : 'Open Scanner'}
//       </button>
//       {showScanner && (
//         <div>
//           <QrReader
//             delay={300}
//             onError={handleError}
//             onScan={handleScan}
//             style={{ width: '100%' }}
//           />
//         </div>
//       )}
//       <h2>Scanned Value: {data}</h2>
//     </div>
//   );
// };

// export default BarcodeScanner;





// import React, { useState } from "react";
// import { useZxing } from "react-zxing";

// const BarcodeScanner = () => {
//   const [result, setResult] = useState("");
//   const [showVideoFeed, setShowVideoFeed] = useState(true);

//   const { ref } = useZxing({
//     onDecodeResult(result) {
//       setResult(result.getText());
//       setShowVideoFeed(false);
//     },
//   });

//   return (
//     <div style={{ textAlign: 'center', padding: '20px' }}>
//       <h1>Barcode Scanner</h1>
//       {showVideoFeed && (
//         <video
//           ref={ref}
//           style={{
//             width: '100%',
//             maxWidth: '380px',
//             height: '100%',
//             maxHeight: '250px',
//             border: '2px solid #ccc',
//             borderRadius: '8px'
//           }}
//           autoPlay
//         />
//       )}
//       {!showVideoFeed && (
//         <p style={{ fontSize: '18px', marginTop: '20px' }}>
//           <span style={{ fontWeight: 'bold' }}>Scanned Result:</span>
//           <span style={{ marginLeft: '10px' }}>{result}</span>
//         </p>
//       )}
//     </div>
//   );
// };

// export default BarcodeScanner;



// import React, { useState } from "react";
// import { useZxing } from "react-zxing";

// const BarcodeScanner = () => {
//   const [result, setResult] = useState("");
//   const [showVideoFeed, setShowVideoFeed] = useState(false);

//   const { ref } = useZxing({
//     onDecodeResult(result) {
//       setResult(result.getText());
//       setShowVideoFeed(false);
//     },
//   });

//   const startScanning = () => {
//     setShowVideoFeed(true);
//     setResult(""); 
//   };

//   const stopScanning = () => {
//     setShowVideoFeed(false);
//   };

//   return (
//     <div style={{ textAlign: 'center', padding: '20px' }}>
//       <h1>Barcode Scanner</h1>
//       <div style={{ marginBottom: '20px' }}>
//         {!showVideoFeed ? (
//           <button onClick={startScanning} style={{ padding: '10px 20px', fontSize: '16px' }}>
//             Start Scanning
//           </button>
//         ) : (
//           <button onClick={stopScanning} style={{ padding: '10px 20px', fontSize: '16px' }}>
//             Stop Scanning
//           </button>
//         )}
//       </div>
//       {showVideoFeed && (
//         <video
//           ref={ref}
//           style={{
//             width: '100%',
//             maxWidth: '380px',
//             height: '100%',
//             maxHeight: '250px',
//             border: '2px solid #ccc',
//             borderRadius: '8px'
//           }}
//           autoPlay
//           playsInline
//         />
//       )}
//       {!showVideoFeed && result && (
//         <p style={{ fontSize: '18px', marginTop: '20px' }}>  
//           <span style={{ fontWeight: 'bold' }}>Scanned Result:</span>
//           <span style={{ marginLeft: '10px' }}>{result}</span>
//         </p> 
//       )}
//     </div>
//   );
// };

// export default BarcodeScanner;








import React, { useState, useEffect, useRef } from "react";
import { useZxing } from "react-zxing";

const BarcodeScanner = () => {
  const [result, setResult] = useState("");
  const [showVideoFeed, setShowVideoFeed] = useState(false);
  const videoRef = useRef(null);

  const { ref, torch } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
      setShowVideoFeed(false);
    },
    paused: !showVideoFeed,
  });

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

  const startScanning = () => {
    setShowVideoFeed(true);
    setResult("");
  };

  const stopScanning = () => {
    setShowVideoFeed(false);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Barcode Scanner</h1>
      <div style={{ marginBottom: '20px' }}>
        {!showVideoFeed ? (
          <button onClick={startScanning} style={{ padding: '10px 20px', fontSize: '16px' }}>
            Start Scanning
          </button>
        ) : (
          <button onClick={stopScanning} style={{ padding: '10px 20px', fontSize: '16px' }}>
            Stop Scanning
          </button>
        )}
      </div>
      <video
        ref={(el) => {
          ref.current = el;
          videoRef.current = el;
        }}
        style={{
          width: '100%',
          maxWidth: '380px',
          height: '100%',
          maxHeight: '250px',
          border: '2px solid #ccc',
          borderRadius: '8px',
          display: showVideoFeed ? 'block' : 'none',
        }}
      />
      {!showVideoFeed && result && (
        <p style={{ fontSize: '18px', marginTop: '20px' }}>
          <span style={{ fontWeight: 'bold' }}>Scanned Result:</span>
          <span style={{ marginLeft: '10px' }}>{result}</span>
        </p>
      )}
    </div>
  );
};

export default BarcodeScanner;