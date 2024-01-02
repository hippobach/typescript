const addNumberOrString = (a: number | string, b: number | string) => {
  if (typeof a === 'string' && typeof b === 'string') {
    console.log('Check Union Type =>>', a.concat(b));
  } else if (typeof a === 'number' && typeof b === 'number') {
    console.log('Check Union Type ==>', a + b);
  } else {
    console.log('Parameters must be number or string');
  }
};

addNumberOrString(13, 2);
addNumberOrString('Bach', 'Nguyen');
