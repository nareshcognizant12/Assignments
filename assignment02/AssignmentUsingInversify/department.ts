import { injectable } from 'inversify';
import 'reflect-metadata';
import { employees, department } from "./data";
import { Employee } from "./employee";
import { Idepartment } from "./interfaces";

@injectable()
export class Department  implements Idepartment{
    getAllSkills():string[]{
       return department.map((depobj)=>depobj.skills?.name??"");
    }
    getDepartmentIdBySkill(skill: string): number {
       //return department.filter((depobj)=>depobj.skills?.name===skill).map((depobj)=>depobj.id)[0];
       return department.find((depobj)=>depobj.skills?.name===skill)?.id??-1;
    }
    getDepatmentNameBySkill(skill:string):string{
        //return department.filter((depobj)=>depobj.skills?.name===skill).map((depobj)=>depobj.name)[0];
        return department.find((depobj)=>depobj.skills?.name===skill)?.name??"";
    }
    getEmployeeNameBySkill(skill:string):string{
        let depid=department.find((depobj)=>depobj.skills?.name===skill)?.id;
        return employees.find((empobj)=>empobj.departmentId===depid)?.name??"";
    }
    // getDepartmentNameByEmpId(empid:number):string{ 
    //        return department.filter((depobj)=>this.getDepartmentIdByEmpId(empid)===depobj.id).map((depobj)=>depobj.name)[0]; 
    // }
    // getDepartmentNameByFirstname(name:string):string{    
    //     return department.filter((depobj)=>this.getDepartmentIdByFirstname(name)===depobj.id).map((depobj)=>depobj.name)[0];
    // }   
    // getDepartmentNameByPosition(position:string):string{
    //     return department.filter((depobj)=>this.getDepartmentIdByPosition(position)===depobj.id).map((depobj)=>depobj.name)[0];
    // }   
    getDepartmentNameByEmpId(depid:number):string{ 
        //return department.filter((depobj)=>depid===depobj.id).map((depobj)=>depobj.name)[0]; 
        return department.find((depobj)=>depobj.id===depid)?.name??"";
    }
    getDepartmentNameByFirstname(depid:number):string{    
        //return department.filter((depobj)=>depid===depobj.id).map((depobj)=>depobj.name)[0];
        return department.find((depobj)=>depobj.id===depid)?.name??"";
    }   
    getDepartmentNameByPosition(depid:number):string{
        //return department.filter((depobj)=>depid===depobj.id).map((depobj)=>depobj.name)[0];
        return department.find((depobj)=>depobj.id===depid)?.name??"";
    }   
    print_Employeename_Departmentname_BySkill(skill:string):void{ 
               
                //let department_id=this.getDepartmentIdBySkill(skill);
                let department_name=this.getDepatmentNameBySkill(skill);
                let employee_name=this.getEmployeeNameBySkill(skill);
                //let employee_name=employees.filter((empobj)=>department_id===empobj.departmentId).map((empobj)=>empobj.name)
                //let employee_name=employees.find((empobj)=>department_id===empobj.departmentId)?.name??"";
                console.log(`${employee_name}---->${ department_name}`)         
         
        }
}
