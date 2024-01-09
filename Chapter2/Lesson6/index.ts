for (let index = 0; index < 10; index++) {
  if (index % 2 == 0) {
    continue;
  }
  console.log(index);
}
console.log('---------------');
let i: number = -1;
while (i < 9) {
  i++;
  if (i % 2 != 0) {
    continue;
  }
  console.log(i);
}
console.log('---------------');
let count: number = 0;
let ind = 9;
do {
  ind++;
  if (ind % 2 == 0) {
    continue;
  }
  count++;
} while (ind < 100);

console.log(count);
