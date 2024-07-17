const arr=[1,2,3,4,5,6,7,8]
function multiply(value){
    return value*2;
}
function forEachElement(arr,callback){
    for(var ele of arr){
        ele=callback(ele);
    }
    
}
forEachElement(arr,multiply);
console.log(arr);