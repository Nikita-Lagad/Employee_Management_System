package com.jspiders.employee.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jspiders.employee.pojo.Employee;
import com.jspiders.employee.response.ResponseStructure;
import com.jspiders.employee.service.EmpService;

@RestController
@CrossOrigin(origins = "*")
public class EmpController {

	@Autowired
	private EmpService empService;

	@PostMapping("/employees")
	public ResponseEntity<ResponseStructure<Employee>> addEmp(@RequestBody Employee employee) {
		Employee addedEmp = empService.addEmp(employee);
		ResponseStructure<Employee> responseStructure = new ResponseStructure<>();
		responseStructure.setMessage("Employee Added");
		responseStructure.setData(addedEmp);
		responseStructure.setStatus(HttpStatus.OK.value());
		return new ResponseEntity<ResponseStructure<Employee>>(responseStructure, HttpStatus.OK);
	}
	
//	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/employee")
	public ResponseEntity<ResponseStructure<List<Employee>>> findAllEmployees() {
		List<Employee> employees = empService.findAllEmployees();
		ResponseStructure<List<Employee>> responseStructure = new ResponseStructure<>();
		if (employees != null) {
			responseStructure.setMessage("Employees Found");
			responseStructure.setData(employees);
			responseStructure.setStatus(HttpStatus.OK.value());
			return new ResponseEntity<>(responseStructure, HttpStatus.OK);
		} else {
			responseStructure.setMessage("Employees Not Found");
			responseStructure.setData(null);
			responseStructure.setStatus(HttpStatus.NOT_FOUND.value());
			return new ResponseEntity<>(responseStructure, HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/employee")
	protected ResponseEntity<ResponseStructure<Employee>> deleteEmployee(@RequestParam(name = "id") Integer id){
		Employee deletedEmp = empService.deleteEmp(id);
		ResponseStructure<Employee> responseStructure = new ResponseStructure<>();
		if(deletedEmp != null) {
			responseStructure.setMessage("Employee deleted");
			responseStructure.setData(deletedEmp);
			responseStructure.setStatus(HttpStatus.OK.value());
			return new ResponseEntity<>(responseStructure, HttpStatus.OK);
		}else {
			responseStructure.setMessage("Employee not deleted");
			responseStructure.setData(null);
			responseStructure.setStatus(HttpStatus.BAD_REQUEST.value());
			return new ResponseEntity<>(responseStructure, HttpStatus.BAD_REQUEST);
		}	
	}
	
	@PutMapping("/employee")
	protected ResponseEntity<ResponseStructure<Employee>> updateEmp(@RequestBody Employee employee){
		Employee updatedEmp = empService.updateEmp(employee);
		ResponseStructure<Employee> responseStructure = new ResponseStructure<>();
		if(updatedEmp != null) {
			responseStructure.setMessage("Employee updated");
			responseStructure.setData(updatedEmp);
			responseStructure.setStatus(HttpStatus.OK.value());
			return new ResponseEntity<>(responseStructure, HttpStatus.OK);
		}else {
			responseStructure.setMessage("Employee not Found");
			responseStructure.setData(null);
			responseStructure.setStatus(HttpStatus.BAD_REQUEST.value());
			return new ResponseEntity<>(responseStructure, HttpStatus.BAD_REQUEST);
		}
	}
}