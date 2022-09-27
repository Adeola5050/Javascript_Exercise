// Funtions can be called

function addNumbers(number1, number2){
var addition= number1 + number2
return addition;

}

var result1= addNumbers(10, 10);
var result2= addNumbers(7,3);

// console.log(result1)
// console.log(result2)


var person= {
    name: "Racheal",
    age: 21,
    address: "New York",
    profession: "Lawyer",
    position: "General Manager"
}
console.log(Object.values(person))
console.log(Object.keys(person))
console.log("Racheal".toUpperCase())
console.log("Racheal".toLowerCase())
console.log("Racheal".indexOf("c"))