
//basic of array

//initialization
let carBrand = ['Tesla', 'Ford', 'BMW', 'Audi', 'jeep', 'Porsche', 'jaguar', 'Ferrari', 'Dodge' ];

// constructor way initialization 
let newBrand = new Array('Nissan', 'Bugatti', 'Rolls-Royce', 'Saab', 'KTM');

console.log(`car brand name: ${carBrand}`);
console.log(`car brand name of typeOf: ${ typeof carBrand}`); //object in result
console.log(`new brand typeof: ${typeof newBrand}`);

console.log(carBrand.length);

carBrand[9] = 'Suzuki';

console.log(carBrand[9]);

