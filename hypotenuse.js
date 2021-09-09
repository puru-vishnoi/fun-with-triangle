const baseValue = document.querySelector("#base-value");
const heightValue = document.querySelector("#height-value");
const hypotenuseMessage = document.querySelector("#hypotenuse-message");
const checkHypotenuseButton = document.querySelector("#hypotenuse-btn");

function calc(a, b) {
  const sumOfSquares = a * a + b * b;
  return Math.sqrt(sumOfSquares);
}

function calculateHypotenuse() {
  b = Number(baseValue.value);
  h = Number(heightValue.value);
  const hypotenuse = calc(b, h);
  hypotenuseMessage.innerText = "Hypotenuse is " + hypotenuse.toFixed(1);
}

checkHypotenuseButton.addEventListener("click", calculateHypotenuse);
