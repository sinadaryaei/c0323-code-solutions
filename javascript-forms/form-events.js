function handleFocus(event) {
  console.log('Focus event was fired: ');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('Blur event was fired: ');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log(event.target.name + ' value changed to: ' + event.target.value);
}

const userNameInput = document.querySelector('#user-name');
const userEmailInput = document.querySelector('#user-email');
const userMessageInput = document.querySelector('#user-message');

userNameInput.addEventListener('focus', handleFocus);
userNameInput.addEventListener('blur', handleBlur);
userNameInput.addEventListener('input', handleInput);

userEmailInput.addEventListener('focus', handleFocus);
userEmailInput.addEventListener('blur', handleBlur);
userEmailInput.addEventListener('input', handleInput);

userMessageInput.addEventListener('focus', handleFocus);
userMessageInput.addEventListener('blur', handleBlur);
userMessageInput.addEventListener('input', handleInput);
