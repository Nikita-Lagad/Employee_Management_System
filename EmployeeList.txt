import axios from 'axios'
import React, { useEffect, useState } from 'react'

const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/employees")
            .then(response => {
                setEmployees(response.data);
            })
            .catch(error => {
                console.log("Error fetching employees data:", error);
            });
    }, []);

    return (
        <div className="container my-4">
            <h1 className="mb-4">Employee List</h1>
            <table className="table table-striped">
                <thead className="thead-dark">
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
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.mobile}</td>
                            <td>{employee.email}</td>
                            <td>{employee.age}</td>
                            <td>{employee.gender}</td>
                            <td>{employee.department}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeList;