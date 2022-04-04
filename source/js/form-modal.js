let isStorageSupport = true;
let storage = "";
const form = document.querySelector(".form");
const firstName = document.querySelector("[name=name]");
const secondName = document.querySelector("[name=surname]");
const phone = form.querySelector("[name=contact-phone]");
const mail = form.querySelector("[name=contact-mail]");
const formButtonError = document.querySelector(".modal__button--error");
const formButtonSuccess = document.querySelector(".modal__button--success");
const successModal = document.querySelector(".modal--success");
const errorModal = document.querySelector(".modal--error");

form.addEventListener("submit", function (evt) {
  if (!firstName.value || !secondName.value || !phone.value || !mail.value) {
    evt.preventDefault();
    errorModal.classList.add("modal--show");
  } else {
    evt.preventDefault();
    successModal.classList.add("modal--show");
  }
});

formButtonError.addEventListener("click", function (evt) {
  evt.preventDefault();
  errorModal.classList.remove("modal--show");
});

formButtonSuccess.addEventListener("click", function (evt) {
  evt.preventDefault();
  successModal.classList.remove("modal--show");
});
