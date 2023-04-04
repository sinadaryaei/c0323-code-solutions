let clicks = 0;
const $button = document.querySelector('.hot-button');
// const $clicked = document.querySelector('.click-count');

function buttonClicked(event) {
  clicks++;
  console.log(clicks);
}
$button.addEventListener('click', buttonClicked);
