'use strict';

const modelElement = document.querySelector('.modal');
const btnsShowModalElements = document.querySelectorAll('.show-modal');
const btnCLoseModalElement = document.querySelector('.close-modal');
const overlayElement = document.querySelector('.overlay');

const openModal = () => {
  modelElement.classList.remove('hidden');
  overlayElement.classList.remove('hidden');
};

const closeModal = () => {
  modelElement.classList.add('hidden');
  overlayElement.classList.add('hidden');
};

for (let i = 0; i < btnsShowModalElements.length; i++) {
  btnsShowModalElements[i].addEventListener('click', openModal);
}

btnCLoseModalElement.addEventListener('click', closeModal);

document.addEventListener('keydown', event => {
  console.log(event);
  if (event.key == 'Escape') closeModal();
});
