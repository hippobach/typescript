class Employee {
  public empCode: string;
  empName: string;

  constructor(empCode: string, empName: string) {
    this.empCode = empCode;
    this.empName = empName;
  }
}

let emp = new Employee('123', 'Xuan Bach');
// Modify code
emp.empCode = '345';
emp.empName = 'Hippo Bach';

console.log('Check code: ', emp);
