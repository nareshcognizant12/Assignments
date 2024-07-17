const arr=[1,2,3,4,5,6,7,8]
function multiply(value){
    return value*2;
}
function forEachElement(a,callback){
     for(let i=0;i<a.length;i++){
        arr[i]=multiply(arr[i]);
     }
     return a;
    
}
let result=forEachElement(arr,multiply);
console.log(result);
