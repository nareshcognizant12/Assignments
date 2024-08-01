export interface Idepartment{
    getAllSkills():string[];
    getDepartmentIdBySkill(skill:string):number;
    getDepatmentNameBySkill(skill:string):string;
    getDepartmentNameByEmpId(depid:number):string;
    getDepartmentNameByFirstname(depid:number):string;
    getDepartmentNameByPosition(depid:number):string;
    print_Employeename_Departmentname_BySkill(skill:string):void;
  }

  export interface Iemployee{
    getAllEmployeeIds():number[];
    getAllEmployeeFirstnames():string[];
    getAllEmployeePositions():string[];
    getDepartmentIdByEmpId(empid:number):number;
    getDepartmentIdByFirstname(name:string):number;
    getDepartmentIdByPosition(position:string):number;
    getFirstNameByPosition(position:string):string;
}