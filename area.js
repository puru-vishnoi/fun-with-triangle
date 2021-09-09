const firstSide = document.querySelector("#first-side");
const secondSide = document.querySelector("#second-side");
const thirdSide = document.querySelector("#third-side");
const areaMessage = document.querySelector("#area-message");
const calculateButton = document.querySelector("#area-btn");

function calculatearea() {
  f1 = Number(firstSide.value);
  f2 = Number(secondSide.value);
  f3 = Number(thirdSide.value);
  const s = (f1 + f2 + f3) / 2;

  const area = Math.sqrt(s * (s - f1) * (s - f2) * (s - f3));

  areaMessage.innerText =
    "Area of a triangle is " + area.toFixed(2) + " units.";
}

calculateButton.addEventListener("click", calculatearea);
