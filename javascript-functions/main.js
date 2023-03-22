function convertMinutesToSeconds(minutes) { // function convert.. being defined we have one perameters minutes //
  return minutes * 60;
}
const minutes = 5;
const seconds = convertMinutesToSeconds(minutes);
console.log('convertMinutesToSeconds:', seconds);

function greet(name) { // funcition //
  return 'Hey' + ',' + ' ' + name;
}
const greeting = greet('Bevis');
console.log('return a greeting:', greeting);

function getArea(width, height) {
  return width * height;
}
const totalArea = getArea(17, 42);
console.log('totalArea:', totalArea);

function getFirstName(person) {
  return person.firstName;
}
console.log('first name of person:', getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  return array[array.length - 1];
}
console.log('the last element is:', getLastElement(['propane', 'and', 'propane', 'accessories']));
