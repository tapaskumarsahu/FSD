function even(start, end) {
  if (start > end) {
    return;
  }

  if (start % 2 === 0) {
    console.log(start);
  }

  even(start + 1, end);
}

even(1, 10);
