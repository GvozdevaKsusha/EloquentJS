// Use the reduce method in combination with concat to flatten an array of arrays into a single array
// that contains all elements of the input arrays.

//var arrays = [[1, 2, 3], [4, 5], [6]];
// → [1, 2, 3, 4, 5, 6]

var arrays = [[1, 2, 3], [4, 5], [6]];

const res = arrays.reduce((acc, item) => acc.concat(...item));

console.log(res)