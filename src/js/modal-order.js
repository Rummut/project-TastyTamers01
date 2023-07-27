const refs = {
  openOrderBtn: document.querySelector('.header-shopping-link'),
  openOrderHero: document.querySelector('.hero-order-btn'),
  closeOrderBtn: document.querySelector('.order-modal-close-btn'),
  backdropOrder: document.querySelector('.backdrop-order'),
  modalOrder: document.querySelector('.modal-order'),
  forma: document.querySelector('.modal-form-order'),
};
try {
  refs.openOrderHero.addEventListener('click', openModalOpen);
} catch (error) {}

refs.openOrderBtn.addEventListener('click', openModalOpen);
refs.closeOrderBtn.addEventListener('click', closeModalClose);
refs.backdropOrder.addEventListener('click', clickBackdropClick);

refs.forma.addEventListener('submit', sendOrder);
function sendOrder(e) {
  e.preventDefault();
  const { name, tel, email, comment } = e.currentTarget;
  const result = {
    name: name.value,
    tel: tel.value,
    email: email.value,
    comment: comment.value,
  };

  console.log(result);
  e.currentTarget.reset();
  closeModalClose();
}

function openModalOpen() {
  window.addEventListener('keydown', onEscPress);
  document.body.classList.add('overflowHidden');
  refs.backdropOrder.classList.add('active');
  refs.modalOrder.classList.add('active');
}

function closeModalClose() {
  document.body.classList.remove('overflowHidden');
  window.removeEventListener('keydown', onEscPress);
  document.body.classList.remove('overflowHidden');
  refs.backdropOrder.classList.remove('active');
  refs.modalOrder.classList.remove('active');
}

function clickBackdropClick(e) {
  if (e.currentTarget === e.target) {
    closeModalClose();
  }
}

function onEscPress(e) {
  if (e.code === 'Escape') {
    closeModalClose();
  }
}
