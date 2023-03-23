/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

console.log(isUnderFive(4));

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(3));

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

console.log(startsWithJ('James'));

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}
console.log(isOldEnoughToDrink({ age: 21 }));

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}
console.log(isOldEnoughToDrive({ age: 16 }));

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH < 0 || pH > 14) {
    return 'invalid pH level';
  } else if (pH === 7) {
    return 'neutral';
  } else if (pH < 7) {
    return 'acid';
  } else {
    return 'base';
  }
}

console.log(categorizeAcidity(7));

function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
    case 'wakko':
      return "We're the Warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight everybody!';
  }
}

console.log(introduceWarnerBro('yakko'));

function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'Die Hard';
    case 'comedy':
      return 'The Big Lebowski';
    case 'horror':
      return 'Boogeyman';
    case 'drama':
      return 'The Drama';
    case 'musical':
      return 'The Musical';
    case 'scifi':
      return 'Star Wars';
  }
}
console.log(recommendMovie('action'));
