const name = "Naman"
const projectCount = 13

// console.log(`Hello my name is ${name.To} and my project count is ${projectCount}`);

const projectName = new String('AI Model')
console.log(projectName.length)
console.log(projectName.charAt(4))
console.log(projectName.toUpperCase())
console.log(projectName[3])
console.log(projectName.__proto__);

const varNameStr = new String("Njworld")

const newString = varNameStr.substring(2,7)
console.log(newString);

const anotherString = varNameStr.slice(-7,4)
console.log(anotherString);

const newTrimString = "        Naman        "
console.log(newTrimString);
console.log(newTrimString.trim());


const url = "https://naman.com/naman%20jain"
console.log(url.replace('%20','-'));
console.log(url.includes('naman'));

console.log(varNameStr.split('w'))
