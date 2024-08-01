
import { Iemployee,Idepartment } from "./interfaces";
import { container } from "./inversify/container";
import { TYPES } from "./inversify/types";

// const emp:Iemployee=new Employee();
const emp:Iemployee=container.get<Iemployee>(TYPES.Employee);
//const dep:Idepartment=new Department();
const dep:Idepartment=container.get<Idepartment>(TYPES.Department);

emp.getAllEmployeeIds().forEach((empid)=>console.log(`${empid}-->${dep.getDepartmentNameByEmpId(emp.getDepartmentIdByEmpId(empid))}`));
emp.getAllEmployeeFirstnames().forEach((firstname)=>console.log(`${firstname}-->${dep.getDepartmentNameByFirstname(emp.getDepartmentIdByFirstname(firstname))}`));
emp.getAllEmployeePositions().forEach((position)=>console.log(`${emp.getFirstNameByPosition(position)}-->${position}-->${dep.getDepartmentNameByPosition(emp.getDepartmentIdByPosition(position))}`));
dep.print_Employeename_Departmentname_BySkill("civil engineering");