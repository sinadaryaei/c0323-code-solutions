const tabContainer = document.querySelector('.tab-container');
const tabNodes = document.querySelectorAll('.tab');
const viewNodes = document.querySelectorAll('.view');

tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    const viewToShow = event.target.getAttribute('data-view');
    for (let i = 0; i < viewNodes.length; i++) {
      if (viewNodes[i].getAttribute('data-view') === viewToShow) {
        viewNodes[i].classList.remove('hidden');
      } else {
        viewNodes[i].classList.add('hidden');
      }
    }
    for (let i = 0; i < tabNodes.length; i++) {
      if (tabNodes[i] === event.target) {
        tabNodes[i].classList.add('active');
      } else {
        tabNodes[i].classList.remove('active');
      }
    }
  }
});
