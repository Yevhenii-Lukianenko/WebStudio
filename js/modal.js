(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    checkboxInput: document.querySelector('.checkbox__input'),
    sendModalBtn: document.querySelector('.modal__btn--send'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.checkboxInput.addEventListener('click', toggleDisabledSendBtn);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  function toggleDisabledSendBtn() {
    if (refs.checkboxInput.checked) {
      return (refs.sendModalBtn.disabled = false);
    }
    refs.sendModalBtn.disabled = true;
  }
})();
