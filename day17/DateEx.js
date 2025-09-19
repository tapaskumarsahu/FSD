let dt = new Date();
console.log(dt.getTime());
console.log(dt.getMonth()); //array index format
console.log(dt.getDate());
console.log(dt.getDay()); //indexing format
console.log(dt.getHours());
console.log(dt.getMinutes());
console.log(dt.getSeconds());
console.log(dt.getMilliseconds());
console.log(dt.toDateString());
console.log(Date.now()); //millisecond from 1 jan 1970 till now

//use set to set date in custom type
dt.setFullYear("2024");
console.log(dt.getFullYear());
dt.getDate();
