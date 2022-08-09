"use strict";

const submitBtn = document.getElementById("submit");
const form = document.getElementById("form");
const output = document.getElementById("output");

submitBtn.addEventListener("click", function () {
  output.classList.remove("inactive");
  form.classList.add("inactive");
});

/* <div id="output" class="output">
  <img src="./images/illustration-thank-you.svg" />
  <h3>You selected 4 out of 5</h3>
  <h1 class="title">Thank you!</h1>
  <p class="output-desc">
    We appreciate you taking the time to give a rating. If you ever need
    more support, don’t hesitate to get in touch!
  </p>
</div> */
