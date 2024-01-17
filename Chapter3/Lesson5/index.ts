function addNew(a: number, b: number): number;
function addNew(a: string, bL: string): string;

function addNew(a: any, b: any) {
  return a + b;
}

console.log(addNew(1, 4));
console.log(addNew('Bach', 'Nguyen'));
