/**
 * Created by jp on 10/06/17.
 */

<<<<<<< HEAD
//Function level variable hoisting will work as expected

function foo() {
    name = "JP";
}

let name; //you'll have to declare it before you using it. if you put this after foo call there will be a reference error
=======
//let at variable hoisting at a function level behave bit differently
//

function foo() {
    name = "Jayaprakash";
}

let name; //The declaration of hoisted variable should be done before invoking them

>>>>>>> jpvalappil-patch-1
foo();

console.log(name);