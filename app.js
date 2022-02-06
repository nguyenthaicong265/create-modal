const modal = document.querySelector(".modal")
const openModalBtn = document.querySelector(".open-modal-btn")
const iconCloseModal = document.querySelector(".modal__header i")
const buttonCloseModal = document.querySelector(".modal__footer button")

function toggleModal() {
    modal.classList.toggle("hide")
}

openModalBtn.addEventListener("click", toggleModal);
iconCloseModal.addEventListener("click", toggleModal);
buttonCloseModal.addEventListener("click", toggleModal);

modal.addEventListener("click", (event) => {
    if (event.target == event.currentTarget) {
        toggleModal();
    }
})