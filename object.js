

// Problem: Create an object representing a type of tea with properties of name, type, and caffeine content.

let tea = {
    name: "Ginger Tea",
    type: "Hot",
    caffeine: "Strong"
}
console.log(tea);

// Problem: Access and print the name and type properties of the tea object.
console.log(tea["name"]);
console.log(tea.type);
console.log(`tea name: ${tea.name} and type: ${tea.type}`);

// Problem: Add a new property origin to the tea object.
tea.origin = "Mumbai"
console.log(tea.origin);
// console.log(tea.origin , tea);

// Problem: Change the caffeine level of the tea object to "Medium".
tea.caffeine = "Medium";
console.log(tea.caffeine);

// Problem: Remove the type property from the tea object.
delete tea.type
console.log(tea);

// Problem: Check if the tea object has a property origin.
console.log(tea.hasOwnProperty("origin"));
console.log(tea.origin, "origin" in tea);

// Problem: Use a for...in loop to print all properties of the tea object.

for( let teaObj in tea){
    console.log(`teaObj properties using for in loop: ${teaObj}`)
}

// Problem: Create a nested object representing different types of teas and their properties.

let teaVariation = {
    name: 'green tea',
    origin : "china",
    caffeine : "strong",
    type: {
        herbal: {
            benefits: "Sardi"
        },
        black: {
            benefits: "sar dard"
        }
    }
}

// Problem: Create a copy of tea object.
const copyTeaVariation = {
    ...teaVariation 
}

console.log(copyTeaVariation);

// Problem: Add a custom method to describe the tea object that returns a description string.
let teaObject = {
    name: "lemon Tea",
    describe: function () {
        return (`Here is ${this.name}`)
    }
}
console.log(teaObject);
console.log(teaObject.describe());

// Problem: Merge two objects representing different teas into one.
const combineTea = {...copyTeaVariation, ...tea}
console.log(combineTea);

