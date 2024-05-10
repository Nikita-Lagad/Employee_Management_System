package com.jspiders.employee.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jspiders.employee.pojo.Employee;

@Repository
public interface EmpRepo extends JpaRepository<Employee, Integer>{

}
