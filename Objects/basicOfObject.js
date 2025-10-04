


//prototype learning 

const userDetails ={
    id: 1,
    firstName : "Ayaan",
    lastName : "Ansari",
    getFullName : function (){
        return `${this.firstName} ${this.lastName}`
    }
}

const userAccess = {
    purchase : true,
    location : true,
    orderItem : 5,
    price: 5678
}

console.log(userDetails.getFullName());

//spread operator in object which mean copy all the data in new object 
let userProfessionalInfo = {
    ...userDetails,
    address: {
        country:"India",
        state: "Maharashtra",
        cite: "Mumbai"
    },
    officeLocation : {
        employeeAccess:{ ...userAccess}
    }
}

console.log(userProfessionalInfo);

//json  - stringify 
const copiedData = JSON.stringify(userDetails)
console.log(copiedData);

const newData = JSON.parse(copiedData);
console.log(newData);

newData.firstName = "Hasnain";
console.log(newData);
console.log(userDetails);
