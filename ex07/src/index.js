// Only change code below this line
let numberArray = [9, 5, 4, 11, 5, 12, 13, 15, 4, 2, 5];
let mySet = new Set([numberArray]);

let uniqueArray = [];
for (let item of mySet) {
    uniqueArray.push(item);
    console.log(uniqueArray);
}
// Only change code above this line
module.exports = { numberArray, uniqueArray};
