const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-btn");
const questionContainer = document.querySelectorAll(".question-container");
const message = document.querySelector("#quiz-message");

const correctAnswers = [
  "Yes",
  "120°",
  "30°",
  "Both",
  "90°",
  "Right Angle",
  "Yes",
  "No",
  "Yes",
  "Yes",
];

function calculateScore() {
  console.log("hello" + message.innerText);
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);
  for (let val of formResults.values()) {
    if (val === correctAnswers[index]) {
      score = score + 1;
      questionContainer[index].style.backgroundColor = "green";
      questionContainer[index].style.fontWeight = "bold";
    } else {
      questionContainer[index].style.backgroundColor = "red";
      questionContainer[index].style.fontWeight = "bold";
    }
    index = index + 1;
  }
  submitBtn.style.display = "none";

  message.innerText = "Your Total Score is " + score + " out of 10";
  console.log("hello" + message.innerText);
}

submitBtn.addEventListener("click", calculateScore);
