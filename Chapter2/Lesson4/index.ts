// While Loop
let counter: number = 0;

while (counter < 5) {
  console.log(counter);
  counter++;
}
console.log('*************');
let num: number = 0;

while (num < 10) {
  if (num % 2 == 0) {
    console.log(num);
  }
  num++;
}
console.log('*************');
// Do While Loop
let c: number = 0;
do {
  if (c % 2 != 0) {
    console.log(c);
  }
  c++;
} while (c < 10);
