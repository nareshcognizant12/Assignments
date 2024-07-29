import { Cdepartment, Cemployee } from "./answer03";

const dep=new Cdepartment();
const emp=new Cemployee();

// const array=emp.getAllEmployeePositions().toString=function(){return this.join('","')};
// array.toString=function(){return this.join('","')}
// dep.printDepartmentByPosition(`"${emp.getAllEmployeePositions().join('","')}"`);
// emp.getAllEmployeePositions().map((position)=>{
//     dep.printDepartmentByPosition(position);
// })

// dep.printDepartmentByPosition("HR manager","software engineer");
// console.log(dep.getAllEmployeeIds());
// console.log(dep.getAllEmployeeFirstnames());
// console.log(dep.getAllEmployeePositions());
//console.log(dep.getAllSkills());
dep.printDepartmentById(emp.getAllEmployeeIds());
dep.printDepartmentByFirstname(emp.getAllEmployeeFirstnames());
dep.printDepartmentByPosition(emp.getAllEmployeePositions());
console.log("__________________________________________________")
dep.printEmployeeAndDepartmentBySkills([]);