const student = {
  firstName: 'Sina',
  lastName: 'Daryaei',
  age: 30
};

student.previousOccupation = 'lab technician';

const fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = true;

console.log('value of student.livesInIrvine:', student.livesInIrvine);

console.log('value of of student.previousOccupation:', student.previousOccupation);

console.log(student);

const vehicle = {
  make: 'Toyota',
  model: 'Suv',
  year: '2020'
};

vehicle['color'] = 'gray';
console.log('value of vechile["color"]:', vehicle['color']);

vehicle['isConvertable'] = false;

console.log('value of vehicle ["isConvertable"]', vehicle.isConvertable);
console.log('value of vechile', vehicle);

const pet = {
  name: 'Big',
  type: 'Dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
