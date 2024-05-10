package com.jspiders.employee.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jspiders.employee.pojo.Employee;
import com.jspiders.employee.repository.EmpRepo;

@Service
public class EmpService {

	@Autowired
	private EmpRepo empRepo;

	public Employee addEmp(Employee employee) {
		return empRepo.save(employee);
	}

	public List<Employee> findAllEmployees() {
		List<Employee> employees = empRepo.findAll();
		if (employees.size() > 0) {
			return employees;
		}
		return null;
	}

	public Employee findEmpById(int id) {
		Optional<Employee> optional = empRepo.findById(id);
		if (optional.isPresent()) {
			return optional.get();
		} else {
			return null;
		}
	}

	public Employee deleteEmp(Integer id) {
		if (id != null) {
			Employee empToBeDeleted = findEmpById(id);
			empRepo.deleteById(id);
			return empToBeDeleted;
		} else {
			return null;
		}
	}

}