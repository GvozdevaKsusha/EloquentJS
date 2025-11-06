// Arrays also have standard methods called every and some. They take a function as an argument, which, when called
// with an array element as an argument, returns true or false. Just as && returns true only if the expressions on
// both sides of the operator return true, the every method returns true when the function returns true for all
// elements of the array. Similarly, some returns true when the specified function returns true for at least
// one of the array elements. They do not process more elements than necessary—for example, if some returns true
// for the first element, it does not process the rest.
// Write every and some functions that work the same way as these methods, but take an array as an argument.

function every(arr, condition){
    return arr.reduce((acc, el) => acc && condition(el), true);
}

function some(arr, condition){
    return arr.reduce((acc, el) => acc || condition(el), false);
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false



// function every(arr, condition){
//     for (let i = arr.length - 1; i >= 0; i--) {
//         if(condition(arr[i]) === false) {
//             return false;
//         }
//     }
//     return true;
// }
//
// function some(arr, condition){
//     for (let i = arr.length - 1; i >= 0; i--) {
//         if(condition(arr[i]) === true){
//             return true;
//         }
//     }
//     return false;
// }