const openModal = document.querySelector(".open-modal");
const modalContent = document.querySelector(".modal-content");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal");
openModal.addEventListener("click", function() {
  openModalBox();
});
function openModalBox() {
  modal.classList.toggle("open");
}
modal.addEventListener("click", function(e) {
  if (e.target == "modal") {
    openModalBox();
  }
});
closeModal.addEventListener("click", function() {
  openModalBox();
});
