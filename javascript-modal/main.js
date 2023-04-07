const openModalBtn = document.querySelector('.open-modal-btn');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn');

function showModal() {
  modal.setAttribute('style', 'display: flex;');
}

function hideModal() {
  modal.setAttribute('style', 'display: none;');
}

openModalBtn.addEventListener('click', showModal);

closeBtn.addEventListener('click', hideModal);
