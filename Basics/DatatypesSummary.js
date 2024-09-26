// Primitive

// 7 Types : String, Number, Boolean, null, Undefined, Symbol, BigInt

let String = "Naman"
let Number = 1208
let isAvailable = true
let value = null
let balance;

let id = Symbol("1208")
let newId = Symbol("1208")
console.log(id);
console.log( newId)

let bigNumber = 28298329820033n //bigint


// Non-Primitive Reference Type

// Arrays, Objects, Functions

const SPD = ["Naman", "Kritika", "Rajat", "Preeti"]
let userDetails = {
    name: "Twinkle",
    age:27
}

const myFunction = function(){
    console.log("Hello Naman");
    
}
myFunction();