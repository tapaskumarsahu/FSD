function mobile(name, price, brand) {
  this.name = name;
  this.price = price;
  this.brand = brand;
}
const mobile1 = new mobile("samsung", 200000, "s25");
const mobile2 = new mobile("IPhone", 200000, "IPhone17 pro");
console.log(mobile1);
console.log(mobile2);
