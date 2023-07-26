(() => {
  const refs = {
    openOrderModalBtn: document.querySelector('[data-modal-open]'),
    // openOrderModalBasket: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openOrderModalBtn.addEventListener('click', toggleModal);
  refs.closeOrderModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();
