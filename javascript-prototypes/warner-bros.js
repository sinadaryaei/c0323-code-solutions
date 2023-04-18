/* exported yakko, wakko, dot */

const yakko = {
  name: 'Yakko',
  age: 14,
  role: 'brother'
};

const wakko = {
  name: 'Wakko',
  age: 11,
  role: 'brother'
};

const dot = {
  name: 'Dot',
  age: 10,
  role: 'sister'
};

const warnerPrototype = {
  describe: function () {
    const description = this.name + ' is a ' +
      this.age + '-year-old Warner ' + this.role + '.';
    return description;
  }
};
// the setprototypeof method of big O object being called with two arguments //
Object.setPrototypeOf(yakko, warnerPrototype);
Object.setPrototypeOf(wakko, warnerPrototype);
Object.setPrototypeOf(dot, warnerPrototype);
