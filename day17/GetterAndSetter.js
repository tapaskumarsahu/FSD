let obj = {
  fname: "kunal",
  lname: "verma",
  age: 26,
  get fullName() {
    return this.fname + " " + this.lname;
  },
  set setFirstName(updateName) {
    this.fname = updateName;
  },
};
console.log(obj.fullName);
obj.setFirstName = "Manas";
console.log(obj.fullName);
