
const refs = {
  openModalBtn: document.querySelector("[data-order-open]"),
  closeModalBtn: document.querySelector("[data-order-close]"),
  modal: document.querySelector("[data-order]"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
  refs.modal.classList.toggle("is-hidden");
}