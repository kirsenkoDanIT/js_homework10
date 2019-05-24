"use strict";

const enterPassword = document.getElementById("enter-password");
const confirmPassword = document.getElementById("confirm-password");
const button = document.querySelector(".btn");
const label = document.getElementById("wrong-password");
const span = document.createElement("span");

span.style.color = "red";
span.style.position = "absolute";
span.style.left = "0";
span.style.bottom = "5px";
span.style.display = "none";
span.innerText = "Нужно ввести одинаковые значения";
label.appendChild(span);

document.body.addEventListener("click", event => {
  if (event.target.tagName.toLowerCase() === "i") {
    if (event.target.className === "fas fa-eye icon-password") {
      event.target.className = "fas fa-eye-slash icon-password";
      event.target.previousElementSibling.setAttribute("type", "password");
    } else {
      event.target.className = "fas fa-eye icon-password";
      event.target.previousElementSibling.setAttribute("type", "text");
    }
  }
  if (event.target === button) {
    if (enterPassword.value === confirmPassword.value && enterPassword.value) {
      span.style.display = "none";
      setTimeout(() => {
        alert("You are welcome");
      }, 1);
    } else {
      span.style.display = "block";
    }
  }
});
