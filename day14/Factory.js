// if any function returns an object that is called factory function. it works  as template to create object without constuctor.
function product(name, price, lunch, quantity) {
  return {
    Name: name,
    Price: price,
    Lunch: lunch,
    Quantity: quantity,
  };
}
let product1 = product("S25 ultra", 120000, 2025, 1);
console.log(product1);
let product2 = product("17 Pro", 120000, 150000, 1);
console.log(product2);
