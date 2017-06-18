/**
 * Created by jp on 10/06/17.
 */

//APPLYING CONST ON REFERENCE TYPE WILL NOT WORK AS EXPECTED
    //THIS IS BECAUSE REFERENCE VARIABLE IS A POINTER AND IT DOES NOT HAVE ANY VALUE
    //THE FOLLOWING EXAMPLE WILL WORK AND WILL ADD A NEW ITEM THOUGH WE DECLARE IT AS CONST

    //#1
const  PRIMES = [2, 3, 5, 7];
console.log(PRIMES);
PRIMES.push(11);
console.log(PRIMES);

//#2

const ME = {
    name: "Jayaprakash",
    age: 43
};
console.log(ME);

ME.age = 42; //Changing the object
console.log(ME);
