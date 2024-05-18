import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Employee.css'; 

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await axios.get('http://localhost:8080/employee');
                const responseData = response.data;
                if (responseData.status === 200) {
                    setEmployees(responseData.data);
                } else {
                    console.error('Error fetching employees:', responseData.message);
                }
            } catch (error) {
                console.error('Error fetching employees:', error);
            }
        };

        fetchEmployees();
    }, []);

    return (
        <div className="container">
            <h1>Employee List</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Department</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((employee, index) => (
                            <tr key={index}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.mobile}</td>
                                <td>{employee.email}</td>
                                <td>{employee.age}</td>
                                <td>{employee.gender}</td>
                                <td>{employee.department}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeList;
