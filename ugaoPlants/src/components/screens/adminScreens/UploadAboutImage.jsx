import React, { useState } from 'react';
import SummaryApi from '../../../common/Index';
import UploadImage from "../../../helper/UploadImage";
import { toast } from 'react-toastify';
import axios from 'axios';
const UploadAboutImage = ({ fetchData }) => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('eee');
    const [content, setContent] = useState('eee');

  

  const handleSubmit1 = async (e) => {
    e.preventDefault();
    console.log(data);

    const response = await fetch(SummaryApi.updateAboutDetails.url, {
      method: SummaryApi.updateAboutDetails.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    if (responseData.success) {
      toast.success(responseData?.message);
      fetchData();
    } else {
      toast.error(responseData?.message);
    }
    console.log("responseData",responseData)
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', 'rr');
    formData.append('content', 'rrr');
    
    if (image) {
        formData.append('image', image);
    }

    console.log(formData);
    //alert(formData);

    try {
      await axios.put(SummaryApi.updateAboutDetails.url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert(' Uploaded successfully');
    } catch (err) {
      console.error(err);
      alert('Error uploading article'+err);
    }
  };

  return (
    <div className="admin-about">
      <h2>Update About Page</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-5">
                                                <label htmlFor="formFile" className="form-label">IMAGE UPLODE</label>
                                                <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
                                                </div>
        <button type="submit">
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadAboutImage;
