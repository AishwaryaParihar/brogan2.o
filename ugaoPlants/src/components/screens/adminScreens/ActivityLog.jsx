import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import SummaryApi from '../../../common/Index';

const ActivityLog = () => {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
     const fetchContactsDetails = await fetch(SummaryApi.contactusDetail.url,{
      method : SummaryApi.contactusDetail.method,
      credentials : 'include'
     }) 

     const dataResponse = await fetchContactsDetails.json()
     

     if(dataResponse.success){
      setContacts(dataResponse.data)
     }

     if(dataResponse.error){
      toast.error(dataResponse.message)
     }

     console.log("fetch contact", dataResponse)

  };

  useEffect(() => {
   
    fetchContacts();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center">Contact Form Submissions</h2>
      <div className="table-responsive mt-4">
        <table className="table table-bordered">
          <thead>
            <tr>
            <th>SNo</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{contact.name}</td>
                <td>{contact.mobile}</td>
                <td>{contact.email}</td>
                <td>{contact.msg}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActivityLog;
