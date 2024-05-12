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
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Delete Employee</h2>
              <div className="mb-3">
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} className="form-control" placeholder="Enter Employee ID" />
              </div>
              <div className="d-grid gap-2">
                <button onClick={handleDelete} className="btn btn-danger btn-lg">Delete Employee</button>
              </div>
              <p className={`text-center mt-3 ${status === 200 ? 'text-black' : 'text-danger'}`} style={{ color: 'black', fontWeight: 'bold' }}>{message}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDelete;
