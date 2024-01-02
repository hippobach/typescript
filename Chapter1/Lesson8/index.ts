// Tuple is a typed array with pre-defined lengths and types for each index
let car: [string, number, boolean];
car = ['Toyota', 1950, true];
console.log(car);

let car1: readonly [string, number];
// car1.push('Bach Nguyen')
// Property 'push' does not exist on type 'readonly [string, number]'
