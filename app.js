"use strict";

const submitBtn = document.getElementById("submit");
const form = document.getElementById("form");
const output = document.getElementById("output");
const spanOutput = document.getElementById("rate");
const btn1 = document.querySelector("#buttons");

submitBtn.addEventListener("click", function () {
  output.classList.remove("inactive");
  form.classList.add("inactive");
});
btn1.addEventListener("click", (e) => {
  const someClick = e.target.value;
  spanOutput.textContent = someClick;
});
