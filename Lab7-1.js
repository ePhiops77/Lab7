"use strict";

//Завдання №1



function Check(num){
    if(typeof(num) !=='number'){
        return '';
    }
    else if(typeof(num) === 'number'){
        if(num%2==0){
            return num+ " - парне";
        }
        else{
            return num+ " - непарне";
        }
    }
}
console.log(Check(10));
console.log(Check(2));
console.log(Check('hello world'));