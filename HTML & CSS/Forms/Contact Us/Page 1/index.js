const rangeInput = document.querySelectorAll(".range-slider input");
const priceInput = document.querySelectorAll(".range-value input");
const progress = document.querySelector(".range-bar .progress");

let pricegap = 1000;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minval = parseInt(priceInput[0].value);
    let maxval = parseInt(priceInput[1].value);

    if (maxval - minval >= pricegap && maxval <= 10000) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minval;
        progress.style.left = (minval / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxval;
        progress.style.right = 100 - (maxval / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minval = parseInt(rangeInput[0].value);
    let maxval = parseInt(rangeInput[1].value);

    if (maxval - minval < pricegap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxval - pricegap;
      } else {
        rangeInput[1].value = minval + pricegap;
      }
    } else {
      priceInput[0].value = minval;
      priceInput[1].value = maxval;
      progress.style.left = (minval / rangeInput[0].max) * 100 + "%";
      progress.style.right = 100 - (maxval / rangeInput[1].max) * 100 + "%";
    }
  });
});
