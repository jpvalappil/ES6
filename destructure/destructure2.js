/**
 * Created by jp on 17/06/17.
 */
//destructuring - Objects

//If you are working with object then instead of using [] like the way
//used with array use {}
    //Another difference is we don't destructure the object by position but by name

//#1 Destructuring from a simple object

let Student = {
    name: "JP",
    age: 42,
    show: function() {
        //return [this.name, this.age];
        console.log('The name is ' + name + ' and the age is '+ age);
    },
    getName: function() {
        return name;
    }
};
console.log(Student);
let {name, age} = Student; //destructuing the object
console.log(name, age);

//#2 extracting function
let {show} = Student;
show();

//#3 using alias. Once you use alias then you will not be able to use the original method name
//
let {getName: getStudName} = Student;
console.log(getStudName());