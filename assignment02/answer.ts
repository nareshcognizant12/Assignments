
// interface Employees{
//     empid: number,
//     name: string,
//     departmentId: number,
//     position: string
// }

// interface Department{
//     id:number,
//     name:string,
//     location:string,
//     skills?:{
//         name:string,
//         proficiency:string
//     },
//     rewards?:{
//         name:string,
//         points:string
//     }
// }

const department=[
    {
      id: 1,
      name: "Human Resources",
      location: "Building A",
      skills: {
          name:"communication",
          proficiency:"100"
      }
    },
    {
      id: 2,
      name: "Engineering",
      location: "Building B",
      skills: {
          name:"civil engineering",
          proficiency:"50"
                  }
          
    },
    {
      id: 3,
      name: "Marketing",
      location: "Building C",
      rewards: {
          name:"MBA in marketing",
          points:"10"
  }
    }
  ]

const employees=[
    {
      empid: 101,
      name: "Alice Johnson",
      departmentId: 1,
      position: "HR Manager"
    },
    {
      empid: 102,
      name: "Bob Smith",
      departmentId: 2,
      position: "Software Engineer"
    },
    {
      empid: 103,
      name: "Charlie Brown",
      departmentId: 3,
      position: "Marketing Specialist"
    }
  ]


interface Idepartment{
  getAllSkills():string[];
  getDepartmentIdBySkill(skill:string):number;
  getDepatmentNameBySkill(skill:string):string;
  printDepartmentById(empids:number[]):void;
  printDepartmentByFirstname(firstnames:string[]):void;
  printDepartmentByPosition(positions:string[]):void;
  printEmployeeAndDepartmentBySkills(skills:string[]):void;
}

interface Iemployee{
    getAllEmployeeIds():number[];
    getAllEmployeeFirstnames():string[];
    getAllEmployeePositions():string[];
    getDepartmentIdByempid(empid:number):number;
    getDepartmentIdByFirstname(name:string):number;
    getDepartmentIdByPosition(position:string):number;
    getNameByPosition(position:string):string;
}

export class Cemployee implements Iemployee{
    getAllEmployeeIds():number[]{
       const ids=new Array<number>;
       employees.map((obj=>ids.push(obj.empid)))
       return ids;
    }
    getAllEmployeeFirstnames():string[]{
        const firstnames=new Array<string>;
        employees.map((obj=>firstnames.push((obj.name.split(" "))[0])))
        return firstnames;

    }
    getAllEmployeePositions():string[]{
        const positions=new Array<string>;
        employees.map((obj=>positions.push(obj.position)))
        return positions;
    }
    getDepartmentIdByempid(employeeid:number):number{
        let depid:number=-1;
        employees.forEach((obj)=>{
            if(obj.empid===employeeid){
             depid=obj.departmentId; 
        }});
        return depid;
    }

    getDepartmentIdByFirstname(name: string): number {
        let depid:number=-1;
        employees.forEach((obj)=>{
            if((obj.name.split(" "))[0].toLowerCase()===name.toLowerCase()){
             depid=obj.departmentId; 
        }});
        return depid;  
    }

    getDepartmentIdByPosition(position:string):number{
        let depid:number=-1;
        employees.forEach((obj)=>{
            if(obj.position.toLowerCase()===position.toLowerCase()){
             depid=obj.departmentId; 
        }});
        return depid; 
    }

    getNameByPosition(position:string):string{
        let name:string="";
        employees.forEach((obj)=>{
            if(obj.position.toLowerCase()===position.toLowerCase()){
             name=obj.name; 
        }});
        return name;
    }
}
export class Cdepartment extends Cemployee implements Idepartment{
    getAllSkills():string[]{
        const skills=new Array<string>;
        department.map((depobj)=>{
            if(depobj.skills?.name!==undefined)
              skills.push(depobj.skills.name);
        })
        return skills;
    }
    getDepartmentIdBySkill(skill: string): number {
        let depid:number=-1;
        department.forEach((obj)=>{
            if((obj.skills?.name.toLowerCase()??"no skills")===skill.toLowerCase()){
             depid=obj.id; 
        }});
        return depid; 
    }
    getDepatmentNameBySkill(skill:string):string{
        let name:string="";
        department.forEach((obj)=>{
            if((obj.skills?.name.toLowerCase()??"no skills")===skill.toLowerCase()){
             name=obj.name; 
        }});
        return name; 
    }
    printDepartmentById(empids:number[]):void{
        if(empids.length>0)
        {
            empids.map((empid)=>{
            let depart_id=this.getDepartmentIdByempid(empid);
            if(depart_id>0)
            {
                department.map((depobj)=>{
                if(depart_id===depobj.id){
                    console.log(`${empid}:${depobj.name}`)
                }
            })
            }
            else
            {
                console.log(`Employee with following id ${empid} does not exist in our records`)
            }
        })
    }
    else
    {
        console.log("please enter the employee id for which you want the department name!!!!!");
    }
        
    }
    printDepartmentByFirstname(names:string[]):void{
        if(names.length>0)
        {
            names.map((name)=>{
            let depart_id=this.getDepartmentIdByFirstname(name);
            if(depart_id>0)
            {
                department.map((depobj)=>{
                if(depart_id===depobj.id){
                    console.log(`${name}:${depobj.name}`)
                }
            })
            }
            else
            {
                console.log(`Employee with following name: ${name} does not exist in our records`)
            }
        })
    }
    else
    {
        console.log("please enter the employee 'first-name' for which you want the department name!!!!!");
    }
    }
    printDepartmentByPosition(positions:string[]):void{
        if(positions.length>0)
        {
            positions.map((position)=>{
            let depart_id=this.getDepartmentIdByPosition(position);
            if(depart_id>0)
            {
                department.map((depobj)=>{
                if(depart_id===depobj.id){
                    console.log(`${this.getNameByPosition(position)}:${position}:${depobj.name}`)
                }
            })
            }
            else
            {
                console.log(`Employee with following position ${position} does not exist in our records`)
            }
        })
    }
    else
    {
        console.log("please enter the employee 'first-name' for which you want the department name!!!!!");
    }

    }
    printEmployeeAndDepartmentBySkills(skills:string[]):void{
         if(skills.length>0){
            skills.map((skill)=>{
                let department_id=this.getDepartmentIdBySkill(skill);//departmentID  1
                // console.log("department_id:"+department_id);
                let department_name=this.getDepatmentNameBySkill(skill);//departmentname
                // console.log("department_name:"+department_name)
                if(department_id>0){
                employees.map((obj)=>{
                    if(department_id===obj.departmentId){
                        console.log(`${obj.name}:${department_name}:${skill}`);
                    }
                })
               }else{
                console.log(`Employee with following skill ${skill} does not exist in our records`)
               }
            })
         }else{
            console.log("please enter the skill for which you want employee name and department name");
         }
    }
}