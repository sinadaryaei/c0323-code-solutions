const lightBulb = document.querySelector('.lightbulb');
const body = document.querySelector('body');

let isOn = false;

lightBulb.addEventListener('click', function () {
  if (isOn) {
    lightBulb.className = 'lightbulb';
    body.style.backgroundColor = '#000';
    isOn = false;
  } else {
    lightBulb.className = 'lightbulb on';
    body.style.backgroundColor = '#fff';
    isOn = true;
  }
});
