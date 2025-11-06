// We believed that only the last generation of people lived to be 90 years old. Let's take a closer
// look at this phenomenon. Calculate the average age of people for each century. We assign people to
// a century by taking their year of death, dividing it by 100, and rounding it up: Math.ceil(person.died / 100).
// import {ANCESTRY_FILE} from "./ancestry.js";
//
// function average(array) {
//     function plus(a, b) { return a + b; }
//     return array.reduce(plus) / array.length;
// }
//
//
// function groupByCentenary(array, groupFunc) {
//     let groups = {};
//     array.forEach(function(element) {
//         let key = groupFunc(element);
//         if (!groups[key]) groups[key] = [];
//         groups[key].push(element);
//     });
//     return groups;
// }
//
// let groupedByCentury = groupByCentenary(ANCESTRY_FILE,  person => Math.ceil(person.died / 100));
//
// for (let century in groupedByCentury) {
//     let ages = groupedByCentury[century].map(p => p.died - p.born);
//     console.log(century + ":", average(ages).toFixed(1));
// }

import {ANCESTRY_FILE} from "./ancestry.js";

function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

function groupByCentenary(arr, centenary) {
    let resMap ={}
    let ageArr = []
    arr.forEach(function(person) {
        let age = person.died - person.born;
        let key = centenary(person);

        if(!ageArr[key]) ageArr[key] = [];
        ageArr[key].push(age);
        resMap[key] = average(ageArr[key]);
    })
    return resMap;
}

console.log(groupByCentenary(ANCESTRY_FILE, person => Math.ceil(person.died / 100)));