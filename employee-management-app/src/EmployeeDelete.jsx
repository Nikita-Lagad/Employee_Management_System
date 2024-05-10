import React, { useState } from 'react';
import axios from 'axios';

const EmployeeDelete = () => {
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleDelete = () => {
    axios.delete(`http://localhost:8080/employee?id=${id}`)
      .then((response) => {
        setMessage(response.data.message);
        setStatus(response.data.status);
      })
      .catch((error) => {
        setMessage('Error deleting employee');
        setStatus(400); 
      });
  };

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="Enter Employee ID" />
      <button onClick={handleDelete}>Delete Employee</button>
      <p>Status: {status}</p>
      <p>{message}</p>
    </div>
  );
};

export default EmployeeDelete;