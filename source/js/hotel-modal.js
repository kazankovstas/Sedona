const openModal = document.querySelector(".button--reserve");
const closeModal = document.querySelector(".modal-hotel__button");
const formHotel = document.querySelector(".form-hotel");
const modalHotel = document.querySelector(".modal-hotel");

openModal.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalHotel.classList.add("modal-hotel--show");
});

closeModal.addEventListener("submit", function (evt) {
  evt.preventDefault();
  modalHotel.classList.remove("modal-hotel--show");
});

// Закрытие попапа клавишей Esc
window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    if (modalHotel.classList.contains("modal-hotel--show")) {
      evt.preventDefault();
      modalHotel.classList.remove("modal-hotel--show");
    }
  }
});

// Закрытие карты кликом вне ее область
window.addEventListener("mousedown", function (evt) {
  if (evt.target.closest(".modal-hotel") === null) {
    modalHotel.classList.remove("modal-hotel--show");
  }
});
