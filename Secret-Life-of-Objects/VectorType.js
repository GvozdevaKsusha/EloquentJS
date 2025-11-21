// Write a Vector constructor that represents a vector in two-dimensional space.
// It takes parameters x and y (numbers) that are stored in properties of the
// same name.Give the Vector prototype two methods, plus and minus, which take
// another vector as a parameter and return a new vector that stores the sum or
// difference of the two vectors (one this, the second – argument) in x and y.
// Add a length getter to the prototype that calculates the length of the
// vector—the distance from (0, 0) to (x, y).

function Vector(x, y){
    this.x = x;
    this.y = y;
}
Object.defineProperty( Vector.prototype, "length", {
    get: function() {
        return Math.sqrt(this.x*this.x + this.y*this.y);
    }
})
Vector.prototype.plus = function(v2) {
    let x = this.x + v2.x;
    let y = this.y + v2.y;
    return new Vector(x, y);
}

Vector.prototype.minus = function(v2) {
    let x = this.x - v2.x;
    let y = this.y - v2.y;
    return new Vector(x, y);
}

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5