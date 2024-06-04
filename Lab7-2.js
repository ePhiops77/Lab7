"use strict";


//Завдання №2 

function Test(num) {
    if (num < 1) return false; 
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false; 
    }
    return true; 
}


function sumOfFirstFive() {
    let primes = [];
    let num = 1; 

    while (primes.length < 5) {
        if (Test(num)) {
            primes.push(num); 
        }
        num++;
    }

    
    let sum = 0;
    for (let i = 0; i < primes.length; i++) {
        sum += primes[i];
    }

    return sum;
}

console.log('Сума перших 5 простих чисел = ' +sumOfFirstFive()); 
