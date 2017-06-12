/**
 * Created by jp on 12/06/17.
 */

//#1
let Student = {
    name: "JP",
    age: 42
};

console.log(Student)

//#2 In the below eg the Master object literal will take the variable name as the key and its values will be assigned
let name = "jp", age = 42;
let [ageField] = 'showAge'; //dynamic field
let  Master = {
    name,
    age
}
console.log(Master);

//#3
let nam = "jp", ag = 42;
let Patient = {
    nam:  "Allan",
    ag,
    greet: function() {
        console.log(this.nam +','+ this.ag);
    },
    'greet1'() { //a function name can be put within quotes and can event have spaces in it
        console.log('calling greet1');
    },
    'greet name'() {
        console.log('calling greet name function');
    },
    [ageField](){
        console.log('function with dynamic function name invoked');
    }
}
Patient.greet();
Patient['greet1']();
Patient['greet name']();
Patient[ageField]();
