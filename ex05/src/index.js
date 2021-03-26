// Only change code below this line
let shopingList = new Map();

shopingList.set('Banana', 3);
shopingList.set('Pineapple', 5);
shopingList.set('Pear', 2);
shopingList.set('Carrot', 10);
shopingList.set('Apple', 1.5);

const arrKey = [];
for (let item of shopingList.entries()) {
     arrKey.push(item[0]);
}

for (let item of arrKey) {
  console.log(`groceries: ${item}`);
}

const arrValue = [];

for (let item of shopingList.entries()) {
     arrValue.push(item[1]);
}

for (let item of arrValue) {
     console.log(`amount: ${item}`);
}

for (let items of shopingList.entries()) {
     console.log(`${items[0]}, ${items[1]}`);
}

// Only change code above this line
module.exports = { shopingList, arrKey, arrValue };