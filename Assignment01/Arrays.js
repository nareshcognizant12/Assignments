let customers = [
    {
       'id': 1,
       'f_name': 'Abby',
       'l_name': 'Thomas',
       'gender': 'M',
       'married': true,
       'age': 32,
       'expense': 500,
       'purchased': ['Shampoo', 'Toys', 'Book']
    },
    {
       'id': 2,
       'f_name': 'Jerry',
       'l_name': 'Tom',
       'gender': 'M',
       'married': true,
       'age': 64,
       'expense': 100,
       'purchased': ['Stick', 'Blade']
    },
    {
       'id': 3,
       'f_name': 'Dianna',
       'l_name': 'Cherry',
       'gender': 'F',
       'married': true,
       'age': 22,
       'expense': 1500,
       'purchased': ['Lipstik', 'Nail Polish', 'Bag', 'Book']
    },
    {
       'id': 4,
       'f_name': 'Dev',
       'l_name': 'Currian',
       'gender': 'M',
       'married': true,
       'age': 82,
       'expense': 90,
       'purchased': ['Book']
    },
    {
       'id': 5,
       'f_name': 'Maria',
       'l_name': 'Gomes',
       'gender': 'F',
       'married': false,
       'age': 7,
       'expense': 300,
       'purchased': ['Toys']
    }
 ];

 //1.items purchased by senior citizens
const productsPurchased=customers.filter((item)=>item.age>60).map((item)=>{console.log(item.f_name+""+item.l_name+" "+item.age+"  ["+item.purchased+"]")});
console.log("_______________________________________________________________________________")
//2.adding fullname property to every customer object and also title
//console.log(customers[0].fullname="Mr.Abby Thomas");
// delete customers[0].fullname;
// console.log(customers[0]);
const updatedCustomers=customers.map((item)=>{
    let title;
    if(item.gender==="F"){
       title=item.married? 'Mrs.':'Ms.';
    }else{
        title='Mr.';
    }
    //Object.assign(item,{fullname:`${title}${item.f_name} ${item.l_name}`});
    //item.fullname=title+item.f_name+" "+item.l_name;
    item['fullname']=title+item.f_name+" "+item.l_name;
    return item;
});
//console.log(customers[2].fullname);
//console.log(updatedCustomers);
console.log("_______________________________________________________________________________")
//3.finding young customer*/
customers.filter((item)=>{
    if(item.age<10){
        console.log(item.fullname+" "+true);
    }else{
        console.log(item.fullname+" "+false);
    }
})