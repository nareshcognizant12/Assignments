//3.finding young customer*/
customers.filter((item)=>{
    if(item.age<10){
        console.log(item.fullname+" "+true);
    }else{
        console.log(item.fullname+" "+false);
    }
})