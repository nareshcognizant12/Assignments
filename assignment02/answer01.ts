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
//department.map((departobj)
// get all emp id and print the respective department name

employees.map((employee)=>{
  let employeeId=employee.empid;
  department.map((departobj)=>{
    if (employee.departmentId===departobj.id){
        console.log(`${employeeId} : ${departobj.name}`);
    }
})
});
console.log("________________________________________________________________________");
//get all firstnmaes from emp loop and print the department names for respective first name
employees.map((employee)=>{
  let firstname=employee.name.split(" ")[0];
  department.map((departobj)=>{
        if (employee.departmentId===departobj.id){
            console.log(`${firstname} : ${departobj.name}`);
        }
    })
 });
 console.log("________________________________________________________________________");
 // // get all positions from emp loop and print the department names for respective first name
 employees.map((employee) => {
  let position = employee.position;
  department.map((departobj) => {
        if (employee.departmentId === departobj.id) {
            console.log(`${(employee.name.split(" "))[0]}: ${position}: ${departobj.name}`);
        }
    })
})
console.log("________________________________________________________________________");
// // get the employee name and department name who got civil engineering skill
employees.map((employee) => {
  department.map((departobj) => {
      if ((employee.departmentId === departobj.id) && ((departobj.skills?.name) === "civil engineering")) {
          console.log(`${employee.name}: ${departobj.name}`);
      }
  })
})

// employees.map((employee)=>{
//     department.map((departobj)=>{
//       if((departobj.skills?.name) === "civil engineering"){
//         console.log(`${employee.name}: ${departobj.name}`);
//       }
//     })
// })