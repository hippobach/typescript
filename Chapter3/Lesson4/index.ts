let getTotal = (...numbers: number[]): number => {
  let total = 0;
  numbers.forEach((num) => (total += num));
  return total;
};

console.log(getTotal(10, 20, 30));
console.log(getTotal(10, 20, 30, 40, 50));

const multiply = (n: number, ...m: number[]) => {
  return m.map((x) => n * x);
};

console.log(multiply(10, 1, 2, 3, 4));

const greeting = (greeting: string, ...names: string[]) => {
  return greeting + ' ' + names.join(', ') + '!';
};

console.log(greeting('Hello', 'Hippo', 'Bach'));
