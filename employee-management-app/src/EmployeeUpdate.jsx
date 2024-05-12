import React, { useState } from 'react';
import axios from 'axios';

const EmployeeUpdate = () => {
  const [employee, setEmployee] = useState({
    id: '',
    name: '',
    mobile: '',
    email: '',
    age: '',
    gender: '',
    department: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Updating employee data:', employee); 
    axios.put('http://localhost:8080/employee', employee)
      .then((response) => {
        console.log(response.data);
        setSuccessMessage('Employee updated successfully!');
      })
      .catch((error) => {
        console.error('Error updating employee data:', error);
      });
    setEmployee({
      id: '',
      name: '',
      mobile: '',
      email: '',
      age: '',
      gender: '',
      department: '',
    })
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card shadow-dark bg-secondary p-5" style={{ boxShadow: "0px 0px 10px purple" }}>
            <h2 className="card-title text-center mb-5">Update Employee Information</h2>
            {successMessage && <p className="text-dark text-center" style={{ fontSize: '20px', fontWeight: 'bold' }}>{successMessage}</p>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">ID:</label>
                <input
                  type="text"
                  className="form-control"
                  autoComplete="off"
                  name="id"
                  value={employee.id}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  autoComplete="off"
                  name="name"
                  value={employee.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Mobile:</label>
                <input
                  type="text"
                  className="form-control"
                  autoComplete="off"
                  name="mobile"
                  value={employee.mobile}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  autoComplete="off"
                  name="email"
                  value={employee.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Age:</label>
                <input
                  type="number"
                  className="form-control"
                  autoComplete="off"
                  name="age"
                  value={employee.age}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Gender:</label>
                <select
                  className="form-select"
                  name="gender"
                  value={employee.gender}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>

                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Department:</label>
                <input
                  type="text"
                  className="form-control"
                  autoComplete="off"
                  name="department"
                  value={employee.department}
                  onChange={handleChange}
                />
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-dark btn-lg" onClick={handleSubmit}>Update Employee</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeUpdate;