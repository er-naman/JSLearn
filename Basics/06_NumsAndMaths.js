const score = 1208
console.log(score);

const newScore = new Number(1997)
console.log(newScore);
console.log(newScore.toString());
console.log(newScore.toFixed(2))


const otherScore = 1208.1997
console.log(otherScore.toPrecision(5));

const localScore = 10929223
console.log(localScore.toLocaleString('en-In'));


//////////////////////////---------------------------- Maths----------------------///////////////

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.3));
console.log(Math.ceil(4.2))
console.log(Math.floor(4.8))

console.log(Math.random())
console.log((Math.random()*10)+1);

const min = 1
const max = 6
console.log((Math.floor(Math.random()*max-min+1)+min));

