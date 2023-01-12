const modalBtn = document.querySelector(".modal-btn");
const modalContent = document.querySelector(".modal-content");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".close-modal");

modalBtn.addEventListener("click", openModal);

modal.addEventListener("click", function (e) {
  if (e.target.classList.contains("modal")) {
    closeModal();
  }
});
closeModalBtn.addEventListener("click", closeModal);

function openModal() {
  modal.classList.add("open");
}

function closeModal() {
  modal.classList.remove("open");
}
