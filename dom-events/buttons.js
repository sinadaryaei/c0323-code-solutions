function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}
const clickb = document.querySelector('.click-button');

clickb.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}
const hoverb = document.querySelector('.hover-button');

hoverb.addEventListener('.hoverb', handleMouseover);
