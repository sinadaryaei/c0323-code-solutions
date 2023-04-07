// const $tabContainer = document.querySelector('.tab-container');

const $tabNodes = document.querySelectorAll('.tab');
// const $viewNodes = document.querySelectorAll('.view');

document.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tabNodes.length; i++) {
      if (event.target === $tabNodes[i]) {
        $tabNodes[i].className = 'tab active';

      }
    }
  }
}
);
