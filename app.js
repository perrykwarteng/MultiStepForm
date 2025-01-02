let contactDetails = document.getElementById("contactDetails");
let servicesDetails = document.getElementById("servicesDetails");
let priceDetails = document.getElementById("priceDetails");
let sumbit = document.getElementById("submit");

let step1 = document.getElementById("step-1");
let step2 = document.getElementById("step-2");
let step3 = document.getElementById("step-3");
let step4 = document.getElementById("step-4");
let stepBar1 = document.getElementById("stepBar-1");
let stepBar2 = document.getElementById("stepBar-2");
let stepBar3 = document.getElementById("stepBar-3");
let stepBar4 = document.getElementById("stepBar-4");

let next = document.getElementById("next");
let prev = document.getElementById("previous");

const steps = [contactDetails, servicesDetails, priceDetails, sumbit];
const progressStep = [step1, step2, step3, step4];
const progressBar = [stepBar1, stepBar2, stepBar3, stepBar4];
let currentStep = 0;
let currentForm = 0;
steps.forEach((step, index) => {
  step.style.display = index === 0 ? "block" : "none";
  next.style.display = "block";
});

progressStep.forEach((step, index) => {
  step.style.background = index === 0 ? "#4a3aff" : "#eff0f6";
});

function updateButtonVisibility() {
  prev.style.visibility = currentForm === 0 ? "hidden" : "visible";
  next.style.display = currentForm === steps.length - 1 ? "none" : "block";
}

function updateProgressStepStyles() {
  progressStep.forEach((step, index) => {
    if (index <= currentStep) {
      step.style.background = "#4a3aff";
      step.style.color = "#fff";
    } else {
      step.style.background = "#eff0f6";
      step.style.color = "#6f6c90";
    }
  });
  progressBar.forEach((step, index) => {
    if (index <= currentStep) {
      step.style.background = "#4a3aff";
      step.style.color = "#fff";
    } else {
      step.style.background = "#eff0f6";
      step.style.color = "#6f6c90";
    }
  });
}

prev.style.visibility = "hidden";

next.addEventListener("click", () => {
  if (currentForm < steps.length - 1 && currentStep < progressStep.length - 1) {
    steps[currentForm].style.display = "none";
    currentForm++;
    currentStep++;
    steps[currentForm].style.display = "block";
    updateProgressStepStyles();
    updateButtonVisibility();
  }
});

prev.addEventListener("click", () => {
  if (currentForm > 0 && currentStep > 0) {
    steps[currentForm].style.display = "none";
    currentForm--;
    currentStep--;
    steps[currentForm].style.display = "block";
    updateProgressStepStyles();
    updateButtonVisibility();
  }
});

updateButtonVisibility();
updateProgressStepStyles();
