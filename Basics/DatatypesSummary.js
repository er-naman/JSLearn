// Primitive

// 7 Types : String, Number, Boolean, null, Undefined, Symbol, BigInt

let String = "Naman"
let Number = 1208
let isAvailable = true
let value = null
let balance;

let id = Symbol("1208")
let newId = Symbol("1208")
// console.log(id);
// console.log( newId)

let bigNumber = 28298329820033n //bigint


// Non-Primitive Reference Type

// Arrays, Objects, Functions

const SPD = ["Naman", "Kritika", "Rajat", "Preeti"]
let userDetails = {
    name: "UserMan",
    age:27
}

const myFunction = function(){
    console.log("Hello Naman");
    
}
//myFunction();


//******************* */

// Stack (Primitive) and Heap (Non-Primitive)

// when we are using stack memory
let userID = "naman_nj1"
let userID2 = userID
userID2 = "naman_nj2"

console.log(userID);
console.log(userID2);

// when we are using heap memory
let user1 = {
    email : "naman@google.com",
    age : 33
}

let user2 = user1

user2.email = "naman@meta.com"
console.log(user2.email);
console.log(user1.email);

