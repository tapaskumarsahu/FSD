let promise = new Promise((res, rej) => {
  let marks = 90;
  if (marks >= 90) {
    setTimeout(() => {
      res("Your new Laptop");
    }, 3000);
  } else {
    setTimeout(() => {
      rej("Maar padega!");
    }, 3000);
  }
});

promise.then((msg) => console.log(msg)).catch((err) => console.log(err));
