import React, { useState } from 'react';

const FileUploader = () => {
  const [status, setStatus] = useState('');
  const [file, setFile] = useState(null);

  const uploadFile = async () => {
    if (!file) {
      alert('Please select a file to upload.');
      return;
    }

    try {
      setStatus('Uploading ... ⏳');
      console.log('before file obj:',file)
      const fileObj = new FormData();
      fileObj.append('file', file); // Append the single file
      console.log('after file obj:',fileObj)
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
        setStatus('Upload successful');
      } else {
        setStatus('Upload failed');
      }
    } catch (e) {
      console.error(e);
      alert('Error. Please try again after sometime.');
      setStatus('Upload failed');
    } finally {
      setStatus('');
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div>
      <input type="file" id="customFile" onChange={handleFileChange} />
      <button onClick={uploadFile}>Upload File</button>
      <p id="status">{status}</p>
    </div>
  );
};

export default FileUploader;
