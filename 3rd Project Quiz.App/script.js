const questions = [
  {
    question: "Which is the largest animal in the world ?",
    answer: [
      { Text: "shark", correct: false },
      { Text: "Blue Whale", correct: true },
      { Text: "Elephant", correct: false },
      { Text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which is the smallest country in the world ?",
    answer: [
      { Text: "Vatican City", correct: true },
      { Text: "Bhutan", correct: false },
      { Text: "Nepal", correct: false },
      { Text: "Pakistan", correct: false },
    ],
  },
  {
    question: "Who is Keela Man ?",
    answer: [
      { Text: "Hammad", correct: true },
      { Text: "Anas", correct: false },
      { Text: "Uzair", correct: false },
      { Text: "Faisal", correct: false },
    ],
  },
  {
    question: "Which country is not a Nuclear Power?",
    answer: [
      { Text: "Iran", correct: false },
      { Text: "America", correct: true },
      { Text: "pakistan", correct: false },
      { Text: "China", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButoons = document.getElementById("answer-button");
const nextButoon = document.getElementById("next-button");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButoon.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + " . " + currentQuestion.question;

  currentQuestion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.Text;
    button.classList.add("btn");
    answerButoons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selsctAnswer);
  });
}
function resetState() {
  nextButoon.style.display = "none";
  while (answerButoons.firstChild) {
    answerButoons.removeChild(answerButoons.firstChild);
  }
}

function selsctAnswer(e) {
  const selectedBtton = e.target;
  const isCorrect = selectedBtton.dataset.correct === "true";
  if (isCorrect) {
    selectedBtton.classList.add("correct");
  } else {
    selectedBtton.classList.add("incorrect");
  }

  Array.from

}
startQuiz();
