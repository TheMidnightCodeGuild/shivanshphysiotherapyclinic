// components/UploadEmails.js
import React, { useState } from 'react';
import Papa from 'papaparse';
import * as XLSX from 'xlsx';

const UploadEmails = ({ onUploadComplete }) => {
  const [uploadStatus, setUploadStatus] = useState(null);
  const [singleEmail, setSingleEmail] = useState('');
  const [emailSubject, setEmailSubject] = useState('');
  const [emailText, setEmailText] = useState('');

  // Handle file selection and parsing
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (fileExtension === 'csv') {
      // Handle CSV files
      Papa.parse(file, {
        header: true,
        complete: async (result) => {
          const emails = result.data.map(row => row.email).filter(email => email);
          try {
            await sendEmailsToAPI(emails);
            setUploadStatus('Upload successful!');
            if (onUploadComplete) {
              onUploadComplete(emails);
            }
          } catch (error) {
            setUploadStatus('Upload failed.');
            console.error(error);
          }
        },
        error: (error) => {
          setUploadStatus('Parsing failed.');
          console.error(error);
        },
      });
    } else if (['xlsx', 'xls'].includes(fileExtension)) {
      // Handle Excel files
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const data = e.target.result;
          const workbook = XLSX.read(data, { type: 'array' });
          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet);
          
          const emails = jsonData.map(row => {
            return row.email || row.Email || row.EMAIL || 
                   Object.values(row)[0];
          }).filter(email => {
            return email && 
                   typeof email === 'string' && 
                   email.includes('@');
          });

          console.log('Extracted emails:', emails);
          
          if (emails.length === 0) {
            throw new Error('No valid emails found in the file');
          }

          await sendEmailsToAPI(emails);
          setUploadStatus(`Upload successful! Found ${emails.length} emails.`);
          if (onUploadComplete) {
            onUploadComplete(emails);
          }
        } catch (error) {
          setUploadStatus(`Upload failed: ${error.message}`);
          console.error(error);
        }
      };
      reader.readAsArrayBuffer(file);
    } else {
      setUploadStatus('Please upload a CSV or Excel file.');
    }
  };

  // Send parsed emails to the API using fetch
  const sendEmailsToAPI = async (emails) => {
    try {
      const response = await fetch('/api/emails/addBulk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ emails }),
      });

      if (!response.ok) {
        throw new Error('Failed to upload emails');
      }
    } catch (error) {
      console.error('Failed to send emails to API:', error);
      throw error;
    }
  };

  // Handle single email submission
  const handleSingleEmailSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/emails/addSingle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: singleEmail }),
      });

      if (!response.ok) {
        throw new Error('Failed to add email');
      }

      setUploadStatus('Email added successfully!');
      setSingleEmail('');
      if (onUploadComplete) {
        onUploadComplete([singleEmail]);
      }
    } catch (error) {
      setUploadStatus('Failed to add email.');
      console.error(error);
    }
  };

  // Handle mass email sending
  const handleSendMassEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/emails/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: emailSubject,
          text: emailText
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send mass email');
      }

      setUploadStatus('Mass email sent successfully!');
      setEmailSubject('');
      setEmailText('');
    } catch (error) {
      setUploadStatus('Failed to send mass email.');
      console.error(error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">Email Management</h1>
      
      <div className="space-y-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Add Single Email</h2>
          <form onSubmit={handleSingleEmailSubmit} className="space-y-4">
            <div className="flex gap-3">
              <input
                type="email"
                value={singleEmail}
                onChange={(e) => setSingleEmail(e.target.value)}
                placeholder="Enter email address"
                required
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Add Email
              </button>
            </div>
          </form>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Bulk Upload</h2>
          <div className="flex items-center justify-center w-full">
            <label className="w-full flex flex-col items-center px-4 py-6 bg-white rounded-lg shadow-lg tracking-wide border border-gray-300 cursor-pointer hover:bg-gray-50">
              <svg className="w-8 h-8 text-gray-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>
              <span className="mt-2 text-sm text-gray-600">Select CSV or Excel file</span>
              <input type='file' accept=".csv,.xlsx,.xls" onChange={handleFileUpload} className="hidden" />
            </label>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Send Mass Email</h2>
          <form onSubmit={handleSendMassEmail} className="space-y-4">
            <div className="space-y-3">
              <input
                type="text"
                value={emailSubject}
                onChange={(e) => setEmailSubject(e.target.value)}
                placeholder="Email Subject"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                value={emailText}
                onChange={(e) => setEmailText(e.target.value)}
                placeholder="Email Content"
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                type="submit"
                className="w-full px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Send Mass Email
              </button>
            </div>
          </form>
        </div>
      </div>

      {uploadStatus && (
        <div className={`mt-6 p-4 rounded-md ${
          uploadStatus.includes('successful') ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
        }`}>
          <p className="text-center font-medium">{uploadStatus}</p>
        </div>
      )}
    </div>
  );
};

export default UploadEmails;
