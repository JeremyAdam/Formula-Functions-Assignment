// Event Listener
document.getElementById("bCalculate").addEventListener("click", calculateArea)

// HTML Elements
let topBase = document.getElementById("topBase");
let bottomBase = document.getElementById("bottomBase");
let height = document.getElementById("height");
let output = document.getElementById("result");

// Event Function
function calculateArea() {

    // Inputs
    let tB = +topBase.value;
    let bB = +bottomBase.value;
    let hT = +height.value;

    // Process & Output
  output.innerHTML = formula(tB, bB, hT)
}

// Calculate with the Formula
function formula(a, b ,c) {
    let area = (a + b) / 2 * c;
    return area;
}