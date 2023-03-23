
const colors = ['red', 'white', 'blue'];

console.log('value of colors[0]:', colors[0]);
console.log('value of colors[0]:', colors[1]);
console.log('value of colors[0]:', colors[2]);

const flag = 'America is' + ' ' + colors[0] + ' ' + colors[1] + ',' + ' ' + 'and' + ' ' + colors[2] + '.';

console.log(flag);

colors[2] = 'green';

const flag1 = 'Mexico is' + ' ' + colors[0] + ' ' + colors[1] + ',' + ' ' + 'and' + ' ' + colors[2] + '.';

console.log(flag1);

console.log('the value of colors:', colors);

const students = ['John', 'Joe', 'Jeff', 'Jack'];

const numberOfStudents = students.length;

console.log('There are' + ' ' + numberOfStudents + ' ' + 'students in class.');

const lastIndex = numberOfStudents - 1;
const lastStudent = students[lastIndex];

console.log('The last student in the array is', lastStudent + '.');

console.log('value of students:', students);
