class Human {
  readonly birthDate: Date;
  constructor(birthDate: Date) {
    this.birthDate = birthDate;
  }
}

let hm = new Human(new Date(2003, 11, 1));
console.log('Check readonly: ', hm);
// hm.birthDate = new Date(2003, 11, 2);
// Cannot assign to 'birthDate' because it is a read-only property.
