function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(3, 5));

let sumary = (a: number, b: number): number => {
  return a + b;
};

console.log(sumary(1, 9));

const sum1 = (x: number, y: number): number => {
  return x + y;
};

console.log('Check sum1: ', sum1(2, 5));
