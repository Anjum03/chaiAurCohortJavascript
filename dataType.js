

//primitive  and non- primitive
// primitive is(pass by value) which means copies available of memory;
//non primitive id ( pass by reference) The variable holds a reference (pointer) to the memory location. Changes affect the original object.;
// Primitive types are passed by value (copy in memory), while non-primitive types are passed by reference (linked to original memory).

// ------- Primitive Type ---------- Immutable - No value change
//string, symbol, number, null, boolean, bigInt, undefined

//String - sequence of characters
const myStr = "Anjum Ansari";

//Number
const myNum = 40;

// Boolean - true or false 
let isLoggedIn = true;

//null - intentional absence of value
let motivation = null;


//undefined - baad m dekenge ;
let goal;

//Symbol - uniqueness


// bigInt - large size of number 


// print 
console.log(motivation);


//check typeof undefine, null, number
console.log(typeof motivation)
console.log(typeof goal)
console.log(typeof myNum);


// ------- NoN Primitive Type ---------- mutable which means value changed
// object , function, array 
//object - real value holds with key pairs
let myObj = {
    name: "Ayaan Ansari",
    age: 7,
    isLoggedIn: false,
    motivation: null,
    hobbies: ['Playing', 'Scrolling', 'ski', 'travelling']
}

//array - Ordered list of items (can hold mixed data types)
let myArr = ['Hassain', 4, false, { isLoggedIn: true }, ['Swimming', 'car racing']];

//function - block of reusable code 
function myFun() {
    console.log(`This is function............`)
}

