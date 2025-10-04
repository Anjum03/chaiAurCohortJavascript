
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

//problems

// Problem: Create an array containing different types of teas.
const tea = ['black tea', 'ginger tea', "Oolong Tea", 'lemon tea', 'green tea'];


// Problem: Add "Chamomile Tea" to the existing list of teas.
tea.push('chamomile tea');
console.log(tea);

// Problem: Remove "Oolong Tea" from the list of teas.
// tea.pop()
// firstly index find kro fir if condition se check kro if h to remove that 
let findIndex = tea.indexOf("Oolong Tea"); // find index
// if(findIndex === "Oolong Tea") {
if (findIndex > -1) {
    tea.splice(findIndex, 1) // remove karna h splice existing m se remove karta h 
}
console.log(tea)

// Problem: Filter the list to only include teas that are caffeinated.
const filterCaffeine = tea.includes("lemon tea");
// const filterCaffeine = tea.includes("herbal tea");
console.log(filterCaffeine);

// Problem: Sort the list of teas in alphabetical order.
const sortingAlphabeticalOrder = tea.sort()
console.log(sortingAlphabeticalOrder);


const test = ["🐓", "🥚", "🐣"];
console.log(test);

// Problem: Use a for loop to print each type of tea in the array.
for (let i = 0; i < tea.length; i++) {
    console.log(tea[i]);
}

for (const teaItem of test) {
    console.log(teaItem)
}

// Problem: Use a for loop to count how many teas are caffeinated (excluding "herbal tea").
let result = 0
for (let i = 0; i < tea.length; i++) {
    if (tea[i] !== 'herbal tea') {
        result++
    }

}
console.log(result);

let box = 0;
for (let teaStall of tea) {
    if (teaStall !== "herbal tea") {
        box++
        // console.log(box);

    }
}
console.log(box);

// Problem: Use a for loop to create a new array with all the tea names in uppercase.
let newArrayBox = [];
for (let i = 0; i < tea.length; i++) {
    newArrayBox.push(tea[i].toUpperCase())
}
console.log(newArrayBox);

let newBox = [];
for (const teaItem of tea) {
    newBox.push(teaItem.toUpperCase())
}
console.log(newBox);

// Problem: Use a for loop to find the tea name with the most characters.
let blank = ""
// for (let i = 0; i < tea.length; i++) {
//     if (tea[i].length > blank.length) {
//         blank = tea[i]
//     }
// }

for (const item of tea) {
    if (item.length > blank.length) {
        blank = item
    }
}
console.log(blank);

// Problem: Use a for loop to reverse the order of teas in the array.
// let container = [];
for (let i = test.length-1; i >= 0; i--) {
    console.log('-----',test[i])
}

