//     Develop an interface that abstracts traversal through a set of values.
//
//     An object with such an interface represents a sequence, and the interface
// should allow the code to traverse the sequence, work with the values
// that comprise it, and somehow signal that we have reached the end of
// the sequence. Once you have defined the interface, try to create a
// logFive function that takes a sequence object and calls console.log
// for its first five elements—or fewer, if there are fewer than five.
//
//     Then create an ArraySeq object type that wraps an array and allows
// you to iterate over the array using the interface you developed.
//
//     Create another object type, RangeSeq, that iterates over a range
// of numbers (its constructor should accept from and to arguments).
//
function CommonInterface(){}

CommonInterface.prototype.getCurrentValue = function() {}

CommonInterface.prototype.nextValue = function() {}

CommonInterface.prototype.isEnded = function() {}

function ArraySeq(array) {
    this.array = array;
    this.index = 0;
}
ArraySeq.prototype.getCurrentValue = function() {
    return this.array[this.index];
}

ArraySeq.prototype.nextValue = function() {
    this.index++;
}

ArraySeq.prototype.isEnded = function() {
    return this.index >= this.array.length;
}

function RangeSeq(from, to) {
    this.currentValue = from;
    this.to = to;
}
RangeSeq.prototype.getCurrentValue = function() {
    return this.currentValue;
}

RangeSeq.prototype.nextValue = function() {
    return this.currentValue++;
}

RangeSeq.prototype.isEnded = function() {
    return this.currentValue >= this.to;
}

function logFive(obj){
    let i =0;
    while(!obj.isEnded() && i<5) {
        console.log(obj.getCurrentValue())
        obj.nextValue()
        i++;
    }
}

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104