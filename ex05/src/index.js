// Only change code below this line
let shoppingList = new Map();

shoppingList.set('Banana', 3);
shoppingList.set('Pineapple', 5);
shoppingList.set('Pear', 2);
shoppingList.set('Carrot', 10);
shoppingList.set('Apple', 1.5);

const arrKey = [];
for (let item of shoppingList.entries()) {
     arrKey.push(item[0]);
}

for (let item of arrKey) {
  console.log(`groceries: ${item}`);
}

const arrValue = [];

for (let item of shoppingList.entries()) {
     arrValue.push(item[1]);
}

for (let item of arrValue) {
     console.log(`amount: ${item}`);
}

for (let items of shoppingList.entries()) {
     console.log(`${items[0]}, ${items[1]}`);
}

// Only change code above this line
module.exports = { shoppingList, arrKey, arrValue };