'use strict';
const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const closemodal = function () {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openmodal = function () {
  //  console.log(btnsOpenModal[i].textContent);
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
btnCloseModal.addEventListener('click', closemodal);
overlay.addEventListener('click', closemodal);

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openmodal);
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !model.classList.contains('hidden')) {
    closemodal(); // since we need to run the function immediately.
  }
});
