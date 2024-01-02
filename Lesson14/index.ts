// type aliases in typescript
type calculateType = number | string;

const addNumberOrString = (a: calculateType, b: calculateType) => {
  if (typeof a === 'string' && typeof b === 'string') {
    console.log('Check Union Type =>>', a.concat(b));
  } else if (typeof a === 'number' && typeof b === 'number') {
    console.log('Check Union Type ==>', a + b);
  } else {
    throw new Error('Parameters must be number or string');
  }
};

addNumberOrString(13, 2);
addNumberOrString('Bach', 'Nguyen');
// addNumberOrString('Bach', true);
