/**
 * Created by jp on 17/06/17.
 */

//Destructure is about extracting some pieces from complex data structures like arrat

//#1 extracting some values from an arry

let numbers = [1,2,3];

let [a,b] = numbers; //assign the first value in a and the next one in b variables

console.log('Value of a: '+ a + ' and b: '+ b);
console.log('The value stored in the array would remain the same');
console.log(numbers);

//#2
let [c,d,e,f] = numbers; //try to access a non-existing 4th element from the array
console.log(f);

//#3 with rest operator

let [n1, ...ns] = numbers; //ns will be array that contains everything from numbers except the first element
console.log(n1);
console.log(ns);

//#4 While destructing we can even provide a default value

let [a1, b1, c1=5, d1 = 10] = numbers; //numbers has  only 3 elements. d1 will get 10, which is the default value
console.log(a1, b1, c1, d1);