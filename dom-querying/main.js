console.log('hello, world');

const el = document.querySelector('h1');
console.log(document.querySelector('h1'));
console.dir(el);

const id = document.querySelector('[id]');
console.log(document.querySelector('[id]'));
console.dir(id);

const cl = document.querySelector('.hint');
console.log(document.querySelector('.hint'));
console.dir(cl);

const p = document.querySelectorAll('p');
console.log('p', p);

const link = document.querySelectorAll('.example-link');
console.log('.example-link', link);
