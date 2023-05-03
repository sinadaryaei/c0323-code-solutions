/* exported calculator */
const calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return Math.pow(x, 2);
  },
  sumAll: function (numbers) {
    let numbNew = 0;
    for (let i = 0; i < numbers.length; i++) {
      numbNew += numbers[i];
    }
    return numbNew;
  },
  getAverage: function (numbers) {
    let average = 0;
    for (let i = 0; i < numbers.length; i++) {
      average += numbers[i];
    }
    average = average / numbers.length;
    return average;
  }
};
