let mobile = {
  name: "Samsung",
  price: 1200000,
  model: "S25 ultra",
};
// console.log(mob.model);
// console.log(mob.name);
// console.log(mob.price);
for (let key in mobile) {
  console.log(mobile[key]);
  mobile[key] = "mobile" + mobile[key];
}
