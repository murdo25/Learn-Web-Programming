function range(n) {
  if (n == 0) {
    return [];
  }
  // We could also just return
  //   // range(n - 1).concat([n - 1]);
    var a = range(n - 1);
    a.push(n - 1);
    return a;
}

console.log(range(5))
