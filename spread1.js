/**
 * Created by jp on 12/06/17.
 */

//Examples of spread operator

let numbers = [1,2,3,4,5];

console.log(typeof numbers);

console.log(...numbers);

//converts an array to individual parameters
console.log(Math.max(...numbers));