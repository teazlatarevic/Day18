// Only change code below this line
let rockStar = new Map([
    ['artist', 'The Rolling Stones'],
    ['song', 'Angie'],
    ['album', 'Goats Head Soup'],
    ['singer', 'Mick Jagger']
]);

let newRock = new Map();
for (item of rockStar) {
    if (item[0].charAt(0) > "a") {
        newRock.set(item[0], item[1]);
    }
}
console.log(newRock);
// Only change code above this line
module.exports = { rockStar, newRock };