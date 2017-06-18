/**
 * Created by jp on 17/06/17.
 */

//A template is something like the <pre> tag in html if you say in simple words

//#1

let name = "jp";
let description = `
    This is         a test!!
`;
console.log("1. " + description);

//#2 using variable values within template literals - ${variable_name}

description = `
    My name is ${name}
`;

console.log("2. " + description);

//#3 a more complex example
let cYear = new Date().getFullYear();
let bYear = 1975
let age = `My age is ${cYear - bYear}`; //any kind of variable operations can be done within the {}
console.log(age);

//#4 if you want to display the template itself

let cAge = 42
age = `My age is \${cAge + '!!'}`; //if you remove the backslash it will print the expected result
console.log(age);

