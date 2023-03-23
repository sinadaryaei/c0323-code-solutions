// one is being assigned to the numb1 variable
const numb1 = 1;
const numb2 = 2;
const numb3 = 4;
// max method of the math obejct being called with 3 arguemnts being called
console.log('maximumValues:', Math.max(numb1, numb2, numb3));

const heroes = ['spiderman', 'superman', 'batman', 'hulk'];
const randomNumber = Math.random() * heroes.length; // random method is being called to the math object
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex', randomIndex);

const randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

const library = [
  { title: 'To kill a Mockingbird', author: 'Harpor Lee' },
  { title: '1984', author: 'George Orwell' },
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger' }
];
const lastBook = library.pop();
console.log(lastBook);

const firstBook = library.shift();
console.log(firstBook);

library.push({
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
});

library.unshift({
  title: 'CSS Secrets',
  author: 'Lea Verou'
});

library.splice(1, 1);
console.log(library);

const fullName = 'Sina Daryaei';
const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName', firstAndLastName);

const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sdayMyName:', sayMyName);
