let sum3 = (x: number, y: number, z?: number): number => {
  if (z) return x + y + z;
  return x + y;
};

console.log('Tong bang: ', sum3(1, 2, 3));
console.log('Tong bang: ', sum3(1, 2));
