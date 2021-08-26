const Employee = require("./types/employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    this.school = school;
    super(name, id, email);
  }
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;