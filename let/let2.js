/**
 * Created by jp on 10/06/17.
 */
//2 let in loop scope - if let try to use the same name it will show an error

console.log("using let in loop scope");
let name = "jp;";
if(true){
    let age=42;
}
console.log(name + ' ' + age); //Error as age is not declared