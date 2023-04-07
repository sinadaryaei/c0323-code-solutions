const lightBulb = document.querySelector('.lightbulb');
const body = document.querySelector('body');

let isOn = false;

lightBulb.addEventListener('click', function () {
  if (isOn) {
    lightBulb.setAttribute('class', 'lightbulb');
    body.setAttribute('style', 'background-color: #000');
    isOn = false;
  } else {
    lightBulb.setAttribute('class', 'lightbulb on');
    body.setAttribute('style', 'background-color: #fff');
    isOn = true;
  }
});
