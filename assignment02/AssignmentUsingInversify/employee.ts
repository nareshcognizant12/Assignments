import { injectable } from "inversify";
import 'reflect-metadata';
import { employees, department } from "./data";
import { Iemployee } from "./interfaces";

@injectable()
export class Employee implements Iemployee{
    getAllEmployeeIds():number[]{
       return employees.map((empobj)=>empobj.empid);
    }
    getAllEmployeeFirstnames():string[]{ 
        return employees.map((empobj)=>empobj.name.split(" ")[0]);  
    }
    getAllEmployeePositions():string[]{    
       return employees.map((empobj)=>empobj.position);
    }
    getDepartmentIdByEmpId(employeeid:number):number{
       //return  employees.filter((empobj)=>empobj.empid===employeeid).map((emp)=>emp.departmentId)[0]; 
       return employees.find((empobj)=>empobj.empid===employeeid)?.departmentId??-1;
    }
    getDepartmentIdByFirstname(name: string): number {
        //return  employees.filter((empobj)=>empobj.name.split(" ")[0]===name).map((emp)=>emp.departmentId)[0];
        return employees.find((empobj)=>empobj.name.split(" ")[0]===name)?.departmentId??-1;
    }
    getDepartmentIdByPosition(position:string):number{
        return employees.find((empobj)=>empobj.position===position)?.departmentId??-1;
       // return employees.filter((empobj)=>empobj.position===position).map((empobj)=>empobj.departmentId)[0];
    }

    getFirstNameByPosition(position:string):string{
        //return  employees.filter((empobj)=>empobj.position===position).map((emp)=>emp.name.split(" ")[0])[0];
        return employees.find((empobj)=>empobj.position===position)?.name.split(" ")[0]??"";
    }
}