const books = [
  {
    isbn: '1234',
    title: 'JSON',
    author: 'author'
  },
  {
    isbn: '4321',
    title: 'NSOJ',
    author: 'person'
  },
  {
    isbn: '56789',
    title: 'HTML',
    author: 'human'
  }
];

console.log('Array of books:', books);
console.log('Type of books:', typeof books);

const booksJSON = JSON.stringify(books);

console.log('JSON string:', booksJSON);
console.log('Type of booksJSON:', typeof booksJSON);

const studentJSON = '{"id": 123, "name": "John Doe"}';

console.log('Student JSON string:', studentJSON);
console.log('Type of studentJSON:', typeof studentJSON);

const studentObj = JSON.parse(studentJSON);

console.log('Student object:', studentObj);
console.log('Type of studentObj:', typeof studentObj);
