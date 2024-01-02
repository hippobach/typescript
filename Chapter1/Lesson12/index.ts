function handleException(error: string) {
  throw new Error(error);
}

let a = handleException('Just a test case');
console.log(a);
