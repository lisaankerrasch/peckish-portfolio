const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#name");
const fullNameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const success = document.querySelector(".success");
const checkSymbol1 = document.querySelector(".checksymbol.one");
const checkSymbol2 = document.querySelector(".checksymbol.two");

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function checkSign(event) {
  if (checkLength(fullName.value, 1)) {
    checkSymbol1.style.display = "inline";
  }
  if (validateEmail(email.value)) {
    checkSymbol2.style.display = "inline";
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

function validateForm(event) {
  event.preventDefault();

  if (checkLength(fullName.value, 1)) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }
  if (validateEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
}

function submitForm(event) {
  if (checkLength(fullName.value, 1) && validateEmail(email.value)) {
    event.preventDefault;
    checkSymbol1.style.display = "none";
    checkSymbol2.style.display = "none";
    form.classList.add("hiddenjs");
    success.innerHTML = `<div class="message">Thank you for subscribing! </div>`;
    form.reset();
  }
}

form.addEventListener("submit", validateForm);
form.addEventListener("submit", submitForm);
form.addEventListener("keyup", checkSign);
