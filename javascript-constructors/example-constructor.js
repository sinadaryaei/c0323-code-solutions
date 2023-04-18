function ExampleConstructor() {
}
Object.getPrototypeOf('value of ExampleConstructor:', ExampleConstructor);
Object.getPrototypeOf('typeof property', typeof ExampleConstructor);

const cFunction = new ExampleConstructor();
console.log('value of cFunction', cFunction);
console.log(cFunction instanceof ExampleConstructor);
