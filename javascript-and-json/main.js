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
console.log('books: ', typeof books);

const myJSON = JSON.stringify(books);
console.log('JSON.stringify: ', typeof myJSON);

const info = '{ NumberId: 23423432, stringName: name }';
const infoJSON = JSON.stringify(info);
console.log('String: ', typeof JSON.stringify(infoJSON));

const parse = '{ NumberId: 23423432, stringName: name }';
const parseJSON = JSON.parse(parse);
console.log('object string: ', typeof JSON.parse(parseJSON));
