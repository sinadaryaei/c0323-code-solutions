/* exported student */
const student = {
  firstName: 'Sam',
  lastName: 'Ham',
  subject: 'JavaScript',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
  getSubject: function () {
    return this.subject;
  },
  getIntroduction: function () {
    return 'Hello, my name is ' + this.getFullName() + 'and I am studying' + this.getSubject();
  }
};
