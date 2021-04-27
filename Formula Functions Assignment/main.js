// Event Listener
document.getElementById("bCalculate").addEventListener("click", calculateArea)

// HTML Elements
let topBaseEl = document.getElementById("topBase");
let bottomBaseEl = document.getElementById("bottomBase");
let heightEl = document.getElementById("height");
let outputEl = document.getElementById("result");

// Event Function
function calculateArea() {

  // Inputs
  let tB = +topBaseEl.value;
  let bB = +bottomBaseEl.value;
  let hT = +heightEl.value;

  // Process & Output
  outputEl.innerHTML = formula(tB, bB, hT)
}

// Calculate with the Formula
function formula(a, b ,c) {
  return (a + b) / 2 * c;
}