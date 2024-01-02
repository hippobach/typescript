let student: (string | number)[] = ['Nguyen', 'Xuan', 'Bach', 18];

student.push('Nam Dinh');
console.log(student);

let names: readonly string[] = ['James'];
// names.push('Adam');
// Property 'push' does not exist on type 'readonly string[]'

// Typescript can infer the type of an array if it has values
const vehicle = ['Toyota', 'Bentley', 'Nissan'];
