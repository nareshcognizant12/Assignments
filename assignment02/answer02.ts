// // prerequisites
// // 1) the 2 entities should be mapped to interface, so 2 interfaces should be created
// // 2) create 2 classes that implements these interfaces

// interface department{
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

// interface employees{
//     empid: number,
//     name: string,
//     departmentId: number,
//     position: string
// }

// class Department implements department{

//      constructor (  public id:number,
//                     public name:string,
//                     public location:string,
//                     public  skills?:{
//                                      name:string,
//                                      proficiency:string
//                                     },
//                     public rewards?:{
//                                      name:string,
//                                      points:string
//                                     })
//         {
//             this.id=id;
//             this.name=name;
//             this.location=location,
//             this.skills=skills,
//             this.rewards=rewards

//         }
// }

// class Employees  implements employees {
//      constructor(public empid: number,
//                  public name: string,
//                  public  departmentId: number,
//                  public position: string
//                  )
//      {
                 
//                  this.empid=empid,
//                  this.name=name,
//                  this.departmentId=departmentId,
//                  this.position=position

//      }
// }