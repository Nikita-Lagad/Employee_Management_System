import React, { useState } from 'react';
import axios from 'axios';

const EmployeeForm = () => {
    const [ename, setEname] = useState('');
    const [mail, setMail] = useState('');
    const [contact, setContact] = useState('');
    const [gender, setGender] = useState('');
    const [dept, setDept] = useState('');
    const [age, setAge] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        const newEmployee = {
            name: ename,
            email: mail,
            mobile: contact,
            gender: gender,
            department: dept,
            age: age
        };

        axios.post('http://localhost:8080/employees', newEmployee)
            .then(response => {
                console.log(response.data); 
                setSuccessMessage('Employee added successfully!');
            })
            .catch(error => {
                console.error('Error adding employee:', error);
            });

        setEname('');
        setMail('');
        setContact('');
        setGender('');
        setDept('');
        setAge('');
    };

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-lg-6" >
                    <div className="card shadow-dark bg-secondary p-5"  style={{boxShadow:"0px 0px 10px black",
                      background: "linear-gradient(red)" }}>
                        <h2 className="card-title text-center mb-5">Employee Form</h2>
                        {successMessage && <p className="text-dark text-center"style={{ fontSize: '20px',fontWeight: 'bold' }}>{successMessage}</p>}
                        <form onSubmit={submitForm}>
                            <div className="mb-3">
                                <label className="form-label">Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    autoComplete="off"
                                    name="ename"
                                    value={ename}
                                    onChange={(e) => setEname(e.target.value)}
                                    // style={{ boxShadow: "0px 0px 5px black" }}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email:</label>
                                <input
                                    type="email"
                                    className="form-control "
                                    autoComplete="off"
                                    name="mail"
                                    value={mail}
                                    onChange={(e) => setMail(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Contact:</label>
                                <input
                                    type="text"
                                    className="form-control "
                                    autoComplete="off"
                                    name="contact"
                                    value={contact}
                                    onChange={(e) => setContact(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Gender:</label>
                                <select
                                    className="form-select"
                                    name="gender"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
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
                                    className="form-control "
                                    autoComplete="off"
                                    name="dept"
                                    value={dept}
                                    onChange={(e) => setDept(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Age:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    autoComplete="off"
                                    name="age"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                />
                            </div>
                            <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-dark btn-lg">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeForm;
