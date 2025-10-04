
class Person {

    constructor (name, age){

        this.name = name
        this.age = age
    }

    //method
    getFullDetails() {
        return `${this.name} with age ${this.age}`
    }
}

const p1 = new Person('Ayaan', 6)
console.log(p1);
console.log(p1.getFullDetails());
// console.log(p1.getFullDetails); // not working
