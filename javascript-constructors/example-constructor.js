function ExampleConstructor() {
}
console.log('value of ExampleConstructor:', ExampleConstructor);
console.log('typeof property', typeof ExampleConstructor);

const cFunction = new ExampleConstructor();
console.log('value of cFunction', cFunction);
console.log(cFunction instanceof ExampleConstructor);

const newFunction = cFunction;
console.log('value of newFunction', newFunction);
