let sum6 = (x: number, y: number, z = false) => {
  if (z == false) {
    return x + y;
  } else {
    return x + y;
  }
};

console.log('Check sum: ', sum6(2, 3, false));
console.log('Check sum: ', sum6(2, 6, true));
