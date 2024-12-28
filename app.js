let contactDetails = document.getElementById("contactDetails");
let servicesDetails = document.getElementById("servicesDetails");
let priceDetails = document.getElementById("priceDetails");
let sumbit = document.getElementById("submit");

let next = document.getElementById("next");
let prev = document.getElementById("previous");

const steps = [contactDetails, servicesDetails, priceDetails, sumbit];
let currentForm = 0;
steps.forEach((step, index) => {
  step.style.display = index === 0 ? "block" : "none";
  next.style.display = "block";
});

prev.style.visibility = "hidden";
next.addEventListener("click", () => {
  if (currentForm < steps.length - 1) {
    steps[currentForm].style.display = "none";
    currentForm += 1;
    steps[currentForm].style.display = "block";
    prev.style.visibility = "visible";
    currentForm === 3
      ? (next.style.display = "none")
      : (next.style.display = "block");
  }
});

prev.addEventListener("click", () => {
  if (currentForm > 0) {
    steps[currentForm].style.display = "none";
    currentForm -= 1;
    steps[currentForm].style.display = "block";
    if (currentForm === 0) prev.style.visibility = "hidden";
    currentForm === 3
      ? (next.style.display = "none")
      : (next.style.display = "block");
  }
});
