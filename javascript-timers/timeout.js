const $h1 = document.querySelector('h1');

function updateText() {
  $h1.textContent = 'Hello There';
}
setTimeout(updateText, 2 * 1000);
