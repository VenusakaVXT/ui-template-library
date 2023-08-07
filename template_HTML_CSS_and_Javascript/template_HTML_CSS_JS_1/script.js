const openModalBtn = document.querySelector('.open-modal-btn');
const modal = document.querySelector('.modal');
const closeIcon = document.querySelector('.modal__header i');
const closeBtn = document.querySelector('.modal__footer button');

function toggleModal() {
    modal.classList.toggle('modal--hide');
}

openModalBtn.addEventListener('click', toggleModal);
closeIcon.addEventListener('click', toggleModal);
closeBtn.addEventListener('click', toggleModal);
modal.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        toggleModal();
    }
});