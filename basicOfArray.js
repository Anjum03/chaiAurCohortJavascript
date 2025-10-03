
//basic of array

//initialization
let carBrand = ['Tesla', 'Ford', 'BMW', 'Audi', 'jeep', 'Porsche', 'jaguar', 'Ferrari', 'Dodge'];

// constructor way initialization 
let newBrand = new Array('Nissan', 'Bugatti', 'Rolls-Royce', 'Saab', 'KTM');

console.log(`car brand name: ${carBrand}`);
console.log(`car brand name of typeOf: ${typeof carBrand}`); //object in result
console.log(`new brand typeof: ${typeof newBrand}`);

console.log(carBrand.length);

carBrand[9] = 'Suzuki';

console.log(carBrand[9]);


//function with array 

let funcArr = [1, 23, 5, 6, 754, 2];

function sumOfArr(num) {
    let sum = 0;

    for (let i = 0; i < num.length; i++) { // loop m i = 0th index, 1, 2,4,5,6,7time loop exist 
        sum += num[i]  // sum = 0,1, 24, 29, 35, 789, 801    // (sum += i) = 1 , 24, 29, 35, 789, 791  
    }
    return sum; // 791
}

console.log(sumOfArr(funcArr));

