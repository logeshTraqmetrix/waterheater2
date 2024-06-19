
// import React, { useState } from 'react';

// const FileUploader = () => {
//   const [status, setStatus] = useState('');
//   const [files, setFiles] = useState([]);

//   const uploadFile = async () => {
//     try {
//       setStatus('Uploading ... &#10227;');
//       const fileObj = new FormData();
//       files.forEach((file, index) => {
//         fileObj.append(`file${index + 1}, file`);
//       });

//       const response = await fetch('/server/service_handling_function/uploadfile', {
//         method: 'POST',
//         body: fileObj,
//       });

//       const data = await response.json();

//       if (response.status === 200) {
//         console.log(data);
//       }
//     } catch (e) {
//       console.log(e);
//       alert('Error. Please try again after sometime.');
//     } finally {
//       setStatus('');
//     }
//   };

//   const handleFileChange = (event) => {
//     setFiles(Array.from(event.target.files));
//   };

//   return (
//     <div>
//       <input type="file" id="customFile" multiple onChange={handleFileChange} />
//       <button onClick={uploadFile}>Upload Files</button>
//       <p id="status">{status}</p>
//     </div>
//   );
// };

// export default FileUploader;





import React, { useState } from 'react';

const FileUploader = () => {
  const [status, setStatus] = useState('');
  const [files, setFiles] = useState([]);

  const uploadFile = async () => {
    try {
      setStatus('Uploading ... \u27F3');
      const fileObj = new FormData();
      files.forEach((file, index) => {
        fileObj.append(`file${index + 1}`, file);
      });
      console.log(files)

      const response = await fetch('/server/waterheater_1_function//uploadfile', {
        method: 'POST',
        body: fileObj,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setStatus('Upload successful!');
      } else {
        const errorData = await response.json();
        console.log(errorData);
        setStatus('Upload failed.');
        alert('Error. Please try again after some time.');
      }
    } catch (e) {
      console.log(e);
      setStatus('Upload failed.');
      alert('Error. Please try again after some time.');
    } finally {
      setStatus('');
    }
  };

  const handleFileChange = (event) => {
    setFiles(Array.from(event.target.files));
  };

  return (
    <div>
      <input type="file" id="customFile" multiple onChange={handleFileChange} />
      <button onClick={uploadFile}>Upload Files</button>
      <p id="status">{status}</p>
    </div>
  );
};

export default FileUploader;
