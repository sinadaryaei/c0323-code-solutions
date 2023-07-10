function ExampleConstructor() {
}
const example = new ExampleConstructor();

console.log('value of example:', typeof example);
console.log('typeof property', example);

console.log('typeof example._proto_', typeof example.__proto__);
console.log('value of example._proto_', example.__proto__);

console.log('typeof ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);
console.log('value of ExampleConstructor.prototype:', ExampleConstructor.prototype);

console.log('example instanceof ExampleConstructor', example instanceof ExampleConstructor);
