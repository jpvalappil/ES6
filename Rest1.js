/**
 * Created by jp on 12/06/17.
 */

//if a function expects to get array but getting scalar values
//At the receiving end these individual values will be converted to an array by the rest operator

//#1 following function will not work as it expects an array as its argument and gets a scalar value
/*function sumIt(numToAdd) { //It expects an array
    let res = 0;
    for(let i = 0, l = numToAdd.length; i < l; i++) {
        res += numToAdd[i];
    }
    return res;
}
sumIt(1,2);*/

//#2 sumIt function expects an array but we pass two individual values
//Since we've used the rest operator at the receiving end converted the individual values
//to an array

function sumIt(...numToAdd) { //It expects an array
    let res = 0;
    for(let i = 0, l = numToAdd.length; i < l; i++) {
        res += numToAdd[i];
    }
    return res;
}
console.log(sumIt(1,2));