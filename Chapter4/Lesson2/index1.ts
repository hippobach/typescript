class Employee1 {
  public empCode: string;
  protected empName: string;
  private empCnt: string;

  constructor(empCode: string, empName: string, empCnt: string) {
    this.empCode = empCode;
    this.empName = empName;
    this.empCnt = empCnt;
  }
}

let emp1 = new Employee1('123', 'Xuan Bach', "Nam Dinh");
// Modify code
emp1.empCode = '348';

// protected access modifier
// emp1.empName = 'Hippo Bach';

// private access modifier
// emp1.empCnt = "Ha Noi";

console.log('Check code: ', emp1);
