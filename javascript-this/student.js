/* exported student */
const student = {
  firstName: 'Sam',
  lastName: 'Ham',
  subject: 'JavaScript',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction: function (string) {
    return this.string + this.getFullName + this.subject;
  }
};
