/**
 * Created by jp on 10/06/17.
 */

//let at variable hoisting at a function level behave bit differently
//

function foo() {
    name = "Jayaprakash";
}

let name; //The declaration of hoisted variable should be done before invoking them

foo();

console.log(name);