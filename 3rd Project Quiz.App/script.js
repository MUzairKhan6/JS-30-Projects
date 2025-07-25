const questions = [
  {
    question: "Which is the largest animal in the world ?",
    answer: [
      { Text: "shark", correct: false },
      { Text: "Blue Whale", correct: true },
      { Text: "Elephant", correct: false },
      { Text: "Giraffe", correct: false },
    ]
  },
  {
    question: "Which is the smallest country in the world ?",
    answer: [
      { Text: "Vatican City", correct: true },
      { Text: "Bhutan", correct: false },
      { Text: "Nepal", correct: false },
      { Text: "Pakistan", correct: false },
    ]
  },
  {
    question: "Who is Keela Man ?",
    answer: [
      { Text: "Hammad", correct: true },
      { Text: "Anas", correct: false },
      { Text: "Uzair", correct: false },
      { Text: "Faisal", correct: false },
    ]
  },
  {
    question: "Which country is not a Nuclear Power?",
    answer: [
      { Text: "Iran", correct: false },
      { Text: "America", correct: true },
      { Text: "pakistan", correct: false },
      { Text: "China", correct: false },
    ] 
  },
  {
    question: "",
    answer: [
      {}
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-button");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

startQuiz();

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + " . " + currentQuestion.question;

  currentQuestion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.Text;
    button.classList.add("btn");
    answerButton.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct === "true";
  if (isCorrect) {
    selectedButton.classList.add("correct");
    score++;  
  } else {
    selectedButton.classList.add("incorrect");
  }
 
  Array.from(answerButton.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }
  else{
    showScore();
  }
}

nextButton.addEventListener("click", ()=>{
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});