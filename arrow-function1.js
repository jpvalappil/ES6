/**
 * Created by jp on 10/06/17.
 */

function foo() {
    console.log('foo invoked');
}

foo();

//#1 the arrow function
var fn = () => {
    console.log('fn invoked');
}
fn();

//#2 a single line function body can be represented using the following way

var fn1 = () => console.log('fn1 invoked');
fn1();

//#3 a function with a single return value can be done like the following
// if the function body contains multiple lines then using the method involving var fn = () => {} way

var fn2 = (num1, num2) => num1 + num2;
console.log('The sum is : ' + fn2(8,6));

//#4 arrow function with a single parameter can be implemented without using parantheses
//The parantheses can be skipped only if there is a single parameter in all other situations
//we need to use the parantheses

var fn3 = age => console.log('The Age is : ' + (age ? age: 'Not provided'));
fn3(40);

//#5 with a timer
setTimeout(() => {
    console.log('With the timer ');
    console.log('Inside the timer');
}, 1000);

//# 6 this keyword and arrow function
var fn4_1 = function(){
    console.log(this);
}
var fn4_2 = () => {
    console.log(this);
}
fn4_1(); //it prints the this keyword of window object
fn4_2(); //it tries to print the this keyword of fn4 function