"use strict";

//Завдання №3

function sum(n) {
    let result = 0;
    let a = 1;
    let b = 0;
    let text = "Sum = ";
    

    for (let i = 0; i < n; i++) {

        b = b * 10 + a;

        text += b;

        result += b;

        if ((i + 1) < n) {
            text += " + ";
        }
    }


    text += " = " + result;
    
    return text;
}

console.log(sum(6));
