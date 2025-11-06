// Using the dataset from the example, calculate the average age difference between mothers and their children
// (this is the mother's age at the time of the child's birth). You can use the average function described in
// the chapter. Please note that not all mothers mentioned in the dataset are present in it. The byName object,
// which simplifies the process of searching for a person by name, may be useful here.
import {ANCESTRY_FILE} from "./ancestry.js";

function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

let byName = {};
ANCESTRY_FILE.forEach(function(person) {
    byName[person.name] = person;
});

let res = [];
ANCESTRY_FILE.forEach(function(person) {
    let born;
    let motherAge;
    if(person.mother !=null && byName[person.mother]){
        born = person.born;
        motherAge = byName[person.mother].born
        res.push(born - motherAge)
    }
})

console.log(average(res))
// → 31.2