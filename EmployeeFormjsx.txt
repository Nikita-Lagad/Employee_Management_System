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
        <div>
            <h2>Employee Form</h2>
            {successMessage && <p>{successMessage}</p>}
            <form onSubmit={submitForm}>
                <label>Name:</label>
                <input
                    type="text"
                    autoComplete="off"
                    name="ename"
                    value={ename}
                    onChange={(e) => setEname(e.target.value)}
                />
                <label>Email:</label>
                <input
                    type="email"
                    autoComplete="off"
                    name="mail"
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                />
                <label>Contact:</label>
                <input
                    type="text"
                    autoComplete="off"
                    name="contact"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                />
                <label>Gender:</label>
                <select
                    name="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
                <label>Department:</label>
                <input
                    type="text"
                    autoComplete="off"
                    name="dept"
                    value={dept}
                    onChange={(e) => setDept(e.target.value)}
                />
                <label>Age:</label>
                <input
                    type="number"
                    autoComplete="off"
                    name="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default EmployeeForm;
