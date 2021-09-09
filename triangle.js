const angleOne = document.querySelector("#angle-one");
const angleTwo = document.querySelector("#angle-two");
const angleThree = document.querySelector("#angle-three");
const checkTriangleButton = document.querySelector("#check-triangle-btn");
const angleOfTriangleMessage = document.querySelector(
  "#angle-of-triangle-message"
);

checkTriangleButton.addEventListener("click", () => {
  a1 = Number(angleOne.value);
  a2 = Number(angleTwo.value);
  a3 = Number(angleThree.value);

  const sumOfAngles = a1 + a2 + a3;
  if (sumOfAngles == 180) {
    angleOfTriangleMessage.style.color = "green";
    angleOfTriangleMessage.innerText = "Yes, Triangle Exists!!!";
  } else {
    angleOfTriangleMessage.style.color = "red";
    angleOfTriangleMessage.innerText = "No, Triangle does not exist!!!";
  }
});
