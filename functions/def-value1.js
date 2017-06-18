/**
 * Created by jp on 12/06/17.
 */

//function parameters can have default value
//These values will come in to play if the
//caller omits the argument

function isPrime(n = 10) {
    var half = parseInt(n / 2);

    for(var i = 2; i < half; i++) {
        if(n % i === 0) {
            return false
        }
    }
    return true;
}

console.log(isPrime(11));

function isEqual(n1=0, n2) {
    return n1 === n2;
}

console.log(isEqual(10)); //This will give us false as the provided argument indicates parameter 1 and the second parameter will be uninitialized and undefined
