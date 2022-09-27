// Const
/**let brand= "Amigoscode";

// Re-Assigning to a variable
brand= {};
brand= 10;

// execution
console.log(brand)

// re-assigning function into t
brand= function(){
    return "Hello"
}
// execution can be done by invoking
console.log(brand()) **/



// const variable cannot be re assigned
// value of string doesnt change
const brand= "Amigoscode";

// appending properties into object
const brandObject={};
brandObject["brand"]= brand;

// delete keyword can be used to delete an object
// object can be muted but cannot re-assign
delete brandObject.brand


// execution
console.log(brand)
console.log(brandObject);

