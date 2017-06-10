/**
 * Created by jp on 10/06/17.
 */

//Function level variable hoisting will work as expected

function foo() {
    name = "JP";
}

let name; //you'll have to declare it before you using it. if you put this after foo call there will be a reference error
foo();

console.log(name);