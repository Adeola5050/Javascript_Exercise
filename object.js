var person={
    firstName : "Esther",
    age: 21,
    isFemale: true,
    balance:100.32,
    dob: new Date(2000, 1, 28).toJSON(),
    address:{
        city:"London",
        postCode: "SW9"
    }
};

console.log(person)

//methods
console.log(person.firstName)
console.log(person.age)
console.log(person.balance)
console.log(person.address)