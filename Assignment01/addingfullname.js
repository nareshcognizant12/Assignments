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